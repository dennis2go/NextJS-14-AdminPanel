import Link from "next/link"
import Search from "../../_ui/dashboard/search/search"
import styles from "../../_ui/dashboard/users/user.module.css"
import Image from "next/image";
import imag from "../../../../public/User-avatar.svg.png"
import Pagination from "../../_ui/dashboard/pagination/pagination"
import {fetchUsers} from "../../lib/data"
import {userType} from "../../lib/types"

export default async function UsersPage({ searchParams }:any) {
    const q = searchParams?.q || "";
    const users: userType[] = await fetchUsers(q);
    console.log(users);
    return (
      <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="Search for a user..." />
            <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
            </Link>
        </div>
        <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
        {users.map((user) =>(
            <tr key={user.id}>
                <td className={styles.td}>
                <div className={styles.user}>
                  <Image
                    src={imag}
                    alt="userImage"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
                </td>
                <td className={styles.td}>{user.email}</td>
                <td className={styles.td}>12. Oktober</td>
                <td className={styles.td}>{user.isAdmin ? "Admin": "User"}</td>
                <td className={styles.td}>{user.isActive? "Active": "not Active"}</td>
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
        ))}
        </tbody>
        </table>
        <Pagination count={2} />
      </div>
    )
  }