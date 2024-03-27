import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
 import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import { userType } from "./lib/types";
import { redirect } from "next/navigation";

// const login = async (credentials: any) => {
//     try {
//         connectToDB();
//         const user = await User.findOne({ username: credentials.username });
//         let isPasswordCorrect;
//         if (!user || !user.isAdmin){
//             throw new Error("Wrong credentials!");
//         }   
//         if(credentials.password === user.password) {
//             return user;
//         }
//         else {
//             throw new Error("Wrong credentials login!");
//         }
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to login!");
//     }
//   };

  async function getUser(credentials: any): Promise<any> {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });
        return user
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
  }
  
  export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
            try {
                const user = await getUser(credentials);
                console.log(user);
                if(user) {
                    if(credentials.password == user.password) {
                        return user;
                    }
                    else{
                        throw new Error("hier oben der fehler");
                    }
                }
            } catch (err) {
                throw new Error("hier fehler");
            }
        },
      }),
    ],
  });

      // ADD ADDITIONAL INFORMATION TO SESSION
    // callbacks: {
    //   async jwt({ token, user }:any) {
    //     if (user) {
    //       token.username = user.username;
    //     }
    //     return token;
    //   },
    //   async session({ session, token }:any) {
    //     if (token) {
    //       session.user.username = token.username;
    //     }
    //     return session;
    //   },
    // },