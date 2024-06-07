import axios from "axios"
import { useEffect, useState } from "react"

type latestRecipes = {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
}

const LatestRecipes = () => {

    const [latestRecipes, setLatestRecipes] = useState<latestRecipes[]>([])

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
        axios.get(url).then(response => {
            setLatestRecipes(response.data.meals)
        })
    }, [])
    return (
        <div className="w-full">
            <h5 className="text-4xl font-semibold font-playfair-display mt-20">Latest Recipes</h5>
            <div className="w-full mt-6 flex flex-wrap justify-between">
                {
                    latestRecipes.map(data => {
                        return (
                            <div className="w-[49%] sm:w-[40%] md:w-[30%] lg:w-[24%] h-[13rem] lg:h-[15rem] xl:w-[22%] rounded-md overflow-hidden group mt-8">
                                <div className="w-full h-[90%] bg-slate-300 overflow-hidden rounded-md">
                                    <img className="w-full h-full group-hover:scale-110 transition duration-300" src={data.strMealThumb} alt="meals" />
                                </div>
                                <p className="font-semibold group-hover:text-[#ff642f] transition duration-300">{data.strMeal}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LatestRecipes
