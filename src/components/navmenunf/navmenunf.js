
import * as S from '../navmenu/styled.navmenu';

export default function NavMenuNF() {

    return (
        <S.MainNav>
          <S.NavLogo>
            <S.NavLogoImg src='/img/logo.png' alt="logo" />
          </S.NavLogo>
          <S.NavBurger>
            <S.BurgerLine />
            <S.BurgerLine />
            <S.BurgerLine />
          </S.NavBurger>
        </S.MainNav>
    )
}