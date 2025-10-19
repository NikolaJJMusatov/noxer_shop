import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Footer.css"

export const Footer: FC = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
          <div className="footer__title-container">
            <p className="footer__title">Разработано на платформе Noxer</p>
            <Button
              text="noxerai_bot"
              iconLeft={<img src="/icon_tg_small.svg" alt="tg small" style={{width: "11px", height: "11px"}}/>}
              padding="5px 7px"
              textColor="rgba(139, 139, 139, 1)"
              gap="5px"
            />
          </div>
          
          <nav className="footer__nav-container">
            <NavLink className="footer__nav-link" to={'/'}>
              <img src="/home.svg" alt="Главная" className="footer__icon" />
            </NavLink>
            <NavLink className="footer__nav-link" to={'/'}>
              <img src="/catalog.svg" alt="Каталог" className="footer__icon" />
            </NavLink>
            <NavLink className="footer__nav-link" to={'/'}>
              <img src="/favorite.svg" alt="Избранное" className="footer__icon" />
            </NavLink>
            <NavLink className="footer__nav-link" to={'/'}>
              <img src="/cart.svg" alt="Корзина" className="footer__icon" />
            </NavLink>
            <NavLink className="footer__nav-link" to={'/'}>
              <img src="/account.svg" alt="Профиль" className="footer__icon" />
            </NavLink>
          </nav>
      </div>
    </footer>
  );
};
