import Title from "../common/Title";
import { AutomaticIcon, CustomizeIcon, UploadIcon } from "../SVG/HomePageIcon/HomeIcon"; 

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Upload Recipients",
      text: "Add your clients via CSV or manually enter their information. Include personalized notes for each recipient.",
      icon: <UploadIcon />,
      bg: "#EFDBBF",
    },
    {
      id: 2,
      title: "Customize Gift",
      text: "Choose from our curated collection of luxury gifts. Add your branding, custom messages, and select delivery dates.",
      icon: <CustomizeIcon />,
        bg: "#EFDBBF",
    },
    {
      id: 3,
      title: "Automatic Delivery",
      text: "We handle everything-from packaging to scheduled delivery. Track shipments in your dashboard and delight your clients.",
      icon: <AutomaticIcon />,
        bg: "#EFDBBF",
    },
  ];

  return (
    <div className="section-padding-x section-padding-y">
      {/* Section Header */}
      <div className="flex flex-col gap-4 items-center text-center max-w-4xl mx-auto">
        <Title level="title48">How It Works</Title>
        <Title level="title24" className="text-Tertiary">
          Three simple steps to start delighting your clients with unforgettable gifts.
        </Title>
      </div>

      {/* Steps Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="border border-Primary rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div
                className="p-3 rounded-full"
                style={{ backgroundColor: step.bg }}
              >
                {step.icon}
              </div>
              <Title level="title48" className="text-[#EFDBBF]">
                {step.id}
              </Title>
            </div>

            {/* Title */}
            <Title level="title32" className="mt-6 mb-2">
              {step.title}
            </Title>

            {/* Description */}
            <Title level="title16" className="text-Tertiary leading-relaxed">
              {step.text}
            </Title>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
