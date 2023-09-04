import './tracklist.css'
import Track from "./track";


export default function TrackList() {
    const arrOfTracks = [
        {
            title: 'Guilt',
            author: 'Nero',
            album: 'Welcome Reality',
            time: '4:44',
        },
        {
            title: 'Elektro',
            author: 'Dynoro, Outwork, Mr. Gee',
            album: 'Elektro',
            time: '2:22',
        },
        {
            title: 'I’m Fire',
            author: 'Ali Bakgor',
            album: 'I’m Fire',
            time: '2:22',
        },
        {
            title: 'Non Stop',
            author: 'Стоункат, Psychopath',
            album: 'Non Stop',
            time: '4:12',
        },
        {
            title: 'Run Run',
            author: 'Jaded, Will Clarke, AR/CO',
            album: 'Run Run',
            time: '2:54',
        },
        {
            title: 'Eyes on Fire',
            additionTitle: '(Zeds Dead Remix)',
            author: 'Blue Foundation, Zeds Dead',
            album: 'Eyes on Fire',
            time: '5:20',
        },
        {
            title: 'Mucho Bien',
            additionTitle: '(Hi Profile Remix)',
            author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
            album: 'Mucho Bien',
            time: '3:41',
        },
        {
            title: 'Knives n Cherries',
            author: 'minthaze',
            album: 'Captivating',
            time: '1:48',
        },
        {
            title: 'How Deep Is Your Love',
            author: 'Calvin Harris, Disciples',
            album: 'How Deep Is Your Love',
            time: '3:32',
        },
        {
            title: 'Morena',
            author: 'Tom Boxer',
            album: 'Soundz Made in Romania',
            time: '3:36',
        },
    ]
    return (
        <div className="content__playlist playlist">
              {arrOfTracks.map((item) => <Track 
                title={item.title} additionTitle={item.additionTitle} author={item.author}  album={item.album} time={item.time}
              />)}
        </div>
    )
}