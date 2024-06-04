import { ContactForm } from "../components";
import { BlogCard, RecentBlogCard } from "../components/blogs/BlogCard";
import { Footer } from "../components/footer";
import { Navbar } from "../components/main-section";

export const PostOne = () => {
  const blogs = [
    {
      id: 2,
      description:
        "Here's how IT consultants can enhance CRM & software development solutions to boost a company's ROI",
      imageUrl:
        "https://cloudprism.in/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-86.png&w=384&q=75",
      href: "https://cloudprism.in/blog/it-consulting",
    },
    {
      id: 3,
      description:
        "5 Secrets to Boosting Profits and Client Satisfaction with IT Consulting Management",
      imageUrl:
        "https://cloudprism.in/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-84.png&w=384&q=75",
      href: "https://cloudprism.in/blog/it-consulting-management",
    },
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto lg:my-10 my-6 px-4 sm:px-6 md:px-8 lg:px-0">
        <Navbar />
      </div>
      <div className="flex w-full lg:mt-10 -mt-8 md:-mt-4  h-full flex-col-reverse lg:flex-row gap-x-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="w-[240px]">
          <h2 className="text-[#100E0E] font-semibold text-xl">Recent blogs</h2>
          <div className="mt-6 hidden lg:flex flex-col">
            {blogs.map((item) => (
              <RecentBlogCard
                key={item.id}
                description={item.description}
                image={item.imageUrl}
                className={"!w-[242px] !h-[200px]"}
              />
            ))}
          </div>
        </div>

        <div className="bg-[#DBDBDB] w-[1.5px]" />

        <div className="flex-1">
          <div className="text-[#0C0C0C] flex flex-col gap-y-10">
            <h3>BLOG</h3>
            <h1 className="lg:text-5xl text-3xl sm:text-4xl font-semibold">
              From Patna to the global tech stage, Prateek Prasoon is
              revolutionizing how businesses leverage Salesforce technology.
            </h1>
            <div className="text-[#0C0C0C] font-semibold flex gap-24">
              <span>5-MINUTE READ</span> <span>4 June</span>
            </div>
          </div>
          <div
            className="h-1 my-4"
            style={{
              background:
                "linear-gradient(90deg, #C8DFF9 -1.95%, #4CD4FF 9.77%, #818BE2 55.1%, #9DF0AC 99.49%)",
            }}
          ></div>

          <div>
            <p className="primary_paragraph">
              A inspirational entrepreneur is creating waves in the IT business
              in the busy city of Patna, Bihar, where tradition meets
              innovation. The creator of Coding Commando and Cloudprism
              Solutions, Prateek Prasoon, has become a powerful figure in the
              Salesforce services industry. His path is about more than simply
              creating enterprises; it&apos;s about leading change and
              motivating a great number of people along the way.{" "}
            </p>
            <img
              src="../../assests/blogs/blog-2.png"
              alt="global tech"
              sizes="100vw"
              className="my-6 rounded-lg"
            />
            <p className="primary_paragraph">
              Prateek Prasoon&apos;s journey started with an idea to change the
              way companies use technology. Prateek, who has a strong love for
              Salesforce, launched Cloudprism Solutions, a business that offers
              excellent Salesforce services. Under his direction, Cloudprism
              Solutions has seen rapid expansion and built a solid reputation
              within the Salesforce community. As a seasoned Salesforce partner,
              Prateek has made sure that his organization offers unmatched
              knowledge to assist clients reach their objectives and optimize
              their operations
            </p>
            <p className="primary_paragraph">
              However, Prateek continues to contribute outside of Cloudprism
              Solutions. Comprehending the vital want for proficient experts in
              the technology sector, he furthermore established Coding Commando.
              The goal of this program is to provide prospective developers the
              tools they need to succeed in the cutthroat IT industry. Prateek
              has played a significant role in developing a community of gifted
              programmers through Coding Commando by offering them guidance and
              practical experience.
            </p>
            <p className="primary_paragraph">
              Prateek is unique because of his unwavering dedication to
              perfection and his capacity to recognize potential where others
              would not. His sincerity, inventiveness, and keen awareness of his
              clients&apos; demands define his business philosophy. In addition
              to advancing his business endeavors, Prateek&apos;s understanding
              of Salesforce has established him as a thought leader in the
              sector. He often uses a variety of channels to impart his
              knowledge and experience, encouraging people to take use of
              Salesforce&apos;s potential for their own companies
            </p>
            <p className="primary_paragraph">
              Prateek Prasoon&apos;s rise from Patna to prominence in the tech
              industry is evidence of his commitment and foresight. Tech lovers
              and aspiring entrepreneurs might both find inspiration in his
              narrative. Without a doubt, Prateek Prasoon will make a lasting
              impression on the IT sector as he continues to propel Cloudprism
              Solutions and Coding Commando ahead, demonstrating the
              extraordinary potential that resides inside the heart of Bihar.{" "}
            </p>
            <p className="primary_paragraph">
              In an age where technology is always changing, Prateek is a
              shining example of leadership and creativity, demonstrating that
              anybody can succeed extraordinarily well if they have the right
              drive and persistence.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};
