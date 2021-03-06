import React, {useState} from "react";
import { Link } from "@reach/router"


//its gonna alow us to change the color of the page we are hovering on
function ResponsiveNavigation({ navLinks, background, hoverBackground, linkColor, logo }) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)
  console.log(hoverBackground, linkColor, logo)

  // function toggler()
  return (

    <nav
      className="responsive-toolbar"
      style={{ background }}>
      <ul
        style={{ background }}
        className={navOpen ? "active" : ""}
      >
        <figure onClick={() => setNavOpen(!navOpen) }>
          <img src={logo} height="60px" width="60px" alt="logo-nav-toggler" />
        </figure>
        {navLinks.map((link, index) =>

          <li 
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{ background: hoverIndex === index ? (hoverBackground || "#999") : "" }}
          >
           
            <Link
               
              // {{if(path==="logout"){
              //   localStorage.removeItem('Bear')
              // }}},
              to={link.path}
              style={{ color: linkColor }}
            >
              {link.text}
              {/* <i class={link.icon} /> */}
             <img src= {link.icon} alt="icon"></img>
            </Link>

          </li>
        )}

      </ul>


    </nav>

  )


}

export default ResponsiveNavigation;