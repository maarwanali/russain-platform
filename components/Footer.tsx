import React from "react";
import map from "@/public/world-map.svg";
import Image from "next/image";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";

function Footer() {
  return (
    <div className="bg-[var(--clr-font-700)] clr_white_300 py-[var(--pd-mid)] lg:py-2">
      <div className="container_ flex lg:flex-row flex-col justify-between items-center min-h-60">
        <div className="flex flex-wrap justify-between items-start w-[100%] lg:w-[60%] p-4  sm:pb-5  ">
          <div className=" p-2">
            {/* logo */}
            <h1 className="logomd:px-1 font-bold my-2 text-2xl">RusFluency</h1>
            <p className="mt-1">© 2024 Marwan ali,</p>
            <p className="ml-1">All rights reserved </p>
          </div>
          <div className="p-2">
            <h2 className="my-2">CONTACTS</h2>
            <p className="">
              <span className="font-bold">E-mail: </span> nbogdanova17@gmail.com
            </p>
            <p>
              <span className="font-bold">Phone: </span> +375 256 123 097
            </p>
          </div>
          <div className="p-2">
            <h2 className="my-2">FOLLOW ME</h2>
            <div className="flex gap-3 my-2 flex_center">
              <span>
                <SlSocialInstagram size={24} />
              </span>
              <span>
                <SlSocialFacebook size={24} />{" "}
              </span>
            </div>
          </div>
        </div>

        <Image src={map} width={300} alt="All over the world" className="" />
      </div>
    </div>
  );
}

export default Footer;
