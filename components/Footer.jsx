import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/shoe2.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            YOUR FEET WILL NEVER LOOK THE SAME AGAIN
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR SHOP</h1>
          <p className={styles.text}>
            24, lambehanuman Road.
            <br /> surat, 395008
            <br /> (912) 867-1010
          </p>
          <p className={styles.text}>
            12/B, Varrachha Circle.
            <br /> surat, 395006
            <br /> (912) 867-1011
          </p>
          <p className={styles.text}>
            101, RajEmperial Mall.
            <br /> surat, 395007
            <br /> (912) 867-1012
          </p>
          <p className={styles.text}>
            16, secondfloor DR world mall.
            <br /> surat, 395006
            <br /> (912) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;