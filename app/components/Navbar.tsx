import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Custom Starter Page</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end"></div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/Users/steve/Documents/custom-starter-page/public/screenie.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>G-Mail</a>
            </li>
            <li>
              <a>Google Maps</a>
            </li>
            <li>
              <a>YouTube</a>
            </li>
            <li>
              <a> Da kommt noch wat </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
