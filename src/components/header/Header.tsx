import { useState } from "react"

const Header = () => {
    const [nav, setNav] = useState<boolean>(false)

    return (
        <>
            <div className="bg-zinc-200 w-full h-20 flex items-center justify-between">
                <h1 className="font-dancing text-5xl font-extrabold">Tastebite</h1>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-12">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 ms-4 lg:ms-7">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    <svg onClick={() => setNav(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 ms-4 lg:hidden">
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {nav &&
                <div className="bg-yellow-50 w-full h-auto">
                    <ul className="flex flex-col items-start text-base font-medium">
                        <li>Home Page</li>
                        <li>Recipe Page</li>
                        <li>Pages</li>
                        <li>Elements</li>
                        <li>Buy</li>
                    </ul>
                </div>}
        </>
    )
}

export default Header
