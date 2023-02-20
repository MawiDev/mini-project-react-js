import { Link } from "react-router-dom"
export default function Navbar() {
    return(
        <>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/teams'}>Team</Link>
                </li>
                <li>
                    <Link to={'/counter'}>Counter</Link>
                </li>
            </ul>
        </>
    )
}