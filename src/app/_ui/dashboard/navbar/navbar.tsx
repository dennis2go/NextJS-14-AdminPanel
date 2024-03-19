"use client"
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

export default function Navbar() {
    const pathname = usePathname();
    return (
      <div className={styles.container}>
        <h3>{pathname.split("/").pop()}</h3>
        <input type="text" placeholder="Search..." className={styles.input} />
      </div>
    )
  }