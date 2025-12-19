import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/layouts/client/Contact";
import Footer from "@/layouts/client/Footer";
import Maps from "@/layouts/client/Maps";
import Navbar from "@/layouts/client/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Maps />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
