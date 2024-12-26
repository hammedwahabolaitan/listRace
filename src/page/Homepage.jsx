import React from "react";
import Header from "../assets/components/Header";
import Hero from "../assets/components/Hero";
import Section from "../assets/components/Section";
import Main from "../assets/components/Main";
import Review from "../assets/components/Review";
import Blog from "../assets/components/Blog";
import Contact from "../assets/components/Contact";

export default function Homepage() {
  return (
    <div>
      <Header />
      
      <Hero />

      <div className=" ">
      <Section />

      </div>
      <div id="explore" className="mb-[33%]">
      <Main/>
</div>
      <Review />
      

      <div className="App">
            <h1 className="text-center text-3xl font-bold my-8"></h1>
      <Blog />
        </div>
            <Contact />

    </div>
  );
}
