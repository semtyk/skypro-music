import { useState, useEffect } from 'react';
import AudioPlayer from '../../components/audioplayer/audioplayer';
import CenterBlock from '../../components/centerblock/centerblock';
import NavMenu from '../../components/navmenu/navmenu';
import SideBar from '../../components/sidebar/sidebar';
import * as S from '../../components/styledApp/styled.app'
import { arrOfFavoriteTracks } from '../../constants';

export default function FavoritePage() {
    const [isSkeleton, setIsSkeleton] = useState(true);
    const [currentTrack, setCurrentTrack] = useState(null);       //  Стейт для выбора трека и активации аудиоплеера

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
        <NavMenu />
        <CenterBlock isSkeleton = {isSkeleton} isFilterVisible = {false} playListName = 'Мои треки' arrOfTracks = {arrOfFavoriteTracks}
        setCurrentTrack={setCurrentTrack}/>
        <SideBar unvisible = {isSkeleton} isSidebarCatVisible = {false}/>
    </S.Main>
    {currentTrack && <AudioPlayer unvisible = {isSkeleton} currentTrack={currentTrack}/>}
    <footer />
    </S.Container>
  </S.Wrapper>
    ) 
}