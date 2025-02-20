import Image from "next/image";
import coverImage from "@/public/images/cover_3.jpg";
import About from "@/components/About";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="">
      {/* Cover image with a light red overlay */}
      <div className="relative w-full h-[700px] ">
        <Image
          src={coverImage}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          className="z-10 "
        />
        <div className="absolute inset-0  z-20 bg-black opacity-50"></div>
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-4xl font-bold">Let's Fluense Russian with Me</h2>
          <p className="text-xl mt-4">
            Using the most efficient ways to learn Russian
          </p>
        </div>
      </div>
      {/* About Me  */}
      <About />

      {/* Plans */}
      <Plans />

      {/* Reviews */}
      <Reviews />
    </main>
  );
}
