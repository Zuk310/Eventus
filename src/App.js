import { Routes , Route} from 'react-router-dom';

import './App.css';

import Navigation from './routes/navigation/navigation.component';
import SearchPage from './routes/search/search.component';
import EventPage from './routes/event-page/event-page.component';
import ArtistPage from './routes/artist/artist-page.component';

function App() { 
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<SearchPage/>}/>
      <Route path='/event' element={<EventPage/>}/>
      <Route path='/artist' element={<ArtistPage/>}/>
    </Route>
  </Routes>
  );
}

export default App;
