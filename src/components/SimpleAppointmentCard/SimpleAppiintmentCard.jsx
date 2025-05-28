const SimpleAppointmentCard = ({
  title,
  time,
  description,
  icon,
  pillText,
}) => {
  const cardBgColor = "bg-indigo-200";      
  const cardTextColor = "text-indigo-700"; 

  return (
    <div
      className={`p-4 rounded-xl -sm flex flex-col justify-between min-h-[80px] ${cardBgColor}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className={`font-semibold text-sm ${cardTextColor}`}>{title}</h4>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <p className={`text-xs font-medium ${cardTextColor}`}>{time}</p>
      {description && <p className="text-xs opacity-80 mt-0.5">{description}</p>}
      {pillText && (
        <div className="mt-2 self-start">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700`}>
            {pillText}
          </span>
        </div>
      )}
    </div>
  );
};

export default SimpleAppointmentCard;