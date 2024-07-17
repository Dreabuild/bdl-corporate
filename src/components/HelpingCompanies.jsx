const HelpingCompanies = () => {
  const logos = [
    { src: "https://i.ibb.co/N18qyXk/1.png", alt: "Logo 1" },
    { src: "https://i.ibb.co/yPsr8zd/2.png", alt: "Logo 2" },
    { src: "https://i.ibb.co/JntL9Pp/3.png", alt: "Logo 3" },
    { src: "https://i.ibb.co/d6LzPDL/7.png", alt: "Logo 3" },
    { src: "https://i.ibb.co/T0200Td/8.png", alt: "Logo 3" },
    { src: "https://i.ibb.co/FgJk6tr/9.png", alt: "Logo 3" },
    // Add other logos similarly
  ];
  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 py-6 mt-[30%] md:mt-[25%] lg:mt-0">
      <h2
        className="text-center font-bold text-2xl lg:mb-10 mb-0 lg:md:text-[32px] text-[24px] text-[#000] "
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        সহযোগী <span className="text-[#BF0000]">সংস্থা</span>
      </h2>
      <div
        className="flex overflow-x-auto space-x-4 justify-center gap-x-4 items-center "
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="500"
        data-aos-duration="500"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay={500 + index * 200}
            data-aos-duration="500"
          >
            <img src={logo.src} alt={logo.alt} className=" mx-2" />
          </div>
        ))}
      </div>

      <div
        className="mt-10 flex justify-center"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="700"
        data-aos-duration="500"
      >
        <div className="w-full max-w-4xl px-0 lg:px-6 py-6 rounded">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/hwuqArMKUco?si=JkPfVNe2bctQKPv0"
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
  );
};

export default HelpingCompanies;
