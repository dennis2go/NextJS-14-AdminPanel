"use client";

import styles from "./pagination.module.css";


export default function Pagination({count}:any) {
  return (
    <div className={styles.container}>
         <button className={styles.button}>
            Previous
        </button>
        <button className={styles.button}>
            Next
        </button>
    </div>
  )
}
