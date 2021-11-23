import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (


    <nav>
      {links.map(link => {
        return <a href={"#" + `${link}`} key={link}>{link}</a>
      })}
      {/* // <a href="#home" key={"home"}>home</a>
      // <a href="#about" key={"about"}>about</a>
      // <a href="#projects" key={"projects"}>projects</a> */}
    </nav>
  );
}

export default NavBar;
