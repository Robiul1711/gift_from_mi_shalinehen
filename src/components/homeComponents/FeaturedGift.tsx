import { gift1, gift2 } from "../../assets/images";
import CommonButton from "../common/CommonButton";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import Title from "../common/Title";
const products = [
  {
    id: 1,
    title: "Chocolate With Premium Box",
    subtitle: "Experience the Taste of True Luxury",
    price: "$20",
    oldPrice: "$30",
    rating: 5,
    image: gift1,
  },
  {
    id: 2,
    title: "Tech Accessories Pack",
    subtitle: "Premium Wireless Charger, Phone Stand",
    price: "$220",
    oldPrice: "$300",
    rating: 5,
    image: gift2,
  },
  {
    id: 3,
    title: "Perfume box",
    subtitle: "Experience the Premium Perfume",
    price: "$20",
    oldPrice: "$30",
    rating: 5,
    image: gift1,
  },
];

const FeaturedGift = () => {
  return (
    <div className="section-padding-x section-padding-y">
      <div className="flex flex-col gap-4 items-center text-center max-w-4xl mx-auto">
        <Title level="title48" className="">
          Featured Gift Collections
        </Title>
        <Title level="title24" className="">
          Carefully curated gifts that make lasting impressions
        </Title>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="border border-Primary/50 rounded-2xl p-4 flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 md:h-72 lg:h-80 object-cover rounded-xl"
              />
              <div className="flex justify-between  gap-2">
                <div>
                  {/* TITLE */}
                  <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                </div>

                {/* PRICE */}
                <div className="flex items-center gap-3 ">
                  <span className="text-[#BA8D2E] text-xl font-bold">
                    {item.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                </div>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-[#E4B54C]">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                   <FaStar key={i} />
                    ))}
                </div>
                <span className="text-sm sm:text-base text-[#BA8D2E]">
                  (5/5)
                </span>
              </div>

              {/* BUTTON */}
          <CommonButton className="bg-custom text-white mt-3">
            View Details
          </CommonButton>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 flex justify-center">
          <CommonButton className="bg-custom text-white flex items-center gap-2">
            View All Collections <FaArrowRightLong />
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGift;
