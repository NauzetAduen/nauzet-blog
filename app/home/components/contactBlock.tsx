import IconBlock from "./iconBlock";
import { EmailSvg, LinkedinSvg, PhoneSvg } from "../../components/svg";

export default function ContactBlock() {
  return (
    <div className="grid grid-cols-3 gap-6 pt-4">
      <IconBlock
        svgComponent={EmailSvg}
        text="nauzet.aduen@gmail.com"
        url="mailto:nauzet.aduen@gmail.com"
      />
      <IconBlock
        svgComponent={PhoneSvg}
        text="(+34) 685472601"
        url="tel:+34685472601"
      />
      <IconBlock
        svgComponent={LinkedinSvg}
        text="PM me!"
        url="https://www.linkedin.com/in/nauzet-aduen-hern%C3%A1ndez-hern%C3%A1ndez-036b4118b/"
      />
    </div>
  );
}
