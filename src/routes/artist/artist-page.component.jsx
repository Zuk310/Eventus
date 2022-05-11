import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Spotify from '../../components/spotify/spotify.component';

import { apiAristsFetchFunction } from '../../utils/api.utils';

import './artist-page.styles.scss';

const ArtistPage = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state; 
    const [currentArtist, setCurrentArtist] =useState({});

    useEffect(()=>{
        getApiArtistData();
    },[])

    const goToEventHandler = () => {
        navigate("/event");
    };

    const getApiArtistData = async () => {
        const artistRes = await apiAristsFetchFunction(data);
        setCurrentArtist(artistRes);
    };

  return(
    <div className=''>
               <div className="artist-container">
            {currentArtist && (
                <div className="current-artist">
                    <img
                        className="artist-image"
                        src={currentArtist.imageurl}
                        alt={currentArtist.name}
                    />
                    <h5>{currentArtist.description}</h5>
                    <Spotify link={currentArtist.spotifyartisturl}/>
                </div>
            )}
            <button onClick={() => goToEventHandler()}>Go back</button>
        </div>
    </div>
  )
};
export default ArtistPage;