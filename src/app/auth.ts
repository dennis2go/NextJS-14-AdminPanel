import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import { userType } from "./lib/types";

const login = async (credentials: any) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });
        let isPasswordCorrect;
        if (!user || !user.isAdmin) throw new Error("Wrong credentials!");
        if(credentials.password === user.password) {
            isPasswordCorrect = true;
        }
        else {
            isPasswordCorrect = false;
        }
        if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  };
  
  export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (err) {
            return null;
          }
        },
      }),
    ],
    // ADD ADDITIONAL INFORMATION TO SESSION
    callbacks: {
      async jwt({ token, user }:any) {
        if (user) {
          token.username = user.username;
        }
        return token;
      },
      async session({ session, token }:any) {
        if (token) {
          session.user.username = token.username;
        }
        return session;
      },
    },
  });