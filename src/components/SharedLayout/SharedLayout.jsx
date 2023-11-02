import { Outlet } from "react-router-dom"
import { Link, Navigation } from "./SharedLayout.styled"
import { Suspense } from "react"

export const SharedLayout = () => {
    return <div>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to='/movies'>Movies</Link>
      </Navigation>
      <Suspense fallback={"Loading page..."}>
        <Outlet />
        </Suspense>
        </div>
}