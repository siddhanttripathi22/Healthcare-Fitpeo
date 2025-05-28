import {chartData} from '../../../Data/appointments';
export default function ActivityFeed() {
 

  return (
    <div className="bg-indigo-50 rounded-xl p-6  border border-gray-100">
      <div className="mb-6 grid grid-cols-2 items-center">
        <h2 className="text-lg font-semibold text-indigo-900 mb-1 flex justify-start">Activity</h2>
        <p className="text-sm flex justify-end text-indigo-400">3 appointments this week</p>
      </div>

      <div className="flex items-start h-40 px-2">
        {chartData.map((dayData, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center flex-1">
            <div className="flex items-end justify-center h-32 mb-3">
              {dayData.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className="w-1 relative flex flex-col justify-center mx-2"
                  style={{ height: bar.height }}
                >
                  {bar.segments.length === 1 ? (
                    <div
                      className={`w-full ${bar.segments[0].color} rounded-full`}
                      style={{ height: bar.segments[0].height }}
                    ></div>
                  ) : (
                    <>
                      <div
                        className={`w-full ${bar.segments[0].color} rounded-full mb-1`}
                        style={{ height: bar.segments[0].height }}
                      ></div>
                      <div
                        className={`w-full ${bar.segments[1].color} rounded-full`}
                        style={{ height: bar.segments[1].height }}
                      ></div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <span className="text-xs text-indigo-500 font-medium">
              {dayData.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}