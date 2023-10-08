import { useState } from 'react'
import AudioPlayer from '../../components/audioplayer/audioplayer'
import CenterBlock from '../../components/centerblock/centerblock'
import NavMenu from '../../components/navmenu/navmenu'
import SideBar from '../../components/sidebar/sidebar'
import * as S from '../../components/styledApp/styled.app'

export default function MainPage({
  handleLogout,
  tracks,
  isTracksLoading,
  LoadTracksError,
  selection,
  LoadSelectionError,
}) {
  const [currentTrack, setCurrentTrack] = useState(null) //  Стейт для выбора трека и активации аудиоплеера
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu handleLogout={handleLogout} />
          <CenterBlock
            isSkeleton={isTracksLoading}
            isFilterVisible
            playListName="Треки"
            arrOfTracks={tracks}
            LoadTracksError={LoadTracksError}
            setCurrentTrack={setCurrentTrack}
          />
          <SideBar
            unvisible={isTracksLoading}
            isSidebarCatVisible={!LoadSelectionError}
            selection={selection}
          />
        </S.Main>
        {currentTrack && (
          <AudioPlayer
            unvisible={isTracksLoading}
            currentTrack={currentTrack}
          />
        )}
        <footer />
      </S.Container>
    </S.Wrapper>
  )
}
