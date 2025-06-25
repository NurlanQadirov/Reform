import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code,
  Wifi,
  Shield,
  Compass,
  Check,
  Quote,
  Zap,
  Search,
  FileText,
  Settings,
} from "lucide-react";
import AnimatedSection from "../components/common/AnimatedSection";

const HomePage = () => {
  // Ekranın enini yadda saxlamaq üçün state və effekt
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Komponent silindikdə event listener-i təmizləyirik
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // ===========================================
  const services = [
    {
      id: "software",
      icon: Code,
      title: "Proqram Təminatı və Kodlaşdırma",
      description: "İdeadan tətbiqə: Proqram təminatının tam həyat dövrü.",
    },
    {
      id: "network",
      icon: Wifi,
      title: "Cisco Şəbəkə İnfrastrukturu",
      description:
        "Nexus, C9300 və digər seriyalarla etibarlı şəbəkə qurulumu.",
    },
    {
      id: "security",
      icon: Shield,
      title: "Kibertəhlükəsizlik Həlləri",
      description: "FortiNAC, DNSSENSE və fərdi təhlükəsizlik auditi.",
    },
    {
      id: "consulting",
      icon: Compass,
      title: "İT Konsaltinq və Strategiya",
      description: "İnfrastrukturun planlanması və Office 365 optimizasiyası.",
    },
  ];
  const trustPoints = [
    "Dərin Texniki Mütəxəssislik: Sertifikatlaşdırılmış mütəxəssislər.",
    "Fərdi Yanaşma: Biznes tələblərinizə uyğunlaşdırılmış həllər.",
    "Etibarlılıq və Dəstək: Layihə sonrası tam texniki dəstək.",
  ];
  const testimonials = [
    {
      quote:
        "Reform komandası ilə işləmək biznesimiz üçün transformativ oldu...",
      name: "Aynurə Məmmədova",
      company: "TechSolutions MMC",
    },
    {
      quote:
        "Kibertəhlükəsizlik auditindən sonra özümüzü daha təhlükəsiz hiss edirik...",
      name: "Elvin Ağayev",
      company: "Innovate Group",
    },
    {
      quote: "Şəbəkə infrastrukturumuz heç vaxt bu qədər stabil olmamışdı...",
      name: "Fərid Quliyev",
      company: "LogiCorp",
    },
  ];
  const processSteps = [
    {
      icon: Search,
      title: "Kəşfiyyat və Analiz",
      description:
        "Müştərinin tələblərini və mövcud infrastrukturu dərindən analiz edərək ehtiyacları müəyyən edirik.",
    },
    {
      icon: FileText,
      title: "Strateji Planlama",
      description:
        "Analiz nəticələrinə əsasən ən effektiv həlləri təklif edir və layihənin yol xəritəsini hazırlayırıq.",
    },
    {
      icon: Zap,
      title: "Tətbiq və İnteqrasiya",
      description:
        "Planı həyata keçirir, yeni sistemləri inteqrasiya edir və tam funksionallığı təmin edirik.",
    },
    {
      icon: Settings,
      title: "Dəstək və Optimizasiya",
      description:
        "Layihə təhvil verildikdən sonra daimi texniki dəstək göstərir və sistemləri optimallaşdırırıq.",
    },
  ];
  const partners = [
    "Cisco",
    "Microsoft",
    "Fortinet",
    "DNSSENSE",
    "VMware",
    "Veeam",
    "Dell",
    "HP",
  ];
  // ==== ADDIM 3 KODU BURAYA ƏLAVƏ EDİLİR ====
  // Ekran ölçüsünə görə animasiya datalarını dinamik təyin edirik
  const getRingData = () => {
    // Desktop
    if (windowWidth >= 1024) {
      return [
        { size: 200, duration: 30, particles: 2 },
        { size: 300, duration: 45, particles: 3, direction: -1 },
        { size: 400, duration: 60, particles: 4 },
      ];
    }
    // Tablet
    if (windowWidth >= 768) {
      return [
        { size: 180, duration: 30, particles: 2 },
        { size: 260, duration: 45, particles: 3, direction: -1 },
        { size: 340, duration: 60, particles: 3 },
      ];
    }
    // Mobile
    return [
      { size: 150, duration: 30, particles: 1 },
      { size: 210, duration: 45, particles: 2, direction: -1 },
      { size: 270, duration: 60, particles: 2 },
    ];
  };

  const ringData = getRingData();
  const centralOrbSize = windowWidth >= 768 ? "w-32 h-32" : "w-24 h-24";
  // ===========================================
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight"
            >
              Rəqəmsal Transformasiyanın Arxitekturası
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Yüksək texnologiyalı proqram təminatı, dayanıqlı şəbəkə
              infrastrukturu və qabaqcıl kibertəhlükəsizlik həlləri ilə
              biznesinizi gələcəyə hazırlayırıq.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-bold transition-transform,transition-shadow duration-300 transform shadow-lg hover:shadow-cyan-500/30 bg-gradient-to-r from-cyan-500 to-purple-600"
              role="button"
            >
              <span className="relative flex items-center gap-3">
                Xidmətlərimizi Kəşf Edin
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Əsas Fəaliyyət İstiqamətlərimiz
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Biznesinizin rəqəmsal potensialını tam açmaq üçün dörd əsas sahədə
              hərtərəfli həllər təklif edirik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ y: -15 }}
                viewport={{ once: true, amount: 0.5 }}
                className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/80"
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0) 70%)",
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
                  >
                    Daha Ətraflı
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Process Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              İş Prosesimiz
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mükəmməl nəticələrə çatmaq üçün sınanmış və effektiv dörd
              mərhələli yanaşmamız.
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-700/50 hidden lg:block -translate-x-1/2"
              aria-hidden="true"
            ></div>

            {processSteps.map((step, index) => (
              <div
                key={index}
                className="lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-center my-8"
              >
                <motion.div
                  className={`${
                    index % 2 === 0
                      ? "lg:order-1 lg:text-right"
                      : "lg:order-3 lg:text-left"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    }}
                    className="bg-slate-900/50 border inline-block border-slate-800 p-8 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden lg:flex items-center justify-center w-32 relative lg:order-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="relative w-16 h-16 bg-slate-900 border-2 border-cyan-400 rounded-full flex items-center justify-center z-10"
                  >
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                </motion.div>
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-3" : "lg:order-1"
                  } hidden lg:block`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Reformun Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Niyə Bizimlə Çalışmalısınız?
              </h3>

              <div className="space-y-2">
                {trustPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{
                      backgroundColor: "rgba(14, 165, 233, 0.05)",
                      x: 5,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex items-start gap-4 group p-3 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mt-1 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300">
                      <Check className="w-4 h-4 text-cyan-400 group-hover:scale-125 transition-transform" />
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-96 lg:h-[450px] lg:self-stretch flex items-center justify-center mt-12 lg:mt-0">
              <div className="absolute w-full h-full bg-slate-900/30 rounded-3xl backdrop-blur-sm border border-slate-700/30"></div>
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{ perspective: 1000 }}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <motion.div
                  className={`${centralOrbSize} rounded-full bg-gradient-to-tr from-purple-600/50 to-cyan-500/50`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {ringData.map((ring, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-cyan-400/20"
                    style={{
                      width: ring.size,
                      height: ring.size,
                      transformStyle: "preserve-3d",
                    }}
                    animate={{ rotate: 360 * (ring.direction || 1) }}
                    transition={{
                      duration: ring.duration,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {[...Array(ring.particles)].map((_, pIndex) => (
                      <motion.div
                        key={pIndex}
                        className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          margin: "-6px",
                          transform: `rotate(${
                            (360 / ring.particles) * pIndex
                          }deg) translateX(${ring.size / 2}px)`,
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Müştərilərimiz Nə Deyir?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bizimlə çalışan şirkətlərin uğur hekayələri bizim ən böyük qürur
              mənbəyimizdir.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 255, 255, 0.5)",
                }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex flex-col group"
              >
                <Quote className="w-10 h-10 text-cyan-400/50 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-gray-300 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/150?u=${testimonial.name}`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-cyan-400/50 object-cover flex-shrink-0 mr-4"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Texnoloji Tərəfdaşlarımız
            </h3>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10"></div>
          <motion.div
            className="flex gap-16"
            animate={{ x: ["-0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 h-20 flex items-center">
                <p className="text-4xl font-bold text-gray-500 hover:text-white transition-colors duration-300">
                  {partner}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default HomePage;
