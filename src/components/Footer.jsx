import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        <div
          className="flex flex-col items-center lg:items-start mb-6 lg:mb-0"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={300}
          data-aos-duration="500"
        >
          <a href="/">
            <img src="https://i.ibb.co/QHk5yfZ/Home.png" alt="Home" />
          </a>
          <div className="flex space-x-2">
            <a href="https://bloodlink.app/" target="_blank">
              <img
                src="https://i.ibb.co/FwSf5Pt/googleplay.png"
                alt="App"
                width={130}
                className="my-2"
              />
            </a>
            <a href="https://bloodlink.app/" target="_blank">
              <img
                src="https://i.ibb.co/ZHpmJ6c/appstore.png"
                alt="App"
                width={130}
                className="my-2"
              />
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/thebloodlinkapp"
              target="_blank"
              className="text-2xl hover:scale-110 transition-all"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@bloodlinkapp"
              target="_blank"
              className="text-2xl hover:scale-110 transition-all"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row justify-between w-full lg:w-2/4"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={400}
          data-aos-duration="500"
        >
          <div className="text-center lg:text-left lg:mr-8">
            <h2 className="text-2xl font-semibold mb-8 text-[#EBB0B0]">
              Additional Resource
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href=" https://blorg.co/book"
                  className="hover:underline transition-all hover:text-[#EBB0B0] "
                  target="_blank"
                >
                  Comic Ebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.18265.help/"
                  className="hover:underline transition-all hover:text-[#EBB0B0] "
                  target="_blank"
                >
                  Blood Donor Database of Dhaka
                </a>
              </li>
              <li>
                <a
                  href="https://blorg.co/fund"
                  target="_blank"
                  className="hover:underline transition-all hover:text-[#EBB0B0] "
                >
                  The BloodLink Fund
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-8 text-[#EBB0B0]">
              Contact
            </h2>
            <p className="space-y-2">
              <a
                href="mailto:contact@bloodlink.app"
                className="hover:underline transition-all hover:text-[#EBB0B0] "
                target="_blank"
              >
                contact@bloodlink.app
              </a>
            </p>
            <p className="w-60  mx-auto mt-2">
              14th Floor, iDEA, BCC, ICT Tower, Agargaon, Dhaka - 1207
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] text-center py-4 mt-8 border-t border-gray-700">
        <p
          className="text-lg text-[#A6A6A6]"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay={500}
          data-aos-duration="500"
        >
          <a
            href="https://blorg.co/privacy-policy"
            className="hover:underline transition-all hover:text-[#EBB0B0] "
            target="_blank"
          >
            {" "}
            Privacy Policy
          </a>{" "}
          &middot; Copyright &copy;2024 | BloodLink Foundation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
