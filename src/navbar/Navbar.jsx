import questionIcon from "../assets/question.svg";
import searchIcon from "../assets/search.svg";
import ellipse from "../assets/ellipse.svg";
import groupsIcon from "../assets/group.svg";
import menuIcon from "../assets/menu.svg";

function Navbar() {
  return (
    <div className="flex  w-full px-8 py-3 gap-4 border-b border-[#D9D9D9]  ">
      <div className="flex items-center gap-4 flex-1 ">
        <div>
          <p className=" text-[#1A181E] font-Inter text-[15px] font-normal leading-[22px] ">
            Payments
          </p>
        </div>
        <div className="flex items-center gap-[6px] ">
          <img
            src={questionIcon}
            alt="/questionIcon"
            className=" w-[14px] h-[14px]  "
          />
          <p className=" text-[#4D4D4D] font-Inter text-[12px] font-normal leading-4 ">
            How it works
          </p>
        </div>
      </div>

      <div className="w-[400px] flex py-[9px]  px-4 items-center gap-2 flex-shrink-0 self-stretch rounded-md bg-[#F2F2F2] ">
        <img
          src={searchIcon}
          alt="/search"
          className="w-4 h-4 flex-shrink-0 "
        />
        <input
          className=" w-full bg-inherit outline-none text-[#808080] font-Inter text-[15px] font-normal leading-[22px] "
          placeholder=" Search features, tutorials, etc. "
        />
      </div>

      <div className="flex justify-end items-start gap-2 flex-1 ">
        <div className="flex items-start gap-3 ">
          <div className="w-[40px] h-[40px] relative ">
            <img
              src={ellipse}
              alt="/ellipse"
              className="w-[40px] h-[40px] flex-shrink-0  "
            />
            <img
              src={groupsIcon}
              alt="/group"
              className="w-[20px] h-[20px] flex-shrink-0 absolute top-[23%] left-[21%] "
            />
          </div>
          <img src={menuIcon} alt="/menu" className=" w-[40px] h-[40px] " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
