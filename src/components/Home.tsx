import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyPortfolio from "./MyPortfolio";
import Testimonial from "./Testimonials";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <MySkills/>
            <MyPortfolio/>
            <AboutMe/>
            <Testimonial/>
            <Footer/>
        </>
    );
}
