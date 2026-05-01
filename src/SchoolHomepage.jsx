import React, { useState } from 'react';
import {
  Mail, MapPin, Phone, Clock, GraduationCap, ChevronDown,
  ChevronRight, ChevronLeft, Shield, Users, BookOpen,
  Building, User, Calendar, Menu, Bell, Download, FileText,
  Home as HomeIcon,
} from 'lucide-react';

/* ── Social-media SVG icons ── */
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

/* ── Circular school seal logo ── */
const SchoolLogo = () => (
  <svg viewBox="0 0 100 100" width="80" height="80" aria-label="Zoom International School Logo">
    <circle cx="50" cy="50" r="48" fill="#0d2a5e" stroke="#c9a227" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="39" fill="none" stroke="#c9a227" strokeWidth="1" />
    <text x="50" y="57" textAnchor="middle" fill="white" fontSize="30" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
    <defs>
      <path id="topArc" d="M 12,50 A 38,38 0 1,1 88,50" />
      <path id="bottomArc" d="M 88,50 A 38,38 0 1,1 12,50" />
    </defs>
    <text fill="#c9a227" fontSize="6.5" fontFamily="Arial, sans-serif" letterSpacing="1.8">
      <textPath href="#topArc" startOffset="5%">ZOOM INTERNATIONAL SCHOOL</textPath>
    </text>
    <text fill="#c9a227" fontSize="6" fontFamily="Arial, sans-serif" letterSpacing="1.5">
      <textPath href="#bottomArc" startOffset="12%">CHILDREN&apos;S DREAM LAND</textPath>
    </text>
  </svg>
);

/* ── Data ── */
const notices = [
  {
    day: '20', month: 'May',
    text: 'Urgent Notice – CBSE Class X Second Board Examination (2026)',
    isNew: true,
  },
  {
    day: '15', month: 'May',
    text: 'Date Sheet of CBSE Senior School',
    isNew: false,
  },
  {
    day: '10', month: 'May',
    text: 'Summer Vacation Notice',
    isNew: false,
  },
];

const newsEvents = [
  { title: 'International Yoga Day', date: '21 June', img: 'https://picsum.photos/seed/yogaday/200/130' },
  { title: "Children's Day", date: '14 November', img: 'https://picsum.photos/seed/childrensday/200/130' },
  { title: "Teacher's Day", date: '5 September', img: 'https://picsum.photos/seed/teachersday/200/130' },
  { title: 'Annual Day Celebration', date: '15 December', img: 'https://picsum.photos/seed/annualday/200/130' },
];

const navLinks = [
  { label: 'Home', active: true },
  { label: 'About Us', hasDropdown: true },
  { label: 'Rules & Regulations' },
  { label: 'Academic' },
  { label: 'Admission' },
  { label: 'Student Corner' },
  { label: 'Staff' },
  { label: 'Downloads' },
  { label: 'Online' },
  { label: 'Gallery' },
  { label: 'Contact Us' },
];

const features = [
  {
    icon: <GraduationCap size={32} />,
    title: 'CBSE AFFILIATED',
    desc: 'Affiliated to CBSE, Delhi ensuring quality education and holistic development.',
  },
  {
    icon: <Building size={32} />,
    title: 'MODERN FACILITIES',
    desc: 'Well-equipped classrooms, labs, library, sports and smart learning resources.',
  },
  {
    icon: <Users size={32} />,
    title: 'EXPERIENCED STAFF',
    desc: 'Dedicated and qualified teachers focused on student success.',
  },
  {
    icon: <User size={32} />,
    title: 'STUDENT-CENTERED',
    desc: 'A nurturing environment that encourages creativity, confidence and growth.',
  },
];

const quickLinks = [
  { label: 'Admission Form', icon: <FileText size={22} /> },
  { label: 'Date Sheet', icon: <Calendar size={22} /> },
  { label: 'Academic Calendar', icon: <Calendar size={22} /> },
  { label: 'Downloads', icon: <Download size={22} /> },
];

const footerLinks = ['About Us', 'Rules & Regulations', 'Academic', 'Admission', 'Student Corner', 'Staff', 'Downloads', 'Gallery', 'Online'];

export default function SchoolHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── 1. TOP BAR ── */}
      <div className="bg-[#0d1b3e] text-white text-xs py-2">
        <div className="max-w-[1280px] mx-auto px-4 flex justify-end items-center gap-5 flex-wrap">
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <Mail size={12} /> Mail Us
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <BookOpen size={12} /> Guest Book
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <Phone size={12} /> Reach Us
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <MapPin size={12} /> Site Map
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <Shield size={12} /> Mandatory Disclosure
          </a>
        </div>
      </div>

      {/* ── 2. HEADER ── */}
      <header className="bg-white py-3 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center gap-4">
          {/* Logo + School Name */}
          <div className="flex items-center gap-3">
            <SchoolLogo />
            <div>
              <div className="text-2xl md:text-[26px] font-extrabold text-[#0d2a5e] leading-tight tracking-wide">
                ZOOM INTERNATIONAL SCHOOL
              </div>
              <div className="text-[#1a56db] font-semibold text-sm">Children&apos;s Dream Land</div>
              <div className="text-gray-500 text-xs">A Senior Secondary School (Affiliated to CBSE, Delhi)</div>
            </div>
          </div>

          {/* Admission Card */}
          <div className="hidden md:flex bg-[#0d2a5e] text-white rounded-xl items-center gap-4 px-5 py-3 shrink-0 shadow-lg">
            <div className="border-2 border-white/50 rounded-full p-3 shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <p className="font-bold text-sm tracking-wide leading-tight">ADMISSION OPEN</p>
              <p className="font-extrabold text-2xl leading-tight">2025-26</p>
              <button className="mt-1.5 bg-white text-[#0d2a5e] text-xs font-bold py-1.5 px-4 rounded flex items-center gap-1 hover:bg-gray-100 transition-colors">
                Apply Now <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── 3. NAVIGATION ── */}
      <nav className="bg-white shadow sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          {/* Desktop links */}
          <ul className="hidden lg:flex items-center text-[11px] font-semibold text-[#0d2a5e]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className={`flex items-center gap-1 py-3.5 px-2.5 xl:px-3 whitespace-nowrap transition-colors
                    ${link.active
                      ? 'bg-[#1a56db] text-white'
                      : 'hover:text-[#1a56db]'}`}
                >
                  {link.active && <HomeIcon size={12} className="shrink-0" />}
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={11} />}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden py-3 text-[#0d2a5e]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={22} />
          </button>

          <button className="bg-[#0d2a5e] text-white px-5 py-2 my-2 rounded font-semibold text-[11px] flex items-center gap-1.5 hover:bg-blue-900 transition-colors shrink-0">
            <User size={13} /> Login
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`flex items-center justify-between py-2.5 border-b border-gray-100 text-xs font-semibold
                  ${link.active ? 'text-[#1a56db]' : 'text-[#0d2a5e] hover:text-[#1a56db]'}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={11} />}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── 4. MAIN CONTENT: Hero + Sidebar ── */}
      <div className="max-w-[1280px] mx-auto flex" style={{ minHeight: '420px' }}>
        {/* Hero slider */}
        <div className="relative flex-1 overflow-hidden" style={{ minWidth: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
            alt="Zoom International School Campus"
            className="w-full h-full object-cover"
            style={{ minHeight: '420px', maxHeight: '420px' }}
          />
          {/* Bottom gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/85 via-[#0d1b3e]/20 to-transparent" />

          {/* Text overlay at bottom-left */}
          <div className="absolute bottom-10 left-8">
            <p className="text-white/80 text-sm mb-1">Welcome to</p>
            <h2 className="text-white text-2xl font-bold leading-tight mb-1.5">
              Zoom International School
            </h2>
            <p className="text-white/80 text-sm mb-4">Nurturing dreams, building futures.</p>
            <button className="bg-[#1a56db] text-white text-sm font-semibold px-5 py-2.5 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors">
              Apply for Admission <ChevronRight size={16} />
            </button>
          </div>

          {/* Left carousel arrow */}
          <button className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-[#0d2a5e] hover:bg-white shadow-md z-10 transition-colors">
            <ChevronLeft size={20} />
          </button>
          {/* Right carousel arrow */}
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-[#0d2a5e] hover:bg-white shadow-md z-10 transition-colors">
            <ChevronRight size={20} />
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1a56db]" />
            <div className="w-3 h-3 rounded-full bg-white/50" />
            <div className="w-3 h-3 rounded-full bg-white/50" />
            <div className="w-3 h-3 rounded-full bg-white/50" />
          </div>
        </div>

        {/* ── Right Sidebar ── */}
        <div className="hidden lg:flex flex-col w-[340px] shrink-0 border-l border-gray-200 bg-white">

          {/* Notice Board */}
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
              <h3 className="font-bold text-sm text-[#0d2a5e] flex items-center gap-2">
                <Bell size={15} className="text-[#1a56db]" />
                NOTICE BOARD
              </h3>
              <a href="#" className="text-[#1a56db] text-xs font-semibold hover:underline">View All</a>
            </div>
            <div className="divide-y divide-gray-100">
              {notices.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start px-4 py-3">
                  <div className="border border-gray-300 rounded text-center px-2 py-1 min-w-[44px] shrink-0">
                    <div className="text-base font-bold text-[#0d2a5e] leading-none">{item.day}</div>
                    <div className="text-[9px] text-gray-500 font-semibold">{item.month}</div>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-700 leading-snug">
                      {item.text}
                      {item.isNew && (
                        <span className="ml-1 bg-red-500 text-white text-[9px] font-bold px-1 py-0.5 rounded align-middle">New</span>
                      )}
                    </p>
                    <a href="#" className="text-[#1a56db] text-[11px] font-semibold flex items-center gap-0.5 mt-1 hover:underline">
                      Click Here <ChevronRight size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News & Events */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
              <h3 className="font-bold text-sm text-[#0d2a5e] flex items-center gap-2">
                <Users size={15} className="text-[#1a56db]" />
                NEWS &amp; EVENTS
              </h3>
              <a href="#" className="text-[#1a56db] text-xs font-semibold hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-2 flex-1">
              {newsEvents.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 ${idx % 2 === 0 ? 'border-r' : ''} ${idx < 2 ? 'border-b' : ''} border-gray-100`}
                >
                  <div className="w-full h-20 bg-gray-200 rounded overflow-hidden mb-2">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[11px] font-semibold text-[#0d2a5e] leading-snug">{item.title}</p>
                  <p className="text-[11px] text-[#1a56db] font-medium">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── 5. FEATURES ── */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-200">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-8 py-6">
              <div className="text-[#1a56db] mb-3">{f.icon}</div>
              <h4 className="font-extrabold text-[#0d2a5e] text-sm mb-2">{f.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. QUICK LINKS ── */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-gray-300" />
            <h3 className="font-bold text-[#0d2a5e] text-sm tracking-widest uppercase whitespace-nowrap">
              QUICK LINKS
            </h3>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((ql, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center justify-between border border-gray-200 rounded px-4 py-3 hover:border-[#1a56db] hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#1a56db]">{ql.icon}</div>
                  <span className="text-sm font-semibold text-[#0d2a5e] group-hover:text-[#1a56db]">{ql.label}</span>
                </div>
                <ChevronRight size={16} className="text-[#1a56db] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── 7. FOOTER ── */}
      <footer className="bg-[#0d1b3e] text-white relative overflow-hidden pt-10 pb-0">
        {/* Faint world-map watermark */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.07] bg-no-repeat bg-right bg-contain pointer-events-none"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">

            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0d2a5e] border-2 border-[#c9a227] flex items-center justify-center shrink-0">
                  <span className="text-white font-extrabold text-lg leading-none">Z</span>
                </div>
                <p className="font-bold text-sm leading-snug">ABOUT ZOOM INTERNATIONAL SCHOOL</p>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                At Zoom International School, we are committed to providing quality education and holistic
                development to shape responsible global citizens.
              </p>
              <div className="flex items-center gap-2">
                {[FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1a56db] transition-colors"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">QUICK LINKS</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {footerLinks.map((link) => (
                  <a key={link} href="#" className="text-gray-400 text-xs hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">CONTACT INFO</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <MapPin size={13} className="shrink-0 text-white" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Phone size={13} className="shrink-0 text-white" />
                  <span>+91 12345 67890</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Mail size={13} className="shrink-0 text-white" />
                  <span>info@zoominternationalschool.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Clock size={13} className="shrink-0 text-white" />
                  <span>Mon - Sat: 8:00 AM - 2:30 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
            <span>© 2025 Zoom International School. All Rights Reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
