import * as S from '../sidebar/styled.sidebar'

export default function SideBarNF() {
    return (
        <S.MainSidebar>
          <S.SidebarPersonal>
            <S.SidebarPersonalName> </S.SidebarPersonalName>
            <S.SideBarIcon>
              <svg alt="logout">
                <use xlinkHref="/img/icon/sprite.svg#logout" />
              </svg>
            </S.SideBarIcon>
          </S.SidebarPersonal>          
        </S.MainSidebar>
    )
}