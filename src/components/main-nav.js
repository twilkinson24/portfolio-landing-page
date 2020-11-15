import { Link } from "gatsby"
import React from "react"


function MainNav() {



    return (
      <nav>
          <ul className="flex">
              <li>
                  <Link to="#">Services</Link>
              </li>
              <li>
                  <Link to="#">About</Link>
              </li>
              <li>
                  <Link to="#">Contact</Link>
              </li>
          </ul>
      </nav>
  );
}



export default MainNav
