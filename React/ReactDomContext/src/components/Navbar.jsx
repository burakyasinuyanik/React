import { Link, NavLink } from "react-router-dom"

export default function NavBar({user,handleLogout}){

  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">B-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Ana Sayfa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Ürünler</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" >İletişim</NavLink>
            </li>
           
            {
              user ? <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/fav" >Favoriler</NavLink>
                      </li>        
              
              <li className="nav-item">
              <button className="nav-link" onClick={handleLogout} >Çıkış Yap {user.name}</button>
              </li></>:
              <li className="nav-item">
              <NavLink className="nav-link" to="/Login" >Giriş Yap</NavLink>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}