import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>129837819237</span>
              </td>
              <td>
                <span className={styles.name}>Nikunj Patel</span>
              </td>
              <td>
                <span className={styles.address}>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className={styles.total}>12,999₹</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid2.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/packing.png" width={30} height={30} alt="" />
            <span>Packing</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike2.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered2.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

// import styles from "../../styles/Order.module.css"
// import Image from "next/image"

// const Order = () => {
//   const status =0;

//   const statusClass = (index) => {
//       if(index - status < 1) return styles.done;
//       if(index - status === 1) return styles.inProgress;
//       if(index - status > 1) return styles.undone;
//   };

//   return (
//     <div className={styles.container}>
//         <div className={styles.left}>
//             <div className={styles.row}>
//                 <table className={styles.table}>
//                   <tr className={styles.trTitle}>
//                     <th>OrderID</th>
//                     <th>Customer</th>
//                     <th>Address</th>
//                     <th>Total</th>
//                   </tr>
//                   <tr className={styles.tr}>
//                     <td>
//                       <span className={styles.id}>123131321313</span>
//                     </td>
//                     <td>
//                       <span className={styles.name}>Nikunj Patel</span>
//                     </td>
//                     <td>
//                       <span className={styles.address}>24, lambehanuman Road.surat</span>
//                     </td>
//                     <td>
//                       <span className={styles.total}>12,999₹</span>
//                     </td>
//                   </tr>
//                 </table>
//             </div>
//             <div className={styles.row}>
//                 <div className={statusClass(0)}>
//                     <Image src="/img/paid2.png" width={30} height={30} alt="" />
//                     <span>Payment</span>
//                     <div className={styles.checkedIcon}>
//                         <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
//                     </div>
//                 </div>
//                 <div className={statusClass(1)}>
//                     <Image src="/img/packing.png" width={30} height={30} alt="" />
//                     <span>Packing</span>
//                     <div className={styles.checkedIcon}>
//                         <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
//                     </div>
//                 </div>
//                 <div className={statusClass(2)}>
//                     <Image src="/img/bike2.png" width={30} height={30} alt="" />
//                     <span>On the way</span>
//                     <div className={styles.checkedIcon}>
//                         <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
//                     </div>
//                 </div>
//                 <div className={statusClass(3)}>
//                     <Image src="/img/delivered2.png" width={30} height={30} alt="" />
//                     <span>Delivered</span>
//                     <div className={styles.checkedIcon}>
//                         <Image className={styles.checkedIcon} src="/img/checked2.gif" width={20} height={20} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className={styles.right}>
//             <div className={styles.wrapper}>
//             <h2 className={styles.title}>CART TOTAL</h2>
//             <div className={styles.totalText}>
//               <b className={styles.totalTextTitle}>Subtotal:</b>12,999₹
//             </div>
//             <div className={styles.totalText}>
//               <b className={styles.totalTextTitle}>Discount:</b>0₹
//             </div>
//             <div className={styles.totalText}>
//               <b className={styles.totalTextTitle}>Total:</b>12,999₹
//             </div>
//             <button disabled className={styles.button}>PAID</button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Order