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
            { threshold: 0.3 } // Adjust threshold if needed
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
                        <div className="boxes w-80 h-80 flex items-center justify-center dark:border border-[#2B2B2B]">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="pb-4" src={assets.servicesIcon} alt="" />
                                <h3 className="text-2xl pb-4">Web Development</h3>
                                <p className="text-xs w-3xs">
                                    From data inception to actionable insights, I design
                                    compelling analytics and visualization solutions that
                                    illuminate trends, empower decision-making, and drive your
                                    business forward.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* 2nd Box */}
                    <FadeInSection animationClass="animation-fadeinleft">
                        <div className="boxes w-80 h-80 flex items-center justify-center dark:border border-[#2B2B2B]">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="pb-4" src={assets.servicesIcon} alt="" />
                                <h3 className="text-2xl pb-4">UI/UX Designer</h3>
                                <p className="text-xs w-3xs">
                                    From data inception to actionable insights, I design
                                    compelling analytics and visualization solutions that
                                    illuminate trends, empower decision-making, and drive your
                                    business forward.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* 3rd Box */}
                    <FadeInSection animationClass="animation-fadeinright">
                        <div className="boxes w-80 h-80 flex items-center justify-center dark:border border-[#2B2B2B]">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="pb-4" src={assets.servicesIcon} alt="" />
                                <h3 className="text-2xl pb-4">Graphic Designer</h3>
                                <p className="text-xs w-3xs">
                                    From data inception to actionable insights, I design
                                    compelling analytics and visualization solutions that
                                    illuminate trends, empower decision-making, and drive your
                                    business forward.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* 4th Box */}
                    <FadeInSection animationClass="animation-fadeinup">
                        <div className="boxes w-80 h-80 flex items-center justify-center dark:border border-[#2B2B2B]">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="pb-4" src={assets.servicesIcon} alt="" />
                                <h3 className="text-2xl pb-4">Video Editing</h3>
                                <p className="text-xs w-3xs">
                                    From data inception to actionable insights, I design
                                    compelling analytics and visualization solutions that
                                    illuminate trends, empower decision-making, and drive your
                                    business forward.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* 5th Box */}
                    <FadeInSection animationClass="animation-fadeindown">
                        <div className="boxes w-80 h-80 flex items-center justify-center dark:border border-[#2B2B2B]">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="pb-4" src={assets.servicesIcon} alt="" />
                                <h3 className="text-2xl pb-4">Server Management</h3>
                                <p className="text-xs w-3xs">
                                    From data inception to actionable insights, I design
                                    compelling analytics and visualization solutions that
                                    illuminate trends, empower decision-making, and drive your
                                    business forward.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* 6th Box */}
                    <FadeInSection animationClass="animation-fadeinright">
                        <div className="boxes w-80 h-80 flex items-center justify-center dark:border border-[#2B2B2B]">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="pb-4" src={assets.servicesIcon} alt="" />
                                <h3 className="text-2xl pb-4">Web Development</h3>
                                <p className="text-xs w-3xs">
                                    From data inception to actionable insights, I design
                                    compelling analytics and visualization solutions that
                                    illuminate trends, empower decision-making, and drive your
                                    business forward.
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
