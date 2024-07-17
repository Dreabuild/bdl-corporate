import { FiPhone } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-[10rem] lg:w-[25rem] h-[10rem] lg:h-[25rem] bg-red-500 blur-3xl opacity-20 rounded-3xl"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center max-w-[1400px] w-full px-4 mx-auto h-[80vh] mt-8 ">
        <div className="text-start w-full">
          <h2
            className="text-[20px] lg:text-[24px] mb-4 text-[#000] "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            রক্তদাতা ও গ্রহীতার মাঝে সেতুবন্ধন
          </h2>
          <p
            className="text-4xl lg:text-[55px] mb-6 text-[#000] leading-[2.5rem] lg:leading-[4.5rem] font-bold "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            আমরা সবাই এক সাথে,
            <br /> রুখে দাড়াই{" "}
            <span className="text-[#BF0000]">থ্যালাসিমিয়ার বিরুদ্ধে</span>
          </p>
          <div
            className="flex items-center gap-x-2 "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="700"
            data-aos-duration="500"
          >
            <a
              href="https://bloodlink.app/"
              target="_blank"
              className="bg-[#BF0000] text-[#fff] text-[18px] lg:text-[20px] px-4 py-2"
            >
              রক্তের আবেদন
            </a>
            <a
              href="tel:09647186307"
              className="bg-[#F9E6E6] text-[#BF0000] text-[20px] lg:text-[24px] px-4 py-3"
            >
              <FiPhone />
            </a>
          </div>
        </div>

        <div
          className="flex justify-center my-6 md:mt-0 "
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="w-full max-w-4xl px-0 lg:px-6 py-6 rounded">
            <div
              className="relative"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5L_ye29MDkQ?si=L822Q2KMmGwAjZPn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
