import { revalidatePath } from "next/cache";
import {User, Product} from "./models"
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData:any) => {
    "use server"
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
          });
      
          await newUser.save();
    } catch (err:any) {
        throw new Error(err);
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const addProduct = async (formData:any) => {
    "use server"
    const { title, desc, price, stock, img, color, size } = Object.fromEntries(formData);
    try {
        connectToDB();
        const newProduct= new Product({
            title,
            desc,
            price,
            stock,
            img,
            color,
            size,
          });
      
          await newProduct.save();
    } catch (err:any) {
        throw new Error(err);
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const deleteUser = async (formData:any) => {
    "use server"
    const { id} = Object.fromEntries(formData);
    try {
        connectToDB();   
        await User.findByIdAndDelete(id);
    } catch (err:any) {
        throw new Error(err);
    }
    revalidatePath("/dashboard/users");
}

export const deleteProduct = async (formData:any) => {
    "use server"
    const { id} = Object.fromEntries(formData);
    try {
        connectToDB();   
        await Product.findByIdAndDelete(id);
    } catch (err:any) {
        throw new Error(err);
    }
    revalidatePath("/dashboard/products");
}