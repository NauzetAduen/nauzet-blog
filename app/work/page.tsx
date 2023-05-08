import TimelineCard from "./components/timelineCard";
import data from "./timeline.json";

export const metadata = {
  title: "Development life",
  description:
    "Nauzet's development life with personal projects and work experience",
};

export default function Work() {
  return (
    <ol className="border-l border-neutral-300">
      {data &&
        data.map((element, index) => (
          <TimelineCard key={index} element={element} />
        ))}
    </ol>
  );
}
