import React from "react";
import ProjectCard from "./projectcard";

export default function Projects() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-shadow-lg font-bold text-gray-300">
        Projects
      </h2>
      <div className="circle-gradient mt-10" />
      <div className="space-y-3 flex gap-5 flex-col mt-5">
        <ProjectCard
          title="Whistle"
          projectUrl="https://whistle.domain76.com"
          description="Service monitoring and incident response tool"
          imageUrl="/screenshots/whistle.png"
          buttonLink="https://whistle.domain76.com"
          buttonText="Website"
        />
        <ProjectCard
          title="Twilio Tools"
          projectUrl="https://twilio.domain76.com"
          description="Twilio API tools for developers"
          imageUrl="/screenshots/twilio-tools.png"
          buttonLink="https://twilio.domain76.com"
          buttonText="Website"
        />
      </div>
    </div>
  )
}