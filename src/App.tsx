import Header from "./components/header/Header"
import Hero from "./components/header/Hero"

function App() {

  return (
    <div className='bg-slate-200 w-screen h-screen flex items-center justify-center overflow-y-scroll'>
      <div className="w-11/12 min-h-screen transition ease-in-out delay-150">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App
