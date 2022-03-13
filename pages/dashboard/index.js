import DashLayout from "./DashLayout";
import Dash from "../../public/assets/dashboard.svg";
import Image from "next/image";
import Upload from "../../components/Upload";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../lib/context";
import { firestore } from "../../lib/firebase";

const Dashboard = () => {
    // const { user, username } = useContext(UserContext);/
    const user = "Dhruv";
    const date = new Date();
    const [upload, setUpload] = useState(false);

    const uploader = () => {
        setUpload(false);
    };

    return (
        <DashLayout>
            <div className="flex w-full justify-between font-hk">
                <div className="text-4xl font-bold">
                    Hey {user}, Welcome Back
                </div>
                <div className="text-xl text-[#3A6344] font-bold">
                    {date.toDateString()}
                </div>
            </div>
            <div className="flex p-10 w-full bg-white rounded-2xl font-hk shadow-xl mt-10 justify-between">
                <div className="flex flex-col justify-evenly">
                    <div className="font-bold text-3xl">
                        The annual check is coming soon
                    </div>
                    <div className="font-bold text-xl text-[#A49999]">
                        Tomorrow, Tuesday, 14 March 2022
                    </div>
                    <div className="bg-[#EB602F] text-center text-white font-bold text-lg px-4 py-2 w-1/2 rounded-lg">
                        + Add to calendar
                    </div>
                </div>
                <div>
                    <Image src={Dash} height={160} alt="" />
                </div>
            </div>
            <div className="flex gap-5">
                <div
                    className="bg-[#F7CE68] w-fit px-16 py-4 hover:cursor-pointer font-hk font-bold text-xl rounded-xl shadow-md mt-6 text-white"
                    onClick={() => {
                        setUpload(true);
                    }}
                >
                    Upload Docs
                </div>
                <div className="border-4 bg-[#F7CE68] text-white w-fit px-16 py-4 hover:cursor-pointer font-hk font-bold text-xl rounded-xl shadow-md mt-6">
                    <a href="../../public/mr.pdf">Review Now</a>
                </div>
            </div>
            {upload && <Upload uploader={uploader} />}
        </DashLayout>
    );
};

export default Dashboard;
