interface TextBlockParams {
    title: string,
    content: string
}

export default function TextBlock(props: TextBlockParams) {
    const { title, content } = props;
    const lines = content.split('\\n');
    return (
        <div>
            <p>{title}</p>
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    )
}