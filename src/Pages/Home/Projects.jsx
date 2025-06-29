import React from "react";
import "./../../assets/styles/Projects.scss";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { assets } from "@/assets/assets";

const projects = [
    {
        title: "Project One",
        description: "This is a description of Project One.",
        image: assets.p1,
    },
    {
        title: "Project Two",
        description: "This is a description of Project Two.",
        image: assets.p2,
    },
    {
        title: "Project Three",
        description: "This is a description of Project Three.",
        image: assets.p3,
    },
    {
        title: "Project Four",
        description: "This is a description of Project Four.",
        image: assets.p4,
    },
    {
        title: "Project Five",
        description: "This is a description of Project Five.",
        image: assets.p1,
    },
];

const Projects = () => {
    return (
        <div className="wrapper-project-section flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="project-heading text-3xl font-bold">My Projects</h2>
                <p className="get-to-know mt-2 mb-4 bg-gradient-to-r from-sky-400 to-slate-50 bg-clip-text text-transparent">
                    Some of my recent works
                </p>
            </div>


            <Carousel className="w-full max-w-3xl">
                <CarouselContent className="-ml-1">
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-2">
                                <Card className="boxes">
                                    <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                        <h3 className="text-lg font-semibold">{project.title}</h3>
                                        <p className="text-sm text-gray-500 text-center">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Projects;
