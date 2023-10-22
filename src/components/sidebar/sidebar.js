import * as S from './styled.sidebar'

export default function SideBar({ unvisible, isSidebarCatVisible, selection }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Matveev</S.SidebarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIcon>
      </S.SidebarPersonal>
      {isSidebarCatVisible && (
        <S.SideBarBlock>
          <S.SidebarList>
            {selection.map((item) => (
              <S.SideBarItem key={item.id} unvisible={unvisible}>
                <S.SideBarLink to={`/category/${item.id}`}>
                  {!unvisible && (
                    <S.SideBarImg
                      src={`/img/playlist0${item.id}.png`}
                      alt="day's playlist"
                    />
                  )}
                </S.SideBarLink>
              </S.SideBarItem>
            ))}
          </S.SidebarList>
        </S.SideBarBlock>
      )}
    </S.MainSidebar>
  )
}
