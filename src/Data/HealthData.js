import lungs from '../assets/lungs.png';
import teeth from '../assets/teeth.png';
import bone from '../assets/bone.png';

export const healthStatusData = [
  {
    id: 'lungs',
    title: 'Lungs',
    statusText: 'Feb 08, 2025',
    progress: 70,
    icon: lungs,
    color: 'red',
  },
  {
    id: 'teeth',
    title: 'Teeth',
    statusText: 'Mar 28, 2025',
    progress: 50,
    icon: teeth,
    color: 'teal',
  },
  {
    id: 'bone',
    title: 'Bone',
    statusText: 'Apr 08, 2025',
    progress: 80,
    icon: bone,
    color: 'orange',
  },
];

export const healthIndicators = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    position: { top: '38%', left: '65%' },
    color: 'bg-indigo-700', 
    textColor: 'text-white',
    icon: 'FiHeart', 
  },
  {
    id: 'leg',
    label: 'Healthy Leg',
    position: { top: '75%', left: '15%' },
    color: 'bg-cyan-400', 
    textColor: 'text-indigo-800',
    icon: 'FiCheck',
  },
];
