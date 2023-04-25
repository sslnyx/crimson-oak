import React from "react";
import HomeHero from "../components/HomeHero";
import bike from "../assets/img/home/bike-sr.jpeg";
import desk from "../assets/img/home/overview-desk-sr.jpeg";
import land from "../assets/img/home/overview-land-sr.jpeg";
import c1 from "../assets/img/home/c1.jpeg";
import c2 from "../assets/img/home/c2.jpeg";
import c3 from "../assets/img/home/retail-sr-3.png";
import CommunityCard from "../components/CommunityCard";
import { Link } from "react-router-dom";

const Home = () => {
  const communities = [
    {
      src: c1,
      title: "townhomes",
      selling: true,
    },
    {
      src: c2,
      title: "condos",
    },
    {
      src: c3,
      title: "retail",
    },
  ];
  return (
    <div>
      <HomeHero />
      <section className="container">
        <div className="flex flex-wrap py-[50px] items-center">
          <div className="md:basis-1/2">
            <img src={bike} />
          </div>
          <div className="md:basis-1/2 p-10">
            <h1>Cultivated Living in South Surrey</h1>
            <p>
              Welcome to Crimson Oak, a contemporary parkside community of
              townhomes, condos, and retail in South Surrey. Nestled within a
              quiet tree-lined enclave across from a future park, while enjoying
              easy access to transit routes and everyday amenities, the homes at
              Crimson Oak are rooted in the best of modern living.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray w-full h-full absolute top-24"></div>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="basis-full md:basis-1/2">
              <img className="pt-10" src={desk} alt="" />
            </div>
            <div className="relative basis-full md:basis-1/2 p-10 bg-primary-dark text-white">
              <h2 className="mb-5 text-xl">
                Inspired Living,
                <br /> Both Inside and Out
              </h2>
              <p>
                    At Crimson Oak you’ll find a home where comfort goes
                hand-in-hand with luxury, where spacious floorplans are accented
                by innovative design features, and where everything you need to
                grow and flourish is at your fingertips. Offering a unique array
                of family-oriented townhomes and condos, centred around a shared
                community amenity building, there’s something for everyone here.
              </p>
              <div className="absolute right-0 bottom-0 bg-primary py-1 px-3">
                <Link to="/register#register">
                  <span>Be the first to know</span>
                </Link>
              </div>
            </div>
            <div className="basis-full">
              <img className="min-h-[300px] md:h-[400px]" src={land} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray w-full h-full absolute top-0"></div>
        <div className="container py-10">
          <h2 className="text-primary-dark text-center text-3xl font-normal mb-10">
            Flourish in this Parkside Community
          </h2>

          <div className="flex flex-wrap -mx-1">
            {communities.map((props, i) => (
              <CommunityCard key={i} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
