
import './App.css'
import Footer from './Component/Footer'
import Header from './Component/Header'
import HeroSection from './Component/HeroSection'
import TaskBoard from './Component/TaskBoard/TaskBoard'


function App() {

  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard/>
      </div>
      <Footer/>
    </>
  )
}

export default App
