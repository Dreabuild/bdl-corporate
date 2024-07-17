const DownloadApp = () => {
  return (
    <div className="mt-8">
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-between items-center max-w-[1400px] w-full px-4 mx-auto h-auto lg:h-[80vh]">
        <div className="text-start nowrap col-span-1 w-[300px] ">
          <h2
            className="lg:text-[40px] text-[32px] font-bold mb-4 text-[#BF0000]"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay={300}
            data-aos-duration="500"
          >
            ডাউনলোড ব্লাডলিংক অ্যাপ
          </h2>
          <div className="lg:block flex items-center space-x-2 lg:space-x-0">
            <a
              href="https://bloodlink.app/"
              target="_blank"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={400}
              data-aos-duration="500"
            >
              <img
                src="https://i.ibb.co/FwSf5Pt/googleplay.png"
                alt="App"
                width={160}
                className="lg:my-2"
              />
            </a>
            <a
              href="https://bloodlink.app/"
              target="_blank"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={500}
              data-aos-duration="500"
            >
              <img
                src="https://i.ibb.co/ZHpmJ6c/appstore.png"
                alt="App"
                width={160}
                className="lg:my-2"
              />
            </a>
          </div>
        </div>
        <div
          className="col-span-2 lg:absolute lg:right-0 flex justify-center -ml-10 lg:ml-0 "
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={500}
          data-aos-duration="500"
        >
          <img
            src="https://i.ibb.co/xJSwSfF/l-An-ZNA8a-JFip-EIFdw-G37-transformed.png"
            alt="App"
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
