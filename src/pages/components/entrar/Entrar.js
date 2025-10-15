import Footer from '@/pages/components/Footer/Footer';
import styles from './Entrar.module.css';
import Link from 'next/link';
import Navbar from '@/pages/components/Navbar/Navbar';
export default function Entrar() {
    return (
<>
<nav>
    <Navbar />
</nav>
<div>
    <h1 className={styles.email}>Email: *</h1>
    <input className={styles.input} type="text" placeholder='caiogotardo@gmail.com' />

    <h1 className={styles.senha}>Senha: *</h1>
    <input className={styles.input} type="password" placeholder='********' /> <br></br>

<Link href="/">
<button className={styles.btnEntrar}>Entrar</button>
</Link>
<p className={styles.naoPossui}>não possui uma conta?</p>
<Link href="/cadastrar">
<button className={styles.btnCadastrar}>Cadastrar</button>
</Link>
</div>
<footer>
    <Footer />
</footer>
</>

    );}