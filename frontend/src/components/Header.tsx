import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      {/* Menu Desktop */}
      {!isMobile && (
        <nav className="nav0">
          <ul>
            <li className="nav1">
              <Link href="/">Home🏠</Link>
            </li>
            <li className="nav1">
              <Link href="/about">About me🙋🏽‍♀️🫱🏾‍🫲🏽</Link>
            </li>
            <li className="nav2">
              <Link href="/projects">My projects🗂️</Link>
            </li>
            <li className="nav3">
              <Link href="/blog">My blog📝</Link>
            </li>
            <li className="nav3">
              <Link href="/contact">Contact📞</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Drawer Mobile */}
      {isMobile && (
        <>
          <button className="drawer-button" onClick={() => setIsOpen(true)}>
            ☰
          </button>

          {isOpen && (
            <div className="overlay" onClick={() => setIsOpen(false)}></div>
          )}

          <div className={`drawer ${isOpen ? "open" : ""}`}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <nav>
              <ul>
                <li>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home🏠
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    About Me🙋🏽‍♀️🫱🏾‍🫲🏽
                  </Link>
                </li>
                <li>
                  <Link href="/projects" onClick={() => setIsOpen(false)}>
                    My Projects🗂️
                  </Link>
                </li>
        
                <li>
                  <Link href="/blog" onClick={() => setIsOpen(false)}>
                    My Blog📝
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact📞
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
