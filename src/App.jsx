import salesforceArchitect from "./assets/salesforce-architect.png";
import { ContactForm, ReviewCard } from "./components";
import { CompanySection } from "./components/company-sections";
import { Footer } from "./components/footer";
import { MainSection } from "./components/main-section";
import { SecondarySection } from "./components/secondary-section";

const reviews = [
  {
    id: 1,
    description:
      "“Pleasure to work with Prateek and team, will continue working with his team in future. Excellent service, great attention to detail and quick efficient turn around time.”",
    user: "Amandine Auguste",
  },
  {
    id: 2,
    description:
      "“Prateek is one of the finest teachers I've met. The best part is he picks up the subjects from the root moulds it into a real life scenario and then explains which helps a lot in understanding the basic concepts and hence using it working live. I've been with him as a student and a friend and he stands out on both the grounds.”",
    user: "Aarohi Sanjekar",
  },
  {
    id: 3,
    description:
      "“Mentor,motivator and a helpful trainer are the words that are apt when it comes to Prateek Sir.Had a great experience learning Salesforce Development from him.Strongly recommend his training sessions to salesforce aspirants.”",
    user: "Shubham Jain",
  },
];

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <MainSection />

      <SecondarySection />

      <div className="w-full bg-[#F3F3F1]">
        <img
          src={salesforceArchitect}
          alt=""
          className="w-full object-contain "
        />
      </div>

      <section className="primary_container !bg-[#F9FEFF]">
        <div className="flex flex-wrap justify-center gap-x-8 xl:gap-x-0  xl:justify-between gap-y-8 my-2 md:my-8">
          {reviews &&
            reviews.map((item) => (
              <ReviewCard
                key={item.id}
                description={item.description}
                user={item.user}
              />
            ))}
        </div>
      </section>

      <CompanySection />

      <ContactForm />
      <div className="bg-[#29A7FF] w-full h-5 border-t-2 border-black"></div>
      <Footer />
    </div>
  );
};

export default App;
