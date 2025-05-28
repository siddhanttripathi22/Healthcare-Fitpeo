import SimpleAppointmentCard from '../../SimpleAppointmentCard/SimpleAppiintmentCard';
import { upcoming } from '../../../Data/appointments';

export default function UpcomingSchedule() {
  return (
    <div className="bg-indigo-50 rounded-xl p-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-indigo-900 mb-6">
        The Upcoming Schedule
      </h2>
      <div className="space-y-6 ">
        {upcoming.map((dayGroup, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-indigo-600 mb-3">
              {dayGroup.day}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {dayGroup.appointments.map((appointment, idx) => (
                <SimpleAppointmentCard 
                  key={idx}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}