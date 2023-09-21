import { useState } from 'react'
import SearchPannel from '../centerblock-search/centerblock-search'
import TrackList, { arrOfTracks,arrOfGenre,arrOfYear } from '../tracklist/tracklist'
import * as S from './styled.centerblock'

function FilterItem(props) {

  return (
    <S.FilterItemEl>
    <S.FilterButton type='button' isActive={props.isActive} onClick={props.onShow}>
        {props.title}
    </S.FilterButton>
    {props.isActive && (<S.FilterItemScrollBar>
      <S.FilterItemListItems>
        {props.listItems}
      </S.FilterItemListItems>
    </S.FilterItemScrollBar>)}
    </S.FilterItemEl>
  )
}


export default function CenterBlock(props) {
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
          <S.CenterblockHeadTitle>Треки</S.CenterblockHeadTitle>
          <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <FilterItem title='исполнителю' listItems={listPerformer} onShow={clbSetActiveIndex(1)} isActive={activeIndex===1}/>
            <FilterItem title='году выпуска' listItems={listGenre} onShow={clbSetActiveIndex(2)} isActive={activeIndex===2}/>
            <FilterItem title='жанру' listItems={listYear} onShow={clbSetActiveIndex(3)} isActive={activeIndex===3}/>
          </S.CenterblockFilter>
          <S.CenterBlockContent>
            <S.ContentTitle>
              <S.ContentTitleCol01>Трек</S.ContentTitleCol01>
              <S.ContentTitleCol02>ИСПОЛНИТЕЛЬ</S.ContentTitleCol02>
              <S.ContentTitleCol03>АЛЬБОМ</S.ContentTitleCol03>
              <S.ContentTitleCol04>
                <S.ContentTitleSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </S.ContentTitleSvg>
              </S.ContentTitleCol04>
            </S.ContentTitle>
            <TrackList unvisible = {props.isSkeleton}/>
          </S.CenterBlockContent>
        </S.MainCenterblock>
    )
}