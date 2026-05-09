import React, { createContext, useContext, useState, useEffect } from 'react';
import studentsData from './data/students.json';
import alumniData from './data/alumni.json';
import servicesData from './data/services.json';
import impactData from './data/impact.json';
import contactData from './data/contact.json';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

const VERSIONS = {
  students: 'students_v4',
alumni:   'alumni_v4',
  services: 'services_v1',
  impact:   'impact_v1',
  contact:  'contact_v1',
};

function loadData(key, jsonData) {
  const dataKey    = 'ssshep_' + key;
  const versionKey = 'ssshep_' + key + '_version';
  const storedVersion = localStorage.getItem(versionKey);
  const storedData    = localStorage.getItem(dataKey);
  if (storedVersion === VERSIONS[key] && storedData) {
    try { return JSON.parse(storedData); } catch {}
  }
  localStorage.setItem(dataKey, JSON.stringify(jsonData));
  localStorage.setItem(versionKey, VERSIONS[key]);
  return jsonData;
}

function saveData(key, data) {
  localStorage.setItem('ssshep_' + key, JSON.stringify(data));
  localStorage.setItem('ssshep_' + key + '_version', VERSIONS[key]);
}

export const AppProvider = ({ children }) => {

  const [students, setStudents] = useState(() => loadData('students', studentsData));
  const [alumni,   setAlumni]   = useState(() => loadData('alumni',   alumniData));
  const [services, setServices] = useState(() => loadData('services', servicesData));
  const [impact,   setImpact]   = useState(() => loadData('impact',   impactData));
  const [contact,  setContact]  = useState(() => loadData('contact',  contactData));

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    () => sessionStorage.getItem('ssshep_admin') === 'true'
  );

  useEffect(() => { saveData('students', students); }, [students]);
  useEffect(() => { saveData('alumni',   alumni);   }, [alumni]);
  useEffect(() => { saveData('services', services); }, [services]);
  useEffect(() => { saveData('impact',   impact);   }, [impact]);
  useEffect(() => { saveData('contact',  contact);  }, [contact]);

  const adminLogin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('ssshep_admin', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('ssshep_admin');
  };

  const addStudent    = (s)     => setStudents(p => [...p, { ...s, id: Date.now() }]);
  const updateStudent = (id, d) => setStudents(p => p.map(s => s.id === id ? { ...s, ...d } : s));
  const deleteStudent = (id)    => setStudents(p => p.filter(s => s.id !== id));

  const addAlumni    = (a)     => setAlumni(p => [...p, { ...a, id: Date.now() }]);
  const updateAlumni = (id, d) => setAlumni(p => p.map(a => a.id === id ? { ...a, ...d } : a));
  const deleteAlumni = (id)    => setAlumni(p => p.filter(a => a.id !== id));

  const addService    = (s)     => setServices(p => [...p, { ...s, id: Date.now() }]);
  const updateService = (id, d) => setServices(p => p.map(s => s.id === id ? { ...s, ...d } : s));

  const updateImpact  = (id, d) => setImpact(p => p.map(i => i.id === id ? { ...i, ...d } : i));
  const updateContact = (d)     => setContact(p => ({ ...p, ...d }));

  return (
    <AppContext.Provider value={{
      students, alumni, services, impact, contact,
      isAdminLoggedIn, adminLogin, adminLogout,
      addStudent, updateStudent, deleteStudent,
      addAlumni,  updateAlumni,  deleteAlumni,
      addService, updateService,
      updateImpact, updateContact,
    }}>
      {children}
    </AppContext.Provider>
  );
};