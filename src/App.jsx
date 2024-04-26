import prateekImg from "./assets/prateek-prasoon.png";
import company1 from "./assets/company-1.svg";
import company2 from "./assets/company-2.svg";
import facebookLogo from "./assets/facebook-logo.svg";
import instagramLogo from "./assets/instagram-logo.svg";
import twitterLogo from "./assets/twitter-logo.svg";

import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "CloudPrism Solutions",
    description:
      "Together, we navigate challenges, standing as pillars of support for one another through every triumph and trial.",
  },
  {
    id: 2,
    title: "CloudPrism Solutions",
    description:
      "Together, we navigate challenges, standing as pillars of support for one another through every triumph and trial.",
  },
  {
    id: 3,
    title: "CloudPrism Solutions",
    description:
      "Together, we navigate challenges, standing as pillars of support for one another through every triumph and trial.",
  },
  {
    id: 4,
    title: "CloudPrism Solutions",
    description:
      "Together, we navigate challenges, standing as pillars of support for one another through every triumph and trial.",
  },
];

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* main section  */}
      <section className="lg:h-screen primary_container ">
        <div className="lg:h-28 h-24">
          <span className="text-[28px] uppercase font-normal">
            Prateek Prasoon
          </span>
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-1">
            <div className="max-w-lg flex flex-col lg:gap-y-6 gap-y-6">
              <h4 className="lg:text-[53px] text-5xl font-semibold font-outFit lg:leading-[71.4px]">
                I help fill your business gaps{" "}
              </h4>

              <h5 className="lg:text-[38px] font-medium text-2xl text-[#5D5D5D] font-outFit">
                Saving your day, Every day.
              </h5>

              <p className="text-lg font-openSans text-[#4E4E4E]">
                I understand your firm&apos;s fundamental needs: to either
                increase revenue, save costs, or save time. I don&apos;t just
                talk about expertise; I deliver it.
              </p>

              <div className="flex w-full items-start gap-6 font-openSans">
                <button
                  className="lg:w-[180px] w-[160px] h-[50px] lg:h-[55px] bg-[#181818] rounded-[50px] text-white font-bold text-base lg:text-xl"
                  style={{
                    boxShadow: "#fff 4px 5px 0 0, #000 4px 5px 0 1.5px",
                    transform: "translate(2px, 2px)",
                  }}
                >
                  Book a call
                </button>
                <button
                  className="lg:w-[180px] w-[160px] h-[50px] lg:h-[55px] border-2 border-[#04080A] text-base lg:text-xl font-bold rounded-[50px]"
                  style={{
                    boxShadow: "#fff 4px 5px 0 0, #000 4px 5px 0 1.5px",
                    transform: "translate(2px, 2px)",
                  }}
                >
                  Our Courses
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
      </section>

      <section className="bg-[#F3F3F1] w-full primary_container ">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex-1">
            <h5 className="text-[#000000] lg:text-[48px] text-[35px] font-medium font-outFit">
              Prateek Prasoon
            </h5>
            <div className="text-[19px] font-normal mt-4 lg:mt-10 flex flex-col gap-y-6 text-[#4E4E4E] font-openSans">
              <p>
                CloudPrism Solutions isn&apos;t just a workplace—it&apos;s a
                community. Here, you&apos;re not just an employee; you&apos;re a
                valued member of a team united by shared values yet diverse in
                our individuality.
              </p>
              <p>
                Experience a culture of perpetual progress, where personal
                growth is not just encouraged, but celebrated. Together, we
                navigate challenges, standing as pillars of support for one
                another through every triumph and trial.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[#D9D9D9] w-[400px] h-[353px] mt-10 lg:-mt-10"></div>
          </div>
        </div>

        <div className="py-20">
          <img src={company1} alt="Companies" className="w-full" />
          <img src={company2} alt="Companies" className="w-full" />
        </div>
      </section>

      <section className="bg-[#2E2E2E] h-[430px] w-full primary_container flex justify-center sm:justify-start">
        {/* <div className="size-[400px] bg-white rounded-[18px] "></div> */}
        <div className="size-[350px] md:size-[450px] bg-white rounded-3xl md:-mt-20"></div>
      </section>

      <section className="primary_container">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex-1">
            <h5 className="lg:text-[50px] text-4xl md:text-5xl font-semibold font-outFit">
              How CloudPrism can help you?
            </h5>
            <div className="md:mt-10 mt-6 text-[20px]  flex flex-col gap-y-4 md:gap-y-6 text-[#4E4E4E] font-openSans">
              <p>
                CloudPrism Solutions isn&apos;t just a workplace—it&apos;s a
                community. Here, you&apos;re not just an employee; you&apos;re a
                valued member of a team united by shared values yet diverse in
                our individuality.
              </p>
              <p>
                Experience a culture of perpetual progress, where personal
                growth is not just encouraged, but celebrated. Together, we
                navigate challenges, standing as pillars of support for one
                another through every triumph and trial.
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="flex w-full flex-col lg:flex-row mt-10">
          <div className="flex-1">
            <h5 className="lg:text-[50px] text-4xl md:text-5xl font-semibold font-outFit">
              How CloudPrism can help you?
            </h5>
            <div className="md:mt-10 mt-6 text-[20px]  flex flex-col gap-y-4 md:gap-y-6 text-[#4E4E4E] font-openSans">
              <p>
                CloudPrism Solutions isn&apos;t just a workplace—it&apos;s a
                community. Here, you&apos;re not just an employee; you&apos;re a
                valued member of a team united by shared values yet diverse in
                our individuality.
              </p>
              <p>
                Experience a culture of perpetual progress, where personal
                growth is not just encouraged, but celebrated. Together, we
                navigate challenges, standing as pillars of support for one
                another through every triumph and trial.
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-14  w-full ">
          {posts && posts.map((post) => <PostItem key={post.id} {...post} />)}
        </div>
      </section>

      <ContactForm />

      <section className="bg-[#2E2E2E] h-28 px-20 flex items-center">
        <div className="flex gap-2">
          <a className="size-9 bg-white rounded-full flex items-center justify-center">
            <img src={facebookLogo} alt="" className="size-8" />
          </a>
          <a className="size-9 bg-white rounded-full flex items-center justify-center">
            <img src={facebookLogo} alt="" className="size-8" />
          </a>
          <a className="size-9 bg-white rounded-full flex items-center justify-center">
            <img src={twitterLogo} alt="" className="size-8" />
          </a>
          <a className="size-9 bg-white rounded-full flex items-center justify-center">
            <img src={instagramLogo} alt="" className="size-8" />
          </a>
        </div>
      </section>
    </div>
  );
};

function PostItem({ title, description }) {
  return (
    <div className="w-[270px]">
      <div className="w-full h-[175px] bg-[#D9D9D9] rounded-[14px]"></div>
      <div className="flex flex-col items-start gap-y-2 mt-4">
        <h3 className="text-lg text-[#181818] font-bold font-openSans">
          {title}
        </h3>
        <p className="text-[15px] text-[#4E4E4E] font-openSans">
          {description}
        </p>
        <button className="bg-[#181818] rounded-[57px] text-white text-[17px] font-medium px-8 py-1.5 font-outFit">
          Read
        </button>
      </div>
    </div>
  );
}

function InputBtn({ label }) {
  return (
    <div className="bg-[#181818] text-white rounded-[57px] md:w-[120px] w-[100px] h-[42px] font-medium flex items-center justify-center font-outFit text-sm md:text-base">
      {label}
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    console.log("called");
    event.preventDefault();

    const formData = { name, number, email, message };
    console.log(formData);
  };
  return (
    <section className="primary_container mt-6 md:mt-10">
      <h4 className="text-center text-3xl lg:text-[43px] font-semibold font-outFit">
        Reach out to Prateek Prasoon
      </h4>

      <form
        action=""
        className="max-w-4xl mx-auto flex flex-col gap-y-4 py-10 md:py-16"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1 flex gap-4">
            <InputBtn label="Name" />
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
            />
          </div>
          <div className="flex-1 flex gap-4">
            <InputBtn label="Number" />
            <input
              type="text"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
            />
          </div>
        </div>
        <div className="flex-1 flex gap-4">
          <InputBtn label="Email" />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
          />
        </div>
        <div className="flex-1 flex gap-4">
          <InputBtn label="Message" />
          <input
            type="text"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
          />
        </div>

        <div className="w-full flex items-center justify-center mt-2 lg:mt-4">
          <button
            className="bg-[#181818] h-[42px] w-[120px] rounded-[57px] text-white font-medium text-sm md:text-base"
            type="submit"
            style={{
              boxShadow: "#fff 4px 5px 0 0, #000 4px 5px 0 1.5px",
              transform: "translate(2px, 2px)",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
