import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import download from "../assets/download.svg";

function TableHeader() {
  return (
    <div className=" flex w-full justify-between items-center self-stretch ">
      <div className="flex w-[248px] items-start ">
        <div className="flex py-[10px] px-4 items-center gap-2 flex-1 rounded-[4px] border border-[#D9D9D9] bg-[#FFF] ">
          <img src={search} alt="/search" className=" w-[14px] h-[14px] " />
          <input
            type="text"
            placeholder="Search by order ID..."
            className=" flex-1 text-[#999] font-Inter text-[14px] font-normal leading-5 outline-none "
          />
        </div>
      </div>
      <div className="flex flex-end items-center gap-3 ">
        <div className="flex items-center gap-3 ">
          <p className=" text-[#4D4D4D] font-Inter text-[16px] font-normal leading-6 ">
            Sort
          </p>
          <img src={sort} alt="/sort" className="w-[16px] h-[16px] " />
        </div>
        <img
          src={download}
          alt="/download"
          className=" w-5 h-5 flex-shrink-0 "
        />
      </div>
    </div>
  );
}

export default TableHeader;
