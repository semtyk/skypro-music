import './track.css'

export default function Track(props) {
    return (
        <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      {!props.unvisible && <svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>}
                    </div>
                    <div className={`track__title-text ${props.unvisible ? 'track__title-text_unvis': ''}`}>
                      {!props.unvisible && <a className="track__title-link" href="http://">
                        {props.title}
                        {props.additionTitle && <span className="track__title-span"> {props.additionTitle}</span>}
                      </a>}
                    </div>
                  </div>
                  <div className={`track__author ${props.unvisible ? 'track__author_unvis': ''}`}>
                    {!props.unvisible && <a className="track__author-link" href="http://">
                      {props.author}
                    </a>}
                  </div>
                  <div className={`track__album ${props.unvisible ? 'track__album_unvis' : ''}`}>
                    {!props.unvisible && <a className="track__album-link" href="http://">
                      {props.album}
                    </a>}
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className="track__time-text">{props.unvisible ? '0:00' : props.time}</span>
                  </div>
                </div>
              </div>
    )
}
