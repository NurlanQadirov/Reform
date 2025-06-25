import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const AboutPage = () => {
    const teamMembers = [
        {name: "Nurlan Qədirov", role: "Təsisçi & Baş Mühəndis", img: "https://i.pravatar.cc/150?u=nurlan"},
        {name: "Aynurə Məmmədova", role: "Layihə Meneceri", img: "https://i.pravatar.cc/150?u=aynure"},
        {name: "Elvin Ağayev", role: "Kibertəhlükəsizlik Mütəxəssisi", img: "https://i.pravatar.cc/150?u=elvin"},
        {name: "Fərid Quliyev", role: "Şəbəkə Arxitektoru", img: "https://i.pravatar.cc/150?u=farid"},
    ];
    return(
        <>
            <PageHeader title="Haqqımızda" subtitle="Biz, texnologiya ilə gələcəyi formalaşdıran mütəxəssislər komandasıyıq." />
            
            <AnimatedSection className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                           <h2 className="text-4xl font-bold text-white mb-4">Bizim Missiyamız</h2>
                           <p>
                           Reform olaraq missiyamız, müasir texnoloji həlləri tətbiq edərək şirkətlərin rəqəmsal transformasiya yolçuluğunda etibarlı tərəfdaşı olmaqdır. Biz sadəcə xidmət göstərmirik, biznesinizin hədəflərinə çatması üçün fərdi strategiyalar qurur və bu yolda sizə bələdçilik edirik.
                           </p>
                           <p>
                           Müştəri məmnuniyyətini hər şeydən üstün tutaraq, ən mürəkkəb problemlərə belə innovativ və effektiv həllər təqdim edirik.
                           </p>
                        </div>
                        <motion.div 
                            className="relative h-96 w-full rounded-2xl overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                        >
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Ofis şəkli" className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Komandamızla Tanış Olun
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Uğurumuzun arxasında duran peşəkar mütəxəssislər.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                           <motion.div 
                                key={member.name}
                                className="text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                           >
                               <motion.img 
                                    src={member.img} 
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 object-cover"
                                    whileHover={{ scale: 1.1, borderColor: '#06b6d4' }}
                                />
                               <h3 className="text-xl font-bold text-white">{member.name}</h3>
                               <p className="text-cyan-400">{member.role}</p>
                           </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </>
    )
};

export default AboutPage;