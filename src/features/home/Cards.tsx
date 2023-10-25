import React from 'react';
import { Video, StickyNote, CalendarDays, User } from 'lucide-react';


import spring from './spring-images-min.jpg'


const backgroundImageStyle = {
    backgroundImage: `${spring}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


const VideoChatApp: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
        <div className="rounded-lg border border-gray-600 bg-blue-500 p-6 text-center h-40 flex flex-col justify-center">
          <Video size={80} color="gray" strokeWidth={0.6} className='lg:ml-16 sm:ml-6 ml-6 sm:w-90 sm:h-90' /> {/* Add the video icon */}
          <h2 className="text-xl font-semibold text-gray-100">Create A New room </h2>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
        <div className="rounded-lg border border-gray-600 bg-blue-700 p-6 text-center h-40 flex flex-col justify-center">
          <User size={80} color="gray" strokeWidth={0.6} className='lg:ml-16 sm:ml6 ml-6' /> {/* Add the users icon */}
          <h2 className="text-xl font-semibold text-gray-100">Join a Room</h2>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
        <div className="rounded-lg border border-gray-600 bg-yellow-500 p-6 text-center h-40 flex flex-col justify-center">
          <StickyNote size={80} color="gray" strokeWidth={0.6} className='lg:ml-16 sm:ml6 ml-6' /> {/* Add the note icon */}
          <h2 className="text-xl font-semibold text-gray-100">Make a Note</h2>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
        <div className="rounded-lg border border-gray-600 bg-yellow-400 p-6 text-center h-40 flex flex-col justify-center">
          <CalendarDays size={80} color="gray" strokeWidth={0.6} className='lg:ml-16 sm:ml6 ml-6'/> {/* Add the network icon */}
          <h2 className="text-xl font-semibold text-gray-100">Netspace</h2>
        </div>
      </div>

      {/* New Card */}
      <div className="w-full p-8" style={backgroundImageStyle}>
        <div className="rounded-lg border border-gray-600 bg-green-500 p-6 text-center flex flex-col justify-center">
          <p className="text-xl font-semibold text-gray-100">Current Time: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoChatApp;
