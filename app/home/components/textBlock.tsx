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
      <span className="ease bg-gradient-to-tl from-cyan-500 to-red-800 bg-invisible0 bg-left-bottom bg-no-repeat font-bold duration-300 hover:bg-visible3">
        {highlightedText}
      </span>
      {parts[1]}
    </span>
  );
}
