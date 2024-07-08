import { Benefits } from "./_components/Benefits";
import { Contact } from "./_components/Contact";
import Hero from "./_components/Hero";
import ProgressBarsSection from "./_components/ProgressSection";
import UsersCard from "./_components/UsersCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProgressBarsSection />
      <Benefits />
      <UsersCard />
      <Contact />
    </div>
  );
}
