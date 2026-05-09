import React from 'react';
import { Users } from 'lucide-react';
import { useApp } from '../AppContext';
import PersonCard from '../components/PersonCard';

const Students = () => {
  const { students } = useApp();

  return (
    <div className="page-transition pt-20 min-h-screen bg-[#fdfaf5]">
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/10 to-sacred-400/10"></div>
        <div className="relative">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-saffron-500/20 border border-saffron-400/30 mb-4">
            <Users size={28} className="text-saffron-400" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Our Students</h1>
          <div className="divider-saffron"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            Meet the bright young minds being empowered through SSSHEP's free education program.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {students.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Users size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No students added yet.</p>
          </div>
        ) : (
          /* items-stretch makes all cards same height in each row */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 items-stretch">
            {students.map(student => (
              <PersonCard key={student.id} person={student} basePath="/students" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
