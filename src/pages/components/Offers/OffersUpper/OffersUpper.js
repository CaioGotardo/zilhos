import styles from "./OffersUpper.module.css";
import Image from "next/image";

export default function OffersUpper(){
    return (
        <div className={styles.cardSuperior}>
            <h1 className={styles.titulo}>Titulo</h1>
            <p className={styles.paragrafo}>paragrafo</p>
            <button className={styles.btn}>
                botao 
            </button>
        </div>
    );
}