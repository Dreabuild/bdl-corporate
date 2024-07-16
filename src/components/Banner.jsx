import { FiPhone } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="">
            <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-red-500 blur-3xl opacity-[0.2] border-radius-3xl"></div>
            <div className="grid lg:md:grid-cols-2 grid-cols-1 justify-between items-center max-w-[1500px] w-full px-4 mx-auto h-[80vh] mt-8">
                <div className="text-start bg-none w-full nowrap">
                    <h2 className="lg:md:text-[24px] text-[20px]  mb-4 text-[#000]">রক্তদাতা ও গ্রহীতার মাঝে সেতুবন্ধন</h2>
                    <p className="lg:md:text-[55px] text-4xl mb-6 text-[#000] leading-[4.5rem] text-nowrap font-bold">আমরা সবাই এক সাথে,
                        <br /> রুখে দাড়াই <span className="text-[#BF0000] text-nowrap">থ্যালাসিমিয়ার বিরুদ্ধে</span></p>
                    <div className="flex items-center gap-x-2">
                        <button className="bg-[#BF0000] text-[#fff] lg:md:text-[20px] text-[18px] px-4 py-2">রক্তের আবেদন</button>
                        <button className="bg-[#F9E6E6] text-[#BF0000] lg:md:text-[24px] text-[20px] px-4 py-3 "><FiPhone /></button>
                        </div>
                   
                </div>

                <div className="">
                    <div className="w-full p-6 rounded ">
                        <iframe width="620" height="350" src="https://www.youtube.com/embed/5L_ye29MDkQ?si=L822Q2KMmGwAjZPn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
