import React, { useState } from 'react';
import { FiArrowLeft , FiArrowRight  } from 'react-icons/fi';
import { weekData } from '../../../Data/appointments';
import { Appointments } from '../../../Data/appointments';

const CalendarView = () => {
  const [selectedDay, setSelectedDay] = useState(
    weekData.days.find(d => d.isSelected) || weekData.days[0]
  );

  const dayNameMap = {
    Mon: 'monday',
    Tues: 'tuesday',
    Wed: 'wednesday',
    Thurs: 'thursday',
    Fri: 'friday',
    Sat: 'saturday',
    Sun: 'sunday',
  };

  const appointmentsForDay = Appointments[dayNameMap[selectedDay.dayName]] || [];

  return (
    <div className="bg-indigo-50 p-8 rounded-xl max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-indigo-800">
          {weekData.monthName} {weekData.year}
        </h3>

        <div className="flex gap-2">
          <button className="p-2 text-indigo-700">
            <FiArrowLeft  size={20} />
          </button>
          <button className="p-2  text-indigo-700">
            <FiArrowRight  size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3 mb-6">
        {weekData.days.map(dayObj => (
          <div
            key={dayObj.date}
            className={`py-3 px-6 rounded-md flex flex-col items-center cursor-pointer transition-all
              ${dayObj.date === selectedDay.date
                ? 'bg-indigo-100'
                : 'bg-indigo-50 hover:bg-gray-100'
              }`}
            onClick={() => setSelectedDay(dayObj)}
          >
            <span className={`text-sm mb-2 ${dayObj.date === selectedDay.date ? 'text-indigo-700 font-bold' : 'text-indigo-400'}`}>
              {dayObj.dayName}
            </span>
            <span className={`text-sm font-semibold mb-3 ${dayObj.date === selectedDay.date ? 'text-indigo-700' : 'text-indigo-400'}`}>
              {dayObj.date}
            </span>
            <div className="flex flex-col gap-1">
              {dayObj.times.map(time => (
                <div
                  key={time}
                  className={`text-xs py-1 px-1
                   rounded-md text-center transition 
                    ${dayObj.highlightedTime === time && dayObj.date === selectedDay.date
                      ? 'bg-indigo-700 text-white font-semibold'
                      : dayObj.highlightedTime === time
                      ? 'bg-indigo-200 text-white font-medium'
                      : 'text-indigo-700 hover:bg-indigo-200'
                    }`}
                >
                  {time === '-' ? <span className="opacity-40">-</span> : time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {appointmentsForDay.length === 0 && (
          <p className="col-span-2 text-center text-indigo-500">No appointments for this day.</p>
        )}
        {appointmentsForDay.map(app => (
          <div
            key={app.id}
            className={`p-4 rounded-xl ${app.bgColor} ${app.textColor}`}
          >
           
           
             <div className="flex items-center justify-between mb-2">
               <h4 className="font-semibold mb-1 text-md">{app.title}</h4>
              <span>{app.icon}</span>
            </div>
            <p className="text-sm">{app.time}</p>
            <p className="text-xs mt-1">{app.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;