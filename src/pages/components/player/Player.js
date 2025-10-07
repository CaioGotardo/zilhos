import styles from './Player.module.css';
import Image from 'next/image';
import Navbar from '@/pages/components/Navbar/Navbar';
import Footer from '@/pages/components/Footer/Footer';
import Link from 'next/link';
export default function Player() {
    return (    
        <>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.cardEmpresario}>
        <Image 
          src="/player.png" 
          alt="imagem-player"
          width={266}
          height={300}
        />
        <p className={styles.paragrafo}>lorem</p>
        <Link href="/"> 
          <button className={styles.btn}>
            Criar conta
          </button>
        </Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
    );}