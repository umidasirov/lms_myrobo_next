import SwiperComponent from "@/src/widgets/homepage-swiper-hero/ui/HomepageSwiper";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 pb-16 md:pb-24 flex flex-col gap-16 md:gap-24">
        <SwiperComponent />
        {/* <KursToifalariComponents />
        <KirishComponents />
        <SertificateComponents />
        <AnimatedStats />
        <PremiumEducation />
        <TeamComponents />
        <AboutMyRobo />
        <FAQ />
        <IshtirockComponents /> */}
      </div>
  );
}
