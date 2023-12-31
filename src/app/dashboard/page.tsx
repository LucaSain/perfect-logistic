import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="grid h-max min-h-screen w-screen grid-flow-row grid-cols-1 grid-rows-3 gap-3 px-2 pb-4 pt-20 sm:grid-cols-3">
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </div>
  );
}
