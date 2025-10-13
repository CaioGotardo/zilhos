import styles from "./OffersUpper.module.css";
import Image from "next/image";

export default function OffersUpper(){
    return (
        <div className={styles.cardSuperior}>
            <h1 className={styles.titulo}>
                Plano Gratuito 
            </h1>
            <p className={styles.paragrafo}>
.Visibilidade do perfil: nível baixo 
.Postagens: limitadas 
.Objetivo: servir como porta de entrada para novos usuários, permitindo testar a .plataforma sem custo. Ideal para quem está começando.
            </p>
            <button className={styles.btn}>
                Assinar  
            </button>
        </div>
    );
}