import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../contants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="xl:padding-1  padding-b">
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pb-10">
          <p className="text-coral-red font-montserrat">Our Summer Selection</p>
          <h1
            className="mt-10 font-palanquin max-sm:text-[72px] text-[82px] leading-[100px] 
        max-sm:leading-[82px]
        font-bold"
          >
            <span className="xl:bg-white xl:whitespace-nowrap z-20 pr-28 relative ">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray max-sm:text-[20px] mt-6 mb-16 leading-8 text-lg sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop now" iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className=" font-montserrat text-slate-gray text-lg ">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex-1 relative flex justify-center
         items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        >
          <img
            src={bigShoeImg}
            alt="ShoeCollection"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                  bigShoeImage={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
