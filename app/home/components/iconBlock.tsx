import Link from "next/link";

interface IconBlockParams {
  svgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
}

export default function IconBlock(props: IconBlockParams) {
  const { svgComponent: SvgComponent, url } = props;

  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      <SvgComponent />
    </Link>
  );
}
