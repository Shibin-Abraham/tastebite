import Header from "./components/header/Header"

function App() {

  return (
    <div className='bg-slate-200 w-screen h-screen flex items-center justify-center overflow-y-scroll'>
      <div className="bg-blue-200 w-11/12 min-h-screen">
        <Header />
      </div>
    </div>
  )
}

export default App
