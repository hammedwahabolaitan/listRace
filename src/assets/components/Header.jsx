import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling

export default function Header() {
  const menuList = [
    { name: "Home", id: "home" },
    { name: "How it works", id: "works" },
    { name: "Explore", id: "explore" },
    { name: "Review", id: "reviews" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="py-6 px-32 flex items-center justify-between bg-[#bdbcbc] fixed top-0 left-0 right-0 h-16 z-50">
      <div className="text-[25px] font-bold cursor-pointer">
        List<span className="text-[#f50303]">Race</span>
      </div>
      <div>
        <ul className="flex gap-5 text-[17px] uppercase">
          {menuList.map((eachItem, index) => (
            <li key={index} className="hover:text-[#f50303] hover:cursor-pointer">
              <Link
                to={eachItem.id}
                smooth={true} // Enable smooth scrolling
                duration={500} // Scrolling duration in milliseconds
                spy={true} // Highlight the link when the section is in view
                activeClass="active" // Class applied to the active link
                
              >
                {eachItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

