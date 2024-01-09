import logo from "../assets/logo.png";
import arrowDown from "../assets/arrowdown.svg";
import Pages from "../pages/Pages";

function SidebarTop() {
  return (
    <div className="flex flex-col items-center gap-6 flex-1  ">
      <div className="flex w-[192px] items-center gap-4 ">
        <div className="w-[40px] h-[40px] flex-shrink-0 rounded-[4px] bg-[#FFF] ">
          <img src={logo} alt="/logo" className="w-[39px] h-[39px]  " />
        </div>
        <div className="flex flex-col items-start justify-center flex-1 ">
          <p className="text-[#FFF] font-Inter text-[15px] font-medium leading-[22px] ">
            {" "}
            Nishyan{" "}
          </p>
          <p className=" self-stretch text-[#FFF] font-Inter font-normal leading-4 underline opacity-80 ">
            Visit store
          </p>
        </div>
        <div>
          <img
            src={arrowDown}
            alt="/arrow"
            className="w-[20px] h-[20px] flex-shrink-0 "
          />
        </div>
      </div>
      <Pages />
    </div>
  );
}

export default SidebarTop;
