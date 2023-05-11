import Image from "next/image";
import Link from "next/link";

interface IconBlockParams {
  svgComponent: string;
  url: string;
}

export default function IconBlock(props: IconBlockParams) {
  const { svgComponent, url } = props;

  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      <Image src={svgComponent} alt={svgComponent} width={24} height={24} />
    </Link>
  );
}
