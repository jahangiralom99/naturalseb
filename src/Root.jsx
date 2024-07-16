import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-[#f8f6f8]">
            navbar
            <Outlet/>
        </div>
    );
};

export default Root;