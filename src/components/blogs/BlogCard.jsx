import { Link } from "react-router-dom";

export const BlogCard = ({ image, description, href }) => {
  return (
    <div className="max-w-[330px] h-[300px] rounded-[10px] overflow-hidden">
      <img
        src={image}
        alt={description}
        className="h-[70%] object-cover w-full rounded-[10px]"
      />
      <div className="mt-2">
        <h3 className="line-clamp-2 text-lg text-[#1D1D1D] font-semibold">
          {description}
        </h3>
        <div className="flex justify-between">
          <p className="text-sm text-[#4E4E4E]">Read article</p>
          <Link to={href} target="_blank">
            <img src="./up-right.svg" alt="" className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const RecentBlogCard = ({ image, description }) => {
  return (
    <div className="max-w-[240px] h-[190px] rounded-[10px] overflow-hidden">
      <img
        src={image}
        alt={description}
        className="h-[70%] object-cover w-full rounded-[10px]"
      />
      <div className="mt-2">
        <h3 className="line-clamp-2 text-sm text-[#1D1D1D] font-semibold">
          {description}
        </h3>
      </div>
    </div>
  );
};
