import ReturnButton from "./ReturnButton";

export default function TodoList () {
    return(
        <div className="bg-neutral-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
            <h1 style={{ color: '#bd00ff' }} className="text-5xl asher-punk font-extrabold uppercase text-white">Todo List</h1>
            <ReturnButton/>
        </div>
    )
}