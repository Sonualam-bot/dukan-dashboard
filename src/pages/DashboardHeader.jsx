import dashdownArrow from "../assets/dashdownArrow.svg";

function DashboardHeader() {
  return (
    <div className="flex  flex-col items-start gap-6 self-stretch ">
      <div className="flex flex-col items-start gap-5 self-stretch ">
        <div className="flex justify-between items-center self-stretch ">
          <p className=" text-[#1A181E] font-Inter text-[20px] font-medium leading-7 ">
            Overview
          </p>
          <div className="flex items-center gap-4 ">
            <p className=" text-[#4D4D4D] font-Inter text-[16px] font-normal leading-6 ">
              Last Month{" "}
            </p>
            <img
              src={dashdownArrow}
              alt="/"
              className=" w-4 h-4 flex-shrink-0 "
            />
          </div>
        </div>

        <div className="flex items-start gap-5 self-stretch ">
          <div
            className="flex p-5 flex-col items-start gap-4 flex-1 rounded-lg bg-[#FFF] shadow  "
            style={{
              boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
            }}
          >
            <div className="flex flex-col items-start gap-4 self-stretch font-Inter ">
              <p className=" text-[#4D4D4D]  text-[16px] font-normal leading-6 ">
                Online Orders
              </p>
              <p className=" text-[#1A181E] text-[32px] font-medium leading-[38px]  ">
                231
              </p>
            </div>
          </div>

          <div
            className="flex p-5 flex-col items-start gap-4 flex-1 rounded-lg bg-[#FFF] shadow  "
            style={{
              boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
            }}
          >
            <div className="flex items-start flex-col gap-4 self-stretch ">
              <p className=" text-[#4D4D4D] font-Inter text-[16px] font-normal leading-6 ">
                Amount received
              </p>
              <p className=" text-[#1A181E] font-Inter text-[32px] font-medium leading-[38px] ">
                ₹23,92,312.19
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
