
import { useContext } from 'react/cjs/react.development';
import {ReactComponent as LocationIcon} from '../../assets/iconmonstr-location-2.svg'
import { MapContext } from '../../context/map.context';

import './map-icon.styles.scss';

const MapIcon = () =>{

  const {isMapOpen, setIsMapOpen} = useContext(MapContext);
  const toggleIsMapOpen = () => {
    setIsMapOpen(!isMapOpen);
  };
  return(
    <div className='location-icon-container' onClick={toggleIsMapOpen}>
      <LocationIcon className='location-icon'/>
    </div>
  )
};
export default MapIcon;