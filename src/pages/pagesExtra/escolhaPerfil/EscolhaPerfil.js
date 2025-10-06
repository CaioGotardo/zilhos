import styles from './Clubes.module.css';
import Image from 'next/image';
import Navbar from '@/pages/components/Navbar/Navbar';
import Footer from '@/pages/components/Footer/Footer';
import Link from 'next/link';   
export default function Clubes() {
    return (    
        <> 
        <nav>
            <Navbar />
        </nav>
        <div>

       
         <div className={styles.cardPlayer}>
        <Image 
          src="/player.png" 
          alt="imagem-player"
          width={266}
          height={300}
        />
        
      </div>
         <div className={styles.cardEmpresario}>
        <Image 
          src="/empresario.png" 
          alt="imagem-empresario"
          width={266}
          height={300}
        />
        
      </div>
         <div className={styles.cardClube}>
        <Image 
          src="/clube.png" 
          alt="imagem-clube"
          width={266}
          height={300}
        />
        
      </div>
       </div>
       <footer>
        <Footer />
       </footer>
        </>
        
    );
}