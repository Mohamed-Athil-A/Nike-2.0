import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import FooterList from "../components/FooterList";
import SocialMedia from "../components/SocialMedia";
import { socialMedia } from "../contants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 flex-wrap max-lg:flex-col pb-20 max-sm:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="Logo"
              width={130}
              height={29}
              className="hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-transparent"
            />
          </a>
          <p className="text-white-400 sm:max-w-sm leading-7 mt-6 font-montserrat text-base ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-5 flex items-center gap-5">
            {socialMedia.map((social) => (
              <SocialMedia key={social.src} {...social} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap lg:gap-10 gap-20 ">
          <FooterList />
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col ">
        <div className="flex gap-2 cursor-pointer max-sm:justify-center">
          <img
            src={copyrightSign}
            alt=""
            width={20}
            height={20}
            className="rounded-full"
          />

          <p className="text-white-400 font-montserrat">
            Copyright. All rights reserved.
          </p>
        </div>
        <div className="cursor-pointer max-sm:flex max-sm:justify-center">
          <p className="text-white-400 font-montserrat">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
