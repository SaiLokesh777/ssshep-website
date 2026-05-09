import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Shield, LogOut, Users, Award, Settings, Home, Phone,
  Plus, Edit2, Trash2, Save, X, ChevronRight, LayoutGrid,
  Droplets, Heart, Stethoscope, BookOpen, UtensilsCrossed, Star
} from 'lucide-react';
import { useApp } from '../AppContext';
import ImageUpload from '../components/ImageUpload';

const iconMap = { Droplets, Heart, Stethoscope, BookOpen, UtensilsCrossed };

// ── Login Screen ───────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onLogin(u, p)) setErr('Invalid credentials. Try admin / admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-saffron-500/20 border border-saffron-400/30 mb-4">
            <Shield size={32} className="text-saffron-400" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white">Admin Panel</h1>
          <p className="text-gray-400 mt-1 text-sm">SSSHEP Management System</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Username</label>
              <input
                type="text" value={u} onChange={e => setU(e.target.value)} required
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-saffron-400 transition-colors"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
              <input
                type="password" value={p} onChange={e => setP(e.target.value)} required
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-saffron-400 transition-colors"
                placeholder="Enter password"
              />
            </div>
            {err && <p className="text-red-400 text-sm">{err}</p>}
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-semibold rounded-xl hover:from-saffron-600 hover:to-saffron-700 transition-all">
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">Default: admin / admin123</p>
      </div>
    </div>
  );
};

// ── Person Form ────────────────────────────────────────────────────────────
const PersonForm = ({ initial, onSave, onCancel, type }) => {
  const isStudent = type === 'student';
  const [form, setForm] = useState(initial || { name: '', image: '', about: '', grade: '', year: '', profession: '', passingYear: '' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input value={form.name} onChange={e => set('name', e.target.value)} required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" placeholder="Enter full name" />
        </div>
        {isStudent ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Grade / Class</label>
              <input value={form.grade} onChange={e => set('grade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" placeholder="e.g. Class 10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year Joined</label>
              <input value={form.year} onChange={e => set('year', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" placeholder="e.g. 2023" />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
              <input value={form.profession} onChange={e => set('profession', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" placeholder="e.g. Software Engineer" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Passing Year</label>
              <input value={form.passingYear} onChange={e => set('passingYear', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" placeholder="e.g. 2020" />
            </div>
          </>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
        <textarea value={form.about} onChange={e => set('about', e.target.value)} rows={4}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400 resize-none" placeholder="Write a short biography..." />
      </div>
      <ImageUpload value={form.image} onChange={v => set('image', v)} label="Profile Photo (Passport Size)" />
      <div className="flex gap-3 pt-2">
        <button onClick={() => onSave(form)} className="flex items-center gap-2 px-5 py-2.5 bg-saffron-500 text-white text-sm font-medium rounded-lg hover:bg-saffron-600 transition-colors">
          <Save size={15} /> Save
        </button>
        <button onClick={onCancel} className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
          <X size={15} /> Cancel
        </button>
      </div>
    </div>
  );
};

// ── People Section ─────────────────────────────────────────────────────────
const PeopleSection = ({ items, type, onAdd, onEdit, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-navy-900 capitalize">{type === 'student' ? 'Students' : 'Alumni'}</h2>
        <button onClick={() => { setShowForm(true); setEditItem(null); }}
          className="flex items-center gap-2 px-4 py-2 bg-saffron-500 text-white text-sm font-medium rounded-lg hover:bg-saffron-600 transition-colors">
          <Plus size={15} /> Add {type === 'student' ? 'Student' : 'Alumni'}
        </button>
      </div>

      {(showForm && !editItem) && (
        <PersonForm type={type} onSave={(data) => { if (!data.name.trim()) return; onAdd(data); setShowForm(false); }} onCancel={() => setShowForm(false)} />
      )}

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id}>
            {editItem === item.id ? (
              <PersonForm type={type} initial={item}
                onSave={(data) => { onEdit(item.id, data); setEditItem(null); }}
                onCancel={() => setEditItem(null)} />
            ) : (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                <div className="w-12 h-16 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">No img</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.grade || item.profession || '—'}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => setEditItem(item.id)}
                    className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <Edit2 size={14} />
                  </button>
                  <button onClick={() => { if (window.confirm('Delete this record?')) onDelete(item.id); }}
                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <div className="text-center py-10 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
            No records yet. Click "Add" to get started.
          </div>
        )}
      </div>
    </div>
  );
};

// ── Services Section ───────────────────────────────────────────────────────
const ServicesSection = ({ services, onAdd, onEdit }) => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const blankSvc = { title: '', icon: 'Heart', description: '', color: 'saffron', image: '' };
  const [form, setForm] = useState(blankSvc);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const iconOptions = ['Droplets', 'Heart', 'Stethoscope', 'BookOpen', 'UtensilsCrossed'];
  const colorOptions = ['blue', 'red', 'green', 'saffron', 'orange'];

  const openEdit = (svc) => { setForm({ ...svc }); setEditId(svc.id); setShowForm(true); };
  const openAdd = () => { setForm(blankSvc); setEditId(null); setShowForm(true); };

  const handleSave = () => {
    if (!form.title.trim()) return;
    if (editId) onEdit(editId, form);
    else onAdd(form);
    setShowForm(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-navy-900">Services</h2>
        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 bg-saffron-500 text-white text-sm font-medium rounded-lg hover:bg-saffron-600 transition-colors">
          <Plus size={15} /> Add Service
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <h3 className="font-semibold text-navy-900">{editId ? 'Edit Service' : 'New Service'}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input value={form.title} onChange={e => set('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
              <select value={form.icon} onChange={e => set('icon', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400">
                {iconOptions.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Color Theme</label>
              <select value={form.color} onChange={e => set('color', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400">
                {colorOptions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400 resize-none" />
          </div>
          <ImageUpload value={form.image} onChange={v => set('image', v)} label="Service Image (optional)" />
          <div className="flex gap-3">
            <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 bg-saffron-500 text-white text-sm font-medium rounded-lg hover:bg-saffron-600">
              <Save size={14} /> Save
            </button>
            <button onClick={() => setShowForm(false)} className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {services.map(svc => {
          const Icon = iconMap[svc.icon] || Heart;
          return (
            <div key={svc.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-saffron-50 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-saffron-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-navy-900">{svc.title}</p>
                <p className="text-xs text-gray-400 line-clamp-1">{svc.description}</p>
              </div>
              <button onClick={() => openEdit(svc)}
                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Edit2 size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Impact Section ─────────────────────────────────────────────────────────
const ImpactSection = ({ impact, onUpdate }) => {
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); };
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-bold text-navy-900">Home Impact Section</h2>
      <div className="space-y-3">
        {impact.map(item => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            {editId === item.id ? (
              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Service Name</label>
                    <input value={form.serviceName} onChange={e => set('serviceName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">People Served</label>
                    <input type="number" value={form.peopleServed} onChange={e => set('peopleServed', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" />
                  </div>
                </div>
                <ImageUpload value={form.image} onChange={v => set('image', v)} label="Impact Image" />
                <div className="flex gap-2">
                  <button onClick={() => { onUpdate(item.id, form); setEditId(null); }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-saffron-500 text-white text-sm rounded-lg hover:bg-saffron-600">
                    <Save size={13} /> Save
                  </button>
                  <button onClick={() => setEditId(null)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
                    <X size={13} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-saffron-50 border border-saffron-100 overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-saffron-400"><Star size={20} /></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy-900">{item.serviceName}</p>
                  <p className="text-sm text-saffron-600 font-medium">{item.peopleServed.toLocaleString()} people served</p>
                </div>
                <button onClick={() => openEdit(item)}
                  className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <Edit2 size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Contact Section ────────────────────────────────────────────────────────
const ContactSection = ({ contact, onUpdate }) => {
  const [form, setForm] = useState({ phone: contact.phone, email: contact.email });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onUpdate(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-bold text-navy-900">Contact Information</h2>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-saffron-400" />
        </div>
        <button onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${saved ? 'bg-green-500 text-white' : 'bg-saffron-500 text-white hover:bg-saffron-600'}`}>
          <Save size={14} /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

// ── Main Admin ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'students', label: 'Students', icon: Users },
  { id: 'alumni', label: 'Alumni', icon: Award },
  { id: 'services', label: 'Services', icon: Settings },
  { id: 'impact', label: 'Home Impact', icon: Home },
  { id: 'contact', label: 'Contact Info', icon: Phone },
];

const Admin = () => {
  const { isAdminLoggedIn, adminLogin, adminLogout, students, alumni, services, impact, contact,
    addStudent, updateStudent, deleteStudent, addAlumni, updateAlumni, deleteAlumni,
    addService, updateService, updateImpact, updateContact } = useApp();

  const location = useLocation();
  const [section, setSection] = useState('students');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (location.state?.section) setSection(location.state.section);
  }, [location.state]);

  if (!isAdminLoggedIn) return <LoginScreen onLogin={adminLogin} />;

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 pt-16 left-0 w-60 bg-navy-900 z-30 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:pt-0`}>
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-saffron-500/20 border border-saffron-400/30 flex items-center justify-center">
              <Shield size={16} className="text-saffron-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Admin Panel</p>
              <p className="text-gray-500 text-xs">SSSHEP Management</p>
            </div>
          </div>
        </div>
        <nav className="p-3 space-y-1 flex-1">
          {SECTIONS.map(s => {
            const Icon = s.icon;
            return (
              <button key={s.id} onClick={() => { setSection(s.id); setSidebarOpen(false); }}
                className={`admin-sidebar-link w-full text-left ${section === s.id ? 'active' : ''}`}>
                <Icon size={16} /> {s.label}
                {section === s.id && <ChevronRight size={14} className="ml-auto" />}
              </button>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button onClick={adminLogout}
            className="admin-sidebar-link w-full text-left text-red-400 hover:text-red-300 hover:bg-red-500/10">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Topbar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <LayoutGrid size={18} />
            </button>
            <h2 className="font-semibold text-navy-900 capitalize">
              {SECTIONS.find(s => s.id === section)?.label}
            </h2>
          </div>
          <button onClick={adminLogout}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <LogOut size={14} /> Logout
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-w-4xl">
          {section === 'students' && (
            <PeopleSection type="student" items={students}
              onAdd={addStudent} onEdit={updateStudent} onDelete={deleteStudent} />
          )}
          {section === 'alumni' && (
            <PeopleSection type="alumni" items={alumni}
              onAdd={addAlumni} onEdit={updateAlumni} onDelete={deleteAlumni} />
          )}
          {section === 'services' && (
            <ServicesSection services={services} onAdd={addService} onEdit={updateService} />
          )}
          {section === 'impact' && (
            <ImpactSection impact={impact} onUpdate={updateImpact} />
          )}
          {section === 'contact' && (
            <ContactSection contact={contact} onUpdate={updateContact} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
