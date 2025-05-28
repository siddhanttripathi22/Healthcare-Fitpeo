import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';


const DashboardOverview = () => {
  return (
    <div className="space-y-16"> 
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/5 lg:w-2/3"> 
          <AnatomySection />
        </div>
        <div className="md:w-2/5 lg:w-1/3">
          <HealthStatusCards />
        </div>
      </div>
      <div>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardOverview;