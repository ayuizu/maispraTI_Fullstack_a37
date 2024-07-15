import TimerComponent from './components/LifeCycle'
import UserProfile from './components/LifeCycleAPI'
import News from './components/Desafio1'

import './App.css'
import NewsUpdater from './components/NewsUpdater'


function App() {


  return (
    <>
      <TimerComponent />
      <hr />
      <UserProfile />
      <hr />
      <News />
      <hr />
      <NewsUpdater />
    </>
  )
}

export default App
