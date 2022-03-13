import Image from "next/image";
import Link from "next/link";
import Google from "../../../public/assets/google-logo.png";
import Girl from "../../../public/assets/girl.svg";

const Hospital = () => {
    return (
        <div className="flex h-[100vh]">
            <div className="h-[50vh] font-bold text-xl font-hk relative w-1/2">
                <div className="text-center flex flex-col gap-5 absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 scale-[1.5]">
                    <div className="text-xl">Sign up as an Hospital</div>
                    <div className="bg-[#FFECE5] text-center px-4 py-2 rounded-lg relative flex items-center justify-center hover:cursor-pointer">
                        <div className="h-6 aspect-square absolute left-2">
                            <Image src={Google} layout="fill" />
                        </div>
                        <div className="font-bold text-[#EB602F] text-lg">
                            Google
                        </div>
                    </div>
                    <div className="text-[#EB602F]">
                        <Link href={"/login"}>Patient? Sign up here</Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#F2EAE8] w-1/2 h-[100vh] relative">
                <div className="mt-[50vh] -translate-y-1/2">
                    <Image src={Girl} layout="responsive" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hospital;
