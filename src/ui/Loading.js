import { SyncLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="py-35 w-full flex items-center justify-center">
            <SyncLoader color="#f9b500" />
        </div>
    );
}

export default Loading;
