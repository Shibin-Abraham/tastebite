import Header from "./components/header/Header"
import Main from "./components/header/Main"
import Category from "./components/categories/Category"
import Subscription from "./components/subscription/Subscription"
import HandPicked from "./components/Specialsection/HandPicked"
import LatestRecipes from "./components/Specialsection/LatestRecipes"
import Footer from "./components/footer/Footer"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

function App() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [])

  return (
    <div ref={ref} className='bg-white max-w-screen h-full flex flex-col items-center justify-center overflow-y-scroll'>
      <motion.div variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="max-w-[95%] h-screen lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]">
        <Header />
        <Main />
        <Category />
        <Subscription />
        <HandPicked />
        <LatestRecipes />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
