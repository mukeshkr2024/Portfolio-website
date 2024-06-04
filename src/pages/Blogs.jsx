import { Link } from "react-router-dom";
import { ContactForm } from "../components";
import { BlogCard } from "../components/blogs/BlogCard";
import { Footer } from "../components/footer";
import { Navbar } from "../components/main-section";

export const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/blogs/featured-1.png",
      href: "/from-patna-to-the-global-tech",
    },
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
    {
      id: 4,
      description:
        "Building Meaningful Experiences with CMS Integration in Full-Stack Alchemy: Encouraging Connection.",
      imageUrl:
        "https://cloudprism.in/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-82.png&w=384&q=75",
      href: "https://cloudprism.in/blog/cms-integration",
    },
    {
      id: 5,
      description: "Top 10 Reasons Why You Should Hire an IT Consultant",
      imageUrl:
        "https://cloudprism.in/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-78.png&w=384&q=75",
      href: "https://cloudprism.in/blog/hiring-it-consultant",
    },
    {
      id: 6,
      description:
        "Elevate Your Business with CloudPrism: IT Consulting and Cloud Solutions in the Digital Age",
      imageUrl:
        "https://cloudprism.in/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog-76.png&w=384&q=75",
      href: "https://cloudprism.in/blog/buisness-needs",
    },
  ];

  const two = [
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
      <div className="max-w-[75rem] mx-auto">
        <div className="py-6">
          <Navbar />
        </div>
        <div className="max-w-2xl flex flex-col gap-y-5  ">
          <h2 className="text-[#181818] font-normal">BLOGS</h2>
          <h1 className="text-[#181818] lg:text-5xl text-3xl sm:text-4xl font-normal">
            Tips and Recommendations from Entrepreneur
          </h1>
        </div>

        <div className="mt-16 flex flex-col items-center md:flex-row justify-center md:justify-between">
          <div>
            <div className="lg:w-[460px] w-[330px] lg:h-[450px]">
              <img
                src="../../assests/blogs/blog-1.png"
                alt="image"
                className="h-[85%] object-cover w-full rounded-[10px]"
              />
              <div>
                <h3>WIT was a technical event hosted by the founders </h3>
                <div className="flex justify-between">
                  <p className="text-sm text-[#4E4E4E]">Read article</p>
                  <Link to="" target="_blank">
                    <img src="./up-right.svg" alt="" className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {two.map((item) => (
                <BlogCard
                  key={item.id}
                  description={item.description}
                  image={item.imageUrl}
                />
              ))}
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-end gap-16">
                <h2 className="lg:text-7xl text-4xl sm:text-5xl font-normal">
                  Read Blogs
                </h2>
                <img
                  src="/arrow-down.svg"
                  className="lg:size-[90px] size-[70px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[70rem] mx-auto mt-10">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {blogs.map((item) => (
            <BlogCard
              key={item.id}
              description={item.description}
              image={item.imageUrl}
              href={item.href}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};
