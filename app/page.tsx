import TextBlock from "./home/components/textBlock";
import ContactBlock from "./home/components/contactBlock";
import Subtitle from "./home/components/subtitle";

export default function Home() {
  return (
    <div className="leading-loose">
      <section className="py-16 sm:py-36">
        <h1 className="text-2xl font-bold text-primary sm:pt-8 sm:text-5xl">
          Nauzet Hernández
        </h1>
        <h2 className="text-base italic text-gray-500 sm:text-lg">
          Software engineer and Flutter enthusiast
        </h2>
        <p className="py-8 text-justify text-lg leading-loose sm:py-16 sm:text-2xl">
          Hi there! I'm a developer with a passion for infusing creativity and
          humor into my work. I believe that a lighthearted approach can help
          make even the most challenging tasks more enjoyable and engaging.
        </p>
      </section>
      <section>
        <Subtitle text={"A little bit more"} />
        <div className="grid sm:grid-cols-2 sm:gap-12">
          <TextBlock
            text="I'm a software engineer with a passion for Flutter and a focus on front-end development."
            highlightedText="software engineer"
          />
          <TextBlock
            text="As someone who values teamwork and mental health, I strive to create healthy and productive environments for my colleagues."
            highlightedText="healthy and productive"
          />
          <TextBlock
            text="Currently, I'm based in Las Palmas, The Canary Islands, Spain, where I advocate for remote work as a way to balance productivity and flexibility."
            highlightedText="Las Palmas"
          />
          <TextBlock
            text="Outside of work, I enjoy playing the bass, practicing chess, and working out. Like everything else in life, these hobbies are a work in progress."
            highlightedText="hobbies"
          />
        </div>
      </section>
      <section className="py-16 sm:py-36">
        <Subtitle text={"Wanna chat?"} />
        <p className="text-justify text-base sm:text-xl">
          Whether you have a question, want to collaborate, or just want to say
          hi, don't hesitate to reach out. You can send me an email, give me a
          call or connect with me on LinkedIn using the links below. Looking
          forward to hearing from you!
        </p>
        <ContactBlock />
      </section>
    </div>
  );
}
