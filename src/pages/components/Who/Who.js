import styles from "./Who.module.css";
import Image from "next/image";

export default function Who() {
  return (
    <div className={styles.card}>
        <Image
            src="/imagemQuemSomos.jpg"
            width={1040}
            height={331}
            />
<p className={styles.textWho}> 
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
    </div>
  );
}