import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wifi, Shield, Compass } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const ServicesPage = () => {
    const serviceList = [
        { 
          icon: Code,
          title: "Proqram Təminatının Hazırlanması",
          description: "Biznesinizin unikal tələblərinə cavab verən fərdi proqram təminatı həlləri hazırlayırıq. Veb tətbiqlərdən mobil proqramlara qədər geniş spektrdə xidmət göstəririk.",
          tags: ["React", "Node.js", "Python", "iOS", "Android"]
        },
        { 
          icon: Wifi,
          title: "Şəbəkə İnfrastrukturu və Cisco",
          description: "Cisco-nun qabaqcıl avadanlıqları (Nexus, Catalyst) ilə müasir, təhlükəsiz və dayanıqlı şəbəkə infrastrukturları qururuq və idarə edirik.",
          tags: ["Nexus", "Catalyst 9300", "SD-WAN", "Meraki"]
        },
        { 
          icon: Shield,
          title: "Kibertəhlükəsizlik Xidmətləri",
          description: "FortiNAC, DNSSENSE kimi həllərlə şirkətinizin rəqəmsal aktivlərini qoruyur, təhlükəsizlik auditləri keçirir və zəiflikləri aradan qaldırırıq.",
          tags: ["FortiNAC", "DNSSENSE", "Penetration Test", "Security Audit"]
        },
        { 
          icon: Compass,
          title: "İT Konsaltinq və Strategiya",
          description: "Mövcud İT infrastrukturunuzu analiz edərək gələcək üçün strateji plan hazırlayır, Office 365 kimi platformaların optimizasiyasını təmin edirik.",
          tags: ["IT Strategy", "Cloud Migration", "Office 365", "Optimization"]
        },
    ];

    return(
        <>
            <PageHeader title="Xidmətlərimiz" subtitle="Biznesinizin rəqəmsal transformasiyası üçün təqdim etdiyimiz hərtərəfli həllər." />
            <AnimatedSection className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {serviceList.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="group bg-slate-900/40 p-8 rounded-2xl border border-slate-800 flex gap-8 items-start hover:border-cyan-400/50 transition-colors"
                            >
                                <div className="w-16 h-16 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center mt-1">
                                    <service.icon className="w-8 h-8 text-cyan-400"/>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </>
    )
};

export default ServicesPage;