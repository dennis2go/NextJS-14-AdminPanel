import Card from "../_ui/dashboard/card/card"
import styles from "../_ui/dashboard/dashboard.module.css";
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
