import { Link } from "react-router-dom"
import { linkApp } from "../data/data"
const Home = () => {
    return(
        <>
            <div className="bg-neutral-800 w-full py-6 md:h-screen">
                <div style={
                        {
                            border: 'solid 4px #001eff',
                            borderRadius:'25px',
                            color: '#bd00ff'
                        }
                    } className="flex justify-center items-center m-6">
                    <h1 className="rounded-lg p-6 text-4xl asher-punk uppercase text-center tracking-widest">
                        React projects
                    </h1>   
                </div>
                <div>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                    {linkApp.map((el) =>{
                        return(
                            <div style={{backgroundColor:'#F8F005'}} className='rounded-lg w-[200px] m-1' key={el}>
                                <Link to={el.toref}
                                className='button-49 flex gap-2 items-center justify-center p-6 
                                text-neutral-900 text-lg font-semibold'
                                >
                                    {el.svg}
                                    {el.name}
                                    {el.svg2}
                                </Link>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;