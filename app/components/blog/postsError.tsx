interface MessageError {
    message: string;
}

export default function PostsError(error: MessageError) {
    return (<div>
        <p>Error calling the api endpoint of dev.to</p>
        <p>The status of the response: {error.message}</p>
    </div>)
}