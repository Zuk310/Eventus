import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../context/api.context';

import './event-card.styles.scss';

const EventCard = ({event}) =>{
  const {id, largeimageurl, eventname, date, venue, description} = event;
  const {setEventId} = useContext(ApiContext);
  const navigate = useNavigate();

  const goToEventHandler = () => {
    navigate('/event');
    setEventId(id);
  };


  return(
    <div className='card' onClick={()=>{
      goToEventHandler();
      }}>
        {/* <div className="img-container"> */}
          <img className="card__image" src={largeimageurl} alt={eventname} /> 

        {/* </div> */}
        <div className="card__overlay">
            <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>   
            <div className="card__header-text">
              <h3 className="card__title">{eventname}</h3>
              <span className="card__date">{date}</span>
              <span className="card__address">{venue.address}</span>
            </div>
            </div>
            <p className="card__description">{description}</p>
        </div>
    </div>
  )
};

export default EventCard;