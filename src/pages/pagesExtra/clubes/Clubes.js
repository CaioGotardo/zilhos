import styles from '../clubes/Clubes.module.css'
import Image from 'next/image'
import Navbar from '@/pages/components/Navbar/Navbar'
import Footer from '@/pages/components/Footer/Footer'
import Link from 'next/link'
export default function Clubes(){
return(
<>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.cardClube}>
        <Image 
          src="/clube.png" 
          alt="imagem-clube"
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
)
};