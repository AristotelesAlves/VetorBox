import { Outlet } from "react-router-dom";
import { SliderBar } from "../components/SliderBar";

export function Home(){
    return (
        <div className="flex gap-1 h-screen">
            <SliderBar/>
            <div className="flex-1 h-full">
                <Outlet/>
            </div>
        </div>
    )
}