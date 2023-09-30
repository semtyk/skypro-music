// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Track from "../track/track";

const ContentPlaylist = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-y: auto;
`;

export default function TrackList({arrOfTracks, unvisible}) {
 
    return (
        <ContentPlaylist>
              {arrOfTracks.map((item) => <Track 
                unvisible={unvisible} title={item.title} additionTitle={item.additionTitle} author={item.author}  album={item.album} time={item.time}
              />)}
        </ContentPlaylist>
    )
}

