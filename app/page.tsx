import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Finds from "@/components/Finds";
import Story from "@/components/Story";
import Press from "@/components/Press";
import Shop from "@/components/Shop";
import Follow from "@/components/Follow";

// Six sections, one scroll, no router. If a seventh ever looks tempting, it
// goes to Marcin as a question, not into this file.
//
// The nav bar is Marcin's, added after the fact — the two comments that used to
// say the brief forbade one were wrong: DATOS.md never mentions navigation. It
// sits outside <main> because it is a site landmark, not page content.
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Finds />
        <Story />
        <Press />
        <Shop />
        <Follow />
      </main>
    </>
  );
}
