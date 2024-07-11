import React from "react";

import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="relative">
        <ul className="flex fixed top-0 w-full justify-end gap-8 bg-white shadow-sm p-4">
          <li className="flex gap-1 items-center">
           <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="Conttact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
