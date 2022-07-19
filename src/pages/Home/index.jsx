import React from "react";
import {
  Header,
  FlipBook,
  Footer,
  ScrollToTop,
  WhatsApp,
  HeaderDefault,
} from "../../components";

export default function Homez() {
  return (
    <>
      <div className="flex">
        <HeaderDefault />

        <div className="w-full">
          <Header />
          <FlipBook />
          <Footer />
          <ScrollToTop />
          <WhatsApp />
        </div>
      </div>
    </>
  );
}
