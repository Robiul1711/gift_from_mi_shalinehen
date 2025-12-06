import { bannerBg, bannerStars } from "../../assets/images";
import CommonButton from "../common/CommonButton";
import Title from "../common/Title";

const Banner = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="section-padding-x w-full relative">
        {/* TOP TEXT */}
        <div className="text-center absolute top-34 left-1/2 -translate-x-1/2">
          <p className="font-bold text-xl py-2 px-8 text-Secondary rounded-full border border-Primary inline-block bg-white/10 backdrop-blur-md">
            Perfect Gift Made Simple
          </p>
        </div>

        {/* HERO MAIN WRAPPER */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-24">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <Title
              level="title64"
              className="text-Secondary font-playfair leading-tight"
            >
              Automated Gifting. <br /> Shipped All Year.
            </Title>

            <Title level="title24" className="text-Tertiary max-w-lg">
              Send one gift design to 1 or 100 clients, each to a different
              address, on the dates you choose.
            </Title>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <CommonButton className="border border-Primary text-white bg-custom  duration-300">
                Start Sending Gift
              </CommonButton>
              <CommonButton className="border border-Primary text-Primary hover:bg-Primary hover:text-white duration-300">
                Book a Setup Call
              </CommonButton>
            </div>

            {/* STATISTICS */}
            <div className="flex flex-wrap items-center gap-5 mt-10">
              {[
                "500+ Happy Professionals",
                "500+ Happy Professionals",
                "500+ Happy Professionals",
              ].map((text, index) => (
                <p
                  key={index}
                  className="font-semibold flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-Primary inline-block"></span>
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bannerStars}
              alt="banner-illustration"
              className="w-[80%] lg:w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
