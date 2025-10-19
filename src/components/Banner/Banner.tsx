import { FC } from 'react';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { Button } from '../Button/Button';
import './Banner.css';

export const Banner: FC = () => {
  const isMobile = useMediaQuery('(max-width: 490px)');

  return (
    <section className="banner-container">
      <div className="banner-container-content">
        <p className="banner-container-content-text">
          <span>
            всем клиентам <br /> дарим 500 руб.
          </span>
          <br /> на первый заказ в телеграм-боте
        </p>
        <Button text="Подробнее" size={isMobile ? 'small' : 'medium'} color="var(--bg)" />
      </div>
    </section>
  );
};
