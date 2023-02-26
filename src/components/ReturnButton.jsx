import { Link } from "react-router-dom";

export default function ReturnButton() {
    return(
        <>
        <div style={
            {
                padding:'20px',
                margin:'20px',
                backgroundColor:'white',
                borderRadius:'25px',
            }
        }>
            <Link style={
                {
                    color:'black',
                    textDecoration:'none',
                    fontWeight: 'bold',
                    fontSize:'18px'
                }
            } to={'/'}>Return Back</Link>
        </div>
        </>
    )
}