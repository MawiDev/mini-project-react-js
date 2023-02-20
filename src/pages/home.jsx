import { Link } from "react-router-dom"
const Home = () => {
    const linkApp = [
        {
            name:'Counter',
            toref:'/counter'
        },
        {
            name:'Bg Change',
            toref:'/bgchange'
        },
        {
            name:'Calculator',
            toref:'/calculator'
        },
        {
            name:'Digital Clock',
            toref:'/digitalclock'
        }
    ]
    return(
        <>
            <h1>Example Reactjs</h1>
            <div style={
                {
                    textAlign:'center',
                    border:'2px solid blue',
                    borderRadius:'18px',
                    padding:'20px'
                }
            }>
                {linkApp.map((el) =>{
                    return(
                        <div key={el}
                        style={
                            {
                                padding:'20px',
                                margin:'20px',
                                backgroundColor:'white',
                                borderRadius:'25px',
                            }
                        }
                        >
                            <Link style={
                                {
                                    color:'black',
                                    textDecoration:'none',
                                    fontWeight: 'bold'
                                }
                            } to={el.toref}>
                                {el.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
export default Home;