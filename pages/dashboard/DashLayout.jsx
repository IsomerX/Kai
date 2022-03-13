import Image from "next/image";
import DashPic from "../../public/assets/dashPic.svg";

const DashLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-full h-[100vh] bg-[#E5E5E5] p-16">{children}</div>
        </div>
    );
};

export default DashLayout;
