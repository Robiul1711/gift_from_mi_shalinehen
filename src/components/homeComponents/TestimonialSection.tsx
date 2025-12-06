import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Title from "../common/Title";
import { user1 } from "../../assets/images";

const testimonials = [
  {
    id: 1,
    name: "Tina Morris",
    role: "Creative Director",
    rating: 5,
    avatar: user1,
    text: "GiftFromMi has transformed how I connect with my clients. The automatic delivery and personalized touches make my clients feel truly valued. My referral rate has increased by 40%!",
  },
  {
    id: 2,
    name: "Amanda Reyes",
    role: "Business Owner",
    rating: 5,
    avatar: user1,
    text: "A small business, managing client gifts used to be stressful. GiftFromMi made it effortless. Their customization options and branding quality are truly premium.",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Real Estate Agent",
    rating: 5,
    avatar: user1,
    text: "GiftFromMi has completely transformed the way I follow up with clients. Birthdays, move-in anniversaries, and milestone gifts go out automatically beautifully packaged on time. My clients LOVE it.",
  },
  {
    id: 4,
    name: "Jonathan Lee",
    role: "Sales Team Leader",
    rating: 5,
    avatar: user1,
    text: "My team doesn’t have to manually send gifts anymore. The dashboard, tracking, and scheduling are so smooth. It feels like having an extra team member.",
  },
  {
    id: 5,
    name: "Marcus Hill",
    role: "Repeat User",
    rating: 5,
    avatar: user1,
    text: "I tried multiple gifting platforms, but none come close to GiftFromMi's simplicity and elegance. It truly elevates client experience.",
  },
  {
    id: 6,
    name: "Tina Morris",
    role: "Creative Director",
    rating: 5,
    avatar: user1,
    text: "As a small business owner, client retention is everything. GiftFromMi makes it effortless to maintain relationships with personalized gifts. The dashboard tracking is incredibly helpful.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="section-padding-x section-padding-y">
      {/* TITLE */}
          <div className="flex flex-col gap-4 justify-center items-center">
          <Title level="title48" className="">
         Loved by professionals
          </Title>
          <Title level="title24" className="">
         Join hundreds of professionals who are building stronger client relationships
          </Title>
        </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative"
          >
            {/* QUOTE ICON */}
            <FaQuoteRight className="absolute top-4 right-4 text-[#EAC98B] text-xl" />

            {/* USER INFO */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-2 text-[#E9B44C] mb-3">
              <div className="flex">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <span className="text-gray-700 font-medium">5.0</span>
            </div>

            {/* TEXT */}
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
