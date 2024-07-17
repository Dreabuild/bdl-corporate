const Media = () => {
  const logos = [
    {
      src: "https://i.ibb.co/Rz9znxG/62255c3f2e193f43b5ef111d5b0958a9-png.png",
      alt: "Logo 1",
    },
    {
      src: "https://i.ibb.co/7vxYMhr/d4e76c9309891a6985eee992c05fde06-png.png",
      alt: "Logo 2",
    },
    {
      src: "https://i.ibb.co/hsVJHbS/cb3513db95083eb4a65530a3b25f2cf3-png.png",
      alt: "Logo 3",
    },
    {
      src: "https://i.ibb.co/m52mZkb/d91b81049a312fb7f3076127e1a4f941-png.png",
      alt: "Logo 4",
    },
    {
      src: "https://i.ibb.co/2F4bQhg/c68b29a48f311724fe8fdc36b500d50f-png.png",
      alt: "Logo 5",
    },
    // Add other logos similarly
  ];
  return (
    <div className="w-full bg-[#FEF9F9]">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <h2
          className="text-center font-bold text-2xl my-4 lg:my-12 text-[32px]  text-[#000] "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={300}
          data-aos-duration="500"
        >
          <span className="text-[#BF0000]">মিডিয়া</span>
        </h2>
        <div className="flex overflow-x-auto  space-x-4 justify-between gap-x-4 items-center lg:mt-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={400 + index * 200}
              data-aos-duration="500"
            >
              <img src={logo.src} alt={logo.alt} className=" mx-2" />
            </div>
          ))}
        </div>
        <div
          className="mt-10 lg:mt-20 flex justify-center"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <div className="w-full max-w-4xl px-0 lg:px-6 py-6 rounded">
            <div
              className="relative"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/BWwdIusFIXE?si=C4Gfgpl8tFL6olL5"
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

export default Media;
