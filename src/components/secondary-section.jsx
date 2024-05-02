import company1 from "../assets/icons/icon-1.png";
import company2 from "../assets/icons/icon-2.png";
import company3 from "../assets/icons/icon-3.png";
import company4 from "../assets/icons/icon-4.png";
import company5 from "../assets/icons/icon-5.png";
import company6 from "../assets/icons/icon-6.png";

export const SecondarySection = () => {
  return (
    <section className="bg-[#F3F3F1] w-full primary_container ">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="text-[#000000] lg:text-[48px] text-[35px] font-medium font-outFit">
            Prateek Prasoon{" "}
          </h1>
          <div className="text-[19px] font-normal mt-4 lg:mt-10 flex flex-col gap-y-6 text-[#4E4E4E] font-openSans">
            <p>
              With over ten years of practical experience, I am a 9X CERTIFIED
              Salesforce specialist who has mentored and coached over 200
              organizations in their transformative process by customizing
              Salesforce instances to meet their specific needs.
            </p>
            <p>
              I&apos;m here to help, whether you need a Salesforce developer,
              consultant, administrator, or architect. I promise to provide
              excellent work on schedule. Isolation and specialization are out
              of style in the current digital world. Together, taking in
              progress is the new standard.
            </p>
            <p>
              Salesforce is more than just a platform; it&apos;s the hub where
              all the pieces come together to make sure your company succeeds.
              Together, let&apos;s set out on this trip to the prosperous future
              of your company.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-[#F9FEFF] w-[458px] mt-10 lg:-mt-10 rounded-t-[17px] md:rounded-t-none rounded-b-[17px] h-[400px] md:h-[460px] flex items-center justify-center md:px-12 px-8">
            <h5 className=" text-3xl md:text-[38px] md:leading-[49.4px] font-outFit font-semibold">
              “I, who doesn&apos;t just shape careers; shapes destinies,
              inspiring individuals to dream big and reach beyond their
              perceived limitations.”
            </h5>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 md:grid-cols-6 mt-10 ">
        <img
          src={company1}
          alt=""
          className="object-contain size-20 sm:size-24 lg:size-28"
        />
        <img
          src={company2}
          alt=""
          className="object-contain size-20 sm:size-24 lg:size-28"
        />
        <img
          src={company3}
          alt=""
          className="object-contain size-20 sm:size-24 lg:size-28"
        />
        <img
          src={company4}
          alt=""
          className="object-contain size-20 sm:size-24 lg:size-28"
        />
        <img
          src={company5}
          alt=""
          className="object-contain size-20 lg:size-28"
        />
        <img
          src={company6}
          alt=""
          className="object-contain size-20 lg:size-28"
        />
      </div>
    </section>
  );
};
