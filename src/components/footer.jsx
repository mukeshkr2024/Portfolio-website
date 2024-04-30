import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import lindeinLogo from "../assets/linkdein.png";
import twitterLogo from "../assets/twitter.png";
import mailLogo from "../assets/icons/mail.png";

export const Footer = () => {
  return (
    <footer className="bg-[#000000] primary_container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div>
          <div className="flex gap-2 md:gap-1.5">
            <a
              className=""
              href="https://www.linkedin.com/in/mrprateek/"
              target="_blank"
            >
              <img src={lindeinLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a className="">
              <img src={facebookLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a
              className=""
              href="https://twitter.com/PrateekPPrasoon"
              target="_blank"
            >
              <img src={twitterLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a
              className=""
              href="https://www.instagram.com/prateekprasoon22/"
              target="_blank"
            >
              <img src={instagramLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a href="mailto:prateek@cloudprism.in">
              <img src={mailLogo} alt="" className="size-8 md:size-9" />
            </a>
          </div>
          <div className="text-white flex flex-col font-outFit font-normal mt-3 gap-1.5">
            <a href="https://cloudprism.in" target="_blank">
              CloudPrism Solution
            </a>
            <a href="https://codingcommando.in">Coding Commando</a>
          </div>
        </div>
        <div className="flex-1 text-base text-white font-outFit font-normal">
          <p>
            Office no: 917, Gera Imperium Alpha, Rajaram Patil Nagar, Vitthal
            Nagar, Kharadi, Pune, Maharashtra 411014 <br /> +91 7906582439
          </p>
        </div>
        <div className="flex-1 text-base text-white font-outFit font-normal">
          <p>
            Shivpuri Rd, South Shivpuri, Shivpuri, Rajbansi Nagar, Patna, Bihar
            800029 <br />
            +91 83295 53438 ,{" "}
            <a href="mailto:prateek@cloudprism.in">prateek@cloudprism.in</a>
          </p>
        </div>
        <div className="flex-1 text-base text-white font-outFit font-normal">
          <p>701 Tillery St, Austin, TX 78702, United States +1 3015639221</p>
        </div>
      </div>
    </footer>
  );
};
