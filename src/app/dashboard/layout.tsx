import Navbar from "../_ui/dashboard/navbar/navbar"
import Sidebar from "../_ui/dashboard/sidebar/sidebar"
import styles from "../_ui/dashboard/dashboard.module.css";
const Layout = ({children,}: {children: React.ReactNode}) => {
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          { <Sidebar/>}
        </div>
        <div className={styles.content}>
          {<Navbar/>}
          {children}
        </div>
      </div>
    )
  }
  
  export default Layout