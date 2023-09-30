import { useState, useEffect } from 'react';
import AudioPlayer from '../../components/audioplayer/audioplayer';
import CenterBlock from '../../components/centerblock/centerblock';
import NavMenu from '../../components/navmenu/navmenu';
import SideBar from '../../components/sidebar/sidebar';
import * as S from '../../components/styledApp/styled.app'
import { arrOfAllTracks } from '../../constants';

export default function MainPage({handleLogout}) {
    const [isSkeleton, setIsSkeleton] = useState(true);

    useEffect(()=> {
      const timerId = setTimeout(() => {
        setIsSkeleton(!isSkeleton);
      }, 500);
      
      return () => {
        clearTimeout(timerId);
      };
    }, []);

    return (
<S.Wrapper>
    <S.Container>
    <S.Main>
        <NavMenu handleLogout={handleLogout}/>
        <CenterBlock isSkeleton = {isSkeleton} isFilterVisible playListName = 'Треки' arrOfTracks = {arrOfAllTracks}/>
        <SideBar unvisible = {isSkeleton} isSidebarCatVisible/>
    </S.Main>
    <AudioPlayer unvisible = {isSkeleton}/>
    <footer />
    </S.Container>
  </S.Wrapper>
    ) 
}