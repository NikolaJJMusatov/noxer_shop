import { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { Button } from "../Button/Button";

export const Header: FC = () => {

  
  return (
    <header className="header">
        <Link to={'/'}>
          <Button
            text="закрыть"
            size="small"
            textColor="rgba(102, 102, 102, 1)"
            iconLeft={<img src="/close.svg" alt="close" />}
            gap="4px"
            padding="8px 14px"
          />
        </Link>
        <Link to={'/'}>
          <Button
            text="наш tg-канал"
            size="small"
            color="#fff"
            borderRadius="40px"
            padding="3px 6px 3px 3px"
            gap="6px"
            iconLeft={<img src="/icon_tg.svg" alt="tg" />}
          />
        </Link>
        <Link to={'/'}>
          <Button
            size="small"
            iconLeft={<img src="/vector.svg" alt="arrow down" />}
            iconRight={<img src="/more.svg" alt="more" />}
            padding="11px 14px"
          />
        </Link>
    </header>
  );
};