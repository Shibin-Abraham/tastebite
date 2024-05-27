import Header from "./components/header/Header"

function App() {

  return (
    <div className='bg-slate-200 w-screen h-full flex items-center justify-center overflow-y-scroll'>
      <div className="w-[96%] max min-h-screen lg:w-[720px] xl:w-[960px] 2xl:w-[1140px] 3xl:w-[1320px]">
        <Header />
      </div>
    </div>
  )
}

export default App
