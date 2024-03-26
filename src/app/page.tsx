"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
const router = useRouter();
try {
    router.push("/login");
} catch(err) {

}
    return (
        <div>
            Homepage
        </div>
    )
}
