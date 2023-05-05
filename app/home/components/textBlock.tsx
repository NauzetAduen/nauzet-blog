import AnimatedBgText from "@/app/components/animatedBgText";

interface TextBlockParams {
  text: string;
  highlightedText: string;
}

export default function TextBlock(props: TextBlockParams) {
  const { text, highlightedText } = props;
  const parts = text.split(highlightedText);
  return (
    <span className="mb-8 text-justify text-xl">
      {parts[0]}
      <AnimatedBgText text={highlightedText} />
      {parts[1]}
    </span>
  );
}
