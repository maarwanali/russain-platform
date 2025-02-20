import Image from "next/image";
import React from "react";
import about_1 from "@/public/images/about_4.jpg";
import about_2 from "@/public/images/about_7.jpg";

function About() {
  return (
    <div
      id="about"
      className="py-[var(--pd-lar)] flex flex-col justify-center items-center gap-9 px-4 md:px-8 lg:px-16"
    >
      <h2 className="header_text">About Me</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 flex-wrap lg:flex-nowrap">
        <Image
          src={about_1}
          alt="About Image"
          className="polaroid w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px]"
          width={700} // Adjust width for responsiveness
        />
        <p className="text-base md:text-lg lg:text-xl text-justify max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          minima nemo rerum fuga excepturi blanditiis amet eaque nostrum minus
          cupiditate laboriosam pariatur, cum consequuntur, hic nesciunt
          assumenda perferendis quis incidunt?
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 flex-wrap-reverse lg:flex-nowrap">
        <p className="text-base md:text-lg lg:text-xl text-justify max-w-[90%] md:max-w-[60%] lg:max-w-[50%] h-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptatem sapiente repudiandae, ipsam quisquam aut sint itaque
          obcaecati vitae ad odio illum, corrupti fuga eius porro!
          Necessitatibus placeat praesentium blanditiis.
        </p>
        <Image
          src={about_2}
          alt="About Image"
          className="polaroid w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] h-auto"
          width={700} // Adjust width for responsiveness
        />
      </div>
    </div>
  );
}

export default About;
