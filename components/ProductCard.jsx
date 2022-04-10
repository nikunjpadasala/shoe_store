import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/shoe1.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>ADDIDAS YEEZY</h1>
      <span className={styles.price}>12,999₹</span>
      <p className={styles.desc}>
      high-end limited edition colorways and general releases offered by the Yeezy Boost sneakers lineup
      </p>
    </div>
  );
};

export default ProductCard;