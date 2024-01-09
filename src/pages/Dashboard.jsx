import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

function Dashboard() {
  return (
    <div className="flex   flex-col items-start px-8 py-4 gap-8  ">
      <DashboardHeader />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
