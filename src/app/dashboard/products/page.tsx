import Link from "next/link"
import Search from "../../_ui/dashboard/search/search"
import styles from "../../_ui/dashboard/products/products.module.css"
import Image from "next/image";
import imag from "../../../../public/User-avatar.svg.png"
import Pagination from "../../_ui/dashboard/pagination/pagination"

export default function ProductsPage() {
    return (
        <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="Search for a product..." />
            <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
            </Link>
        </div>
        <table className={styles.table}>
        <thead>
            <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Created At</td>
                <td>Price</td>
                <td>Stock</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={styles.td}>
                <div className={styles.user}>
                  <Image
                    src={imag}
                    alt="userImage"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Iphone
                </div>
                </td>
                <td className={styles.td}>Iphone 14s Plus</td>
                <td className={styles.td}>12.Oktober</td>
                <td className={styles.td}>1200</td>
                <td className={styles.td}>15</td>
                <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id"/>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
        </tbody>
        </table>
        <Pagination count={2} />
      </div>
    )
  }