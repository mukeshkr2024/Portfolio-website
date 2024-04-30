import codingCommando from "../assets/coding-commando.png";
// import salesforceCup from "../assets/salesforce-cup.png";
import salesforceParnter from "../assets/salesforce-partner.png";
import womenInTech from "../assets/women-in-tech.png";
import youthBihar from "../assets/youth-bihar.png";
import mcSquare from "../assets/mc-square.png";
import amityLaunch from "../assets/amity.png";

export const CompanySection = () => {
  return (
    <section className="primary_container !bg-[#F9FEFF]">
      <div className="flex w-full flex-col lg:flex-row gap-y-8">
        <div className="flex-1">
          <div className="max-w-2xl">
            <h5 className="lg:text-[50px] text-4xl md:text-5xl font-semibold font-outFit">
              About CloudPrism Solutions{" "}
            </h5>
            <div className="md:mt-10 mt-6 text-[20px] flex flex-col gap-y-4 md:gap-y-6 text-[#4E4E4E] font-openSans">
              <p>
                Cloudprism stands out from the crowd of software startups.
                Located in the heart of Patna City, India, we&apos;ve grown by
                cultivating a vibrant community and delivering meaningfull
                impact. With over 50 expert developers, we specialize in
                Salesforce and Ful stack solutions,ensure custom results that
                fit your needs and timeline.
              </p>
              <p>
                Our strategy emphasizes sincere communication, integrity, and
                openness. As a Salesforce Ridge Partner, we offer complete IT
                solutions and Salesforce knowledge, enabling companies to
                prosper in the digital environment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <div className="w-full h-full items-center flex justify-end">
            <a href="https://cloudprism.in/" target="_blank">
              <img src={salesforceParnter} alt="" className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-8 lg:flex-row mt-14 md:mt-10">
        <div className="flex-1 ">
          <div className="max-w-2xl">
            <h5 className="lg:text-[50px] text-4xl md:text-5xl font-semibold font-outFit">
              About Coding Commando{" "}
            </h5>
            <div className="md:mt-10 mt-6 text-[20px]  flex flex-col gap-y-4 md:gap-y-6 text-[#4E4E4E] font-openSans">
              <p>
                Coding Commando, born from CloudPrism&apos;s challenges, is a
                pioneering platform bridging the gap in Salesforce talent.
                Founded by Prateek Prasoon, it empowers youth in small-town
                India with in-demand coding skills and Salesforce expertise. Our
                affordable, quality education addresses societal gaps in tech
                awareness, sparking a revolution within Bihar and beyond.
              </p>
              <p>
                With a global reach, we foster sustainable career opportunities
                in the ever-thriving Salesforce field. Through campaigns and
                events, we ignite curiosity and equip students with valuable
                skills, democratizing tech education. More than a learning
                platform, Coding Commando is a movement empowering youth and
                businesses, bridging aspirations with opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-2">
          <div className="w-full h-full items-center flex justify-end">
            <a href="https://codingcommando.in/" target="_blank">
              <img src={codingCommando} alt="" className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center md:mt-20 mt-14">
        <h4 className="md:text-[50px] text-4xl text-[#181818] font-semibold font-outFit">
          Educating the young India
        </h4>
        <span className="md:text-[38px] text-3xl font-semibold font-outFit text-[#9F9F9F]">
          {" "}
          Join me...
        </span>
      </div>

      <div className="md:mt-16 mt-10 flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-14  w-full ">
        <div className="w-[260px]">
          <div className="w-full h-[175px] rounded-[14px]">
            <img
              src={womenInTech}
              alt="women-in-tech"
              className="object-contain rounded-[14px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-4">
            <h3 className="text-lg text-[#181818] font-bold font-openSans">
              Women In Tech{" "}
            </h3>
            <p className="text-[15px] text-[#4E4E4E] font-openSans">
              WIT was a technical event hosted by the founders Neetu Bansal and
              Kyati Mehta for the salesforce community regarding empowering the
              women in tech souls. I attended, made connections, and discussed
              Salesforce.{" "}
            </p>
          </div>
        </div>
        <div className="w-[260px]">
          <div className="w-full h-[175px] rounded-[14px]">
            <img
              src={youthBihar}
              alt="Youth Bihar"
              className="object-contain rounded-[14px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-4">
            <h3 className="text-lg text-[#181818] font-bold font-openSans">
              Youth DreamIn, Bihar{" "}
            </h3>
            <p className="text-[15px] text-[#4E4E4E] font-openSans">
              Youth DreamIn,a CloudPrism Solutions initiative in Bihar&apos;s
              capital, aimed to raise Salesforce awareness among youth on
              International Youth Day with Patna Salesforce Community guidance.{" "}
            </p>
          </div>
        </div>
        <div className="w-[260px]">
          <div className="w-full h-[175px] rounded-[14px]">
            <img
              src={mcSquare}
              alt="MC Square"
              className="object-contain rounded-[14px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-4">
            <h3 className="text-lg text-[#181818] font-bold font-openSans">
              MC2 - Hyderabad Edition{" "}
            </h3>
            <p className="text-[15px] text-[#4E4E4E] font-openSans">
              Sponsored MC2 - Hyderabad Edition was pivotal. Insights into
              Salesforce Marketing Cloud, networking, and showcasing Coding
              Commando made it invaluable. Grateful for the enriching
              experience!
            </p>
          </div>
        </div>
        <div className="w-[260px]">
          <div className="w-full h-[175px]  rounded-[14px]">
            <img
              src={amityLaunch}
              alt="Amity"
              className="object-contain rounded-[14px]"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-4">
            <h3 className="text-lg text-[#181818] font-bold font-openSans">
              Amity- Launching E-Learning{" "}
            </h3>
            <p className="text-[15px] text-[#4E4E4E] font-openSans">
              Had the privilege to introduce the Salesforce E-Learning platform
              in Bihar at Amity Patna. Empowering students with education,
              career insights, and industry mentorship for holistic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
