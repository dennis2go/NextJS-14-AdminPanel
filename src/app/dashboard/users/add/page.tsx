import styles from "../../../_ui/dashboard/products/addProduct/addProduct.module.css"
export default function AddProduct() {
    return (
        <div className={styles.container}>
          <form className={styles.form}>
            <input type="text" placeholder="username" name="username" required />
            <input type="email" placeholder="email" name="email" required />
            <input
              type="password"
              placeholder="password"
              name="password"
              required
            />
            <input type="phone" placeholder="phone" name="phone" />
            <select name="isAdmin" id="isAdmin">
              <option value={"false"}>
                Is Admin?
              </option>
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
            <select name="isActive" id="isActive">
              <option value={"true"}>
                Is Active?
              </option>
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
            <textarea
              name="address"
              id="address"
              rows={7}
              placeholder="Address"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
