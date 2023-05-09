import TextBlock from "./home/components/textBlock";
import ContactBlock from "./home/components/contactBlock";

export default function Home() {
  return (
    <div>
      <h1 className="pt-8 text-5xl font-bold">Nauzet Hernández</h1>
      <h2 className="text-lg italic text-gray-500">
        Software engineer and Flutter enthusiast
      </h2>
      <p className="py-16 text-justify text-2xl">
        I enjoy combining humor and programming to create innovative solutions.
      </p>
      <section className="py-16">
        <h3 className="pb-4 text-3xl font-bold">A little bit more</h3>
        <div className="grid grid-cols-2 gap-12">
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
      <section className="py-16">
        <h3 className="pb-4 text-3xl font-bold">Wanna chat?</h3>
        <p className="text-justify text-xl">
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, don't hesitate to reach out. You
          can send me an email, give me a call or connect with me on LinkedIn
          using the links below. Looking forward to hearing from you!
        </p>
        <ContactBlock />
      </section>
    </div>
  );
}
