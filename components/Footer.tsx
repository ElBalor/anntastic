"use client";
import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-row m-5 justify-between text-cyan-500">
      <FaWhatsappSquare size={30} />
      <FaFacebookSquare size={30} />
      <FaInstagramSquare size={30} />
    </div>
  );
};

export default Footer;
