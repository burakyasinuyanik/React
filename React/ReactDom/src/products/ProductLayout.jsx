import { Outlet } from "react-router-dom";
import Categories from "./Categories";

export default function ProductLayout({user}){



  return(
    <>
    <div className="row">
      <div className="col-sm-8">
        <Outlet/>
      </div>
      <div className="col-sm-4">
        <Categories user={user}/>
      </div>
    </div>
    </>
  )
}