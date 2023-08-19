import './track.css'

export default function Track(props) {
    return (
        <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        {props.title}
                        {props.additionTitle && <span className="track__title-span"> {props.additionTitle}</span>}
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      {props.author}
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      {props.album}
                    </a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className="track__time-text">{props.time}</span>
                  </div>
                </div>
              </div>
    )
}
