import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
    const [delicious, setDelicious] = useState([])
    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        axios.get(url).then((response) => {
            setDelicious(response.data.meals)
        })
    }, [])
    return (
        <div className="w-full h-auto mt-[5rem] sm:mt-[10rem] md:mt-[20rem] lg:mt-[5rem]">
            <h5 className="text-[28px] font-playfair-display font-semibold">Super Delicious</h5>
            <div className="w-full min-h-[80rem] md:flex md:items-center md:justify-between md:flex-wrap">
                {
                    delicious.map((data) => {
                        return (
                            <div className="mt-4 w-full h-[25.5rem] md:w-[30%] md:h-[20rem] md:mr-1 group">
                                <div className="w-full h-[80%] flex items-center justify-center overflow-hidden rounded-lg">
                                    <img className="w-full h-full rounded-lg object-cover group-hover:scale-110 duration-700 transition-all" src={data.strMealThumb} alt="" />
                                </div>
                                <div className="w-full mt-2">
                                    <div className="flex">
                                        <svg xml-1ns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff642f" className="size-4">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xml-1ns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff642f" className="size-4 ml-1">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xml-1ns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff642f" className="size-4 ml-1">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xml-1ns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff642f" className="size-4 ml-1">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xml-1ns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff642f" className="size-4 ml-1">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="mt-1 text-lg font-semibold group-hover:text-[#ff642f]">{data.strMeal}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Main
