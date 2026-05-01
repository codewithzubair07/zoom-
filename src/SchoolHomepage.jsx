import React, { useState } from 'react';
import {
  Mail, MapPin, Phone, Clock, GraduationCap, ChevronDown,
  ChevronRight, ChevronLeft, Shield, Users, BookOpen, Trophy,
  Building, User, Calendar, Menu
} from 'lucide-react';

/* ── Minimal social-media SVG icons (lucide-react doesn't ship them) ── */
const FacebookIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const YoutubeIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const TwitterIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const notices = [
  {
    day: '20', month: 'MAY',
    text: 'NAAS SELECTION DRIVE FOR PARTICIPATION IN THE GLOBAL YOUTH INSTITUTE (GYI)',
    isNew: true,
  },
  {
    day: '15', month: 'MAY',
    text: 'DATE SHEET OF 2ND BOARD EXAMINATION, CLASS - X (2026)',
    isNew: true,
  },
  {
    day: '10', month: 'MAY',
    text: 'SUMMER VACATION NOTICE FOR ALL CLASSES',
    isNew: true,
  },
];

const events = [
  { title: 'CARROM TOURNAMENT', date: '25 May 2025', img: 'https://picsum.photos/seed/carrom/100/60' },
  { title: "FRESHER'S WELCOME", date: '20 May 2025', img: 'https://picsum.photos/seed/fresher/100/60' },
  { title: 'ANNUAL DAY CELEBRATION', date: '15 May 2025', img: 'https://picsum.photos/seed/annual/100/60' },
];

const navLinks = [
  { label: 'HOME', hasDropdown: false, active: true },
  { label: 'ABOUT US', hasDropdown: true },
  { label: 'ACADEMIC', hasDropdown: true },
  { label: 'ADMISSION', hasDropdown: true },
  { label: 'STUDENT CORNER', hasDropdown: false },
  { label: 'STAFF', hasDropdown: false },
  { label: 'FACILITIES', hasDropdown: false },
  { label: 'GALLERY', hasDropdown: false },
  { label: 'CONTACT US', hasDropdown: false },
];

const features = [
  {
    icon: <GraduationCap size={28} />,
    bg: 'bg-[#0a193d]',
    text: 'text-white',
    title: 'QUALITY EDUCATION',
    desc: 'Holistic learning with a focus on academic excellence and overall development.',
  },
  {
    icon: <User size={28} />,
    bg: 'bg-[#ffbc05]',
    text: 'text-[#0a193d]',
    title: 'EXPERT FACULTY',
    desc: 'Experienced and dedicated teachers guiding every student towards success.',
  },
  {
    icon: <BookOpen size={28} />,
    bg: 'bg-[#0a193d]',
    text: 'text-white',
    title: 'MODERN FACILITIES',
    desc: 'Smart classrooms, well-equipped labs, library & sports infrastructure.',
  },
  {
    icon: <Shield size={28} />,
    bg: 'bg-[#ffbc05]',
    text: 'text-[#0a193d]',
    title: 'SAFE & SECURE ENVIRONMENT',
    desc: 'A safe, supportive and nurturing campus for every child.',
  },
];

const stats = [
  { icon: <Users size={40} className="text-white" />, value: '1200+', label: 'Happy Students' },
  { icon: <User size={40} className="text-white" />, value: '80+', label: 'Expert Teachers' },
  { icon: <Trophy size={40} className="text-[#ffbc05]" />, value: '25+', label: 'Awards Won' },
  { icon: <Building size={40} className="text-[#ffbc05]" />, value: '2+', label: 'Campuses' },
];

export default function SchoolHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ── 1. TOP BAR ── */}
      <div className="bg-[#03102f] text-white text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 flex-wrap">
          <a href="#" className="flex items-center gap-1 hover:text-[#ffbc05] transition-colors">
            <Mail size={13} /> Mail Us
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#ffbc05] transition-colors">
            <BookOpen size={13} /> Guest Book
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#ffbc05] transition-colors">
            <Phone size={13} /> Reach Us
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#ffbc05] transition-colors">
            <MapPin size={13} /> Site Map
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#ffbc05] transition-colors">
            <Shield size={13} /> Mandatory Disclosure
          </a>
        </div>
      </div>

      {/* ── 2. HEADER ── */}
      <header className="bg-white py-4 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-[#0a193d] rounded-full flex items-center justify-center border-4 border-[#ffbc05] shrink-0">
              <span className="text-white font-extrabold text-3xl leading-none">Z</span>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#0a193d] tracking-widest leading-none">ZOOM</div>
              <div className="text-lg font-bold text-[#0a193d] tracking-wide">INTERNATIONAL SCHOOL</div>
              <div className="text-[#ffbc05] font-semibold text-sm">Children's Dream Land</div>
              <div className="text-gray-500 text-xs">A Senior Secondary School (Affiliated to CBSE, Delhi)</div>
            </div>
          </div>

          {/* Admission Card */}
          <div className="bg-[#0a193d] text-white px-5 py-4 rounded-2xl flex items-center gap-4 shadow-lg shrink-0">
            <div className="border border-white/30 p-3 rounded-full">
              <GraduationCap size={34} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-base tracking-wide">ADMISSION OPEN</p>
              <p className="text-[#ffbc05] font-extrabold text-2xl leading-tight">2025-26</p>
              <button className="mt-1 bg-[#ffbc05] text-[#0a193d] text-xs font-bold py-1.5 px-4 rounded flex items-center gap-1 hover:bg-yellow-400 transition-colors">
                ENQUIRE NOW <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── 3. NAVIGATION ── */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Desktop links */}
          <ul className="hidden lg:flex items-center text-xs font-bold text-[#0a193d]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className={`flex items-center gap-1 py-4 px-3 xl:px-4 hover:text-[#ffbc05] transition-colors whitespace-nowrap
                    ${link.active ? 'border-b-2 border-[#ffbc05] text-[#ffbc05]' : ''}
                  `}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={12} />}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden py-3 text-[#0a193d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={22} />
          </button>

          <button className="bg-[#0a193d] text-white px-5 py-2 my-2 rounded font-bold text-xs flex items-center gap-2 hover:bg-blue-900 transition-colors shrink-0">
            <User size={14} /> LOGIN
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`flex items-center justify-between py-2.5 border-b border-gray-50 text-xs font-bold text-[#0a193d] hover:text-[#ffbc05]
                  ${link.active ? 'text-[#ffbc05]' : ''}
                `}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} />}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── 4. HERO SECTION ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-700"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1400&q=80')",
          }}
        />
        {/* Dark overlay across entire hero */}
        <div className="absolute inset-0 bg-[#0a193d]/60" />
        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a193d] via-[#0a193d]/85 to-transparent" style={{ width: '65%' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex items-start justify-between py-16 gap-6">
          {/* Hero text + buttons */}
          <div className="text-white w-full lg:w-1/2 pt-4">
            <p className="text-[#ffbc05] font-bold text-xs tracking-widest mb-3 uppercase">
              Welcome to Zoom International School
            </p>
            <h2 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-4">
              NURTURING DREAMS,
              <br />
              <span className="text-[#ffbc05]">BUILDING FUTURES</span>
            </h2>
            <p className="text-base text-gray-200 mb-8 max-w-md leading-relaxed">
              Empowering students with knowledge, values, and skills for a brighter
              tomorrow. We believe in nurturing the whole child.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ffbc05] text-[#0a193d] px-6 py-3 rounded font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                EXPLORE MORE <ChevronRight size={16} />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors">
                ABOUT OUR SCHOOL
              </button>
            </div>
          </div>

          {/* ── 5. FLOATING SIDEBAR WIDGETS ── */}
          <div className="hidden lg:flex flex-col gap-5 w-[370px] shrink-0">
            {/* Notice Board */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#0a193d] text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#ffbc05] rounded-full inline-block" />
                  NOTICE BOARD
                </h3>
                <button className="border border-white/40 text-[10px] px-3 py-1 rounded hover:bg-white/10 transition-colors font-bold tracking-wide">
                  VIEW ALL
                </button>
              </div>
              <div className="p-4 flex flex-col divide-y divide-gray-100">
                {notices.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start py-3 first:pt-0 last:pb-0">
                    <div className="border-2 border-gray-200 rounded text-center px-2 py-1 min-w-[48px] shrink-0">
                      <div className="text-base font-extrabold text-[#0a193d] leading-none">{item.day}</div>
                      <div className="text-[9px] font-bold text-gray-500 uppercase">{item.month}</div>
                    </div>
                    <p className="text-[11px] font-semibold text-gray-700 leading-relaxed">
                      {item.text}
                      {item.isNew && (
                        <span className="ml-1 text-red-500 font-bold text-[10px]">New</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events & Highlights */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#0a193d] text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <Calendar size={15} className="text-[#ffbc05]" />
                  EVENTS &amp; HIGHLIGHTS
                </h3>
                <button className="border border-white/40 text-[10px] px-3 py-1 rounded hover:bg-white/10 transition-colors font-bold tracking-wide">
                  VIEW ALL
                </button>
              </div>
              <div className="p-4 flex flex-col divide-y divide-gray-100">
                {events.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center py-3 first:pt-0 last:pb-0">
                    <div className="w-16 h-11 bg-gray-200 rounded overflow-hidden shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#0a193d] leading-snug">{item.title}</p>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <Calendar size={9} /> {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel arrows */}
        <button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a193d]/60 hover:bg-[#0a193d] text-white rounded-full flex items-center justify-center z-20 transition-colors">
          <ChevronLeft size={22} />
        </button>
        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a193d]/60 hover:bg-[#0a193d] text-white rounded-full flex items-center justify-center z-20 transition-colors">
          <ChevronRight size={22} />
        </button>
        {/* Pagination dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          <div className="w-3 h-3 rounded-full bg-[#ffbc05]" />
          <div className="w-3 h-3 rounded-full bg-white/40" />
          <div className="w-3 h-3 rounded-full bg-white/40" />
        </div>
      </div>

      {/* ── 6. FEATURES SECTION ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative -mt-8 z-30 mb-10">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className={`p-3 ${f.bg} ${f.text} rounded-full shrink-0`}>
                {f.icon}
              </div>
              <div>
                <h4 className="font-extrabold text-[#0a193d] text-xs mb-1 uppercase tracking-wide">{f.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. STATISTICS BANNER ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="bg-[#0a193d] rounded-2xl py-8 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {stats.map((s, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {s.icon}
              <div>
                <p className="text-2xl font-extrabold leading-none">{s.value}</p>
                <p className="text-xs text-gray-300 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. FOOTER CONTACT BAR ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5 md:p-6 flex flex-wrap xl:flex-nowrap items-center gap-4 xl:gap-0">
          {/* Call Us */}
          <div className="flex items-center gap-3 xl:border-r xl:border-gray-200 xl:pr-6 min-w-[160px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#0a193d] shrink-0">
              <Phone size={17} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Call Us</p>
              <p className="text-xs font-bold text-[#0a193d]">+91 12345 67890</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-center gap-3 xl:border-r xl:border-gray-200 xl:px-6 min-w-[200px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#0a193d] shrink-0">
              <Mail size={17} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Email Us</p>
              <p className="text-xs font-bold text-[#0a193d]">info@zoomschool.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 xl:border-r xl:border-gray-200 xl:px-6 min-w-[160px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#0a193d] shrink-0">
              <MapPin size={17} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Our Location</p>
              <p className="text-xs font-bold text-[#0a193d]">New Delhi, India</p>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-center gap-3 xl:px-6 min-w-[160px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#0a193d] shrink-0">
              <Clock size={17} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">School Timings</p>
              <p className="text-xs font-bold text-[#0a193d]">8:00 AM – 2:30 PM</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2 xl:ml-auto flex-wrap">
            <span className="text-[10px] font-extrabold text-[#0a193d] mr-1 tracking-wider uppercase">Follow Us</span>
            {[FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#0a193d] hover:text-white transition-colors"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
