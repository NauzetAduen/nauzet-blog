interface SubtitleParams {
  text: string;
}

export default function Subtitle(params: SubtitleParams) {
  return <h3 className="pb-4 text-xl font-bold sm:text-3xl">{params.text}</h3>;
}
