import IconBlock from "./iconBlock";
import { EmailSvg, LinkedinSvg, PhoneSvg } from "../../components/svg";

export default function ContactBlock() {
  return (
    <section className="flex justify-center gap-x-4 pt-8">
      <IconBlock svgComponent={EmailSvg} url="mailto:nauzet.aduen@gmail.com" />
      <IconBlock svgComponent={PhoneSvg} url="tel:+34685472601" />
      <IconBlock
        svgComponent={LinkedinSvg}
        url="https://www.linkedin.com/in/nauzet-aduen-hern%C3%A1ndez-hern%C3%A1ndez-036b4118b/"
      />
    </section>
  );
}
