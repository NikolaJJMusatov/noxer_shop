import { FC, useState } from "react";
import "./CardsGrid.css"
import { Button } from "../Button/Button";
import { Product } from "../../types/product";

interface CardsGridProps {
  cards: Product[];
}

export const CardsGrid: FC<CardsGridProps> = ({ cards }) => {
  const [likedCards, setLikedCards] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="cards-grid">
      {cards.map((card, index) => (
        <div key={`${card.id}-${index}`} className="card-item">
          <div>
            <div className="card-item-image-container">
              <img
              className="card-item-image"
                src={
                  card.images?.find(img => img.MainImage)?.Image_URL ||
                  card.images?.[0]?.Image_URL ||
                  card.images?.[0]?.image_url ||
                  './nullitemIcon.png'
                }
                alt={card.name}
                onError={(e) => {
                  e.currentTarget.src = './nullitemIcon.png';
                }}
              />
            </div>


            <button
              className="card-like-btn"
              aria-label="Добавить в избранное"
              onClick={() => toggleLike(card.id)}
            >
              <img
                src={likedCards[card.id] ? "./heart.svg" : "./heart_off.svg"}
                alt="like"
              />
            </button>

            <div className="card-description">
              <p className="card-price">
                <span className="card-price-new">{card.price} ₽</span>
                {card.old_price && (
                  <>
                    <span className="card-price-old">{card.old_price} ₽</span>
                    <span className="card-price-discount">
                      -{Math.round(((card.old_price - card.price) / card.old_price) * 100)}%
                    </span>
                  </>
                )}
              </p>
              <div className="card-title">{card.name}</div>
            </div>
          </div>

          <Button
            text="Выбрать"
            width="100%"
          />
        </div>
      ))}
    </section>
  );
};