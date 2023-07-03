import { Link } from 'react-router-dom'

export const Navbar = () => {
    const style = {
        marginLeft: "20px",
        textDecoration: "none",
        color: "#000",
        fontSize: "16px"
    }
    return (
        <nav>
            <div className="navLogo">
                <h1>React Movie Search</h1>
            </div>
            <div className="navList">
                <Link to={"/"} style={style}>Home</Link>
                <Link to={"/about"} style={style}>About</Link>
            </div>
        </nav>
    )
}
