import jsPDF from "jspdf";
import React, { Component } from "react";
import { Image1, Image2, Image3, Image4 } from "../../assets";

export default class ImageTopdf extends Component {
  pdfGenerate = () => {
    var doc = new jsPDF("portrait", "px", "a4", "false");
    doc.addImage(Image1, "JPG", 0, 0, 500, 707);
    doc.addPage();
    doc.addImage(Image2, "JPG", 0, 0, 500, 707);
    doc.addPage();
    doc.addImage(Image3, "JPG", 0, 0, 500, 707);
    doc.addPage();
    doc.addImage(Image4, "JPG", 0, 0, 500, 707);
    doc.save("Katalog Aice Cream.pdf");
  };
  render() {
    return (
      <div className="mx-auto -translate-y-24">
        <button
          onClick={this.pdfGenerate}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>
      </div>
    );
  }
}
