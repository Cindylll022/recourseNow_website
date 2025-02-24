import { useGSAP } from "@gsap/react";
import { aiImg, arrowldImg, arrowllImg, arrowrdImg, arrowrlImg, humanImg, scaleImg } from "../utils"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/animations";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    useGSAP(() => {
        gsap.to('#aiSpinner', {
            rotation: 360,
            duration: 2,
            ease: 'power2.inOut',
            repeat:-1
        })
        animateWithGsap('.arrowcardLT', {
            x: -500,
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut',
        })
        animateWithGsap('.arrowcardLB', {
            x: -500,
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut',
            delay:0.3,
        })
        animateWithGsap('.arrowcardRT', {
            x: 500,
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut',
        })
        animateWithGsap('.arrowcardRB', {
            x: 500,
            duration: 1,
            opacity: 0,
            delay:0.3,
            ease: 'power2.inOut',})
        animateWithGsap('#aboutus_title', {opacity:1,  duration:2})

    }, [])
  return (
    <section className = "w-screen overflow-hidden h-full py-12">
        <div className = "px-36 py-20 bg-blue-600">
            <h1 id="aboutus_title" className = "section-heading">About Us</h1>
        </div>
        <div className = "flex flex-row justify-between">
            <div className = "flex flex-col items-start overflow-hidden relative">
            <div className = "relative">
                    <img src = {arrowllImg} alt = "arrowcard" width = {400}  className = "arrowcardsL"/>
                    <p className="aboutUsTextSmall z-10 absolute top-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .</p>
                    <img src = {arrowldImg} alt = "arrowcard"  className = "arrowcardLT arrowcardsL absolute z-10 top-0 left-0 block m-0 object-cover object-right w-[350px] h-[200px]"/>
                    <h1 className = "aboutUsTitleSmall z-30 absolute top-16 left-36 arrowcardLT">AI</h1>
                </div>
                <div className = "relative">
                    <img src = {arrowllImg} alt = "arrowcard" width = {500}  className = "arrowcardsL relative"/>
                    <p className="aboutUsTextBig z-10 absolute top-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src = {arrowldImg} alt = "arrowcard"  className = "arrowcardLB arrowcardsL absolute z-20 top-0 left-0 block m-0 object-cover object-right w-[450px] h-[250px]"/>
                    <h1 className = "aboutUsTitleBig z-30 absolute top-24 left-24 arrowcardLB">Recourse</h1>
                </div>
            </div>
            <div className = "relative">
                <img src = {scaleImg} alt = "scale" width = {500}/>
                <img src = {aiImg} alt = "ai" id = "aiSpinner" className="absolute z-10 top-56 left-12"/>
                <h1 className="text-2xl absolute z-20 top-60 left-16 font-semibold text-blue-500 translate-x-2 translate-y-1">AI</h1>
                <img src = {humanImg} alt = "human" className="absolute z-10 top-56 left-96"/>
            </div>
            
            <div className = "flex flex-col items-end overflow-hidden relative">
            <div className = "relative">
                    <img src = {arrowrlImg} alt = "arrowcard" width = {400}  className = "arrowcardsL"/>
                    <p className="aboutUsTextSmall z-10 absolute top-5 left-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .</p>
                    
                    <img src = {arrowrdImg} alt = "arrowcard" className = "arrowcardRT arrowcardsL absolute z-10 top-0 left-10 block m-0 object-cover object-left w-[350px] h-[200px]"/>
                    <h1 className = "aboutUsTitleSmall z-30 absolute top-16 left-40 arrowcardRT  ">Law</h1>
                </div>
                <div className = "relative">
                    <img src = {arrowrlImg} alt = "arrowcard" width = {500}  className = "arrowcardsL relative"/>
                    <p className="aboutUsTextBig  z-10 absolute top-8 left-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src = {arrowrdImg} alt = "arrowcard"  className = "arrowcardRB arrowcardsL absolute z-10 top-0 left-10 block m-0 object-cover object-left w-[450px] h-[250px]"/>
                    <h1 className = "aboutUsTitleBig z-30 absolute top-24 left-36 arrowcardRB">Privacy</h1>
                </div>
            </div>
        </div>
        


    </section>
  )
}

export default AboutUs