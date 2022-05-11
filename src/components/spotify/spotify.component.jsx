import {ReactComponent as SpotifyIcon} from '../../assets/spotify-2.svg';

import './spotify.styles.scss';

const Spotify = ({link}) =>{
  return(
    <div className='spotitfy-icon-container'>
        <a href={link}>
        <SpotifyIcon className='spotitfy-icon'/>
        </a>
    </div>
  )
};
export default Spotify;