import React from "react";
import styles from "./OffersLow.module.css";

const offers = [
  {
    id: 1,
    title: "Plano Intermediário",
    price: "R$ 29,99/mês",
    description: (
      <ul>
        <li>Visibilidade do perfil: nível médio</li>
        <li>Postagens: ilimitadas</li>
        <li>Objetivo: oferecer um equilíbrio entre custo e benefício, permitindo maior presença na plataforma com um valor acessível.</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Plano Premium",
    price: "R$ 89,90/mês",
    description: (
      <ul>
        <li>Visibilidade do perfil: nível médio</li>
        <li>Postagens: ilimitadas</li>
        <li>Objetivo: oferecer um equilíbrio entre custo e benefício, permitindo maior presença na plataforma com um valor acessível.</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Plano Elite Anual",
    price: "R$ 899,00/ano",
    description: (
      <ul>
        <li>Visibilidade do perfil: nível máximo</li>
        <ul>
        <p className="text">(acima do Premium, com destaque prioritário)</p>
        </ul>
        <li>Postagens: ilimitadas</li>
        <li>Objetivo: oferecer um equilíbrio entre custo e benefício, permitindo maior presença na plataforma com um valor acessível.</li>
      </ul>
    ),
  },
];

export default function OffersLow() {
  return (
    <div className={styles.offersContainer}>
      {offers.map((offer) => (
        <div key={offer.id} 
          className={`${styles.card} ${offer.id === 2 ? styles.cardId2 : ""}`}
        >
          <h3 className={styles.cardTitle}>{offer.title}</h3>
          <p className={styles.cardPrice}>{offer.price}</p>
          <p className={styles.cardDescription}>{offer.description}</p>
          <button className={styles.btn}>Assinar</button>
        </div>
      ))}
    </div>
  );
}
