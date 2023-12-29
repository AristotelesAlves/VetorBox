export function BoxImg(props: {src: string}){
    return (
        <div className="w-full h-full">
            <img 
                className="h-full w-full rounded-2xl z-0 transition duration-300 ease-in-out transform hover:opacity-80 mb-4"
                src={props.src} 
                alt="" 
            />
        </div>
    )
}