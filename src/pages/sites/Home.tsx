import Banner from "../../components/homeComponents/Banner"
import BuildFor from "../../components/homeComponents/BuildFor"
import Celebrate from "../../components/homeComponents/Celebrate"
import Faq from "../../components/homeComponents/Faq"
import FeaturedGift from "../../components/homeComponents/FeaturedGift"
import HowItWorks from "../../components/homeComponents/HowItWorks"
import TestimonialSection from "../../components/homeComponents/TestimonialSection"


const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <FeaturedGift/>
      <Celebrate/>
      <BuildFor/>
      <TestimonialSection/>
      <Faq/>
    </div>
  )
}

export default Home