import { Mission } from "../components/aboutUs/Mission";
import { WhoIsBehind } from "../components/aboutUs/WhoIsBehind";
import { WelcomeHome } from "../components/aboutUs/WelcomeHome";
import { HeroesSlider } from "../components/aboutUs/HeroesSlider";
import { HowItWorks } from "../components/aboutUs/HowItWorks";
import { BHWorldFamily } from "../components/aboutUs/BHWorldFamily";
import { Testimony } from "../components/aboutUs/Testimony";

export const AboutUsPage = () => {
  return (
    <>
      <Mission />
      <WhoIsBehind />
      <WelcomeHome />
      <HeroesSlider />
      <HowItWorks />
      <BHWorldFamily />
      <Testimony />
    </>
  );
};
