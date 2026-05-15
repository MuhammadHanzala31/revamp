"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import laptop from '@/public/case-studies.png'
import Button from "./PrimaryButton";

const TABS = [
  "UI/UX Design",
  "Web Development",
  "App Development",
  "Branding",
  "Digital Marketing",
  "SMM",
];


const ALL_CASES = [
  // UI/UX Design
  [
    { name: "Name", revenueFrom: "$120K", revenueTo: "$480K", label: "REVENUE GROWTH", category: "B2B SaaS Platform", problem: "Inbound pipeline plateaued; long sales cycles eating CAC.", strategy: "Built intent-based SEO clusters, tested on LinkedIn ADM and lifecycle email nurture.", visitUrl: "#", caseUrl: "#", mockAccent: "#6366f1", mockBg: "#eef2ff", mockText: "Build around how your team actually works" },
    { name: "Name", revenueFrom: "$80K", revenueTo: "$310K", label: "REVENUE GROWTH", category: "FinTech SaaS", problem: "Poor onboarding UX causing high churn in week 1.", strategy: "Redesigned onboarding flow, added contextual tooltips and in-app guidance.", visitUrl: "#", caseUrl: "#", mockAccent: "#6366f1", mockBg: "#eef2ff", mockText: "Simple finance for everyone" },
    { name: "Name", revenueFrom: "24%", revenueTo: "71%", label: "RETENTION LIFT", category: "HR Software", problem: "Feature discoverability at an all-time low.", strategy: "Full UX audit, navigation restructure, and progressive disclosure patterns.", visitUrl: "#", caseUrl: "#", mockAccent: "#6366f1", mockBg: "#eef2ff", mockText: "People ops, simplified" },
    { name: "Name", revenueFrom: "1.2%", revenueTo: "4.8%", label: "CONVERSION RATE", category: "EdTech Platform", problem: "Complex checkout flow losing users at payment step.", strategy: "Streamlined to single-page checkout, added trust signals and progress indicators.", visitUrl: "#", caseUrl: "#", mockAccent: "#6366f1", mockBg: "#eef2ff", mockText: "Learn at your own pace" },
  ],
  // Web Development
  [
    { name: "Name", revenueFrom: "3.2K", revenueTo: "41K", label: "TRAFFIC GROWTH", category: "E-commerce Brand", problem: "Organic traffic stagnant; relying entirely on paid channels.", strategy: "Rebuilt site architecture, launched blog content hub, optimized conversion funnels.", visitUrl: "#", caseUrl: "#", mockAccent: "#22c55e", mockBg: "#f0fdf4", mockText: "Shop smarter, live better" },
    { name: "Name", revenueFrom: "0.9s", revenueTo: "0.2s", label: "PAGE LOAD TIME", category: "Media Publisher", problem: "Slow site speed driving high bounce rates.", strategy: "Migrated to Next.js, implemented ISR, lazy loading, and image optimization.", visitUrl: "#", caseUrl: "#", mockAccent: "#22c55e", mockBg: "#f0fdf4", mockText: "News that loads instantly" },
    { name: "Name", revenueFrom: "$0", revenueTo: "$320K", label: "ONLINE REVENUE", category: "Local Retail Chain", problem: "No online presence; 100% walk-in dependent.", strategy: "Built full e-commerce stack with inventory sync, payment gateway, and CMS.", visitUrl: "#", caseUrl: "#", mockAccent: "#22c55e", mockBg: "#f0fdf4", mockText: "Your local store, online" },
    { name: "Name", revenueFrom: "18%", revenueTo: "54%", label: "ENGAGEMENT RATE", category: "Portfolio Agency", problem: "Static site not converting visitors to inquiries.", strategy: "Rebuilt with animations, case study showcases, and smart contact forms.", visitUrl: "#", caseUrl: "#", mockAccent: "#22c55e", mockBg: "#f0fdf4", mockText: "Where ideas come alive" },
  ],
  // App Development
  [
    { name: "Name", revenueFrom: "$0", revenueTo: "$2.1M", label: "ARR IN 18 MONTHS", category: "Mobile App Startup", problem: "Zero product-market fit signal; app lost in the store.", strategy: "Repositioned for niche, ASO overhaul, referral loop and influencer seeding.", visitUrl: "#", caseUrl: "#", mockAccent: "#f59e0b", mockBg: "#fffbeb", mockText: "Your fitness, your rules" },
    { name: "Name", revenueFrom: "4.1K", revenueTo: "98K", label: "MONTHLY ACTIVE USERS", category: "Wellness App", problem: "High install rate but poor D7 retention.", strategy: "Redesigned habit loop, added streak mechanics and push notification segmentation.", visitUrl: "#", caseUrl: "#", mockAccent: "#f59e0b", mockBg: "#fffbeb", mockText: "Build better habits daily" },
    { name: "Name", revenueFrom: "2.8★", revenueTo: "4.7★", label: "APP STORE RATING", category: "On-Demand Services", problem: "Buggy experience causing negative reviews and churn.", strategy: "Full QA audit, crash reporting integration, and UX friction removal.", visitUrl: "#", caseUrl: "#", mockAccent: "#f59e0b", mockBg: "#fffbeb", mockText: "Service at your doorstep" },
    { name: "Name", revenueFrom: "22s", revenueTo: "6s", label: "ONBOARDING TIME", category: "B2B Field App", problem: "Field staff dropping off during lengthy onboarding.", strategy: "Condensed to 3-step flow with biometric auth and auto-fill integrations.", visitUrl: "#", caseUrl: "#", mockAccent: "#f59e0b", mockBg: "#fffbeb", mockText: "Work smarter in the field" },
  ],
  // Branding
  [
    { name: "Name", revenueFrom: "12%", revenueTo: "68%", label: "BRAND RECALL LIFT", category: "Consumer Goods Brand", problem: "Commodity perception; competing purely on price.", strategy: "Visual identity refresh, packaging redesign, storytelling-first campaign.", visitUrl: "#", caseUrl: "#", mockAccent: "#ec4899", mockBg: "#fdf2f8", mockText: "Crafted with purpose" },
    { name: "Name", revenueFrom: "$0", revenueTo: "$1.4M", label: "BRAND VALUATION", category: "Startup to Scale-up", problem: "No brand identity; looked like every other SaaS company.", strategy: "Built brand from scratch — naming, voice, visual system, and launch campaign.", visitUrl: "#", caseUrl: "#", mockAccent: "#ec4899", mockBg: "#fdf2f8", mockText: "Distinctly different" },
    { name: "Name", revenueFrom: "3.1%", revenueTo: "18.4%", label: "PREMIUM TIER UPTAKE", category: "Hospitality Brand", problem: "Guests not associating property with luxury segment.", strategy: "Repositioned brand, overhauled photography direction and brand guidelines.", visitUrl: "#", caseUrl: "#", mockAccent: "#ec4899", mockBg: "#fdf2f8", mockText: "Luxury, redefined" },
    { name: "Name", revenueFrom: "41%", revenueTo: "89%", label: "CUSTOMER TRUST SCORE", category: "Healthcare Provider", problem: "Outdated brand eroding patient confidence.", strategy: "Humanized visual language, cleaner communications, consistent brand touchpoints.", visitUrl: "#", caseUrl: "#", mockAccent: "#ec4899", mockBg: "#fdf2f8", mockText: "Care you can trust" },
  ],
  // Digital Marketing
  [
    { name: "Name", revenueFrom: "0.8%", revenueTo: "5.4%", label: "CONVERSION RATE", category: "Lead Gen Campaign", problem: "High spend, low quality leads; sales team overwhelmed.", strategy: "Narrowed audience segments, built lead scoring model, A/B tested landing pages.", visitUrl: "#", caseUrl: "#", mockAccent: "#3b82f6", mockBg: "#eff6ff", mockText: "Grow your pipeline" },
    { name: "Name", revenueFrom: "$8.2", revenueTo: "$1.9", label: "COST PER LEAD", category: "Insurance Platform", problem: "Bloated ad spend with diminishing returns.", strategy: "Restructured campaign hierarchy, killed waste audiences, refined bid strategy.", visitUrl: "#", caseUrl: "#", mockAccent: "#3b82f6", mockBg: "#eff6ff", mockText: "Coverage made simple" },
    { name: "Name", revenueFrom: "14%", revenueTo: "62%", label: "EMAIL OPEN RATE", category: "B2B Newsletter", problem: "Email list disengaged; open rates below industry average.", strategy: "Segmented list, rewrote subject line formula, moved to bi-weekly cadence.", visitUrl: "#", caseUrl: "#", mockAccent: "#3b82f6", mockBg: "#eff6ff", mockText: "Insights that actually matter" },
    { name: "Name", revenueFrom: "2.1x", revenueTo: "7.8x", label: "RETURN ON AD SPEND", category: "D2C Brand", problem: "Plateaued ROAS on Meta; scaling killed efficiency.", strategy: "Rebuilt creative testing framework, layered in Advantage+ and retargeting funnels.", visitUrl: "#", caseUrl: "#", mockAccent: "#3b82f6", mockBg: "#eff6ff", mockText: "Results you can measure" },
  ],
  // SMM
  [
    { name: "Name", revenueFrom: "2K", revenueTo: "89K", label: "FOLLOWERS GAINED", category: "DTC Fashion Brand", problem: "No social presence; zero community ownership.", strategy: "Reels-first content strategy, UGC campaigns, collab drops with micro-influencers.", visitUrl: "#", caseUrl: "#", mockAccent: "#a855f7", mockBg: "#faf5ff", mockText: "Wear the story" },
    { name: "Name", revenueFrom: "0.4%", revenueTo: "8.9%", label: "ENGAGEMENT RATE", category: "Lifestyle Brand", problem: "Large following but dead engagement; algorithm penalizing the account.", strategy: "Content audit, niche down to 3 content pillars, comment pod strategy.", visitUrl: "#", caseUrl: "#", mockAccent: "#a855f7", mockBg: "#faf5ff", mockText: "Live with intention" },
    { name: "Name", revenueFrom: "$0", revenueTo: "$240K", label: "SOCIAL-ATTRIBUTED REVENUE", category: "Beauty Brand", problem: "Social seen as vanity — no attribution to sales.", strategy: "Set up UTM tracking, shoppable posts, and influencer affiliate program.", visitUrl: "#", caseUrl: "#", mockAccent: "#a855f7", mockBg: "#faf5ff", mockText: "Beauty that converts" },
    { name: "Name", revenueFrom: "6", revenueTo: "94", label: "VIRAL POSTS IN 90 DAYS", category: "Tech Startup", problem: "B2B brand struggling to find personality on LinkedIn.", strategy: "Founder-led content, behind-the-scenes series, and thought leadership positioning.", visitUrl: "#", caseUrl: "#", mockAccent: "#a855f7", mockBg: "#faf5ff", mockText: "Tech with a human face" },
  ],
];

function LaptopMockup({ img } : any) {
  return (
    <div className="flex justify-center items-center w-[70%] p-8 rounded-2xl bg-[#FFFFFF33]">
      <Image src={img} alt="mockup" />
    </div>
  );
}

function CaseInfo({ data } : any) {
  return (
    <div className="flex flex-col gap-4 w-[30%]">
      <div className="flex  flex-col gap-5">
        <div className="w-11 h-11 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[9px] text-[#666] font-bold tracking-widest">
          LOGO
        </div>
        <span className="text-4xl text-white font-aeonik font-bold">{data.name}</span>
      </div>

      <div>
        <div className="flex items-baseline gap-2.5">
          <span className="text-[56px] font-aeonik font-bold text-white tracking-tight">{data.revenueFrom}</span>
          <span className="text-[56px] font-bold text-[#444]">→</span>
          <span className="text-[56px] font-aeonik font-bold text-white tracking-tight">{data.revenueTo}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xl font-medium text-white font-neue-montreal tracking-widest uppercase">{data.label}</p>
        <p className="text-[32px] font-neue-montreal font-medium text-white">{data.category}</p>
      </div>


      <div className="flex flex-col gap-1">
        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Problem</span>
        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">{data.problem}</p>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Strategy</span>
        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">{data.strategy}</p>
      </div>

      <div className="flex gap-5 flex-wrap mt-1">
       <Button text="Visit Website" variant="primary"/>
       <Button text="Read Case study" variant="outline"/>
      </div>
    </div>
  );
}

export default function CaseStudySlider() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
  };

  const currentCases = ALL_CASES[activeTab];

  return (
    <section className="overflow-hidden mt-14 relative">
      {/* Tabs */}
      <div className="flex justify-between overflow-x-auto scrollbar-hide px-7">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => handleTabClick(i)}
            className={`px-5 py-4 text-3xl cursor-pointer font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${activeTab === i
                ? "text-white border-white"
                : "text-[#555] border-transparent hover:text-[#aaa]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* key=activeTab forces Swiper to remount on tab change, resetting to slide 0 */}
      <Swiper
        key={activeTab}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} !w-4 !h-[2px] mx-auto !rounded-sm !bg-white [&.swiper-pagination-bullet-active]:!w-6 [&.swiper-pagination-bullet-active]:!rounded-sm [&.swiper-pagination-bullet-active]:!bg-white transition-all"></span>`,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {currentCases.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-row  gap-8 px-10 py-10 items-center">
              <LaptopMockup img={laptop} />
              <CaseInfo data={data} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets */}
      <div className="flex justify-center items-center pb-4">
        <div className="swiper-pagination flex gap-1.5 items-center justify-center" />
      </div>
    </section>
  );
}
