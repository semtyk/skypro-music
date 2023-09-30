import { useState } from 'react'
import SearchPannel from '../centerblock-search/centerblock-search'
import TrackList from '../tracklist/tracklist'
import * as S from './styled.centerblock'
import { arrOfGenre, arrOfYear } from '../../constants'

function FilterItem({isActive, onShow, title, listItems}) {

  return (
    <S.FilterItemEl>
    <S.FilterButton type='button' isActive={isActive} onClick={onShow}>
        {title}
    </S.FilterButton>
    {isActive && (<S.FilterItemScrollBar>
      <S.FilterItemListItems>
        {listItems}
      </S.FilterItemListItems>
    </S.FilterItemScrollBar>)}
    </S.FilterItemEl>
  )
}


export default function CenterBlock({arrOfTracks, playListName, isFilterVisible, isSkeleton}) {
  const [activeIndex, setActiveIndex] = useState(0);

    function clbSetActiveIndex(key) {
      return () => {
          if (activeIndex === key) {
            setActiveIndex(0);
          } else {
            setActiveIndex(key);
          }   
      }
    }

    const listPerformer = arrOfTracks.map((item)=><li>{item.author}</li>);
    const listGenre = arrOfGenre.map((item)=><li>{item}</li>);
    const listYear = arrOfYear.map((item)=><li>{item}</li>);

    return (
        <S.MainCenterblock>
          <SearchPannel />
          <S.CenterblockHeadTitle>{playListName}</S.CenterblockHeadTitle>
          {isFilterVisible && 
          (<S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <FilterItem title='исполнителю' listItems={listPerformer} onShow={clbSetActiveIndex(1)} isActive={activeIndex===1}/>
            <FilterItem title='году выпуска' listItems={listGenre} onShow={clbSetActiveIndex(2)} isActive={activeIndex===2}/>
            <FilterItem title='жанру' listItems={listYear} onShow={clbSetActiveIndex(3)} isActive={activeIndex===3}/>
          </S.CenterblockFilter>)}
          <S.CenterBlockContent>
            <S.ContentTitle>
              <S.ContentTitleCol01>Трек</S.ContentTitleCol01>
              <S.ContentTitleCol02>ИСПОЛНИТЕЛЬ</S.ContentTitleCol02>
              <S.ContentTitleCol03>АЛЬБОМ</S.ContentTitleCol03>
              <S.ContentTitleCol04>
                <S.ContentTitleSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
                </S.ContentTitleSvg>
              </S.ContentTitleCol04>
            </S.ContentTitle>
            <TrackList unvisible = {isSkeleton} arrOfTracks = {arrOfTracks}/>
          </S.CenterBlockContent>
        </S.MainCenterblock>
    )
}