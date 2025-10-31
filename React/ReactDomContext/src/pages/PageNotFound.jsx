import { Link } from "react-router-dom";

export default function PageNotFound(){

  return (
    <>
    <h1>404-Sayfa Bulunamadı</h1>
    <Link className="btn btn-info" to="/">Ana Sayfaya Gitmek İçin Tıklayınız.</Link>
    </>
  )
}