"use client";
 
// SocialSidebar.jsx
// Install remixicon: npm install remixicon
// In your layout/globals.css add: @import 'remixicon/fonts/remixicon.css';
 
const icons = [
  { icon: "ri-phone-line",      tooltip: "Call Us",    href: "tel:+1234567890"          },
  { icon: "ri-mail-line",       tooltip: "Email",      href: "mailto:you@email.com"     },
  { icon: "ri-facebook-fill",   tooltip: "Facebook",   href: "https://facebook.com"     },
  { icon: "ri-linkedin-fill",   tooltip: "LinkedIn",   href: "https://linkedin.com"     },
  { icon: "ri-instagram-line",  tooltip: "Instagram",  href: "https://instagram.com"    },
];
 
export default function SocialSidebar() {
  return (
    <div className="fixed left-13 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
 
      {/* Sidebar pill wrapper */}
      <div
        className="flex flex-col items-center py-5 rounded-[30px]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        }}
      >
        {/* Top line */}
        <div
          className="w-px"
          style={{
            height: 50,
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))",
          }}
        />
 
        {/* Icons */}
        <div className="flex flex-col items-center gap-[10px] px-[10px] my-1">
          {icons.map(({ icon, tooltip, href }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={tooltip}
              className="group relative flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: 40,
                height: 40,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "scale(1.12)";
                e.currentTarget.style.boxShadow = "0 0 14px rgba(160,140,255,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <i
                className={`${icon} text-[17px]`}
                style={{ color: "rgba(255,255,255,0.75)" }}
              />
 
              {/* Tooltip */}
              <span
                className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2
                           whitespace-nowrap rounded px-[10px] py-1 text-[11px] text-white opacity-0
                           transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {tooltip}
              </span>
            </a>
          ))}
        </div>
 
        {/* Bottom line */}
        <div
          className="w-px"
          style={{
            height: 24,
            background: "linear-gradient(to top, transparent, rgba(255,255,255,0.15))",
          }}
        />
      </div>
    </div>
  );
}