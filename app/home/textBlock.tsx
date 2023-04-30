interface TextBlockParams {
  text: string;
  highlightedText: string;
}

export default function TextBlock(props: TextBlockParams) {
  const { text, highlightedText } = props;
  const parts = text.split(highlightedText);
  return (
    <span className="my-8 border-solid border-2 border-indigo-600 ">
      {parts[0]}
      <span className="font-bold bg-gradient-to-tl from-cyan-500 to-red-800 bg-invisible0 bg-no-repeat bg-left-bottom hover:bg-visible3 ease duration-300">
        {highlightedText}
      </span>
      {parts[1]}
    </span>
  );
}
