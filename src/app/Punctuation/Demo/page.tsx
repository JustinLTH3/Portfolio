export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="rounded-lg scale-100">
                <iframe
                    width="400" height="690"
                    src={"../PunctuationWeb/index.html"}
                />
            </div>
        </div>
    );
}