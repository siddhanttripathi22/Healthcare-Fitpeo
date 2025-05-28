import BodyImage from '../../../assets/human.png';
import { healthIndicators } from "../../../Data/HealthData";
import { FiZoomIn } from 'react-icons/fi';
import { GiLeg } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const iconMap = {
  FiHeart: FaHeart,
  FiCheck: GiLeg,
};

export default function AnatomySection() {

  const anatomicalLabels = healthIndicators.filter(indicator => indicator.position);

  return (
    <div className="relative w-full h-full bg-blue-50 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden min-h-[400px]">

      <div className="absolute top-6 right-6 z-10">
        <button className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <FiZoomIn className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="relative max-h-full max-w-full px-4 py-4">
        <img
          src={BodyImage}
          alt="Anatomical Model"
          className="h-full w-auto max-h-[380px] object-contain select-none pointer-events-none"
          draggable={false}
        />
        
        
        {anatomicalLabels.map((indicator) => {
          const IconComponent = iconMap[indicator.icon] || FaHeart;
          
          let specificIconColorClass = '';
          let additionalStyle = {};
          
          if (indicator.icon === 'FiHeart') {
            specificIconColorClass = 'text-red-500';
            additionalStyle = {
              transform: 'translateY(-100%)',
              marginBottom: '8px',
            };
          } else if (indicator.icon === 'FiCheck') {
            specificIconColorClass = 'text-yellow-400';
          }
          
          return (
            <div
              key={indicator.id}
              className={`absolute px-3 py-2 rounded-full flex items-center text-sm font-semibold shadow-lg ${indicator.color} ${indicator.textColor} whitespace-nowrap`}
              style={{
                top: `calc(${indicator.position.top} - 30px)`,
                left: `calc(${indicator.position.left} - 20px)`,
                ...additionalStyle,
              }}
            >
              <IconComponent className={`w-4 h-4 mr-1.5 ${specificIconColorClass || indicator.textColor}`} />
              <span>{indicator.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}