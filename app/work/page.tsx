import TimelineCard from "../components/work/timelineCard";
import data from "./timeline.json";
export default function Work() {
    return (
        <div>
            <ol className="border-l border-neutral-300">
                {data && data.map(element => (
                    <TimelineCard
                        title={element.title}
                        description={element.description}
                        date={element.date}
                        tags={element.tags} />
                ))}
            </ol>
        </div>
    )

}