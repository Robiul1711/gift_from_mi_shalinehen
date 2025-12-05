
import { SparklesCore } from "../../components/ui/sparkles";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"; 

const Home = () => {

  const axiosPublic = useAxiosPublic();

  const { data: plans } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const res = await axiosPublic.get("/plans");
      return res?.data?.data;
    },
  });

  console.log(plans);


  return (
    <div>
      <div className="">
        <div className="min-h-screen  relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <h1 className="text-7xl  font-bold text-center text-white relative z-20">
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
