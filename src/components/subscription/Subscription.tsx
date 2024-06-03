
const Subscription = () => {
    return (
        <div className="w-full h-[28rem] sm:h-[34rem] bg-[#ffd8ca] mt-8 flex flex-col items-center justify-center text-center">
            <div className="w-full sm:w-[35rem] flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl sm:text-7xl font-semibold font-playfair-display mb-4">Deliciousness to your inbox</h2>
                <p className="text-lg md:text-xl">Enjoy weekly hand picked recipes <br />and recommendations </p>
                <div className="w-full sm:h-[4rem] sm:relative sm:flex sm:items-center sm:justify-end">
                    <input type="email" className="w-[97%] h-12 sm:h-[4rem] rounded-sm placeholder:pl-4 placeholder-slate-500 mt-4" placeholder="Email Address" />
                    <input type="button" value="JOIN" className="sm:mr-[0.15rem] sm:mt-[0.6rem] sm:absolute sm:top-0 sm:w-[26%] sm:h-[3.8rem] w-[97%] h-12 bg-[#ff642f] hover:bg-[#f1825df7] rounded-sm text-white text-lg font-semibold mt-2" />
                </div>
                <small className="mt-4">By joining our newsletter you agree to our
                    <a href="#" className="block text-xs md:inline group">
                        <u className="decoration-[#ff642f] group-hover:text-[#ff642f]"> Terms and Conditions</u>
                    </a>
                </small>
            </div>
        </div>
    )
}

export default Subscription
