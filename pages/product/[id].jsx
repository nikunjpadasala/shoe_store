import styles from "../../styles/Product.module.css"
import Image from "next/image";
import { useState } from "react";


const Product = () => {
   const [size, setSize] = useState(0);
   const shoe = {
        id: 1,
        img: "/img/shoe1.jpg",
        name: "ADDIDAS YEEZY",
        price: [12999],
        desc: "high-end limited edition colorways and general releases offered by the Yeezy Boost sneakers lineup.",
      };


      return (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={shoe.img} objectFit="contain" layout="fill" alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>{shoe.name}</h1>
            <span className={styles.price}>₹{shoe.price[size]}</span>
            <p className={styles.desc}>{shoe.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={() => setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>38</span>
              </div>
              <div className={styles.size} onClick={() => setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>39</span>
              </div>
              <div className={styles.size} onClick={() => setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>40</span>
              </div>
              <div className={styles.size} onClick={() => setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>41</span>
              </div>
            </div>
            <h3 className={styles.choose}>Choose additional accessories</h3>
            <div className={styles.accessories}>
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id="shoelace"
                  name="shoelace"
                  className={styles.checkbox}
                />
                <label htmlFor="shoelace">shoelace</label>
              </div>
              <div className={styles.option}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="shoesole"
                  name="shoesole"
                />
                <label htmlFor="shoesole">shoesole</label>
              </div>
              
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        </div>
      );
    };
    

export default Product