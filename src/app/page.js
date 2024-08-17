import Image from "next/image";
import ExperienceSection from "./experience";
import SkillsSection from "./skillbar";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      
      <div className="intro">
      <h1 className="text-5xl font-bold text-center">Hi! I'm Craig A!</h1>
      <br/>
      <h5 className="text-3xl">Conjurer of Code, Champion of Quality, Surfer of Waves</h5>
      </div>
      <br/>
      <br/>
      <div className="aboutMe mt-10 text-center w-2/3">
      <p className="text-1xl">
      I am a dedicated QA Analyst with over 2 years of experience in ensuring software quality and reliability. 
      My expertise lies in collaborating with diverse teams across national and international boundaries, thriving in remote work environments.
      </p>
      <br/>
      </div>
      <div className="experience">
        <ExperienceSection />
     
      </div>
      <div className="skills">
        <SkillsSection />
      </div>

    </main>
  );
}
