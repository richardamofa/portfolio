import { useSeo } from "../lib/useSeo";
import AboutTeaser from "../sections/AboutTeaser";
import Capabilities from "../sections/Capabilities";
import ContactCTA from "../sections/ContactCTA";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import OpenSource from "../sections/OpenSource";
import Ownership from "../sections/Ownership";
import Principles from "../sections/Principles";
import SelectedWork from "../sections/SelectedWork";
import Systems from "../sections/Systems";

export default function Home() {
  useSeo({
    title: "Richard Amofa",
    description:
      "Software engineer and systems architect. I build the systems behind ambitious digital products — architecture, backend engineering, and technical ownership from idea to production.",
  });

  return (
    <>
      <Hero />
      <Ownership />
      <SelectedWork />
      <Systems />
      <Principles />
      <Capabilities />
      {/*<ThinkingPreview />*/}
      <AboutTeaser />
      <Experience />
      <OpenSource />
      <ContactCTA />
    </>
  );
}
