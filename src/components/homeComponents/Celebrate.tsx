import CommonButton from "../common/CommonButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "../common/Title";
import { gift1, gift2 } from "../../assets/images";
const categories = [
  {
    id: 1,
    title: "Party Gift",
    image: gift1,
    size: "row-span-2", // large vertical
  },
  {
    id: 2,
    title: "Tech Gift",
    image: gift2,
    size: "col-span-2", // large horizontal
  },
  {
    id: 3,
    title: "Premium",
    image: gift1,
  },
];
const categories2 = [
  {
    id: 1,
    title: "Terry box",
    image: gift2,
    size: "row-span-2", // large vertical
  },
  {
    id: 2,
    title: "Anniversary Gift",
    image: gift1,
  },
  {
    id: 3,
    title: "Christmas",
    image: gift2,
    size: "col-span-2", // large horizontal
  },
];
const Celebrate = () => {
  return (
    <div className="section-padding-x section-padding-y">
      <div className="flex flex-col gap-4 items-center text-center  mx-auto">
        <Title level="title48" className="max-w-xl">
          Celebrate Every <span className="text-Primary">Occasion</span> with
          the Right Gift.
        </Title>
        <Title level="title24" className="">
          Life is full of moments worth celebrating. That’s why we’ve curated
          thoughtful gifts for every occasion birthdays, holidays,
          anniversaries, housewarmings, and more. Choose your moment and make
          every celebration truly special.
        </Title>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 ${item.size}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* TAG LABEL */}
              <span className="absolute top-3 right-3 bg-[#F4E5C3] text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories2?.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 ${item.size}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* TAG LABEL */}
              <span className="absolute top-3 right-3 bg-[#F4E5C3] text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <CommonButton className="bg-custom text-white flex items-center gap-2">
            Browse Gift <FaArrowRightLong />
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Celebrate;
