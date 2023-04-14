import Image from 'next/image'
interface IconBlockParams {
    iconPath: string,
    content: string
}

export default function IconBlock(props: IconBlockParams) {
    const { iconPath, content } = props;
    if (iconPath == "") return <></>
    return (
        <div>
            <Image src={`${iconPath}`} alt={`${iconPath}`} />
            <p>{content}</p>
        </div>
    )
}