import Header from "./components/header/Header"
import Main from "./components/header/Main"
import Category from "./components/categories/Category"
import Subscription from "./components/subscription/Subscription"
import HandPicked from "./components/Specialsection/HandPicked"
import LatestRecipes from "./components/Specialsection/LatestRecipes"
import Footer from "./components/footer/Footer"
function App() {

  return (
    <div className='bg-white max-w-screen h-full flex flex-col items-center justify-center overflow-y-scroll'>
      <div className="max-w-[95%] h-screen lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]">
        <Header />
        <Main />
        <Category />
        <Subscription />
        <HandPicked />
        <LatestRecipes />
        <Footer />
      </div>
    </div>
  )
}

export default App
