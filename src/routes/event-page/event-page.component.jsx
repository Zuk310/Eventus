import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/api.context";
import { useNavigate, Link } from "react-router-dom";

import {
         apiEventFetchFunction,
} from "../../utils/api.utils";

import Spotify from "../../components/spotify/spotify.component";

import "./event-page.styles.scss";

const EventPage = () => {
    const { eventId } = useContext(ApiContext);
    const [currentEvent, setCurrentEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getApiData();
    },[]);

    const goToSearchHandler = () => {
        navigate("/");
    };

    const getApiData = async () => {
        const eventRes = await apiEventFetchFunction(eventId);
        setCurrentEvent(eventRes);
    };
    
    return (
        <div className="event-container">
            {/* {console.log("current: ", currentEvent)} */}
            {currentEvent && (
                <div className="current-event">
                    <img
                        className="event-image"
                        src={currentEvent.largeimageurl}
                        alt={currentEvent.eventname}
                    />
                    <h1>{currentEvent.eventname}</h1>
                    <h2>{currentEvent.date}</h2>
                    <h5>{currentEvent.description}</h5>
                    <a href={currentEvent.link}>Event Link!</a>
                    <div className="artists-container">
                        {currentEvent.artists.map((artist) => {
                            return (
                                <div className="artist-container" key={artist.artistid}>
                                    <Link
                                        className="nav-link"
                                        to="/artist"
                                        state={artist.artistid}
                                    >
                                        <h4>{artist.name}</h4>
                                    </Link>
                                    <img
                                        className="artist-img"
                                        src={artist.image}
                                        alt={artist.name}
                                    />
                                    <Spotify link={artist.spotifyartisturl} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <button onClick={() => goToSearchHandler()}>Go back</button>
        </div>
    );
};
export default EventPage;
