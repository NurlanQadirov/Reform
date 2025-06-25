import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const TechnologiesPage = () => {
    const techCategories = [
        {
            category: "Frontend",
            technologies: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"],
            description: "Müasir və sürətli istifadəçi interfeysləri yaratmaq üçün ən qabaqcıl texnologiyalardan istifadə edirik."
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
            description: "Dayanıqlı, təhlükəsiz və genişlənə bilən server tərəfi həlləri ilə tətbiqlərinizin əsasını möhkəm qururuq."
        },
        {
            category: "Şəbəkə",
            technologies: ["Cisco Nexus", "Cisco Catalyst", "Fortinet", "Meraki SD-WAN"],
            description: "Etibarlı və yüksək performanslı şəbəkə infrastrukturları üçün sənaye standartı olan avadanlıqlar və protokollardan istifadə edirik."
        },
        {
            category: "Cloud & DevOps",
            technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "GitHub Actions"],
            description: "Bulud texnologiyaları və DevOps metodologiyaları ilə proseslərinizi avtomatlaşdırır və infrastrukturunuzu optimallaşdırırıq."
        }
    ];

    return(
        <>
             <PageHeader title="Texnologiyalar" subtitle="Həllərimizin əsasını təşkil edən güclü və etibarlı texnologiya stekimiz." />
             <div className="container mx-auto px-6 py-24">
                 {techCategories.map((cat) => (
                    <AnimatedSection key={cat.category} className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-2">{cat.category}</h2>
                        <p className="text-gray-400 mb-6 max-w-3xl">{cat.description}</p>
                        <div className="flex flex-wrap gap-4">
                            {cat.technologies.map(tech => (
                                <motion.div 
                                    key={tech}
                                    className="bg-slate-800/70 border border-slate-700 px-6 py-3 rounded-lg text-gray-200 font-medium"
                                    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"}}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                 ))}
             </div>
        </>
    )
};

export default TechnologiesPage;