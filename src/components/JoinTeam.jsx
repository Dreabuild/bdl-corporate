import { IoIosArrowForward } from "react-icons/io";

const JoinTeam = () => {
  const people = [
    {
      src: "https://i.ibb.co/dcTWThW/71b95c988b6ce602679742895b462148.webp",
      alt: "Tamzid Rahman",
    },
    {
      src: "https://i.ibb.co/c1LXghY/3e0e1a0b84a3c4361e2ee49279d9a493.webp",
      alt: "Logo 3",
    },
    {
      src: "https://i.ibb.co/30JSkDZ/f9b911fd4e6cfdbb6c18ef92981f075d.jpg",
      alt: "Logo 4",
    },
    {
      src: "https://i.ibb.co/qymjrzN/5cade34d40dec35399c81a2835d72e68.webp",
      alt: "Logo 5",
    },
    {
      src: "https://i.ibb.co/hmLDjYP/f4b37c28a7dffa800449fd61b8adc53c.webp",
      alt: "Logo 6",
    },
    {
      src: "https://i.ibb.co/8K2yPHs/78322222432b13f65d6b5aac2b5ce11e.webp",
      alt: "Logo 7",
    },
    // Add other logos similarly
  ];

  return (
    <div
      className="relative bg-[#1E1E1E] lg:py-20 py-10 my-10"
      style={{
        backgroundImage: `url(https://i.ibb.co/cJMfgKj/blooddropdoodle-1.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 flex items-center flex-col">
        <div className="space-y-8">
          <h1
            className="font-semibold text-3xl text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay={300}
            data-aos-duration="500"
          >
            আমাদের টিম এ যোগ দিন
          </h1>
          <div className="flex -space-x-4 items-center justify-center">
            {people.map((logo, index) => (
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-12 h-12 border-2 border-white rounded-full object-contain cursor-pointer"
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay={400 + index * 50}
                data-aos-duration="500"
              />
            ))}
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSeeOFR4-5JlyipdLYf30lcypPDdO2iF22-aT_ylTy-5bcGw/viewform?usp=sf_link"
            target="_blank"
            className="bg-transparent border border-white space-x-2 text-white px-8 py-3  flex items-center mx-auto w-min text-nowrap"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay={500}
            data-aos-duration="500"
          >
            <span>যোগ দিন </span>
            <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
