import React from "react";

interface plans {
  id: number;
  name: string;
  description: string;
  price: number;
}

function Plans() {
  const plans: plans[] = [
    {
      id: 1,
      name: "Silver",
      description:
        "u will have a zoom meting each friday -first feature - second feature -third feature",
      price: 100,
    },
    {
      id: 2,
      name: "Gold",
      description: "first feature - second feature -third feature",
      price: 200,
    },
    {
      id: 3,
      name: "Plat",
      description: "first feature - second feature -third feature",
      price: 250,
    },
  ];

  return (
    <div id="plans" className="bg_main_400 py-[var(--pd-lar)]">
      <div className="container_ max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="header_text_reverse text-center text-white text-4xl font-bold mb-10">
          Plans
        </h2>

        <div className="flex justify-evenly items-stretch flex-wrap gap-8 lg:gap-12">
          {plans?.map((p) => (
            <div
              key={p.id}
              className="w-[300px] md:w-[350px] lg:w-[400px] flex flex-col p-8 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="font-bold text-2xl md:text-3xl mb-4 text-center text-gray-800">
                {p.name}
              </h3>

              <ul className="mb-6">
                {p?.description?.split("-").map((d, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl text-gray-600 my-2 flex items-start"
                  >
                    <span className="text-main-400 font-bold mr-2">•</span>
                    {d}
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto">
                <span className="clr_main_400 font-bold text-2xl">
                  {p.price} <span>$</span>
                </span>
              </div>

              <button className="bg_main_700 text-white font-semibold mt-6 py-3 rounded-lg w-full hover:bg_main_400 transition-colors duration-300">
                Choose this Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
