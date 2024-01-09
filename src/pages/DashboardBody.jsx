import Table from "./Table";

function DashboardBody() {
  return (
    <div className="flex w-full flex-col items-start gap-5 ">
      <p className=" text-[#1A181E] font-Inter text-[20px] font-medium leading-7 ">
        Transactions | This Month
      </p>
      <Table />
    </div>
  );
}

export default DashboardBody;
