import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight, Code, Wifi, Shield, Compass, Check, Linkedin, Twitter, Github, Quote, Zap, Search, FileText, Settings } from 'lucide-react';

// A wrapper component to apply scroll animations to sections
const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

// Canvas-based animated background for performance with parallax effect
const ParticleBackground = () => {
    const canvasRef = React.useRef(null);
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const init = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); 
        };

        window.addEventListener('resize', resizeCanvas);
        
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.2})`;
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                this.x += this.speedX;
                this.y += this.speedY;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                   ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(148, 0, 211, ${opacityValue * 0.5})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-20" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />;
}


const ReformHomepage = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'software', icon: Code, title: 'Proqram Təminatı və Kodlaşdırma', description: 'İdeadan tətbiqə: Proqram təminatının tam həyat dövrü.' },
    { id: 'network', icon: Wifi, title: 'Cisco Şəbəkə İnfrastrukturu', description: 'Nexus, C9300 və digər seriyalarla etibarlı şəbəkə qurulumu.' },
    { id: 'security', icon: Shield, title: 'Kibertəhlükəsizlik Həlləri', description: 'FortiNAC, DNSSENSE və fərdi təhlükəsizlik auditi.' },
    { id: 'consulting', icon: Compass, title: 'İT Konsaltinq və Strategiya', description: 'İnfrastrukturun planlanması və Office 365 optimizasiyası.' }
  ];

  const trustPoints = [
    'Dərin Texniki Mütəxəssislik: Sertifikatlaşdırılmış mütəxəssislər.',
    'Fərdi Yanaşma: Biznes tələblərinizə uyğunlaşdırılmış həllər.',
    'Etibarlılıq və Dəstək: Layihə sonrası tam texniki dəstək.'
  ];
  
  const testimonials = [
    {
        quote: "Reform komandası ilə işləmək biznesimiz üçün transformativ oldu. Onların texniki bacarıqları və strateji yanaşmaları rəqəmsal infrastrukturumuzu tamamilə yenilədi.",
        name: "Aynurə Məmmədova",
        company: "TechSolutions MMC"
    },
    {
        quote: "Kibertəhlükəsizlik auditindən sonra özümüzü daha təhlükəsiz hiss edirik. Təqdim etdikləri həllər dünya standartlarına cavab verir və komanda çox peşəkardır.",
        name: "Elvin Ağayev",
        company: "Innovate Group"
    },
    {
        quote: "Şəbəkə infrastrukturumuz heç vaxt bu qədər stabil olmamışdı. Cisco həlləri ilə bağlı dərin bilikləri layihənin uğurla başa çatmasını təmin etdi.",
        name: "Fərid Quliyev",
        company: "LogiCorp"
    }
  ];
  
   const processSteps = [
    {
        icon: Search,
        title: "Kəşfiyyat və Analiz",
        description: "Müştərinin tələblərini və mövcud infrastrukturu dərindən analiz edərək ehtiyacları müəyyən edirik."
    },
    {
        icon: FileText,
        title: "Strateji Planlama",
        description: "Analiz nəticələrinə əsasən ən effektiv həlləri təklif edir və layihənin yol xəritəsini hazırlayırıq."
    },
    {
        icon: Zap,
        title: "Tətbiq və İnteqrasiya",
        description: "Planı həyata keçirir, yeni sistemləri inteqrasiya edir və tam funksionallığı təmin edirik."
    },
    {
        icon: Settings,
        title: "Dəstək və Optimizasiya",
        description: "Layihə təhvil verildikdən sonra daimi texniki dəstək göstərir və sistemləri optimallaşdırırıq."
    }
  ];

  const partners = ['Cisco', 'Microsoft', 'Fortinet', 'DNSSENSE', 'VMware', 'Veeam', 'Dell', 'HP'];
  const navItems = ['Ana Səhifə', 'Xidmətlər', 'Haqqımızda', 'Texnologiyalar', 'Əlaqə'];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-slate-900">
      <ParticleBackground />
      
      {/* Header & Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-slate-950/80 backdrop-blur-lg border-b border-cyan-400/10 shadow-lg shadow-cyan-500/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="text-3xl font-bold tracking-wider"
          >
             <a href="#" className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Reform</a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2, color: '#22d3ee' }}
                className={`relative text-sm font-medium transition-colors ${
                  index === 0 ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item}
                {index === 0 && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" 
                  />
                )}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      <main className="relative z-10">
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
                Yüksək texnologiyalı proqram təminatı, dayanıqlı şəbəkə infrastrukturu və qabaqcıl kibertəhlükəsizlik həlləri ilə biznesinizi gələcəyə hazırlayırıq.
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
              <p className="text-gray-400 max-w-2xl mx-auto">Biznesinizin rəqəmsal potensialını tam açmaq üçün dörd əsas sahədə hərtərəfli həllər təklif edirik.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/80"
                >
                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0) 70%)'}}></div>
                    <div className="relative z-10">
                        <div 
                            className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-6">
                            <service.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <a href="#" className="inline-flex items-center text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
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
                    <p className="text-gray-400 max-w-2xl mx-auto">Mükəmməl nəticələrə çatmaq üçün sınanmış və effektiv dörd mərhələli yanaşmamız.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-700/50 hidden lg:block -translate-x-1/2" aria-hidden="true"></div>
                    
                    {processSteps.map((step, index) => (
                        <div key={index} className="lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-center my-8">
                           {/* Step Content */}
                           <motion.div
                             className={`${index % 2 === 0 ? 'lg:order-1 lg:text-right' : 'lg:order-3 lg:text-left'}`}
                             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.6, ease: 'easeOut' }}
                             viewport={{ once: true, amount: 0.5 }}
                           >
                              <motion.div 
                                whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"}}
                                className="bg-slate-900/50 border inline-block border-slate-800 p-8 rounded-xl"
                              >
                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                              </motion.div>
                           </motion.div>
                           
                           {/* Timeline Icon */}
                            <motion.div 
                              className="hidden lg:flex items-center justify-center w-32 relative lg:order-2"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                              viewport={{ once: true, amount: 0.5 }}
                            >
                               <motion.div 
                                   whileHover={{ scale: 1.2, rotate: 10 }}
                                   className="relative w-16 h-16 bg-slate-900 border-2 border-cyan-400 rounded-full flex items-center justify-center z-10"
                                >
                                   <step.icon className="w-8 h-8 text-cyan-400"/>
                               </motion.div>
                            </motion.div>

                            {/* Spacer */}
                            <div className={`${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'} hidden lg:block`}></div>
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
                        whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.05)", x: 5 }}
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
              <div className="relative h-96 lg:h-[450px] lg:self-stretch flex items-center justify-center">
                <div className="absolute w-full h-full bg-slate-900/30 rounded-3xl backdrop-blur-sm border border-slate-700/30"></div>
                <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: 1000 }}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

                    {/* Inner Core */}
                    <motion.div
                        className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600/50 to-cyan-500/50"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Rotating Rings */}
                    {[
                        { size: 200, duration: 30, particles: 2 },
                        { size: 300, duration: 45, particles: 3, direction: -1 },
                        { size: 400, duration: 60, particles: 4 },
                    ].map((ring, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-cyan-400/20"
                            style={{
                                width: ring.size,
                                height: ring.size,
                                transformStyle: 'preserve-3d',
                            }}
                            animate={{ rotate: 360 * (ring.direction || 1) }}
                            transition={{ duration: ring.duration, ease: 'linear', repeat: Infinity }}
                        >
                            {/* Particles on the rings */}
                            {[...Array(ring.particles)].map((_, pIndex) => (
                                <motion.div
                                    key={pIndex}
                                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        margin: '-6px',
                                        transform: `rotate(${ (360 / ring.particles) * pIndex }deg) translateX(${ring.size / 2}px)`
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
        
        {/* Testimonials Section */}
        <AnimatedSection className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Müştərilərimiz Nə Deyir?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Bizimlə çalışan şirkətlərin uğur hekayələri bizim ən böyük qürur mənbəyimizdir.</p>
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
                            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 255, 0.5)' }}
                            className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex flex-col group"
                        >
                            <Quote className="w-10 h-10 text-cyan-400/50 mb-4 transition-transform duration-300 group-hover:scale-110" />
                            <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                 <img src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-cyan-400/50 object-cover flex-shrink-0 mr-4" />
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* Technology Partners Section */}
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
                    animate={{ x: ['-0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="flex-shrink-0 h-20 flex items-center">
                            <p className="text-4xl font-bold text-gray-500 hover:text-white transition-colors duration-300">{partner}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="relative bg-slate-950/50 backdrop-blur-sm border-t border-cyan-400/10 pt-20 pb-8 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-sm">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                <a href="#" className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Reform
                </a>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Rəqəmsal transformasiyanın arxitekturası ilə biznesinizi gələcəyə hazırlayırıq.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold tracking-wider mb-4">Naviqasiya</h4>
              <ul className="space-y-3">
                {navItems.map(item => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"> {item} </a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold tracking-wider mb-4">Xidmətlər</h4>
              <ul className="space-y-3">
                {services.map(service => (
                  <li key={service.id}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {service.title.split(' ')[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold tracking-wider mb-4">Əlaqə</h4>
              <div className="space-y-3 text-gray-400">
                <p>Bakı, Azərbaycan</p>
                <p>info@reform.az</p>
                <p>+994 12 000 00 00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Reform. Bütün hüquqlar qorunur.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <motion.a key={i} href="#" whileHover={{ y: -3, color: '#22d3ee' }} className="text-gray-500 hover:text-cyan-400 transition-colors">
                        <Icon size={20} />
                    </motion.a>
                ))}
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        .bg-grid-pattern {
            background-image:
                linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 2rem 2rem;
        }
      `}</style>
    </div>
  );
};

export default ReformHomepage;
