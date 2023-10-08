import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AudioPlayer from '../../components/audioplayer/audioplayer'
import CenterBlock from '../../components/centerblock/centerblock'
import NavMenu from '../../components/navmenu/navmenu'
import SideBar from '../../components/sidebar/sidebar'
import * as S from '../../components/styledApp/styled.app'
import { getSelectionFromId } from '../../Api'

export default function CategoryPage() {
  const [tracks, setTracks] = useState({
    items: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ],
  })

  const [isTracksLoading, setIsTracksLoading] = useState(false) // стейт для хранения статуса загрузки листа
  const [LoadTracksError, setLoadTracksError] = useState(null) // стейт для хранения сообщения ошибки от сервера при загрузке листа
  const [currentTrack, setCurrentTrack] = useState(null) //  Стейт для выбора трека и активации аудиоплеера

  // в.2 UseEffect для того, чтобы срабатывало один раз
  const params = useParams()

  useEffect(() => {
    setLoadTracksError(null) //  Обнуляем стейт ошибки ответа от сервера
    setIsTracksLoading(true) //  Ставим стейт загрузки в состояние вкл
    getSelectionFromId(Number(params.id))
      .then((data) => {
        console.log(data)
        setTracks(data) //  при успешном получении ответа от сервера, обновляем стейт данных
      })
      .catch((error) => {
        setLoadTracksError(error.message) //  при ошибке от сервера сохраняем месседж ошибки в стейт
      })
      .finally(() => {
        setIsTracksLoading(false) //  в любом случае, ставим стейт загрузки в состяние выкл
      })
  }, [])

  let playListName

  switch (params.id) {
    case '1':
      playListName = 'Плейлист дня'
      break
    case '2':
      playListName = '100 танцевальных хитов'
      break
    case '3':
      playListName = 'Инди-заряд'
      break
    default:
      break
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <CenterBlock
            isSkeleton={isTracksLoading}
            isFilterVisible={false}
            playListName={playListName}
            arrOfTracks={tracks.items}
            setCurrentTrack={setCurrentTrack}
            LoadTracksError={LoadTracksError}
          />
          <SideBar unvisible={isTracksLoading} isSidebarCatVisible={false} />
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
