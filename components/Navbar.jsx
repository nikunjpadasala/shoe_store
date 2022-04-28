import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src="/img/telephone.png" alt="" width="32px" height="32px" />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!!</div>
        <div className={styles.text}>709-640-5015</div>
      </div>

      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}></li>
          <Image src="/img/logo1.png" alt="" width="100px" height="69px" />
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}></li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src="/img/cart.png" alt="" width="30px" height="30px" />
        <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar