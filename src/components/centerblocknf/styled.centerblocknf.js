// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
// { css,keyframes }

export const MainCenterblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;


export const CenterBlockContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 285px;
    align-items: center;
`;

export const CenterBlockItems = styled.div`
    width: 431px;
    height: 366px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CenterBlockText404 = styled.h1`
    font-size: 160px;
    font-weight: 400;
    line-height: 168px;
`;

export const CenterBlockWithSmile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 3px;
    margin-bottom: 19px;

    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
`;

export const CenterBlockTextDesc = styled.p`
    margin-bottom: 36px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #4E4E4E;
`;

export const CenterBlockBtnToMain =styled.button`
    width: 278px;
    height: 52px;
    background-color: #580ea2;
    border-radius: 6px;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; 
    & a {
        width: 100%;
        height: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #ffffff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    };
    &:hover {
        background-color: #3f007d;
      };
    &:active {
        background-color: #271a58;
      };
`;










