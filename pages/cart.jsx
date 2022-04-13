import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>accessories</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/shoe2.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>ADDIDAS YEEZY</span>
              </td>
              <td>
                <span className={styles.accessories}>
                shoesole
                </span>
              </td>
              <td>
                <span className={styles.price}>12,999₹</span>
              </td>
              <td>
                <span className={styles.quantity}>1</span>
              </td>
              <td>
                <span className={styles.total}>12,999₹</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/shoe1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>ADDIDAS YEEZY</span>
              </td>
              <td>
                <span className={styles.accessories}>
                shoesole
                </span>
              </td>
              <td>
                <span className={styles.price}>12,999₹</span>
              </td>
              <td>
                <span className={styles.quantity}>1</span>
              </td>
              <td>
                <span className={styles.total}>12,999₹</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>12,999₹
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>0₹
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>12,999₹
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;