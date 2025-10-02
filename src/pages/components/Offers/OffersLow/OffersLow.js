import React from 'react';
import styles from './OffersLow.module.css'; 

const offers = [
  {
    id: 1,
    title: 'Oferta 1',
    description: 'Descrição da oferta 1',
    
  },
  {
    id: 2,
    title: 'Oferta 2',
    description: 'Descrição da oferta 2',
  },
  {
    id: 3,
    title: 'Oferta 3',
    description: 'Descrição da oferta 3',
  }
];

export default function OffersLow() {
  return (
    <div className={styles.offersContainer}>
      {offers.map((offer) => (
        <div key={offer.id} className={styles.card}>
          <img src={offer.imageUrl} alt={offer.title} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{offer.title}</h3>
          <p className={styles.cardDescription}>{offer.description}</p>
        </div>
      ))}
    </div>
  );
}
