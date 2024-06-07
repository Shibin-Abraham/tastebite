import axios from "axios"
import { useEffect, useState } from "react"

const HandPicked = () => {
    type handPickedMeal = {
        idMeal: string,
        strMeal: string,
        strMealThumb: string
    }
    const [handPicked, setHandPicked] = useState<handPickedMeal[]>([])

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=g"
        axios.get(url).then(response => {
            console.log(response.data.meals)
            setHandPicked(response.data.meals)
        })
    }, [])
    return (
        <div className="w-full h-auto flex flex-col items-center">
            <h5 className="w-[457px] sm:w-full text-2xl font-playfair-display font-semibold mt-16 md:text-6xl">Hand-Picked Collections</h5>
            <div className="w-[457px] mt-6 sm:w-full md:flex md:flex-wrap justify-between">
                {
                    handPicked.map((data, index) => {
                        return (
                            <div key={index} className="w-full h-[25rem] md:w-[22rem] lg:w-[28rem] md:h-[26rem] lg:h-[28rem] xl:w-[32rem] xl:ml-8 rounded-md
                             border-[1px] border-slate-300 flex flex-col items-center mt-4 md:mt-8 overflow-hidden">
                                <img className="w-full h-[268px] object-cover" src={data.strMealThumb} alt="img" />
                                <h5 className="text-4xl font-playfair-display font-semibold m-auto">{data.strMeal}</h5>
                                <div className="w-full h-full flex items-center justify-end">
                                    <span className="w-[8rem] border-[1px] border-black rounded-sm mr-6">
                                        <p className="text-center font-medium">156 Recipes</p>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default HandPicked
