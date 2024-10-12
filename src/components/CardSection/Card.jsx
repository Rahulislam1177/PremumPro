import React, { useState } from "react";

export default function Card() {
  const CardsDatas = [
    {
      id: 1,
      img: "../../../public/images/Cards1.png",
      name: "SPANISCHER CAVIAR",
      designation: `Willkommen in der Welt
       des aussergewöhnlichen Geschmacks`,
      description: `mit unserem erstklassigen geschlachteten schwarzen Caviar. Dieser herrliche Kaviar hat eine unvergleichliche Qualität, die ihn zu einem wahren kulinarischen Meisterwerk macht.Jeder winzige Caviar wird sorgfältig von Hand nach Größe ausgewählt, um die perfekte Kombination aus Geschmack und Textur zu gewährleisten.      Die zarten Wände des Caviars lassen Sie den reichen Kaviargeschmack sofort erleben und sein Premiumstatus unterstreicht den höchsten Qualitätsstandard. Tauchen Sie mit unserem geschlachteten schwarzen Caviar in die raffinierte Welt der Premiumgastronomie ein – es ist nicht nur Caviar, es ist die Verkörperung von Pracht auf Ihrem Tisch.`,
      botton: "Mehr Informationen",
    },
    {
      id: 2,
      img: "../../../public/images/Cards2.png",
      name: "SCHWEIZER CAVIAR",
      designation:
        "Hier kommt die Reinheit dieses Caviars besonders zur Geltung.",
      description: `Mit einem Salzanteil von maximal 3,5 Prozent ist er leicht gesalzen und entwickelt sein nussiges, charaktervolles Aroma bestens. Zudem zeichnen die homogene Farbgebung und das runde Korn diesen Caviar aus`,
      botton: "Mehr Informationen",
    },
    {
      id: 3,
      img: "../../../public/images/Cards3.png",
      name: "WEISSER CAVIAR",
      designation:
        "Hammerstein 1870 aus Cham gehört zu den wenigen exklusiven Produzenten dieses „weissen Goldes“.",
      description: `Der Caviar wird von Hand geerntet, sorgfältig gereinigt und behutsam mild gesalzen – ein reines Naturprodukt, frei von Farbstoffen und Konservierungsmitteln. Für unsere Kunden wird der weisse Caviar von Hammerstein 1870 stets frisch hergestellt Weisser Caviar vom Albino-Stör zählt zu den exklusivsten Luxusgütern der Welt. Mit einer weltweiten Jahresproduktion von lediglich 8 kg gehört diese Delikatesse zu den seltensten Genüssen.`,
      botton: "Mehr Informationen",
    },
  ];

  return (
    <div className=" py-[100px] ">
      <div className="container mx-auto px-2 lg:px-[100px]">
        <div className="flex  justify-center flex-col">
          {CardsDatas?.map((datas, i) => (
            <div key={i} className="w-full  bg-white rounded-lg  mt-32">
              <div className="md:flex justify-evenly">
                <div>
                  <h1 className="md:pl-20 text-center lg:text-3xl text-xl font-bold text-[#efc78c]  mb-5">
                    {datas.name}
                  </h1>
                  <img
                    className=" md:w-[700px] text-justify w-[300px] m-auto  lg:mr-28 "
                    src={datas?.img}
                    alt=""
                  />
                </div>

                <div className="bg-white w-full py-5  md:px-20 p-auto lg:pl-56 md:pl-10 md:text-justify text-center">
                  <h4 className=" md:text-lg text-md  font-semibold  m-auto text-slate-500 ">
                    {datas?.designation}
                  </h4>
                  <p className="mt-4  text-slate-500 md:leading-7 m-auto leading-2">
                    {datas?.description}
                  </p>
                  <button className="w-48  h-10 mt-10 rounded-full bg-[#eec78c] font-semibold text-white">
                    {datas.botton}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
