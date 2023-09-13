import { useState } from 'react'
import SearchPannel from './centerblock-search'
import './centerblock.css'
import TrackList from './tracklist'

function FilterItem(props) {


  return (
    <div className='filterItem'>
    <button type='button' className = {`${props.className} filter__button _btn-text ${props.isActive && 'filter__button_active'}`} onClick={props.onShow}>
        {props.title}
    </button>
    {props.isActive && (<div className='filterItem__scrollBar'>
      <ul className='filterItem__listItems'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>)}

    </div>
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

    return (
        <div className="main__centerblock centerblock">
          <SearchPannel />
          <h2 className="centerblock__h2">Треки</h2>
          <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FilterItem className="button-author" title='исполнителю' onShow={clbSetActiveIndex(1)} isActive={activeIndex===1}/>
            <FilterItem className="button-year" title='году выпуска' onShow={clbSetActiveIndex(2)} isActive={activeIndex===2}/>
            <FilterItem className="button-genre" title='жанру' onShow={clbSetActiveIndex(3)} isActive={activeIndex===3}/>
          </div>
          <div className="centerblock__content">
            <div className="content__title playlist-title">
              <div className="playlist-title__col col01">Трек</div>
              <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
              <div className="playlist-title__col col03">АЛЬБОМ</div>
              <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </svg>
              </div>
            </div>
            <TrackList unvisible = {props.isSkeleton}/>
          </div>
        </div>
    )
}