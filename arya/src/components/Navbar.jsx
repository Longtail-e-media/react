import React from 'react'

const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Demos", link: "/demos" },
    { id: 2, title: "Pages", link: "/psges" },
    { id: 3, title: "Compoment", link: "/component" },
    { id: 4, title: "Blog", link: "/blog" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <nav>
        <header className="flex items-center justify-between px-12 py-2 z-50  text-black">
          <h1 className="text-3xl z-10">.mynx</h1>
          <div className="right-0  h-full  transition-all duration-200 ease-linear z-40"
        >
          <ul className="flex px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-black block px-3 py-2 rounded-md text-base font-medium "
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </header>

        
      </nav>
    </div>
  )
}

export default Navbar