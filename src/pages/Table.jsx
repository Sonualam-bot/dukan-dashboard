import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table() {
  return (
    <div
      className="flex flex-col w-full px-3 pt-3 pb-6 rounded-lg bg-[#FFF] "
      style={{
        boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
      }}
    >
      <TableHeader />
      <TableBody />
    </div>
  );
}

export default Table;
