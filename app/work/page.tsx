import TimelineCard from "./components/timelineCard";
import data from "./timeline.json";
export default function Work() {
  return (
    <div>
      <ol className="border-l border-neutral-300">
        {data &&
          data.map((element) => (
            <TimelineCard
              key={element.title}
              title={element.title}
              description={element.description}
              date={element.date}
              tags={element.tags}
            />
          ))}
      </ol>
    </div>
  );
}
