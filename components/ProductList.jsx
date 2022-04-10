import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>THE BEST FOOTWEAR IN TOWN</h1>
        <p className={styles.desc}>
        જે લોકો તમારા પગરખાંમાં છે તેઓ તમારી સાથે સહાનુભૂતિ ધરાવે છે, 
        જ્યારે તમારા પગરખાંમાં ન હોય તેવા લોકો તમારા પ્રત્યે સહાનુભૂતિ ધરાવે છે.
        </p>
        <div className={styles.wrapper}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
    );
  };
export default ProductList