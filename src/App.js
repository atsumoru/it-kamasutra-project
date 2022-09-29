import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialoguesContainer from './Components/Dialogues/DialoguesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogues/*' element={<DialoguesContainer />} />
            <Route path='/profile/*:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/users/*' element={<UsersContainer/>} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
