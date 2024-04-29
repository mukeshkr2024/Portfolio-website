import prateekImg from "./assets/prateek-prasoon.png";
import facebookLogo from "./assets/facebook-logo.svg";
import instagramLogo from "./assets/instagram-logo.svg";
import twitterLogo from "./assets/twitter-logo.svg";
import lindeinLogo from "./assets/linkdein-logo.svg";
import salesforceParnter from "./assets/salesforce-partner.png";
import salesforceCup from "./assets/salesforce-cup.png";
import codingCommando from "./assets/coding-commando.png";
import reviewStar from "./assets/review-star.svg";
import salesforceArchitect from "./assets/salesforce-architect.png";
import company1 from "./assets/icons/icon-1.png";
import company2 from "./assets/icons/icon-2.png";
import company3 from "./assets/icons/icon-3.png";
import company4 from "./assets/icons/icon-4.png";
import company5 from "./assets/icons/icon-5.png";
import company6 from "./assets/icons/icon-6.png";
import footerImg from "./assets/footer-1.png";

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

const reviews = [
  {
    id: 1,
    description:
      "“Pleasure to work with Prateek and team, will continue working with his team in future. Excellent service, great attention to detail and quick efficient turn around time.”",
  },
  {
    id: 2,
    description:
      "“Prateek is one of the finest teachers I've met. The best part is he picks up the subjects from the root moulds it into a real life scenario and then explains which helps a lot in understanding the basic concepts and hence using it working live. I've been with him as a student and a friend and he stands out on both the grounds.”",
  },
  {
    id: 3,
    description:
      "“Mentor,motivator and a helpful trainer are the words that are apt when it comes to Prateek Sir.Had a great experience learning Salesforce Development from him.Strongly recommend his training sessions to salesforce aspirants.”",
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

        <div className="w-full flex flex-wrap justify-between my-10 ">
          <img src={company1} alt="" className="object-contain" />
          <img src={company2} alt="" className="object-contain" />
          <img src={company3} alt="" className="object-contain" />
          <img src={company4} alt="" className="object-contain" />
          <img src={company5} alt="" className="object-contain" />
          <img src={company6} alt="" className="object-contain" />
        </div>
      </section>

      <div className="w-full">
        <img
          src={salesforceArchitect}
          alt=""
          className="w-full object-contain "
        />
      </div>

      <section className="primary_container !bg-[#F9FEFF] ">
        <div className="flex flex-wrap justify-between my-8">
          {reviews &&
            reviews.map((item) => (
              <ReviewCard key={item.id} description={item.description} />
            ))}
        </div>
      </section>

      <section className="primary_container">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex-1">
            <h5 className="lg:text-[50px] text-4xl md:text-5xl font-semibold font-outFit">
              About CloudPrism Solutions{" "}
            </h5>
            <div className="md:mt-10 mt-6 text-[20px]  flex flex-col gap-y-4 md:gap-y-6 text-[#4E4E4E] font-openSans">
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
          <div className="flex-2">
            <div className="w-full  flex flex-col items-end justify-center">
              <img src={salesforceParnter} alt="" />
              <img src={salesforceCup} alt="" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row mt-10">
          <div className="flex-1 ">
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
          <div className="flex-2">
            <div className="w-full  flex flex-col items-end justify-center">
              <img src={codingCommando} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-14  w-full ">
          {posts && posts.map((post) => <PostItem key={post.id} {...post} />)}
        </div>
      </section>

      <ContactForm />

      <footer className="bg-[#000000] primary_container w-full h-44 flex">
        <div className="flex gap-2.5">
          <div className="flex-1 flex gap-2">
            <a className="">
              <img src={lindeinLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a className="">
              <img src={facebookLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a className="">
              <img src={twitterLogo} alt="" className="size-8 md:size-9" />
            </a>
            <a className="">
              <img src={instagramLogo} alt="" className="size-8 md:size-9" />
            </a>
          </div>
          <div className="flex-1 text-base text-white font-outFit font-normal">
            <p>
              Office no: 917, Gera Imperium Alpha, Rajaram Patil Nagar, Vitthal
              Nagar, Kharadi, Pune, Maharashtra 411014 +91 7906582439
            </p>
          </div>
          <div className="flex-1 text-base text-white font-outFit font-normal">
            <p>
              Shivpuri Rd, South Shivpuri, Shivpuri, Rajbansi Nagar, Patna,
              Bihar 800029 +91 83295 53438
            </p>
          </div>
          <div className="flex-1 text-base text-white font-outFit font-normal">
            <p>701 Tillery St, Austin, TX 78702, United States +1 3015639221</p>
          </div>
        </div>
      </footer>
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

function ReviewCard({ description }) {
  return (
    <div
      className="bg-white max-w-sm  p-5 h-full rounded-[14px]"
      style={{
        boxShadow: "0px 4px 9px 0px #0000003D",
      }}
    >
      <p className="text-xl font-outFit font-medium text-black">
        {description}
      </p>
      <img src={reviewStar} alt="review-star" className="mt-6" />
    </div>
  );
}

export default App;
