import DashboardOverview from './DashboardMainContentPages/DashboardOverview';
import CalendarView from './DashboardMainContentPages/CalendarView';
import UpcomingSchedule from './DashboardMainContentPages/UpcomingSchedule';

const DashboardMainContent = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-indigo-800">Dashboard</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/5 space-y-6">
          <DashboardOverview />
         
        </div>

        <div className="lg:w-2/5 space-y-6 bg-indigo-50  rounded-xl border border-gray-100">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};
export default DashboardMainContent;