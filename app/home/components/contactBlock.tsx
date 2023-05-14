import IconBlock from "./iconBlock";
import email from "../../assets/svg/email.svg";
import phone from "../../assets/svg/phone.svg";
import linkedin from "../../assets/svg/linkedin.svg";

export default function ContactBlock() {
  return (
    <section className="flex justify-center gap-x-4 pb-16 pt-8">
      <IconBlock svgComponent={email} url="mailto:nauzet.aduen@gmail.com" />
      <IconBlock svgComponent={phone} url="tel:+34685472601" />
      <IconBlock
        svgComponent={linkedin}
        url="https://www.linkedin.com/in/nauzet-aduen-hern%C3%A1ndez-hern%C3%A1ndez-036b4118b/"
      />
    </section>
  );
}
