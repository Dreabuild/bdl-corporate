import { IoIosArrowForward } from "react-icons/io";

const HelpSection = () => {
  const helpItems = [
    {
      title: "App",
      image: "https://i.ibb.co/KrNr4YD/11.png",
      buttonText: "ডাউনলোড করুন",
      buttonUrl: "https://www.bloodlink.app/",
    },
    {
      title: "Chatbot",
      image: "https://i.ibb.co/9p0nX5r/chat.png",
      buttonText: "ব্যবহার করুন",
      buttonUrl: "https://www.bloodlink.app/",
    },
    {
      title: "Helpline Number",
      image: "https://i.ibb.co/9bpTFyV/help.png",
      buttonText: "কল করুন",
      buttonUrl: "tel:09647186307",
    },
  ];

  return (
    <div className="bg-[#fff] py-10">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        <h2
          className="text-[#000] font-bold text-3xl mb-14 text-center overflow-hidden"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={300}
          data-aos-duration="500"
        >
          আমরা যেভাবে
          <br />
          <span className=" text-[#BF0000]">সাহায্য করি</span>
        </h2>
        <div className="grid lg:md:grid-cols-3 grid-cols-1 gap-y-12 md:gap-y-24 lg:gap-y-0 lg:gap-x-6">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-md p-6  border-[1px] border-[#333] flex flex-col items-center justify-between`}
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={400 + index * 200}
              data-aos-duration="500"
            >
              <h3 className="text-xl font-semibold mb-4 px-6 py-2 border-[1px] border-[#333] bg-[#fff] mt-[-10%]">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 max-h-[300px]"
              />
              <a
                href={item.buttonUrl}
                target="_blank"
                className="bg-[#BF0000] text-white px-8 py-3  flex items-center mb-[-10%]"
              >
                {item.buttonText} <IoIosArrowForward />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
