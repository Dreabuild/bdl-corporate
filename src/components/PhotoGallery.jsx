const PhotoGallery = () => {
  const helpItems = [
    {
      title: "ভিডিও সিরিজ শুটিং",
      image: "https://i.ibb.co/xCPGRJg/image-1.png",
      link: "#",
    },
    {
      title: "কমিক বই",
      image: " https://i.ibb.co/6YnCWK7/image-2.png",
      link: "#",
    },
    {
      title: "দিনব্যাপী কর্মশালা",
      image: "https://i.ibb.co/Yj2bTFK/image-3.png",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#fff] py-10">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <h2
          className="text-[#000] font-bold text-3xl mb-14 text-center"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={300}
          data-aos-duration="500"
        >
          ফটো <span className=" text-[#BF0000]"> গ্যালারী</span>
        </h2>
        <div className="grid lg:md:grid-cols-3 grid-cols-1 gap-6">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl flex cursor-pointer items-center justify-end`}
              style={{
                backgroundImage: `url(${item.image})`,
                height: "240px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={400 + index * 200}
              data-aos-duration="500"
            >
              <div className="w-1/2 h-full bg-gray-gradient flex items-center justify-center rounded-3xl">
                <h3 className="text-white text-3xl font-semibold w-[60px]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
