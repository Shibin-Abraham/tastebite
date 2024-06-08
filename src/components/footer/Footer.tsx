
const Footer = () => {
    return (
        <div className="w-full h-[30rem] bg-[#f9f9f9] grid grid-cols-1 grid-rows-[2fr 2fr 1fr 1fr 1fr 2fr] mt-[5rem]">
            <div className="flex items-center">
                <img className="w-[130px] h-[45px] lg:w-[161px] lg:h-[60px]" src="https://fabrx.co/preview/tastebite/assets/images/brands/brand4.svg" />
            </div>
            <div>
                <p className="text-slate-500">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
            </div>
            <div className=" bg-stone-500">
                <h6>Tastebite</h6>
                <hr />
            </div>
            <div>
                <h6>Legal</h6>
                <hr />
            </div>
            <div>
                <h6>Follow</h6>
                <hr />
            </div>
            <div>
                footer
            </div>
        </div>
    )
}

export default Footer
