import { useRouter } from "next/router";
import React, { useContext } from "react";
import { UserContext } from "../lib/context";
import { firestore } from "../lib/firebase";

const onSubmit = async (e, user) => {
    e.preventDefault();
    const fields = e.target;
    const userDoc = firestore.doc(`users/${user.uid}`);

    //role is a mapping of uid to an enum 0/1 for indivisual/organiser
    const roleDoc = firestore.doc(`roles/${user.uid}`);

    const batch = firestore.batch();
    batch.set(userDoc, {
        firstName: fields.firstName.value,
        institutionName: fields.Iname.value,
        phone: fields.phone.value,
        address: fields.address.value,
    });
    batch.set(roleDoc, { role: 1 });

    await batch.commit();
};

const Hospital = () => {
    const { user } = useContext(UserContext);
    const router = useRouter();
    return (
        <form
            onSubmit={(e) => {
                onSubmit(e, user);
            }}
            className="flex flex-col w-[80%] gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-hk my-10"
        >
            <label htmlFor="firstName">Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                className="border-2 border-gray-400 p-2"
                required
            />
            <label htmlFor="Iname">Institution Name</label>
            <input
                id="Inst Name"
                name="Iname"
                type="text"
                className="border-2 border-gray-400 p-2"
                required
            />
            <label htmlFor="address">Institution Address</label>
            <input
                id="address"
                name="address"
                type="text"
                className="border-2 border-gray-400 p-2"
                required
            />
            <label htmlFor="phone">Phone Number</label>
            <input
                id="Phone"
                name="phone"
                type="Number"
                className="border-2 border-gray-400 p-2"
                required
            />
            <button type="submit" className="p-2 bg-black text-white font-bold text-xl py-3">
                Register
            </button>
        </form>
    );
};

export default Hospital;
