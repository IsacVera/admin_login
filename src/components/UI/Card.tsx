import React from 'react';
import './Card.scss';

interface CardProps {
    children: React.ReactNode;
    cardType: string;
}

const Card = ({children, cardType}: CardProps) => {
    return (
        <div className={cardType}>
            {children}
        </div>
    );
};

export default Card;
