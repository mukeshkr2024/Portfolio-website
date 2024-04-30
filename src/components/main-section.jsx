import sign from "../assets/sign.svg";
import prateekImg from "../assets/prateek-prasoon.png";

export const MainSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="lg:h-[750px] primary_container ">
      <div className=" h-24 w-full flex justify-between items-start">
        <img
          src={sign}
          alt="Prateek Prasoon"
          className="w-[150px] sm:w-[180px] md:w-[230px] lg:w-[300px]"
        />
        <button
          className="bg-[#181818] rounded-[50px]"
          style={{
            boxShadow: "#fff 4px 5px 0 0, #000 4px 5px 0 1.5px",
            transform: "translate(2px, 2px)",
          }}
          onClick={scrollToBottom}
        >
          <p className="lg:text-xl font-openSans text-white font-bold sm:py-2.5 lg:px-10 px-6 py-2 ">
            Reach out
          </p>
        </button>
      </div>

      <div className="flex justify-center h-full items-start md:py-14 py-10">
        <div className="flex flex-col lg:flex-row w-full  h-auto ">
          <div className="flex-1">
            <div className="max-w-lg flex flex-col lg:gap-y-6 gap-y-6">
              <h4 className="lg:text-[53px] text-5xl font-semibold font-outFit lg:leading-[71.4px]">
                Bridging your career gaps with Salesforce, every day.{" "}
              </h4>
              <p className="text-lg font-openSans text-[#4E4E4E]">
                Your primary company needs- increasing income, reducing
                expenses, and maximizing time- is something I understand. In
                addition to teaching business acumen, I&apos;m committed to
                raising Salesforce awareness for long-term success.
              </p>
              <div className="flex w-full items-start gap-6 font-openSans">
                <button
                  className="lg:w-[180px] w-[160px] h-[50px] lg:h-[55px] bg-[#181818] rounded-[50px] text-white font-bold text-base lg:text-xl"
                  style={{
                    boxShadow: "#fff 4px 5px 0 0, #000 4px 5px 0 1.5px",
                    transform: "translate(2px, 2px)",
                  }}
                >
                  <a href="https://cloudprism.in/contact-us" target="_blank">
                    Book a call
                  </a>
                </button>
                <button
                  className="lg:w-[180px] w-[160px] h-[50px] lg:h-[55px] border-2 border-[#04080A] text-base lg:text-xl font-bold rounded-[50px]"
                  style={{
                    boxShadow: "#fff 4px 5px 0 0, #000 4px 5px 0 1.5px",
                    transform: "translate(2px, 2px)",
                  }}
                >
                  <a href="https://codingcommando.in/courses" target="_blank">
                    Our Courses
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
            <img
              src={prateekImg}
              alt="Prateek Prasoon"
              className="w-full lg:-mt-14 lg:-mr-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
