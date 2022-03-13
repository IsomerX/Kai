import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useState } from "react";
import Individual from "./Individual";
import Hospital from "./Hospital";

const SignUp = () => {
    const { user } = useContext(UserContext);
    const [isIndividual, setIsIndividual] = useState(true);
    const toggleHandler = () => {
        setIsIndividual((prev) => {
            return !prev;
        });
    };
    return (
        <>
            <div className="font-hk text-white absolute left-1/2 -translate-x-1/2 top-20">
                <button
                    onClick={() => {
                        if (!isIndividual) {
                            toggleHandler();
                        }
                    }}
                    className="p-4 bg-[#F7CE68] text-white px-8 py-4 rounded-l-xl font-bold text-xl"
                >
                    Individual
                </button>
                <button
                    onClick={() => {
                        if (isIndividual) {
                            toggleHandler();
                        }
                    }}
                    className="p-4 bg-orange-500 px-8 py-4  rounded-r-xl font-bold text-xl"
                >
                    Hospital
                </button>
            </div>
            {isIndividual ? <Individual /> : <Hospital />}
        </>
    );
};

export default SignUp;
