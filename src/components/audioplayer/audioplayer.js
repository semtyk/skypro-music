import { useEffect, useRef, useState } from 'react'
import * as S from './styled.audioplayer'

export default function AudioPlayer({ unvisible, currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlay = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }
  const handlePause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }
  const togglePlay = isPlaying ? handlePause : handlePlay

  useEffect(() => {
    if (currentTrack) {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }, [currentTrack])

  return (
    <S.Bar>
      <audio controls style={{ display: 'none' }} ref={audioRef}>
        <source src={currentTrack.track_file} type="audio/mpeg" />
        <track kind="captions" />
      </audio>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play" onClick={togglePlay}>
                  {isPlaying ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>
            <S.PlayedTrack>
              <S.PlayedTrackContain>
                <S.PlayedTrackImage>
                  {!unvisible && (
                    <S.PlayedTrackSvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                    </S.PlayedTrackSvg>
                  )}
                </S.PlayedTrackImage>
                <S.PlayedTrackAlbum unvisible={unvisible}>
                  {!unvisible && (
                    <S.PlayedTrackAlbumLink href="http://">
                      {currentTrack.name}
                    </S.PlayedTrackAlbumLink>
                  )}
                </S.PlayedTrackAlbum>
                <S.PlayedTrackAuthor unvisible={unvisible}>
                  {!unvisible && (
                    <S.PlayedTrackAuthorLink href="http://">
                      {currentTrack.author}
                    </S.PlayedTrackAuthorLink>
                  )}
                </S.PlayedTrackAuthor>
              </S.PlayedTrackContain>
              <S.PlayedTrackLikeDis>
                <S.PlayedTrackLike>
                  <S.PlayedTrackLikeSvg alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </S.PlayedTrackLikeSvg>
                </S.PlayedTrackLike>
                <S.PlayedTrackDislike>
                  <S.PlayedTrackDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                  </S.PlayedTrackDislikeSvg>
                </S.PlayedTrackDislike>
              </S.PlayedTrackLikeDis>
            </S.PlayedTrack>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
