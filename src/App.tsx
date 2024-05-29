import Header from "./components/header/Header"

function App() {

  return (
    <div className='bg-white max-w-screen h-full flex items-center justify-center overflow-hidden'>
      <div className="max-w-[95%] min-h-screen lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]">
        <Header />
      </div>
    </div>
  )
}

export default App
