

import './audioplayer.css'
import * as S from './styled.audioplayer'



export default function AudioPlayer({unvisible}) {
    return (
        <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay>
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>
              <S.PlayedTrack>
                <S.PlayedTrackContain>
                  <S.PlayedTrackImage>
                    {!unvisible && <S.PlayedTrackSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </S.PlayedTrackSvg>}
                  </S.PlayedTrackImage>
                  <S.PlayedTrackAlbum unvisible={unvisible}>
                    {!unvisible && <S.PlayedTrackAlbumLink href="http://">
                      Ты та...
                    </S.PlayedTrackAlbumLink>}
                  </S.PlayedTrackAlbum>
                  <S.PlayedTrackAuthor unvisible={unvisible}>
                    {!unvisible && <S.PlayedTrackAuthorLink href="http://">
                      Баста
                    </S.PlayedTrackAuthorLink>}
                  </S.PlayedTrackAuthor>
                </S.PlayedTrackContain>
                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </svg>
                  </div>
                </div>
              </S.PlayedTrack>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
}