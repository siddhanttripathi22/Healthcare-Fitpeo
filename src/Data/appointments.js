export const weekData = {
  monthName: "May",
  year: 2025,
  days: [
    { dayName: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'], isCurrentMonth: true },
    { dayName: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'], isSelected: true, highlightedTime: '09:00', appointments: ['dentist_tue_0900', 'physio_tue_1100'], isCurrentMonth: true },
    { dayName: 'Wed', date: 27, times: ['12:00', '13:00'], isCurrentMonth: true },
    { dayName: 'Thurs', date: 28, times: ['10:00', '11:00'], highlightedTime: '11:00', isCurrentMonth: true },
    { dayName: 'Fri', date: 29, times: ['14:00', '16:00'], isCurrentMonth: true },
    { dayName: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], highlightedTime: '12:00', isCurrentMonth: true },
    { dayName: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], highlightedTime: '09:00', isCurrentMonth: true },
  ]
};
export const Appointments = {
  monday: [
     {
      id: 1,
      title: 'Dentist',
      time: '09:00–11:00',
      description: 'Dr. Cameron Williamson',
      icon: '\u{1F9B7}',
      bgColor: 'bg-indigo-800',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'Physiotherapy',
      time: '11:00–12:00',
      description: 'Dr. Jane Doe',
      icon: '\u{1F4AA}',
      bgColor: 'bg-indigo-200',
      textColor: 'text-indigo-800',
    },
  ],
  tuesday: [
     {
      id: 1,
      title: 'Dentist',
      time: '09:00–11:00',
      description: 'Dr. Cameron Williamson',
      icon: '\u{1F9B7}',
      bgColor: 'bg-indigo-800',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'Physiotherapy',
      time: '11:00–12:00',
      description: 'Dr. Jane Doe',
      icon: '\u{1F4AA}',
      bgColor: 'bg-indigo-200',
      textColor: 'text-indigo-800',
    },
  ],
  wednesday: [
     
  ],
  friday: [
    {
      id: 1,
      title: 'Dentist',
      time: '09:00–11:00',
      description: 'Dr. Cameron Williamson',
      icon: '\u{1F9B7}',
      bgColor: 'bg-indigo-800',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'Physiotherapy',
      time: '11:00–12:00',
      description: 'Dr. Jane Doe',
      icon: '\u{1F4AA}',
      bgColor: 'bg-indigo-200',
      textColor: 'text-indigo-800',
    },
  ],
  saturday: [
   
  ],
  sunday: [
     {
      id: 1,
      title: 'Dentist',
      time: '09:00–11:00',
      description: 'Dr. Cameron Williamson',
      icon: '\u{1F9B7}',
      bgColor: 'bg-indigo-800',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'Physiotherapy',
      time: '11:00–12:00',
      description: 'Dr. Jane Doe',
      icon: '\u{1F4AA}',
      bgColor: 'bg-indigo-200',
      textColor: 'text-indigo-800',
    },
  ],
};
export const upcoming = [
  {
    day: "On Thursday",
    appointments: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "\u{1F489}", 
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "\u{1F441}", 
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "\u{2764}", 
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "\u{1F468}",
      },
    ],
  },
];

 export const chartData = [
    {
      day: "Mon",
      bars: [
        {
          height: "80%",
          segments: [
            { color: "bg-cyan-400", height: "35%" },
            { color: "bg-indigo-500", height: "40%" },
          ],
        },
        { height: "60%", segments: [{ color: "bg-indigo-500", height: "30%" }] },
        {
          height: "50%",
          segments: [
            { color: "bg-gray-300", height: "25%" },
            { color: "bg-gray-400", height: "20%" },
          ],
        },
      ],
    },
    {
      day: "Tues",
      bars: [
        {
          height: "100%",
          segments: [
            { color: "bg-cyan-400", height: "45%" },
            { color: "bg-indigo-500", height: "50%" },
          ],
        },
        {
          height: "85%",
          segments: [
            { color: "bg-indigo-500", height: "40%" },
            { color: "bg-cyan-400", height: "40%" },
          ],
        },
        { height: "95%", segments: [{ color: "bg-cyan-400", height: "45%" }] },
        {
          height: "70%",
          segments: [
            { color: "bg-indigo-400", height: "40%" },
            { color: "bg-cyan-400", height: "25%" },
          ],
        },
      ],
    },
    {
      day: "Wed",
      bars: [
        { height: "60%", segments: [{ color: "bg-gray-300", height: "28%" }] },
        {
          height: "75%",
          segments: [
            { color: "bg-cyan-400", height: "35%" },
            { color: "bg-indigo-500", height: "35%" },
          ],
        },
        {
          height: "55%",
          segments: [
            { color: "bg-indigo-500", height: "30%" },
            { color: "bg-cyan-400", height: "20%" },
          ],
        },
      ],
    },
    {
      day: "Thurs",
      bars: [
        {
          height: "90%",
          segments: [
            { color: "bg-cyan-400", height: "35%" },
            { color: "bg-indigo-500", height: "50%" },
          ],
        },
        { height: "100%", segments: [{ color: "bg-indigo-500", height: "50%" }] },
        {
          height: "80%",
          segments: [
            { color: "bg-cyan-400", height: "35%" },
            { color: "bg-indigo-500", height: "40%" },
          ],
        },
        {
          height: "65%",
          segments: [
            { color: "bg-indigo-400", height: "35%" },
            { color: "bg-cyan-400", height: "25%" },
          ],
        },
        { height: "50%", segments: [{ color: "bg-gray-300", height: "25%" }] },
      ],
    },
    {
      day: "Fri",
      bars: [
        {
          height: "85%",
          segments: [
            { color: "bg-indigo-500", height: "35%" },
            { color: "bg-cyan-400", height: "45%" },
          ],
        },
        { height: "95%", segments: [{ color: "bg-cyan-400", height: "45%" }] },
        {
          height: "70%",
          segments: [
            { color: "bg-gray-300", height: "30%" },
            { color: "bg-gray-400", height: "35%" },
          ],
        },
        {
          height: "75%",
          segments: [
            { color: "bg-indigo-400", height: "35%" },
            { color: "bg-cyan-400", height: "35%" },
          ],
        },
      ],
    },
    {
      day: "Sat",
      bars: [
        { height: "60%", segments: [{ color: "bg-gray-300", height: "28%" }] },
        {
          height: "80%",
          segments: [
            { color: "bg-cyan-400", height: "35%" },
            { color: "bg-indigo-500", height: "40%" },
          ],
        },
        {
          height: "90%",
          segments: [
            { color: "bg-indigo-500", height: "45%" },
            { color: "bg-cyan-400", height: "40%" },
          ],
        },
        { height: "55%", segments: [{ color: "bg-gray-300", height: "26%" }] },
      ],
    },
    {
      day: "Sun",
      bars: [
        {
          height: "70%",
          segments: [
            { color: "bg-cyan-400", height: "30%" },
            { color: "bg-indigo-500", height: "35%" },
          ],
        },
        { height: "85%", segments: [{ color: "bg-indigo-500", height: "40%" }] },
        {
          height: "65%",
          segments: [
            { color: "bg-gray-300", height: "32%" },
            { color: "bg-gray-400", height: "28%" },
          ],
        },
      ],
    },
  ];