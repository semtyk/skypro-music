// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css, keyframes } from 'styled-components'

export const myAnim = keyframes`
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
    `

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: rgba(28, 28, 28, 0.5);
`

export const BarPlayerProgress = styled.div``

export const BarPlayerDuration = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #696969;
  background-color: none;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-right: 10px;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

const PlayerBtnMixin = css`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const PlayerBtnPrev = styled.button`
  ${PlayerBtnMixin}
  margin-right: 23px;
  background: transparent;
  border: transparent;
`

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBtnPlay = styled(PlayerBtnPrev)``

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBtnNext = styled(PlayerBtnPrev)`
  margin-right: 28px;
  fill: #a53939;
`

export const PlayerBtnNextSvg = styled(PlayerBtnPrevSvg)`
  fill: inherit;
  stroke: #d9d9d9;
`

export const PlayerBtnRepeat = styled(PlayerBtnPrev)`
  margin-right: 24px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`

export const PlayerBtnShuffle = styled(PlayerBtnRepeat)``

const PlayerBtnRepeatMixin = css`
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
`
export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  ${(props) => {
    if (props.isActive) {
      return css`
        ${PlayerBtnRepeatMixin}
      `
    }
    return css``
  }};
`

export const PlayerBtnShuffleSvg = styled(PlayerBtnRepeatSvg)`
  width: 19px;
`

export const PlayedTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`

export const PlayedTrackContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image album' 'image author';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const PlayedTrackImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  -ms-grid-row-span: 2;
  grid-column: 1;
  grid-area: image;
`

export const PlayedTrackSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const animationMixin = () => css`
  ${myAnim} 5s ease 0s 1 normal forwards;
`
const PlayedTrackUnvisMixin = css`
  background-color: #313131;
  height: 15px;
  width: 59px;
  animation: ${animationMixin};
`

export const PlayedTrackAuthor = styled.div`
  grid-row: 2;
  grid-column: 2;
  grid-area: author;
  min-width: 150px;
  ${(props) => {
    if (props.unvisible) {
      return css`
        ${PlayedTrackUnvisMixin}
      `
    }
    return css``
  }};
`

export const PlayedTrackAlbum = styled(PlayedTrackAuthor)`
  grid-row: 1;
  grid-area: album;
`

export const PlayedTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`

export const PlayedTrackAlbumLink = styled(PlayedTrackAuthorLink)`
  font-size: 16px;
  white-space: nowrap;
`

// ---ещё один способ задать анимацию с миксинами

// const PlayedTrackAuthorUnvisMixin = (props) => {
//     if (props.unvisible) {
//       return css`
//      background-color: #313131;
//      height: 15px;
//      width: 59px;
//      animation: ${animationMixin};
//       `;
//     }
//     return css``;
//   };

// export const PlayedTrackAuthor = styled.div`
//     grid-row: 1;
//     grid-column: 2;
//     grid-area: author;
//     min-width: 49px;
//     ${PlayedTrackAuthorUnvisMixin};
// `;

export const PlayedTrackLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`

const BtnLikeDislike = styled.button`
  background: transparent;
  border: transparent;
  &:active svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`

export const PlayedTrackLike = styled(BtnLikeDislike)`
  padding: 5px;
`

export const PlayedTrackLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayedTrackDislike = styled(PlayedTrackLike)`
  margin-left: 28.5px;
`
export const PlayedTrackDislikeSvg = styled(PlayedTrackLikeSvg)``

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`

export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
`
