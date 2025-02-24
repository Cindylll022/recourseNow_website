import { useGSAP } from "@gsap/react"
import { glowcircleImg, nowImg, recourseImg } from "../utils"
import Navbar from "./Navbar"
import gsap from "gsap"

const Hero = () => {
  const tl1= gsap.timeline({
    repeat:-1
  });
  const tl2= gsap.timeline({
    repeat:-1
  });
  const tl3= gsap.timeline({
    repeat:-1
  });

  useGSAP(() => {
    tl1.to("#glow1",{
      y:-200,
      x:-500,
      rotation:90,
      duration:3
    })
    tl1.to("#glow1",{
      y:400,
      x:-300,
      scale: 0.5,
      duration:2,
      rotation:180
    })
    tl1.to("#glow1",{
      y:0,
      x:0,
      scale: 1,
      duration:2,
      rotation:90
    })

    tl2.to("#glow2",{
      y:200,
      x:200,
      rotation:90,
      duration:3
    })
    tl2.to("#glow2",{
      y:-400,
      x:300,
      scale: 1.2,
      duration:2,
      rotation:180
    })
    tl2.to("#glow2",{
      y:0,
      x:0,
      scale: 1,
      duration:2,
      rotation:90
    })
    tl3.to("#glow3",{
      y:400,
      x:550,
      rotation:90,
      duration:3,
      opacity:0.3
    })
    tl3.to("#glow3",{
      y:-250,
      x:1200,
      scale: 1.2,
      duration:2,
      rotation:180,
      opacity:0.7
    })
    tl3.to("#glow3",{
      y:0,
      x:0,
      scale: 1,
      duration:2,
      rotation:90,
      opacity:1
    })
    
    gsap.to('#recourseImg', {
      opacity:1,
      delay:1
    })
    gsap.to('#nowImg', {
      opacity:1,
      y: -20,
      delay:1.5,
      ease: 'power2.inOut'
    })

  },[])
  return (
    <section className = "w-full nav-height bg-herobg bg-cover relative">
      <img src = {glowcircleImg} alt="glow" id="glow1" width = {700} className = "absolute"/>
      <img src = {glowcircleImg} alt="glow" id="glow2" width = {500} className = "absolute left-[1200px] top-96"/>
      <img src = {glowcircleImg} alt="glow" id="glow3" width = {200} className = "absolute left-[320px] top-[196px]"/>
        <nav className = "flex w-full ">
            <div></div>
            <Navbar />
        </nav>
        <div className="h-5/6 w-full flex flex-col items-center gap-0 mt-11">
            <img
              src={recourseImg}
              alt="recourse"
              id = "recourseImg"
            />
            <img
              src={nowImg}
              alt="now"
              id = "nowImg"
            />
          </div>



        
        
    </section>
  )
}

export default Hero