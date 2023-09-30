import * as S from './search.styled'

export default function SearchPannel () {
    return (
        <S.SearchBlock>
            <S.SearchBlockSvg>
              <use xlinkHref="/img/icon/sprite.svg#icon-search" />
            </S.SearchBlockSvg>
            <S.SearchText
              type="search"
              placeholder="Поиск"
              name="search"
            />
          </S.SearchBlock>
    )
}