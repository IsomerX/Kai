import { getStorage, ref } from "firebase/storage";

const Upload = ({uploader}) => {
    const SubmitHandler = (e) => {
        e.preventDefault();
        alert("Success!");
        // console.log(e.target.files)
        return;
        const file = e.target.files[0];
        const storageRef = getStorage().ref();
        const uploadTask = storageRef.child(`images/${file.name}`).put(file);
        // upload file to firebase
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);
                    uploader(downloadURL);
                });
            }
        );
    };
    return (
        <div className="h-[100vh] w-full">
            <div className="h-[100vh] w-full z-10 absolute top-0 left-0" onClick={uploader}></div>
            <div className="absolute z-20 w-[50%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-8 shadow-lg">
                <div className="font-hk font-bold text-3xl">
                    Please Upload Your Records!
                </div>
                <form className="flex flex-col" onSubmit={SubmitHandler}>
                    <input type={"file"} className="mt-5" />
                    <button className="px-8 py-2 w-fit bg-[#F7CE68] mt-4 rounded-lg font-bold text-white">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
