import SideFooter from "./SideFooter";
import SidebarTop from "./SidebarTop";

function Sidebar() {
  return (
    <div className="flex  flex-col  items-center gap-4 w-[224px] min-h-[100vh] justify-between px-[10px] py-[16px] bg-[#1E2640] text-white ">
      <SidebarTop />
      <SideFooter />
    </div>
  );
}

export default Sidebar;
