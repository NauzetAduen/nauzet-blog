import TimelineDot from "./timelineDot";
import TagList from "./tagList";
import Link from "next/link";
import { ExternalLinkSvg } from "@/app/components/svg";

interface CardDataParam {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
}

export default function TimelineCard({ element }: { element: CardDataParam }) {
  const { title, description, date, tags, url } = element;
  return (
    <li>
      <div className="flex-start flex items-center pt-3">
        <TimelineDot />
        <p className="text-sm text-neutral-500 ">{date}</p>
      </div>
      <div className="mb-6 ml-4 mt-2">
        <div className=" ">
          <h4 className="mb-1.5 inline-block pr-2 text-xl font-bold">
            {title}
          </h4>
          {url && (
            <Link
              href={url}
              className="inline-block"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLinkSvg />
            </Link>
          )}
        </div>
        <p className="mb-3 text-justify text-lg">{description}</p>
        <TagList tags={tags} />
      </div>
    </li>
  );
}
