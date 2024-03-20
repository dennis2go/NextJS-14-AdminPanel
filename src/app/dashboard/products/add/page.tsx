import styles from "../../../_ui/dashboard/products/addProduct/addProduct.module.css"
export default function AddProduct() {
    return (
        <div className={styles.container}>
          <form className={styles.form}>
            <input type="text" placeholder="title" name="title" required />
            <select name="cat" id="cat">
              <option value="general">Choose a Category</option>
              <option value="kitchen">Kitchen</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder="price" name="price" required />
            <input type="number" placeholder="stock" name="stock" required />
            <input type="text" placeholder="color" name="color" />
            <input type="text" placeholder="size" name="size" />
            <textarea
              required
              name="desc"
              id="desc"
              rows={7}
              placeholder="Description"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
