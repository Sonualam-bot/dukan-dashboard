import SideFooter from "./SideFooter";
import SidebarTop from "./SidebarTop";

function Sidebar() {
  return (
    <div className="flex flex-col items-center gap-4 w-[224px] flex-auto px-[10px] py-[16px] bg-[#1E2640] text-white ">
      <SidebarTop />
      <SideFooter />
    </div>
  );
}

export default Sidebar;