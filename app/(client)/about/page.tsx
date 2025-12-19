import { TypographyH1, TypographyP } from "@/components/Typography";
import { MonitorCloud } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import FadeUp from "@/components/animation/FadeUp";
import AutoBreadcrumb from "@/components/AutoBreadcrumb";
import { ZoomImage } from "@/components/ZoomImage";

const About = () => {
  return <>
    <AutoBreadcrumb />
    <section className="container flex justify-center items-center w-full">
      <FadeUp className="flex flex-col justify-center items-center p-4 gap-4 max-w-140">
        <ZoomImage>
          <Image src={"/logo/logo.png"} width={480} height={480} alt="logo.png" className="w-48 h-auto" />
        </ZoomImage>
        <TypographyH1 className="pt-6">Welcome to Indonesia
          <br />Fish Cartel.</TypographyH1>
        <TypographyP>
          At Indonesia Fish Cartel, we are proud to be a leading exporter of exquisite ornamental fish, renowned for our exceptional quality and vibrant selection. With years of experience in the industry, we have established ourselves as a trusted partner for aquarists and enthusiasts worldwide, delivering stunning aquatic specimens from the heart of Indonesia's rich biodiversity.
        </TypographyP>
        <TypographyP>
          Our commitment to excellence is reflected in every aspect of our operations—from our rigorous breeding and selection processes to our careful handling and global shipping practices. We offer a diverse range of ornamental fish, each meticulously cared for to ensure they reach their new homes in peak condition.
        </TypographyP>
        <TypographyP>
          Join us in celebrating the beauty and wonder of aquatic life. At Indonesia Fish Cartel, we are dedicated to providing unparalleled service and exceptional fish that transform any aquarium into a captivating underwater world.
        </TypographyP>
        <TypographyP>
          Indonesia Fish Cartel was established in 2020. Since its inception, we have engaged in various collaborations with importers and exporters of fish around the world. We have an outstanding handling team to support the fish shipping process, accompanied by state-of-the-art facilities for ornamental fish quarantine. Each shipping process is a valuable experience for us, helping us to improve continually.
        </TypographyP>
        <TypographyP>
          Founded in 2020 and located in Jakarta - Indonesia, Indonesia Fish Cartel has a vision and mission to advance and introduce ornamental fish from Indonesia, including native Indonesian species. We are dedicated and committed to meeting all your ornamental fish needs, whether freshwater or marine. We also offer aquatic plants to enhance aquarium decorations. All our products undergo stringent selection processes to ensure the highest quality.
        </TypographyP>
        <div className="grid grid-cols-2 justify-center items-center gap-2">
          <ZoomImage>
            <Image src={"/logo/facilities/whatsapp-image-2024-08-04-at-11.26.17-AMq4bvM12EfRpj7G.webp"} width={480} height={480} alt="logo.png" className="w-120 h-auto rounded-2xl" />
          </ZoomImage>
          <ZoomImage>
            <Image src={"/logo/facilities/cd8e5d01-ae41-42ee-a558-76233a2160b6-m5Kbwx8anyi04L4D.webp"} width={480} height={480} alt="logo.png" className="w-120 h-auto rounded-2xl" />
          </ZoomImage>
        </div>
      </FadeUp>
    </section>

    <Marquee className="border-y-4"><TypographyH1 className="flex justify-center items-center gap-4 p-4"><MonitorCloud size={40} />Facilities</TypographyH1>
    </Marquee>
    <section className="container flex flex-col justify-center items-center p-4 w-full">
      <FadeUp className="flex flex-col justify-center items-center max-w-140 gap-4">
        <TypographyP>
          We mantain good facilities for fish quarantine to make sure all fishes we send to our customer is healthy.
        </TypographyP>
        <ZoomImage>
          <Image src={"/logo/facilities/whatsapp-image-2024-08-04-at-11.26.17-1-Yg29Wkjk2ZI9LZVl.webp"} width={480} height={480} alt="logo.png" className="w-120 h-auto rounded-2xl" />
        </ZoomImage>
        <TypographyP>
          We have several ornamental fish quarantine facilities located in Jakarta and Bogor, as well as ornamental fish farms spread across various regions in Indonesia. With our state-of-the-art facilities, we are confident in playing a crucial role in the process of shipping fish from Indonesia to destinations across Asia, Australia, Europe, and the Americas. We understand that, in addition to having skilled personnel, having supportive facilities is essential for success.
        </TypographyP>
        <ZoomImage>
          <Image src={"/logo/facilities/unnamed-m7VKwgxJ0KFZvRv6.webp"} width={480} height={480} alt="logo.png" className="w-120 h-auto rounded-2xl" />
        </ZoomImage>
        <ZoomImage>
          <Image src={"/logo/facilities/download-mp89vGlzrzhZO9vm.webp"} width={480} height={480} alt="logo.png" className="w-120 h-auto rounded-2xl" />
        </ZoomImage>
        <ZoomImage>
          <Image src={"/logo/facilities/05cbd15a-a539-41bf-96a3-67bd2080614f-AQEpyvnOO0TqaXkW.webp"} width={480} height={480} alt="logo.png" className="w-120 h-auto rounded-2xl" />
        </ZoomImage>
      </FadeUp>
    </section>
  </>
}

export default About; 
