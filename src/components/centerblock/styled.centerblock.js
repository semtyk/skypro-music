// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';
// { css,keyframes }

export const MainCenterblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;

export const CenterblockHeadTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;

export const CenterblockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    /* align-items: center; */
    align-items: flex-start;
    margin-bottom: 51px;
`;

export const CenterBlockContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;

export const ContentTitle = styled.div`
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
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const ContentTitleColMixin = css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;

export const ContentTitleCol01 = styled.div`
    ${ContentTitleColMixin};
    width: 447px;
`;

export const ContentTitleCol02 = styled.div`
    ${ContentTitleColMixin};
    width: 321px;
`;

export const ContentTitleCol03 = styled.div`
    ${ContentTitleColMixin};
    width: 245px;
`;

export const ContentTitleCol04 = styled.div`
    ${ContentTitleColMixin};
    width: 60px;
    text-align: end;
`;

export const ContentTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const FilterItemEl = styled.div`
    display: flex;
    flex-direction: column;
`;


const FilterButtonActiveMixin = css`
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer; 
`;

export const FilterButton = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    background-color: transparent;
    color: rgb(255, 255, 255);
    margin-right: 10px;
    ${(props) =>
        { if (props.isActive) {
            return css`${FilterButtonActiveMixin}`;
        } 
        return css``;
        }};
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
    };
`;

export const FilterItemScrollBar = styled.div`
    max-width: 248px;
    min-width: 221px;
    max-height: 305px;
    border-radius: 12px;
    padding: 34px;
    background-color: #313131;
    position: absolute;
    z-index: 1;
    margin-top: 49px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`;

export const FilterItemListItems = styled.ul`
    overflow-y: auto;
    max-width: 180px;
    max-height: 237px;
    &::-webkit-scrollbar {
        width: 4px;
    };
    &::-webkit-scrollbar-track {
        background-color: #4B4949;
    };
    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 10px;
    };
    & li:hover {
        color: #B672FF;
        text-decoration: underline;
        cursor: pointer;
    };
    & li:not(:last-child) {
        margin-bottom: 28px;
    };
`;


