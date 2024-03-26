"use client"
import LoginForm from "../_ui/login/loginForm/loginForm";
import styles from "../_ui/login/login.module.css"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginPage(){
    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
    );
};