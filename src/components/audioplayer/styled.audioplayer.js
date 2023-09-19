// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';

export const Bar = styled.div`
     position: absolute;
     bottom: 0;
     left: 0;
     width: 100%;
     background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2e2e2e;
`;

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
`;

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
`;

export const BarVolumeBlock = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 92px 0 0;
`;

export const PlayerControls = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;

const PlayerBtnMixin = css`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const PlayerBtnPrev = styled.button`
    ${PlayerBtnMixin}
    margin-right: 23px;
    background: transparent;
    border: transparent;
`;

export const PlayerBtnPrevSvg = styled.svg`
    width: 15px;
    height: 14px;
`;

export const PlayerBtnPlay = styled(PlayerBtnPrev)``;

export const PlayerBtnPlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`;

export const PlayerBtnNext = styled(PlayerBtnPrev)`
    margin-right: 28px;
    fill: #a53939;
`;

export const PlayerBtnNextSvg = styled(PlayerBtnPrevSvg)`
    fill: inherit;
    stroke: #d9d9d9;
`;

export const PlayerBtnRepeat = styled(PlayerBtnPrev)`
    margin-right: 24px;
    &:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    };
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    };
`;

export const PlayerBtnShuffle = styled(PlayerBtnRepeat)``;

export const PlayerBtnRepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const PlayerBtnShuffleSvg = styled(PlayerBtnRepeatSvg)`
    width: 19px;
`;





