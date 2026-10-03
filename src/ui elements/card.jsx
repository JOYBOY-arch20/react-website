

const card = ({image,title,description,number,image2}) => {
    return (
      <div className="w-[304.5px] h-81.5  bg-[#050709] rounded-3xl pl-7 pr-7  pb-10 overflow-hidden">
        <div className="first flex gap-4.5">
          <img className=" pt-10  " src={image}></img>
          <h3 className="font-sora text-[20px] line-height leading-6 font-semibold w-[125.53px] text-white pt-[47.5px]">{title}</h3>
        </div>
        <p className=" font-sora font-semibold text-[16px] text-gray-600 leading-6 pt-4  ">{description}</p>
        <div className="second pb-10 pt-11.75 ">
          <h3 className = "  font-sora font-semibold text-white leading-6 tracking-[2px] pl-[208.02px] pb-1.5 ">{number}</h3>
          <img className="" src={image2}></img>
        </div>
      </div>
    );
}


export default card