import * as S from './styled.sidebar'

export default function SideBar({unvisible, isSidebarCatVisible}) {
    return (
        <S.MainSidebar>
          <S.SidebarPersonal>
            <S.SidebarPersonalName>Sergey.Matveev</S.SidebarPersonalName>
            <S.SideBarIcon>
              <svg alt="logout">
                <use xlinkHref="img/icon/sprite.svg#logout" />
              </svg>
            </S.SideBarIcon>
          </S.SidebarPersonal>
          {isSidebarCatVisible && 
          (<S.SideBarBlock>
            <S.SidebarList>
              <S.SideBarItem unvisible={unvisible}>
                <S.SideBarLink href="/#">
                  {!unvisible && <S.SideBarImg
                    src="img/playlist01.png"
                    alt="day's playlist"
                  />}
                </S.SideBarLink>
              </S.SideBarItem>
              <S.SideBarItem unvisible={unvisible}>
                <S.SideBarLink href="/#">
                  {!unvisible && <S.SideBarImg
                    src="img/playlist02.png"
                    alt="day's playlist"
                  />}
                </S.SideBarLink>
              </S.SideBarItem>
              <S.SideBarItem unvisible={unvisible}>
                <S.SideBarLink href="/#">
                  {!unvisible && <S.SideBarImg
                    src="img/playlist03.png"
                    alt="day's playlist"
                  />}
                </S.SideBarLink>
              </S.SideBarItem>
            </S.SidebarList>
          </S.SideBarBlock>)}
          
        </S.MainSidebar>
    )
}