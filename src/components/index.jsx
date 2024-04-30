import { submitLeadToSalesforce } from "../../utils/sendLead";
import reviewStar from "../assets/review-star.svg";
import { useState } from "react";

export function InputBtn({ label }) {
  return (
    <div className="bg-[#181818] text-white rounded-[57px] md:w-[120px] w-[100px] h-[42px] font-medium flex items-center justify-center font-outFit text-sm md:text-base">
      {label}
    </div>
  );
}

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create formData object
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: number,
      message: message,
    };

    // Lead info object (example context)
    const LeadInfo = {
      // leadType: "Case studies CTA",
      leadType: "Prateek Prasoon Portfolio",
    };

    try {
      setIsloading(true);

      // Simulated function to submit data to an API or backend service
      const response = await submitLeadToSalesforce(formData, LeadInfo);
      console.log(response);

      setFirstName("");
      setLastName("");
      setNumber("");
      setEmail("");
      setMessage("");
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      // Handle errors if submission fails
      setIsSuccess(false); // You might handle errors differently
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className="primary_container !bg-[#F9FEFF] pt-6 md:pt-10">
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
            <InputBtn label="First Name" />
            <input
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
            />
          </div>
          <div className="flex-1 flex gap-4">
            <InputBtn label="Last Name" />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1 flex gap-4">
            <InputBtn label="Phone" />
            <input
              type="text"
              value={number}
              required
              onChange={(e) => setNumber(e.target.value)}
              className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
            />
          </div>
          <div className="flex-1 flex gap-4">
            <InputBtn label="Email" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#181818] h-[42px] w-full rounded-[57px] flex-1 px-4"
            />
          </div>
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
            disabled={isloading}
          >
            Submit
          </button>
        </div>

        {isSuccess && (
          <div className="text-sm text-center text-green-500 font-outFit font-semibold mt-4">
            <p>Thanks for your submission! We&apos;ll be in touch shortly.</p>
          </div>
        )}
      </form>
    </section>
  );
}

export function ReviewCard({ description, user }) {
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
      <p className="text-xl text-[#8F8F8F] font-outFit mt-1.5">{user}</p>
    </div>
  );
}
