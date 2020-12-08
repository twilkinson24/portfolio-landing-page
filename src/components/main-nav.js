import { Link } from "gatsby"
import React from "react"


function MainNav() {



    return (
      <nav>
          <ul className="flex items-center h-full m-0">
              <li>
                  <Link to="#" className="uppercase mx-3">Services</Link>
              </li>
              <li>
                  <Link to="#" className="uppercase mx-3">About</Link>
              </li>
              <li>
                  <Link to="#" className="uppercase ml-3">Say Hi</Link>
              </li>
          </ul>
      </nav>
  );
}



export default MainNav
