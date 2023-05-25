interface AnimatedBgTextParam {
  text: string;
}

export default function AnimatedBgText(param: AnimatedBgTextParam) {
  return (
    <span className="ease bg-gradient-to-tl from-secondary to-primary bg-invisible0 bg-left-bottom bg-no-repeat font-bold duration-300 hover:bg-visible3">
      {param.text}
    </span>
  );
}
