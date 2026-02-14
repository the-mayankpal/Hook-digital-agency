
import React, { useEffect, useRef, useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`group transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1) transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-gray-200 dark:bg-zinc-800 shadow-sm">
        <img 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
          src={image}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h4 className="text-xl font-bold px-2">{name}</h4>
      <p className="text-gray-500 px-2">{role}</p>
    </div>
  );
};

const Team: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const members = [
    {
      name: "Sofia Little",
      role: "Creative Lead",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwt0tZACyZ903RvRMljfy-v-sPEj0k-vNfUJE5xLAhNoLhtoBmPec1DmVYz5VSS0rcLkemjmQgRqghX0TelyTA_VlOAywHu95DJ-oaQv_kap8Bg1xtN8r6BIKKKd1a4vBqRk7i4xxXPK69AdHCobLmAveOkHcCAWctFh4wGehvzgdCUe589UqdLFajS0j7GlarTuhzHMMoQ0J0a2Izovm_bSh_0yEnP5u7f202VzKSdpbXivGwM-9ICt_lJcinYalUFBhca3h_6ws"
    },
    {
      name: "James Cohen",
      role: "Founder & CEO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-vvDPsHzpl6aOS6lDSR6iFof4orFqCcGGOUShO50nxyoVZjttIZjiACYK6jfeof35RbwUK0NuTLz8lYc9q5sYhFCLJlMjeNPpCUaucfkn_nc3PMFEAxY80UUGJ-lehETzScjRurvONJYZ5liYavV2NGlyh6n7bcvIbc_L2mhAzemzg9E_v9mo7T1UAKMsOmzxWxjW5kXKkmww_LjgCZNiXL3G-aiXsIhmeYSBeqoYl2wqlo5eU_G8RlXJZzoIxj3XC2WP1c3CLug"
    },
    {
      name: "Maya Rodriguez",
      role: "Head of Paid Media",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDI3e1qanKQXhWKfDdMoZztPIY1HqgJeRkwvjWVzNsK7PdxgkZlGFnk3HgR2-Ospo38qokxjNELLaiSW-EtiKG1UsClGZ7ddrIKSPpf34hJO-PgL2VT7i3c_OzdzViXDam3gyy2t2RA0gCDTWsBvY3qdPnBRo2aQrZMCO44zEAkZRTazTBXvt6nbTKXdOtWU_RS_GPUvC8_xXulcwrMG4eLx3RWBUJ7vHnY-CCoWHP7cZUfhmXNfzVOPSHWc5RcP_mJ5hckvrsyZY"
    }
  ];

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Our team</span>
          <h2 className="text-5xl font-bold mt-4 tracking-tight">
            Meet the team <br /> behind your <span className="serif-italic font-normal">success.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-32">
          {members.map((m, i) => <TeamMember key={i} {...m} index={i} />)}
        </div>

        {/* Recruitment Card */}
        <div 
          ref={cardRef}
          className={`relative max-w-5xl mx-auto rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 lg:p-24 text-center bg-[#f7f6f2] dark:bg-zinc-900 border border-black/5 dark:border-white/5 transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1) transform ${
            isCardVisible ? 'opacity-100 scale-100 translate-z-0' : 'opacity-0 scale-90 -translate-z-20'
          }`}
          style={{ perspective: '1000px' }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1a1c1e] dark:text-white leading-tight">
              Want to be part of the team?
            </h3>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
              We're always looking for talented strategists and growth experts.
            </p>
            <button className="bg-[#e4e6ea] dark:bg-zinc-800 text-[#1a1c1e] dark:text-white px-8 md:px-10 py-4 rounded-3xl font-bold hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm">
              Apply now
            </button>
          </div>
          
          {/* Decorative background icon - Hidden on mobile/tablet to prevent text overlap, shown on large screens */}
          <div className="absolute top-0 right-0 p-12 pointer-events-none hidden lg:block">
            <span className="material-icons-outlined text-9xl text-black dark:text-white opacity-10 transition-colors duration-300" aria-hidden="true">person_add</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
