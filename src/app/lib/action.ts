import { revalidatePath } from "next/cache";
import {User, Product} from "./models"
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { userType } from "./types";

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

export const updateUser = async (formData:any) => {
    "use server"
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
  
    try {
        connectToDB();
        const updateFields:any = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };
        Object.keys(updateFields).forEach(
        (key) =>(updateFields[key] === "" || undefined) && delete updateFields[key]);
        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const updateProduct = async (formData:any) => {
    "use server"
    const {id,  title, desc, price, stock, img, color, size } = Object.fromEntries(formData);
  
    try {
        connectToDB();
        const updateFields:any = {
            title,
            desc,
            price,
            stock,
            img,
            color,
            size,
        };
        Object.keys(updateFields).forEach(
        (key) =>(updateFields[key] === "" || undefined) && delete updateFields[key]);
        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

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