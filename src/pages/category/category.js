import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../../components/audioplayer/audioplayer';
import CenterBlock from '../../components/centerblock/centerblock';
import NavMenu from '../../components/navmenu/navmenu';
import SideBar from '../../components/sidebar/sidebar';
import * as S from '../../components/styledApp/styled.app';
import { arrOfSelection } from '../../constants';


export default function CategoryPage() {
    const [isSkeleton, setIsSkeleton] = useState(true);

    useEffect(()=> {
      const timerId = setTimeout(() => {
        setIsSkeleton(!isSkeleton);
      }, 500);
      
      return () => {
        clearTimeout(timerId);
      };
    }, []);

    const params = useParams(); 
    const playlistArr = arrOfSelection.find((item) => item.id === Number(params.id));
    return (
<S.Wrapper>
    <S.Container>
    <S.Main>
        <NavMenu />
        <CenterBlock isSkeleton = {isSkeleton} isFilterVisible = {false} playListName = {playlistArr.name} arrOfTracks = {playlistArr.items}/>
        <SideBar unvisible = {isSkeleton} isSidebarCatVisible = {false} />
    </S.Main>
    <AudioPlayer unvisible = {isSkeleton}/>
    <footer />
    </S.Container>
  </S.Wrapper>
    ) 
}