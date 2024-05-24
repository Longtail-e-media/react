import React from "react";

const Banner = () => {

    return (
    <div>
    <div className="inner_banner h-[620px] overflow-hidden bg-[url(/src/Section.png)] bg-slate-400 grid justify-items-center items-center">
    <div className="inline-flex flex-col items-center gap-[24px] relative">
    <p className="relative w-[860px] mt-[-1.00px] font-heading-1-type-1-default font-[number:var(--heading-1-type-1-default-font-weight)] text-c-7 text-[length:var(--heading-1-type-1-default-font-size)] text-center tracking-[var(--heading-1-type-1-default-letter-spacing)] leading-[var(--heading-1-type-1-default-line-height)] [font-style:var(--heading-1-type-1-default-font-style)]">
    Enjoy amazing moments
    <br />
    at the Resort Matumu Blair.
    </p>
    <div className="inline-flex flex-col gap-[16px] flex-[0_0_auto] items-center relative">
    <a href="#"><img className="relative flex-[0_0-auto]" alt="Pilot badge" src="src/button.png" /></a>
    <img className="relative flex-[0_0-auto]" alt="Pilot badge" src="src/pilot_badge.png"/>
    </div>
    </div>
    </div>
    </div>
    );

};

export default Banner;