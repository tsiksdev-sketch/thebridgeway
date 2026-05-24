

import { Hero } from "./hero";
import { Programs } from "./programs";
import { Supports } from "./supports";
import { Staff } from "./staff";
import { Resources } from "./resources";
import { Visit } from "./visit";
import Gallery from "./gallery";



export default function Main() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[var(--brand-blue)] focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <main id="main">
        <Hero />
        <Gallery />
        <Programs />
        <Supports />
        <Staff />
        <Resources />
        <Visit />
      </main>
    
    </div>
  );
}