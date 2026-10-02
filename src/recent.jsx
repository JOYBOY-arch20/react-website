import React from 'react'
import Button from "./ui elements/button.jsx";
export const recent = () => {
  return (
    <section className="main bg-body">
      <div className="px-77.5 ">
        <div className="first flex justify-between">
          <div className="heading ">
            <h3 className="buttn ">MY RECENT WORK</h3>
            <h1 className="text-big pt-6.5">MY MASTER VIDEO EDITING SKILLS</h1>
          </div>
          <div className="">
            <Button Tagname={"button"}>Learn More</Button>
          </div>
        </div>
        <div className="cards">
          

        </div>
      </div>
    </section>
  );
}


export default recent