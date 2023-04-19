import TimelineDot from "./timelineDot";

interface CardDataParam {
    title: string,
    description: string,
    date: string,
    tags: string[]

}

export default function TimelineCard(cardDataParam: CardDataParam) {

    return <li>
        <div className="flex-start flex items-center pt-3">
            <TimelineDot />
            <p className="text-sm text-neutral-500 ">
                {cardDataParam.date}
            </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">{cardDataParam.title}</h4>
            <p className="mb-3 text-neutral-500 ">
                {cardDataParam.description}
            </p>
        </div>
    </li>;
}
