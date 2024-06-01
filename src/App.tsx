import Header from "./components/header/Header"
import Main from "./components/header/Main"

function App() {

  return (
    <div className='bg-white max-w-screen h-full flex items-center justify-center overflow-y-scroll'>
      <div className="max-w-[95%] h-screen lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
