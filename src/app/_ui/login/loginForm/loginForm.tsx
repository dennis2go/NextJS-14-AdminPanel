"use client";

// import { authenticate } from "@/app/lib/actions";
import { login } from "../../../lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {/* {state && state} */}
    </form>
  );
};

export default LoginForm;