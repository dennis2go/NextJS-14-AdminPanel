import Link from "next/link"
import Search from "../../_ui/dashboard/search/search"
import styles from "../../_ui/dashboard/products/products.module.css"
import Image from "next/image";
import imag from "../../../../public/User-avatar.svg.png"
import Pagination from "../../_ui/dashboard/pagination/pagination"
import {fetchProducts} from "../../lib/data"
import {productType} from "../../lib/types"
import { deleteProduct } from "@/app/lib/action";

export default async function ProductsPage({ searchParams }:any) {
    const q = searchParams?.q || "";
    const products: productType[] = await fetchProducts(q);
    console.log(products);
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
        {products.map((product) =>(
            <tr key={product.id}>
                <td className={styles.td}>
                <div className={styles.user}>
                  <Image
                    src={imag}
                    alt="userImage"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {product.title}
                </div>
                </td>
                <td className={styles.td}> {product.desc}</td>
                <td className={styles.td}>12.Oktober</td>
                <td className={styles.td}> {product.price}</td>
                <td className={styles.td}> {product.stock}</td>
                <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct} >
                    <input type="hidden" name="id" value={product.id}/>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
             ))}
        </tbody>
        </table>
        <Pagination count={2} />
      </div>
    )
  }