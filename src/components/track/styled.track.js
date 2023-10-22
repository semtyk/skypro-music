// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components'
import { animationMixin } from '../audioplayer/styled.audioplayer'
// { css,keyframes }

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`

export const PlaylistTrack = styled.div`
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
  margin-right: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const TrackTitle = styled.div`
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
  width: 447px;
`

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

export const TrackTitleLSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;s
    line-height: 24px;
    color: #4e4e4e;
`

const AnimationProperty = css`
  animation: ${animationMixin};
`
const TrackTitleTextUnvisMixin = css`
  width: 356px;
  height: 19px;
  background-color: #313131;
  ${AnimationProperty}
`

export const TrackTitleText = styled.div`
  ${(props) => {
    if (props.unvisible) {
      return css`
        ${TrackTitleTextUnvisMixin}
      `
    }
    return css``
  }};
`

const TrackAuthorUnvisMixin = css`
  height: 19px;
  background-color: #313131;
  ${AnimationProperty}
`

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  ${(props) => {
    if (props.unvisible) {
      return css`
        ${TrackAuthorUnvisMixin}
      `
    }
    return css``
  }};
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`

const TrackAlbumUnvisMixin = css`
  height: 19px;
  background-color: #313131;
  ${AnimationProperty}
`

export const TrackAlbum = styled.div`
  width: 245px;
  ${(props) => {
    if (props.unvisible) {
      return css`
        ${TrackAlbumUnvisMixin}
      `
    }
    return css``
  }};
`

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:hover {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
