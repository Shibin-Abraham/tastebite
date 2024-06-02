import { useState } from "react"

const Header = () => {
    const [nav, setNav] = useState<boolean>(false)

    return (
        <>
            <div className="w-full h-20 flex items-center justify-between">
                <img className="w-[110px] h-[34px] lg:w-[161px] lg:h-[50px]" src="https://fabrx.co/preview/tastebite/assets/images/brands/brand4.svg" />
                <nav className="hidden lg:block lg:w-2/4 h-full">
                    <ul className="flex items-center justify-evenly text-base font-medium w-full h-full">
                        <li>Home Page</li>
                        <li>Recipe Page</li>
                        <li>Pages</li>
                        <li>Elements</li>
                        <li>Buy</li>
                    </ul>
                </nav>
                <div className="h-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 ms-4 lg:ms-7">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    <svg onClick={() => setNav((pre) => !pre)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 ms-4 lg:hidden">
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className={`block w-full h-auto lg:hidden ${!nav && 'opacity-0 delay-300'}`}>
                <ul className="flex flex-col items-start text-base font-medium">
                    <li className="w-full mt-3 mb-3">Home Page</li>
                    <li className="w-full mt-3 mb-3">Recipe Page</li>
                    <li className="w-full mt-3 mb-3">Pages</li>
                    <li className="w-full mt-3 mb-3">Elements</li>
                    <li className="w-full mt-3 mb-3">Buy</li>
                </ul>
            </div>
            <div className={`lg:flex justify-center lg:mt-[5rem] w-full h-[18rem] sm:h-96 transition ease-in-out duration-500 lg:h-[410px] xl:h-[30rem]  ${!nav && '-translate-y-60 lg:-translate-y-0'}`}>
                <img className="w-full h-full lg:mt-1 rounded-t-2xl  md:h-[522px] lg:w-[546px] lg:h-[410px] lg:rounded-l-2xl lg:rounded-tr-none xl:w-[59%] xl:h-full" src="https://fabrx.co/preview/tastebite/assets/images/menus/menu1.jpg" alt="" />
                <div className="w-full h-full rounded-b-2xl bg-[#e4f1ff] lg:w-[50%] lg:mt-1 lg:rounded-r-2xl lg:rounded-bl-none lg:flex lg:flex-col items-center justify-center">
                    <div className="ml-6 pt-6 lg:pt-0">
                        <strong>
                            <svg className="inline" data-name="feather-icon/trending-up" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <rect data-name="Bounding Box" width="20" height="20" fill="rgba(255,255,255,0)"></rect>
                                <path d="M.244,11.423a.834.834,0,0,1,0-1.178L6.494,3.994a.834.834,0,0,1,1.178,0L11.25,7.571l5.9-5.9H14.167a.833.833,0,1,1,0-1.667h5A.833.833,0,0,1,20,.833v5a.834.834,0,0,1-1.667,0V2.845L11.839,9.339a.834.834,0,0,1-1.179,0L7.083,5.761l-5.66,5.661a.834.834,0,0,1-1.179,0Z"
                                    transform="translate(0 4.167)" fill="#ff642f"></path>
                            </svg>
                            <span className="ml-1 font-medium text-[11px] lg:text-[14px]">85% would make this again</span>
                        </strong>
                        <h4 className="my-4 text-[30px] font-playfair-display font-bold lg:text-[46px]">Mighty Super Cheesecake</h4>
                        <p className="lg:text-[20px] xl:text-[22px]">Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</p>
                        <div className="w-full h-10 mt-12 flex items-end justify-end">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-5 hover:bg-[#ff642f] group-hover:first:fill-[#fff] group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.5" viewBox="0 0 13.333 13.333">
                                    <path className="fill-[#ff642f] group-hover:fill-[#fff]" d="M6.077,13.089a.833.833,0,0,1,0-1.178L10.488,7.5H.833a.833.833,0,0,1,0-1.667h9.655L6.077,1.423A.834.834,0,0,1,7.256.244l5.829,5.83a.833.833,0,0,1,0,1.186L7.256,13.089a.834.834,0,0,1-1.179,0Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
