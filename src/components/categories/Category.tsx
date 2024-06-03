import axios from "axios"
import { useEffect, useState } from "react"

type category = {
    strCategory: string,
    strCategoryThumb: string,
}
const Category = () => {
    const [categories, setCategories] = useState<category[]>([])

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
        axios.get(url).then(response => {
            setCategories(response.data.categories)
        })
    }, [setCategories])

    return (
        <div className="mt-5 w-full">
            <h5 className="text-[28px] font-playfair-display font-semibold lg:text-[34px]">Popular Categories</h5>
            <div className="w-full mt-6 flex flex-row items-center justify-between flex-wrap">
                {
                    categories.map((data, index) => {

                        return (
                            <>
                                {
                                    index < 6 ? <div className="flex flex-col items-center justify-center group">
                                        <div className="w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem] lg:w-[11rem] lg:h-[11rem] bg-slate-50 rounded-full flex items-center justify-center overflow-hidden">
                                            <img className="w-full h-auto object-cover scale-125 group-hover:scale-150 transition duration-1000" src={data.strCategoryThumb} alt="category image" />
                                        </div>
                                        <p className="text-base font-semibold">{data.strCategory}</p>
                                    </div> : null
                                }

                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Category
