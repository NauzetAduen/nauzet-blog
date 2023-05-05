interface TagListParam {
  tags: string[];
}

export default function TagList(param: TagListParam) {
  if (param.tags == null || param.tags.length == 0) return <></>;
  return (
    <ul className="">
      {param.tags.map((tag, index) => (
        <li
          key={index}
          className="m-1 inline-block min-w-min rounded-2xl border-2 border-gray-400 px-4 py-0 text-base text-gray-700"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
