import React, { useState } from "react";
import logo from "/public/logo.webp";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-1 left-0 right-0 z-50">
      <div className="mx-3 md:mx-6">
        <div className="bg-black/8 backdrop-blur-md text-black shadow-md rounded-3xl">
          {/* Top row */}
          <div className="flex items-center gap-3 p-3 md:p-4">
            {/* Left: logo + title */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo of codolog"
                className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-md"
              />
              <div>
                <h1 className="text-lg md:text-4xl font-bold leading-tight">
                  Codolog
                </h1>
                <p className="text-xs md:text-[15px] ml-0 mt-0.5 font-medium">
                  Always Learn Unique
                </p>
              </div>
            </div>

            {/* Middle: search (md and up) */}
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <div className="bg-white rounded-2xl h-10 w-full max-w-xl flex items-center px-3">
                <input
                  className="w-full outline-none text-sm"
                  type="search"
                  name="Codolog"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Right: icons and CTA */}
            <div className="ml-auto flex items-center gap-2">
              {/* Mobile: search toggle */}
              <button
                onClick={() => {
                  setSearchOpen((s) => !s);
                  setMenuOpen(false);
                }}
                aria-label="Toggle search"
                className="md:hidden p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>

              {/* Nav icons (hidden on small screens) */}
              <nav className="hidden md:flex items-center gap-1">
                <a href="" className="p-2.5 m-1 rounded-md hover:bg-black/5">
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12 12 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>

                <a href="" className="p-2.5 m-1 rounded-md hover:bg-black/5">
                  {/* Sparkles / create */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                </a>

                <a href="" className="p-2.5 m-1 rounded-md hover:bg-black/5">
                  {/* Calendar */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                  </svg>
                </a>

                <a href="" className="p-2.5 m-1 rounded-md hover:bg-black/5">
                  {/* Book / docs */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>
                </a>

                <a href="" className="p-2.5 m-1 rounded-md hover:bg-black/5">
                  {/* Globe / explore */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </a>
              </nav>

              {/* CTA */}
              <div className="hidden md:block border-2 border-black rounded-2xl">
                <h1 className="text-sm md:text-2xl m-3 px-3">Explore Courses</h1>
              </div>

              {/* Mobile: hamburger */}
              <button
                onClick={() => {
                  setMenuOpen((m) => !m);
                  setSearchOpen(false);
                }}
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile: collapsible search */}
          {searchOpen && (
            <div className="md:hidden px-3 pb-3">
              <div className="bg-white rounded-2xl h-10 w-full flex items-center px-3">
                <input
                  className="w-full outline-none text-sm"
                  type="search"
                  name="Codolog-mobile"
                  placeholder="Search"
                />
              </div>
            </div>
          )}

          {/* Mobile: collapsible menu */}
          {menuOpen && (
            <div className="md:hidden px-3 pb-4">
              <nav className="flex flex-col gap-2">
                <a
                  href=""
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5"
                >
                  {/* icon + label */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12 12 3.045c.44-.439 1.152-.439 1.591 0L21.75 12"
                    />
                  </svg>
                  <span>Home</span>
                </a>

                <a
                  href=""
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306"
                    />
                  </svg>
                  <span>Create</span>
                </a>

                <a
                  href=""
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3"
                    />
                  </svg>
                  <span>Calendar</span>
                </a>

                <a
                  href=""
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15"
                    />
                  </svg>
                  <span>Resources</span>
                </a>

                <a
                  href=""
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347"
                    />
                  </svg>
                  <span>Explore</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
