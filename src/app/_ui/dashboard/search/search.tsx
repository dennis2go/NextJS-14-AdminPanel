"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"

export default function Search({placeholder}:any) {
    const handleSearch = () => {
    }
    
    return (
        <div className={styles.container}>
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className={styles.input}
          onChange={handleSearch}
        />
      </div>
    )
  }