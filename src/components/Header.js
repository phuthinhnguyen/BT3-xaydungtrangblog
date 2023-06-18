import { Link } from "react-router-dom"
const link = {
    textDecoration:"none",
    color:"white",
    fontSize:25,
    marginRight:20
}
const header = {
    backgroundColor: "purple",
    color:"white",
    height:100,
    display:"flex",
    alignItems:"center"
}
function Header() {
    return (
        <div className="row" style={header}>
            <h2 className="col-8" style={{fontSize:50}}>Redux Blog</h2>
            <div className="col-4" style={{display:"flex",justifyContent:"flex-end"}}>
                <Link to="/" style={link}>Home</Link>
                <Link to="/addnewpost" style={link}>New Post</Link>
            </div>
        </div>
    )
}
export default Header;