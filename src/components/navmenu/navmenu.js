import { useState } from 'react';

import * as S from './styled.navmenu';

export default function NavMenu() {
    const [visible, setVisible] = useState(true);
    
    const handleClick = () => {
      setVisible(!visible);
    }

   // "./img/logo.png"
    return (
        <S.MainNav>
          <S.NavLogo>
            <S.NavLogoImg src='/img/logo.png' alt="logo" />
          </S.NavLogo>
          <S.NavBurger  onClick={handleClick}>
            <S.BurgerLine />
            <S.BurgerLine />
            <S.BurgerLine />
          </S.NavBurger>
          {visible && (<S.NavMenu>
            <S.NavMenuList>
              <S.NavMenuItem>
                <S.NavMenuItemLink to='/'>
                  Главное
                </S.NavMenuItemLink>
              </S.NavMenuItem>
              <S.NavMenuItem>
                <S.NavMenuItemLink to="/favorites">
                  Мой плейлист
                </S.NavMenuItemLink>
              </S.NavMenuItem>
              <S.NavMenuItem>
                <S.NavMenuItemLink to="/signin">
                  Войти
                </S.NavMenuItemLink>
              </S.NavMenuItem>
            </S.NavMenuList>
          </S.NavMenu>)}
        </S.MainNav>
    )
}