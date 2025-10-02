import styles from "../Footer/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          <Image src="/public/Instagram.png"
          width={48}
          height={48}
           />
          <Image src="/public/tiktok.png"
           width={48}
          height={48} 
          
          />
          <Image src="/public/X.png"
           width={48}
          height={48} 
          />
          <Image src="/public/youtube.png"
           width={48}
          height={48}
           />
        </p>
      </div>
      <div>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">6</a>
        <a href="">7</a>
        <a href="">8</a>
      </div>
    </footer>
  );
}
