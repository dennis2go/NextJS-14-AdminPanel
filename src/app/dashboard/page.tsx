import { GetServerSidePropsContext } from "next";
import Card from "../_ui/dashboard/card/card"
import styles from "../_ui/dashboard/dashboard.module.css";
import { getSession } from "next-auth/react";

export default function Dashboard() {
  return (
    <div>
         <div className={styles.cardDiv}>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}
