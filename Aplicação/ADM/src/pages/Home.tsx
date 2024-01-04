import { Outlet } from "react-router-dom";
import { SliderBar } from "../components/SliderBar";

export function Home(){

    return (
        <div className="flex flex-col gap-1 h-screen bg-zinc-100">
            <SliderBar/>
            <div className="flex-1 h-full">
                <Outlet/>
            </div>
        </div>
    )
}