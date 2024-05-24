import React from "react";

const Navbar = () => {

    return (
        <>
        <div className="relative w-[1440px] h-[82px] bg-c-4">
      <div className="inline-flex items-start gap-[48px] absolute top-[32px] left-[461px]">
        <div className="relative w-fit mt-[-1.00px] font-menu-item-default font-[number:var(--menu-item-default-font-weight)] text-c-1 text-[length:var(--menu-item-default-font-size)] text-center tracking-[var(--menu-item-default-letter-spacing)] leading-[var(--menu-item-default-line-height)] whitespace-nowrap [font-style:var(--menu-item-default-font-style)]">
        <a href="">Home</a> 
        </div>
        <div className="relative w-fit mt-[-1.00px] font-menu-item-default font-[number:var(--menu-item-default-font-weight)] text-c-3 text-[length:var(--menu-item-default-font-size)] text-center tracking-[var(--menu-item-default-letter-spacing)] leading-[var(--menu-item-default-line-height)] whitespace-nowrap [font-style:var(--menu-item-default-font-style)]">
        <a href="">Rooms</a>
        </div>
        <div className="relative w-fit mt-[-1.00px] font-menu-item-default font-[number:var(--menu-item-default-font-weight)] text-c-3 text-[length:var(--menu-item-default-font-size)] text-center tracking-[var(--menu-item-default-letter-spacing)] leading-[var(--menu-item-default-line-height)] whitespace-nowrap [font-style:var(--menu-item-default-font-style)]">
          Reviews
        </div>
        <div className="relative w-fit mt-[-1.00px] font-menu-item-default font-[number:var(--menu-item-default-font-weight)] text-c-3 text-[length:var(--menu-item-default-font-size)] text-center tracking-[var(--menu-item-default-letter-spacing)] leading-[var(--menu-item-default-line-height)] whitespace-nowrap [font-style:var(--menu-item-default-font-style)]">
          Location
        </div>
        <div className="relative w-fit mt-[-1.00px] font-menu-item-default font-[number:var(--menu-item-default-font-weight)] text-c-3 text-[length:var(--menu-item-default-font-size)] text-center tracking-[var(--menu-item-default-letter-spacing)] leading-[var(--menu-item-default-line-height)] whitespace-nowrap [font-style:var(--menu-item-default-font-style)]">
          Blog
        </div>
        <div className="relative w-fit mt-[-1.00px] font-menu-item-default font-[number:var(--menu-item-default-font-weight)] text-c-3 text-[length:var(--menu-item-default-font-size)] text-center tracking-[var(--menu-item-default-letter-spacing)] leading-[var(--menu-item-default-line-height)] whitespace-nowrap [font-style:var(--menu-item-default-font-style)]">
          Contact
        </div>
      </div>
      <div className="absolute top-[31px] left-[1216px] font-menu-item-underline font-[number:var(--menu-item-underline-font-weight)] text-c-3 text-[length:var(--menu-item-underline-font-size)] text-right tracking-[var(--menu-item-underline-letter-spacing)] leading-[var(--menu-item-underline-line-height)] underline whitespace-nowrap [font-style:var(--menu-item-underline-font-style)]">
      <a href="">Book your room</a>
      </div>
      <a href=""><img className="absolute w-[132px] h-[24px] top-[26px] left-[120px]" alt="Matumu" src="/src/matumu.png" /></a>
    </div>

        </>
    );
};

export default Navbar;