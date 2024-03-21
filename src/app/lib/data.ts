import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q:string) => {
    const regex = new RegExp("^" + q, "i");
    try {
        connectToDB();
        const users = await User.find({username: regex})
        return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
};

export const fetchProducts = async (q:string) => {
    const regex = new RegExp("^" + q, "i");
    try {
        connectToDB();
        const users = await Product.find({title: regex})
        return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch products!");
    }
};