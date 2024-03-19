"use client"
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

export default function Navbar() {
    const pathname = usePathname();
    const oldstring = pathname.split("/").pop();
    const firstLetter = oldstring?.charAt(0).toUpperCase();
    const replaced = firstLetter + oldstring!.substring(1);
    return (
      <div className={styles.container}>
        <h3>{replaced}</h3>
        <input type="text" placeholder="Search..." className={styles.input} />
      </div>
    )
  }