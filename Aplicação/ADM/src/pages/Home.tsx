import { Outlet } from "react-router-dom";
import { SliderBar } from "../components/SliderBar";
// import { Alert } from "../components/Alert";
// import { useState } from "react";

export function Home(){

    // const [modalOpen, setModalOpen] = useState(false);
    // const [modalResult, setModalResult] = useState<boolean | null>(null);

    // function handleModalChange(result: boolean){
    //     setModalResult(result);
    //     setModalOpen(false);
    //   }

    return (
        <div className="flex flex-col gap-1 w-full h-screen overflow-y-scroll bg-zinc-100">
            <SliderBar/>
            {/* <Alert isOpen={modalOpen} onChangeModal={handleModalChange} value=''/> */}
            <div className="flex-1 h-full">
                <Outlet/>
            </div>
        </div>
    )
}