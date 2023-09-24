import * as S from './styled.track'

export default function Track(props) {
    return (
        <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      {!props.unvisible && <S.TrackTitleSvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackTitleSvg>}
                    </S.TrackTitleImage>
                    <S.TrackTitleText unvisible={props.unvisible}>
                      {!props.unvisible && <S.TrackTitleLink href="http://">
                        {props.title}
                        {props.additionTitle && <S.TrackTitleLSpan> {props.additionTitle}</S.TrackTitleLSpan>}
                      </S.TrackTitleLink>}
                    </S.TrackTitleText>
                  </S.TrackTitle>
                  <S.TrackAuthor unvisible={props.unvisible}>
                    {!props.unvisible && <S.TrackAuthorLink href="http://">
                      {props.author}
                    </S.TrackAuthorLink>}
                  </S.TrackAuthor>
                  <S.TrackAlbum unvisible={props.unvisible}>
                    {!props.unvisible && <S.TrackAlbumLink href="http://">
                      {props.album}
                    </S.TrackAlbumLink>}
                  </S.TrackAlbum>
                  <div>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{props.unvisible ? '0:00' : props.time}</S.TrackTimeText>
                  </div>
                </S.PlaylistTrack>
        </S.PlaylistItem>
    )
}
