import Hero from "@/components/Hero";
import Finds from "@/components/Finds";
import Story from "@/components/Story";
import Press from "@/components/Press";
import Shop from "@/components/Shop";
import Follow from "@/components/Follow";

// Six sections, one scroll, no router and no nav bar — the brief caps it here.
// If a seventh ever looks tempting, it goes to Marcin as a question, not into
// this file.
export default function Page() {
  return (
    <main>
      <Hero />
      <Finds />
      <Story />
      <Press />
      <Shop />
      <Follow />
    </main>
  );
}
