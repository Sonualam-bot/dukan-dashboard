import wallet from "../assets/wallet.png";

function SideFooter() {
  return (
    <div className="flex flex-col  w-[192px] px-3 py-[6px] items-start gap-[10px] rounded-[4px] bg-[#353C53] ">
      <div className="flex items-center gap-3">
        <div className="flex items-start  p-[6px] rounded-[4px]  gap-[10px] bg-[#4e5672] ">
          <img src={wallet} alt="/wallet" className="w-6 h-6 text-[#FFFFFF] " />
        </div>
        <div className="flex  flex-col items-start gap-[2px] ">
          <p className="text-[#FFF] font-Inter text-[13px] font-normal leading-4 opacity-80 ">
            Available credits
          </p>
          <p className="text-[#FFF] font-Inter text-[16px]  font-normal leading-6 ">
            222.10
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideFooter;
