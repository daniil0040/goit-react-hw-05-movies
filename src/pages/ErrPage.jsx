import { Link } from "react-router-dom"

export default function ErrPage() {
    return <h2>Page not foud go back to <Link to={"/"} style={{color: 'red'}}>home</Link> page</h2>
}