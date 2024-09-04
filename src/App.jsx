import Body from "./components/Body"
import bg from './assets/bg.jpg';

const App = () => {
  return (
    <>
    <div className="relative min-h-screen bg-cover  bg-center" style={{ backgroundImage: `url(${bg})` }}>


    <Body />

    </div>


    </>
  )
}

export default App