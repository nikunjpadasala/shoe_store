import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ shoe }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${shoe._id}`} passHref>
        <Image src={shoe.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{shoe.title}</h1>
      <span className={styles.price}>₹{shoe.prices[0]}</span>
      <p className={styles.desc}>
      {shoe.desc}
      </p>
    </div>
  );
};

export default ProductCard;