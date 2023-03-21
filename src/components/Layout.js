import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
<<<<<<< HEAD
    <div id="container">
        <header>
            <Link to="/">
                <h1>Oppskrifter</h1>
            </Link>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>

        </footer>
    </div>
  )
=======
        <div id="container">
          <header>
            <Link to="/">
                <h1>Matprat</h1>
            </Link>
            
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
    
          </footer>
        </div>
    )
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
}