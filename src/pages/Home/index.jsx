import React from "react";
import {
  Header,
  FlipBook,
  ImageTopdf,
  ListProduct,
  FooterContact,
  WhatsApp,
  ScrollToTop,
  HeaderNav,
  Footer,
} from "../../components";

export default function Homez() {
  return (
    <>
      <div className="relative">
        <div className="xl:w-8/12 top-0 left-0 right-0 mx-auto absolute">
          <div className="lg:hidden">
            <Header />
          </div>
          <HeaderNav />
        </div>
      </div>

      <div className="flex flex-wrap">
        <FlipBook />
        <ImageTopdf />
      </div>
      <div className="w-8/12 mx-auto">
        <h2 className="text-center text-3xl font-bold p-6 mb-4 md:text-5xl text-tema_6">
          OUR PRODUCTS
        </h2>
        <ListProduct />
      </div>
      <ScrollToTop />
      <WhatsApp />
      <Footer />
      <FooterContact />
    </>
  );
}
