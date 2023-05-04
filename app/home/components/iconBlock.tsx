import Link from "next/link";
import { useCallback } from "react";

interface IconBlockParams {
  svgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  url: string;
}

export default function IconBlock(props: IconBlockParams) {
  const { svgComponent: SvgComponent, text, url } = props;

  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      <div className=" text-center ">
        <SvgComponent />
        <p className="inline-block m-2">{text}</p>
      </div>
    </Link>
  );
}
