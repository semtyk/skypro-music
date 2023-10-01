import AudioPlayer from '../../components/audioplayer/audioplayer';
import CenterBlock from '../../components/centerblock/centerblock';
import NavMenu from '../../components/navmenu/navmenu';
import SideBar from '../../components/sidebar/sidebar';
import * as S from '../../components/styledApp/styled.app'


export default function MainPage({handleLogout, tracks, isTracksLoading, LoadTracksError}) {

    return (
<S.Wrapper>
    <S.Container>
    <S.Main>
        <NavMenu handleLogout={handleLogout}/>
        <CenterBlock isSkeleton = {isTracksLoading} isFilterVisible playListName = 'Треки' arrOfTracks = {tracks} LoadTracksError={LoadTracksError}/>
        <SideBar unvisible = {isTracksLoading} isSidebarCatVisible/>
    </S.Main>
    <AudioPlayer unvisible = {isTracksLoading}/>
    <footer />
    </S.Container>
  </S.Wrapper>
    ) 
}