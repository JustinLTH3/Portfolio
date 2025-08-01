export default function Page() {
    return (
        <div className={"w-full items-center flex flex-col"}>
            <video controls preload="auto" className={"w-4/5 lg:w-3/4"}>
                <source src="/Portfolio/RecordingOfPlugin.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
