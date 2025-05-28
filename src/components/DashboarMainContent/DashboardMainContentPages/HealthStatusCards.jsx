import {healthStatusData } from "../../../Data/HealthData";




const HealthStatusCards = () => {
  const getProgressColor = (colorName) => {
    switch (colorName) {
      case 'red': return 'bg-red-500';
      case 'teal': return 'bg-teal-400';
      case 'orange': return 'bg-orange-400';
      default: return 'bg-gray-500';
    }
  };



  if (!Array.isArray(healthStatusData)) {
    console.error("HealthStatusCards: healthStatusData is not an array!", healthStatusData);
    return <div>Error: Could not load health status data.</div>;
  }

  return (
    <div className="space-y-3">
      {healthStatusData.map((item) => {
        let IconContent;
       
          IconContent = (
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 object-contain"
            />
          );
        

        return (
          <div key={item.id} className="bg-indigo-50 p-3.5 rounded-xl">
         
            <div className="flex items-center space-x-3 mb-1">
              <div className={`p-2.5 rounded-lg}`}>
                {IconContent}
              </div>
              <div>
              <h4 className="font-semibold text-indigo-800 text-lg">{item.title}</h4>
              </div>
            </div>

            <p className="text-xs text-indigo-500 mb-2">{item.statusText}</p>

          
            <div className="w-full bg-indigo-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressColor(item.color)}`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="text-right mt-3">
        <a href="#" className="text-xs text-indigo-600 font-medium">
          Details →
        </a>
      </div>
    </div>
  );
};

export default HealthStatusCards;