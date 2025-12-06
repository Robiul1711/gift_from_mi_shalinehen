import { build } from "../../assets/images";
import Title from "../common/Title";
import { CheckMarkIcon } from "../SVG/HomePageIcon/HomeIcon";

const BuildFor = () => {
  return (
    <div className="section-padding-x section-padding-y flex items-center justify-between">
      <div className="w-1/2">
        <img src={build} alt="" />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col gap-4">
          <Title level="title48" className="">
            Build For Busy Professional
          </Title>
          <Title level="title24" className="">
            Never forgeta closing, anniversary, or VIP clientagain.
          </Title>
        </div>
        <div className="mt-5">
          {[
            "Send one gift to 1 or 100 clients",
            "Multi-address shipping with custom branding",
            "CSV bulk upload for unlimited recipients",
            "Schedule gift dates automatically",
            "Keep your brand top of mind",
          ].map((item, index) => (
            <div key={index} className="py-4 ">
            <p
            
              className="text-Tertiary font-medium flex items-center gap-2"
            >
              {" "}
              <CheckMarkIcon />
              {item}
            </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildFor;
