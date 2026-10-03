import React from 'react'
import Button from "./ui elements/button.jsx";
import Card from "./ui elements/card.jsx";
import img1 from "./assets/background1.png";
import img2 from "./assets/background2.png";
import img3 from "./assets/background3.png";
import img4 from "./assets/background4.png";
import img5 from "./assets/Overlay.png";
export const recent = () => {
  return (
    <section className="main bg-body px-77.5">
      <div className=" ">
        <div className="first flex justify-between  ">
          <div className="heading ">
            <h3 className="buttn ">MY RECENT WORK</h3>
            <h1 className="text-big pt-6.5">MY MASTER VIDEO EDITING SKILLS</h1>
          </div>
          <div className="">
            <Button Tagname={"button"}>Learn More</Button>
          </div>
        </div>
        <div className="cards  grid grid-cols-4 gap-6 pb-30 pt-15">
          <Card
            image={img1}
            title="Adobe After Effect"
            description="Adobe After Effects is a powerful software application used for motion graphics."
            number="80%"
            image2={img5}
          />
          <Card
            image={img2}
            title="Final Cut Pro"
            description="Professional video editing software developed by AppleInc., designed."
            number="95%"
            image2={img5}
          />
          <Card
            image={img3}
            title="iMovie Film"
            description="iMovie offers a range ofpowerful editing tools that allow users."
            number="85%"
            image2={img5}
          />

          <Card
            image={img4}
            title="Hit Films Express  "
            description="HitFilm Express is a free videoediting and visual effects software developed."
            number="99%"
            image2={img5}
          />
        </div>
      </div>
    </section>
  );
}


export default recent