import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from 'next/image'
import {
  React,
  NextJS,
  Angular,
  Express,
  MongoDB,
  NodeJS,
  MySQL,
  Java,
  JSicon,
  htmlicon,
  cssicon,
  Pythn
} from "../_logos/";

// Local Data
import data from "../yourData";
import { reactStrictMode } from "../next.config";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mob:mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-8xl mob:text-3xl laptop:text-6xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-8xl mob:text-3xl laptop:text-6xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-8xl mob:text-3xl laptop:text-6xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-8xl mob:text-3xl laptop:text-6xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
        </div>

        <div
          className="mt-40 mob:mt-2 laptop:mt-7 mob:p-2 laptop:p-0"
          ref={aboutRef}
        >
          <h1 className="text-4xl text-bold">About Me 💻:</h1>
          <div className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-2xl w-3/5 mob:w-full laptop:w-3/5 ">
            🎓 I completed my Bachelors of Computer Science from the University of Connecticut, Go Huskies!
            <div className="mt-40 mob:mt-2 laptop:mt-5 mob:p-2 laptop:p-0"> 🧍🏻‍♂️ I am currently a software engineer with around 3 year of industry experience in full stack web development.</div>
            <div className="mt-40 mob:mt-2 laptop:mt-5 mob:p-2 laptop:p-0"> 👨‍💻 Some of the technologies I use frequently: </div>
            <div className="mt-40 mob:mt-2 laptop:mt-7 mob:p-2 laptop:p-0">
            <div style={{ display: "inline-block", paddingRight: "20px" }}>
                  <Image src={JSicon} width={100} height={100} />
                </div>
                <div style={{ display: "inline-block", paddingRight: "20px" }}>
                  <Image src={Pythn} width={100} height={100} />
                </div>
                <div style={{ display: "inline-block", paddingRight: "20px" }}>
                  <Image src={React} width={100} height={100} />
                </div>
                <div style={{ display: "inline-block", paddingRight: "20px" }}>
                  <Image src={Angular} width={100} height={100} />
                </div>
                <div style={{ display: "inline-block", paddingRight: "20px" }}>
                  <Image src={NodeJS} width={100} height={100} />
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
