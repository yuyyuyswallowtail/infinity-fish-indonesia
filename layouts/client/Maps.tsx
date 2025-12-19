import FadeUp from "@/components/animation/FadeUp";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/Typography";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Facebook, Instagram, MapPin, Music2, Package, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const socialMedias = [
  {
    "path": "/",
    "icon": <Facebook />,
    "color": "hover:bg-blue-600 hover:text-background"
  },
  {
    "path": "/",
    "icon": <Instagram />,
    "color": "hover:bg-pink-600 hover:text-background"
  },
  {
    "path": "/",
    "icon": <Music2 />,
    "color": "hover:bg-primary hover:text-background"
  },
  {
    "path": "/",
    "icon": <Phone />,
    "color": "hover:bg-green-600 hover:text-white"
  }
]

const Maps = () => {
  return (
    <>
      <Marquee className="border-y-4">
        <TypographyH1 className="flex justify-center items-center gap-2 py-6">
          <MapPin size={32} />You Can Find Us
        </TypographyH1>
      </Marquee>

      <section className="container grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 py-8">
        <FadeUp>
          <div className="flex flex-col justify-top items-center gap-8 p-4 w-full">
            <TypographyH1 className="flex justify-center items-center gap-3"><MapPin size={32} /> Location</TypographyH1>
            <Card className="px-4 w-full">
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  title="Map Jl. Wijaya Kusuma No.11 Blok Q5"
                  src="https://www.google.com/maps?q=Jl.%20Wijaya%20Kusuma%20No.11%20Blok%20Q5%20Sukapura%20Cilincing%20Jakarta%20Utara&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="flex flex-col justify-center items-center h-full gap-8 px-4 pt-16 w-full">
            <div className="flex flex-col justify-center items-center gap-4 text-center">
              <TypographyH1 className="flex justify-center items-center gap-2">
                <Package size={32} />Shipping <br /> Facilities
              </TypographyH1>
              <TypographyP>Visit our state-of-the-art facilities for a <br /> firsthand look at our exceptional selection of <br /> ornamental fish species.</TypographyP>
            </div>
            <div className="grid grid-cols-2 justify-center items-center p-4 gap-4">
              <div className="flex flex-col justify-top items-center text-center">
                <TypographyH3 className="flex justify-center items-center gap-2"><Clock />Hour</TypographyH3>
                <TypographyP>10AM - 5PM</TypographyP>
              </div>
              <div className="flex flex-col justify-top items-center text-center">
                <TypographyH3 className="flex justify-center items-center gap-2"><Calendar />Days</TypographyH3>
                <TypographyP>Monday-Friday</TypographyP>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center max-w-120 text-center">
              <TypographyH3>Infinity Fish Indonesia</TypographyH3>
              <TypographyP>Powered By PT. Seraphina Alam Senjaya Indonesia</TypographyP>
              <TypographyP>Passion commitment enthusiasts breeders suppliers partners facilities implemented stringent</TypographyP>

            </div>
            <div className="flex flex-col justify-center items-center gap-6 text-center">
              <TypographyH1 className="flex gap-2 justify-center items-center">
                <Smartphone size={32} /> Social Media
              </TypographyH1>
              <div className="grid grid-cols-4 justify-center items-center gap-2">
                {
                  socialMedias.map((socialMedia, id) => (
                    <Link href={socialMedia.path} key={id}>
                      <Card className={`flex items-center justify-center p-4 cursor-pointer ${socialMedia.color}`}>
                        {socialMedia.icon}
                      </Card>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </FadeUp>
      </section >
    </>
  )
}

export default Maps;
