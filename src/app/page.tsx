import MyAbout from "@/components/MyAbout";
import MyIntro from "@/components/MyIntro";
import MyProject from "@/components/MyProject";
import MySkill from "../components/MySkill";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-4">
        <MyIntro />
        <SectionDivider />
        <MyAbout />
        <MyProject />
        <MySkill />
      </main>
    </>
  );
}
