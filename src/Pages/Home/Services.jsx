import React, { useRef, useState, useEffect } from "react";
import "./../../assets/styles/Services.scss";
import "./../../assets/styles/Animation.scss";
import { assets } from "@/assets/assets";

const FadeInSection = ({ children, animationClass }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stops observing once animated
        }
      },
      { threshold: 0.3 }, // Adjust threshold if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={isVisible ? animationClass : "opacity-0"}>
      {children}
    </div>
  );
};

const Services = () => {
  return (
    <div className="wrapper-services-section">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="services-heading text-3xl font-bold">What I do</h2>
        <p className="get-to-know mt-2 mb-4 bg-gradient-to-r from-sky-400 to-slate-50 bg-clip-text text-transparent">
          Services
        </p>
      </div>
      <div className="flex item-center justify-center">
        <div className="grid grid-cols-3 gap-6 p-4">
          {/* 1st Box */}
          <FadeInSection animationClass="animation-fadein">
            <div className="boxes w-70 h-70 flex items-center justify-center dark:border border-[#2B2B2B]">
              <div className="flex flex-col items-center text-center justify-center">
                <img className="pb-4" src={assets.servicesIcon} alt="" />
                <h3 className="text-xl pb-4">Full Stack</h3>
                <p className="w-3xs">
                  Build scalable and high-performance web applications from
                  front to back. I create seamless integrations between
                  responsive frontends and powerful backend systems, ensuring
                  speed, security, and reliability.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 2nd Box */}
          <FadeInSection animationClass="animation-fadeinleft">
            <div className="boxes w-70 h-70 flex items-center justify-center dark:border border-[#2B2B2B]">
              <div className="flex flex-col items-center text-center justify-center">
                <img className="pb-4" src={assets.servicesIcon} alt="" />
                <h3 className="text-xl pb-4">Cloud & DevOps</h3>
                <p className="w-3xs">
                  Deploy, manage, and scale applications using cloud platforms
                  like AWS. I handle hosting, CI/CD pipelines, server
                  optimization, and secure infrastructure for smooth and
                  efficient performance.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 3rd Box */}
          <FadeInSection animationClass="animation-fadeinright">
            <div className="boxes w-70 h-70 flex items-center justify-center dark:border border-[#2B2B2B]">
              <div className="flex flex-col items-center text-center justify-center">
                <img className="pb-4" src={assets.servicesIcon} alt="" />
                <h3 className="text-xl pb-4">UI/UX Design</h3>
                <p className="w-3xs">
                  Design intuitive and engaging user experiences with a focus on
                  usability and accessibility. I craft clean, modern interfaces
                  that enhance interaction and user satisfaction.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 4th Box */}
          <FadeInSection animationClass="animation-fadeinup">
            <div className="boxes w-70 h-70 flex items-center justify-center dark:border border-[#2B2B2B]">
              <div className="flex flex-col items-center text-center justify-center">
                <img className="pb-4" src={assets.servicesIcon} alt="" />
                <h3 className="text-xl pb-4">Graphic Design</h3>
                <p className="w-3xs">
                  Create impactful visual designs for branding, marketing, and
                  digital platforms. From logos to social media assets, I ensure
                  strong and consistent visual identity.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 5th Box */}
          <FadeInSection animationClass="animation-fadeindown">
            <div className="boxes w-70 h-70 flex items-center justify-center dark:border border-[#2B2B2B]">
              <div className="flex flex-col items-center text-center justify-center">
                <img className="pb-4" src={assets.servicesIcon} alt="" />
                <h3 className="text-xl pb-4">Video Editing</h3>
                <p className="w-3xs">
                  Produce and edit high-quality video content with smooth
                  transitions, color grading, and storytelling techniques that
                  capture attention and deliver clear messages.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 6th Box */}
          <FadeInSection animationClass="animation-fadeinright">
            <div className="boxes w-70 h-70 flex items-center justify-center dark:border border-[#2B2B2B]">
              <div className="flex flex-col items-center text-center justify-center">
                <img className="pb-4" src={assets.servicesIcon} alt="" />
                <h3 className="text-xl pb-4">SEO</h3>
                <p className="w-3xs">
                  Optimize websites for better visibility, faster load times,
                  and higher search rankings. I focus on technical SEO, on-page
                  optimization, and performance improvements to drive organic
                  growth.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Services;
