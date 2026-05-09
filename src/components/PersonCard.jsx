import React from 'react';
import { Link } from 'react-router-dom';
import { User, ExternalLink } from 'lucide-react';

const PersonCard = ({ person, basePath }) => {
  return (
    <div className="card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col items-center p-6 gap-4 h-full">
      {/* Passport Image - fixed size always */}
      <div className="relative flex-shrink-0">
        <div className="w-28 h-36 rounded-lg overflow-hidden border-2 border-saffron-200 shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-saffron-50 to-sacred-50 text-saffron-400">
              <User size={36} />
              <span className="text-xs mt-1 text-gray-400">No Photo</span>
            </div>
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-saffron-400 to-sacred-500 rounded-full border-2 border-white"></div>
      </div>

      {/* Name — fixed height area, centered, no overflow */}
      <div className="text-center flex-1 flex flex-col justify-between w-full">
        <div>
          <h3 className="font-display font-semibold text-navy-900 text-base leading-tight line-clamp-2 mb-1">
            {person.name}
          </h3>
          {person.grade && (
            <p className="text-xs text-gray-500 line-clamp-1">{person.grade}</p>
          )}
          {person.profession && (
            <p className="text-xs text-saffron-600 font-medium line-clamp-2 mt-0.5">{person.profession}</p>
          )}
        </div>

        {/* Button always at bottom */}
        <Link
          to={`${basePath}/${person.id}`}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-sm font-medium rounded-lg hover:from-saffron-600 hover:to-saffron-700 transition-all duration-200 shadow-sm"
        >
          <ExternalLink size={14} />
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;
