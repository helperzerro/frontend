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
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="w-9/12 mx-auto">
        <HeaderNav />
      </div>
      <div className="flex flex-wrap">
        <FlipBook />
        <ImageTopdf />
      </div>
      <div className="w-9/12 mx-auto">
        <h2 className="bg-red-200 text-center text-4xl font-extrabold p-6 mb-4">
          OUR PRODUCTS
        </h2>
        <ListProduct />
      </div>
      <ScrollToTop />
      <WhatsApp />
      <Footer />
      <div className="w-8/12 mx-auto xl:w-6/12">
        <FooterContact />
      </div>
    </>
  );
}
