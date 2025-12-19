import FadeUp from "@/components/animation/FadeUp";
import { TypographyH1, TypographyH3, TypographyList, TypographyP } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { ZoomImage } from "@/components/ZoomImage";
import { Banknote, Fish, Lock, MoveRight, Package, Shield, Sparkles, Van } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <section className="container relative h-screen overflow-hidden rounded-2xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/logo/background/10531-225203298_tiny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white gap-2 px-4">
          <ZoomImage>
            <Image src={"/logo/logo.png"} width={200} height={200} alt="logo.png" className="pb-4 mx-auto" />
          </ZoomImage>
          <TypographyH1>
            Infinity Fish <br /> Indonesia
          </TypographyH1>
          <TypographyP>
            Indonesia Ornamental Fish & Aquatic Plants Exporter
          </TypographyP>
          <TypographyP className="max-w-3xl">
            "Anchored in Quality: Indonesia's Ornamental Fish Supplies, <br /> Setting the
            Standard for Aquatic Excellence."
          </TypographyP>
          <TypographyH1>★★★★★</TypographyH1>
          <TypographyP>Top-notch service and products.</TypographyP>
        </div>
      </section >

      <Marquee className="border-y-4">
        <TypographyH1 className="flex justify-center items-center gap-2 py-6">
          <Fish size={48} />Infinity Fish Indonesia
        </TypographyH1>
      </Marquee>

      <section className="container grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-16 gap-8">
        <FadeUp>
          <div className="flex flex-col justify-top items-center text-center gap-8 w-full">
            <div className="flex flex-col justify-center items-center text-center w-full gap-4">
              <TypographyH1 className="flex flex-col justify-center items-center gap-2">
                <Fish size={48} />Leading Ornamental <br /> Fish Exporter </TypographyH1>
              <TypographyP>
                Wellcome to Indonesia Fish Cartel. With over a years of experience, <br /> Indonesia Fish Cartel is a beacon of expertise and reliability in the industry.<br /> We provide the finest ornamental fish to enthusiasts worldwide, <br /> ensuring a diverse and exceptional selection of fish species.
              </TypographyP>
              <TypographyP>
                We did supply ornamental fishes and aquatic plants worldwide since 2020. <br />
                Check onto our products to find your favourite <br /> ornamental fish and aquatic plants.
              </TypographyP>
              <Link href={"/products"} className="py-6">
                <Button className="flex justify-center items-center p-6 gap-4 rounded-lg cursor-pointer text-xl">
                  <Fish size={48} />Explore Product <MoveRight />
                </Button>
              </Link>
            </div>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="flex justify-center items-center p-4">
            <ZoomImage>
              <Image src="/logo/background/Seatech-Aquariums-Components-of-a-Reef-Tank-204872091.jpeg" width={400} height={400} loading="eager" alt="Aquarium.jpg" className="w-full h-auto rounded-2xl" />
            </ZoomImage>
          </div>
        </FadeUp>
      </section>

      <Marquee className="border-y-4" direction="right">
        <TypographyH1 className="flex justify-center items-center gap-2 py-6">
          <Sparkles size={36} />Best Quality
        </TypographyH1>
      </Marquee>

      <section className="container flex flex-col justify-center items-center gap-8 py-16">
        <FadeUp>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <TypographyH1 className="flex justify-center items-center gap-4"><Van size={48} />
              Quality Fish <br /> Exporting
            </TypographyH1>
            <TypographyP>
              Get the best pricing offer today. <br /> We also offer discounts for first-time purchases and special rates for returning customers. <br /> Enjoy the most pleasant shopping experience with us—contact us now!
            </TypographyP>
            <TypographyP>
              Providing the finest ornamental fish to enthusiasts worldwide <br /> with over a decade of expertise.
            </TypographyP>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 w-full">
            <div className="flex justify-center items-center p-4">
              <ZoomImage>
                <Image src="/logo/background/Ornamental-fish-export-Thailand-7-1024x576.png" width={400} height={400} loading="eager" alt="Aquarium.jpg" className="w-full h-auto rounded-2xl" />
              </ZoomImage>
            </div>
            <div className="flex flex-col justify-top items-center text-center gap-8 py-8 w-full">
              <div className="flex flex-col justify-center items-center text-center w-full">
                <TypographyH3 className="flex flex-col justify-center items-center gap-2"><Sparkles size={36} />Relentless Pursuit <br /> of Excellence</TypographyH3>
                <TypographyP>Driven by a relentless pursuit of excellence in <br />
                  providing quality ornamental fish species.</TypographyP>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-full">
                <TypographyH3 className="flex flex-col justify-center items-center gap-2"><Fish size={36} />Diverse and Exceptional <br /> Fish Species</TypographyH3>
                <TypographyP>Meticulously cultivated relationships with breeders, suppliers, <br /> and partners for exceptional selection quality.</TypographyP>
              </div>
            </div>
          </div>
        </FadeUp>
      </section >

      <Marquee className="border-y-4">
        <TypographyH1 className="flex justify-center items-center gap-2 py-6">
          <Lock size={36} />Payment & Warranty
        </TypographyH1>
      </Marquee>

      <section className="container flex flex-col justify-center items-center gap-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 w-full px-4">

          <div className="flex flex-col justify-top items-top gap-2 h-full">
            <FadeUp>
              <TypographyH1 className="flex justify-center items-center gap-2">
                <Banknote size={48} />Payment
              </TypographyH1>
              <div className="flex w-full">
                <TypographyList childrens={["100% Payment in Advance",
                  "Cargo, document, and packing costs to be paid upfront.",
                  "FOB method (if you want CNK prices, we can provide them).",
                  "Payment can be made using T/T method or Binary Exchange (Bitcoin).",
                  "The buyer must send the T/T proof via email."
                ]
                }>
                </TypographyList>
              </div>
            </FadeUp>
            <FadeUp>
              <TypographyH1 className="flex justify-center items-center pt-8 gap-2">
                <Package size={48} />Packing
              </TypographyH1>
              <div className="flex justify-center items-center">
                <TypographyList childrens={
                  ["The order will be packed and shipped approximately 10 days after payment is received, to allow time to prepare (quarantine) the fish and gather all the ordered fish to ensure the order arrives perfectly.",
                    "Packing will use PE plastic bags with a thickness of 0.6 microns, and for certain types of fish, PE plastic with a thickness of 0.8 microns will be used.",
                    <> Available box dimensions(can be chosen by the customer according to their needs):
                      <TypographyList type="ol" childrens={
                        [
                          "GA JUMBO BOX ( 75cm x 42cm x 40cm )",
                          "GA REGULAR BOX ( 75cm x 42cm x 35 cm )",
                          "GG BOX ( 52cm x 37cm x 34cm )",
                          "AG JUMBO BOX ( 70cm x 49cm x 40cm )"
                        ]
                      } />
                    </>
                    ,
                    "The packing of the fish will be adjusted based on the type of fish and travel time.",
                    "The styrofoam box is lined with plastic and cardboard on the outside.",
                    "All fish will be videoed before departure to the destination."
                  ]
                }>
                </TypographyList>
              </div>
            </FadeUp>
          </div>
          <div className="flex flex-col justify-top lg:justify-center items-center gap-2 h-full">
            <FadeUp>
              <TypographyH1 className="flex justify-center items-center gap-2">
                <Shield size={48} />Death On Arrival <br /> Warranty
              </TypographyH1>
              <div className="flex flex-col justify-center items-center text-justify max-w-120 pt-6">
                <TypographyP>
                  Don't worry, we have a team with good experience in fish shipping. Our DOA rate is under 2% IN AVERAGE, and we always optimize every shipment to ensure all fish arrive safely and healthily. <br /><br />
                  For fish that arrive dead, they will be replaced in the next shipment under the following conditions:
                </TypographyP>
                <TypographyList childrens={[
                  "Clear photos or uncut video clearly showing the dead fish.",
                  "For certain types of fish, they must be cut and videoed for warranty claims.",
                  "The warranty only applies to the fish itself. Shipping costs for the next shipment will still be charged to the buyer."
                ]} />
              </div>
            </FadeUp>
          </div>
        </div >
      </section >
    </>
  );
}
