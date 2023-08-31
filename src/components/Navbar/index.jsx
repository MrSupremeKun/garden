import React from "react";
import {motion} from "framer-motion"
import styles from "./navbar.module.scss";
import logo from "../../images/Group.svg";
import { NavLink } from "react-router-dom";
import { navbarData } from "../../helpers";
import classNames from "classnames";
function Navbar() {
  return (
    <nav id="Navbar" className={styles.navbar}>
      <img src={logo} alt="" className={styles.navbar__logo} />
      <article className={styles.navbar__img}>Hobby</article>
      <div className={styles.navbar__link__div}>
        {navbarData.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? classNames(styles.navbar__link, styles.navbar__link__active)
                : styles.navbar__link
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
