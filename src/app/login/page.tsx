import LoginForm from "../_ui/login/loginForm/loginForm";
import styles from "../_ui/login/login.module.css"
export default function LoginPage(){
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};