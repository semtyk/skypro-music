import { Link } from 'react-router-dom'
import SearchPannel from '../centerblock-search/centerblock-search'
import * as S from './styled.centerblocknf'

export default function CenterBlockNF() {
    return (
        <S.MainCenterblock>
          <SearchPannel />
          <S.CenterBlockContent> 
                <S.CenterBlockItems> 
                    <S.CenterBlockText404>404</S.CenterBlockText404>
                    <S.CenterBlockWithSmile>
                        <span>Страница не найдена</span>
                        <img src='/img/smile_crying.png' alt='crying smile' />
                    </S.CenterBlockWithSmile>
                    <S.CenterBlockTextDesc>Возможно, она была удалена 
                        или перенесена на другой адрес
                    </S.CenterBlockTextDesc> 
                    <S.CenterBlockBtnToMain> <Link to="/">Вернуться на главную</Link> </S.CenterBlockBtnToMain>
                </S.CenterBlockItems>
          </S.CenterBlockContent>
        </S.MainCenterblock>
    )
}