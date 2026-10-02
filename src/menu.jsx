import React from 'react'
import big from "./assets/Heading 1.png"
import img1 from "./assets/menuimg1.png"
import img2 from "./assets/Container.png"
import img3 from "./assets/icon3.png"
import img4 from "./assets/Background.png"
export const Menu = () => {
  return (
    <section className="bg-body h-[1338.3px] ">
      <div className="parent pt-[86.19px] pb-17.5">
        <img src={big} alt="" />

        <div className="flex ">
          <div className="midlepic  pt-20 pl-[381.5px] pr-[135.59px]">
            <img src={img1} />
          </div>
          <div className="right  pt-39.5 ">
            <img src={img2} alt="" />
          </div>
          <div className="pl-[121.37px] pt-[390.51px] pr-[26.54px]">
            <img src={img3} alt="" />
          </div>
        </div>
       <div className="">
        <img src={img4} alt="" />
       </div>
      </div>
    </section>
  );
}


export default Menu