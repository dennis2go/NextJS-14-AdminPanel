"use client";
import React, { ChangeEvent } from 'react';
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({placeholder}:any) {
    const {replace} = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);
        const inputValue = event.target.value;
        if(inputValue) {
            params.set("q", inputValue);

        } else {
            params.delete("q");
        }
        replace(`${pathName}?${params}`);
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