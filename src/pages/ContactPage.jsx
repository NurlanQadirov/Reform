import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import AnimatedSection from '../components/common/AnimatedSection';

const ContactPage = () => {
    return(
        <>
            <PageHeader title="Əlaqə" subtitle="Bizimlə əlaqə saxlayın, layihənizi müzakirə edək və sizə necə kömək edə biləcəyimizi öyrənək." />
            <AnimatedSection className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Müraciət Göndərin</h3>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Adınız</label>
                                        <input type="text" id="name" className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-poçt</label>
                                        <input type="email" id="email" className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Mövzu</label>
                                    <input type="text" id="subject" className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mesajınız</label>
                                    <textarea id="message" rows="5" className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-bold"
                                >
                                    Göndər
                                </motion.button>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-cyan-400"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Telefon</h4>
                                    <p className="text-gray-400">Bizə zəng edin</p>
                                    <a href="tel:+994120000000" className="text-cyan-400 hover:underline">+994 12 000 00 00</a>
                                </div>
                            </div>
                             <div className="flex items-start gap-6">
                                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-cyan-400"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">E-poçt</h4>
                                    <p className="text-gray-400">Suallarınızı bizə yazın</p>
                                    <a href="mailto:info@reform.az" className="text-cyan-400 hover:underline">info@reform.az</a>
                                </div>
                            </div>
                             <div className="flex items-start gap-6">
                                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-cyan-400"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Ofis</h4>
                                    <p className="text-gray-400">Bizi ziyarət edin</p>
                                    <p className="text-gray-300">Bakı, Azərbaycan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    )
};

export default ContactPage;