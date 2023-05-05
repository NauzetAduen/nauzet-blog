import TimelineCard from "./components/timelineCard";
import data from "./timeline.json";
export default function Work() {
  return (
    <div>
      <ol className="border-l border-neutral-300">
        {data &&
          data.map((element, index) => (
            <TimelineCard key={index} element={element} />
          ))}
      </ol>
    </div>
  );
}
