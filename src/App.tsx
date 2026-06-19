/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import cementImg from "./assets/images/construction_cement_bags_1781885935767.jpg";
import sandImg from "./assets/images/sand_gravel_piles_1781885951844.jpg";
import brickImg from "./assets/images/red_brick_stacks_1781885965223.jpg";
import heroImg from "./assets/images/logo-2.png";
import { 
  PhoneCall, 
  MapPin, 
  Mail, 
  Truck, 
  Briefcase, 
  Clock, 
  ShieldCheck, 
  Hammer,
  ArrowRight,
  MessageCircle,
  Building2,
  Phone
} from "lucide-react";

export default function App() {
  const WHATSAPP_NUMBER = "201288332318";
  const PHONE_NUMBER = "01067451891";
  const MAPS_LINK = "https://maps.app.goo.gl/8zq4VT7koo1jTvSY8";
  const EMAIL = "zyadnasrn204@gmail.com";

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-brand-dark overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[120px] mix-blend-screen" />
      </div>

      {/* Top Bar */}
      <div className="hidden sm:block border-b border-white/5 bg-black/40 backdrop-blur-xl relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-12 flex items-center justify-between text-xs font-semibold text-zinc-400 tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4 text-brand-gold" />
              24/7 Premium Support
            </span>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <MapPin className="w-4 h-4" />
              Nasr City, Cairo
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Mail className="w-4 h-4" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-brand-dark/50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 group translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-[#d4a84d] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(252,208,117,0.3)] group-hover:scale-105 transition-transform duration-500">
              <Building2 className="w-7 h-7 text-brand-dark" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-2xl leading-none tracking-tight text-white group-hover:text-brand-gold transition-colors">ROCK GATE</span>
              <span className="text-[11px] text-zinc-400 uppercase tracking-[0.2em] font-bold mt-1">Contracting & Supplies</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-zinc-300 tracking-wide">
            <a href="#services" className="hover:text-brand-gold transition-all hover:scale-105">Services</a>
            <a href="#about" className="hover:text-brand-gold transition-all hover:scale-105">Capability</a>
            <a href="#gallery" className="hover:text-brand-gold transition-all hover:scale-105">Infrastructure</a>
            <a href="#location" className="hover:text-brand-gold transition-all hover:scale-105">Location</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-bold px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-brand-gold/50 transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              WhatsApp
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="group flex items-center gap-2 text-sm font-bold px-6 py-2.5 bg-gradient-to-r from-brand-gold to-[#eab958] text-brand-dark rounded-full hover:shadow-[0_0_25px_-5px_rgba(252,208,117,0.6)] transition-all duration-300 scale-100 hover:scale-105"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              Call Now
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold tracking-[0.1em] uppercase mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                Nasr City, Cairo, Egypt
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                Your Partner for <br/>
                <span className="text-gradient">Premium Building Materials.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-brand-gold/80 mb-6 font-display font-medium" dir="rtl">
                 شريكك الموثوق في توريد مواد البناء
              </motion.p>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-light">
                Rock Gate is a premier supplier of essential construction materials for developers and contractors. Supplying high-quality cement, sand, gravel, and bricks with unmatched logistical precision.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-5">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full sm:w-auto overflow-hidden relative group flex justify-center items-center gap-3 px-10 py-5 bg-brand-gold text-brand-dark rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(252,208,117,0.7)] hover:scale-105"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <PhoneCall className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Direct Priority Call</span>
                </a>
                <a 
                  href="#services"
                  className="w-full sm:w-auto flex justify-center items-center gap-3 px-10 py-5 bg-white/5 text-white hover:bg-white/10 hover:text-brand-gold border border-white/10 hover:border-brand-gold/30 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  View Infrastructure
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50, rotate: 2 }}
               animate={{ opacity: 1, x: 0, rotate: 0 }}
               transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
               className="hidden lg:block relative"
             >
               {/* Decorative Abstract Rings */}
               <div className="absolute inset-0 w-full h-full border border-white/10 rounded-full scale-[1.3] opacity-20 animate-spin-slow" style={{ animationDuration: '60s' }} />
               <div className="absolute inset-0 w-full h-full border border-brand-gold/20 rounded-[3rem] rotate-6 scale-105 transition-transform duration-1000" />
               
               <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 bg-brand-dark/50 backdrop-blur-sm p-4 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent opacity-50 mix-blend-overlay" />
                 <img 
                   src={heroImg}
                   alt="Building Materials Supply" 
                   className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-inner"
                   referrerPolicy="no-referrer"
                 />
                 
                 {/* Floating Badge */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1, duration: 0.8 }}
                   className="absolute bottom-10 -left-8 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                 >
                   <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-brand-gold" />
                   </div>
                   <div>
                     <p className="text-white font-bold text-lg">Grade-A Quality</p>
                     <p className="text-zinc-400 text-sm">Certified Materials</p>
                   </div>
                 </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-black/40 border-y border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-20"
          >
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Core Infrastructure</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">Materials & Supplies</h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light">
              We provide the fundamental materials required for any sturdy construction project, delivered directly to your site in bulk quantities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Cement Supply", desc: "High-grade cement sourced for maximum durability and strength. Ideal for large-scale developments." },
              { icon: Truck, title: "Sand & Gravel", desc: "Clean, properly graded sand and gravel aggregates to form the perfect concrete mixtures." },
              { icon: Building2, title: "Red Brick", desc: "Premium red bricks carefully manufactured and inspected to ensure structural integrity." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-zinc-950/50 backdrop-blur-lg border border-white/5 hover:border-brand-gold/30 p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(252,208,117,0.15)] group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-colors duration-700" />
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold/10 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light text-lg">
                  {service.desc}
                </p>
              </motion.div>
            ))}

            {/* Service 4: Delivery */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="lg:col-span-3 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-white/10 p-10 lg:p-12 rounded-[2rem] md:flex items-center justify-between gap-12 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 md:w-2/3 mb-8 md:mb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/20 shadow-[0_0_15px_rgba(252,208,117,0.3)]">
                    <Truck className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">Logistics & Express Delivery</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-3xl text-lg font-light">
                  Time is money in construction. We provide dependable, bulk building materials delivery directly to your job site across Nasr City and surrounding areas, ensuring your crews never have to wait for supplies.
                </p>
              </div>
              <div className="relative z-10 md:w-1/3 flex md:justify-end shrink-0">
                <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark hover:bg-black text-white rounded-full font-bold text-lg transition-all border border-brand-gold/30 hover:border-brand-gold shadow-[0_0_20px_-10px_rgba(252,208,117,0.5)] hover:shadow-[0_0_30px_-5px_rgba(252,208,117,0.8)] scale-100 hover:scale-105">
                  Request Delivery Quote
                  <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & About */}
      <section id="about" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">Built on <br/><span className="text-gradient">Reliability & Scale.</span></h2>
              <p className="text-xl text-zinc-400 mb-12 leading-relaxed font-light">
                At Rock Gate Contracting & Supplies, we understand that supply chain delays can stall entire projects. That's why we operate with a singular focus: getting the right materials to your site, on time, without excuses.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6 group cursor-default">
                  <div className="w-16 h-16 shrink-0 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-brand-gold/50 group-hover:shadow-[0_0_20px_rgba(252,208,117,0.2)] transition-all duration-500">
                    <ShieldCheck className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold mb-2 text-white">Quality Assurance</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">We source only industry-standard aggregates, cement, and bricks to guarantee structural safety for your developments.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 group cursor-default">
                  <div className="w-16 h-16 shrink-0 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-brand-gold/50 group-hover:shadow-[0_0_20px_rgba(252,208,117,0.2)] transition-all duration-500">
                    <Clock className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold mb-2 text-white">24/7 Operations</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">Construction doesn't always stop. Neither do we. Reach us anytime for critical supply coordination or emergency deliveries.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
               <div className="aspect-[4/5] bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl">
                 <div className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-20 mix-blend-overlay rotate-12" />
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
                 
                 <div className="relative z-10 w-24 h-24 mb-10 rounded-3xl bg-brand-dark border border-white/10 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                   <Hammer className="w-12 h-12 text-brand-gold origin-bottom -rotate-12" />
                 </div>
                 
                 <h3 className="font-display text-3xl font-bold mb-6 text-white leading-tight">Our Commitment to <br/>Cairo's Builders</h3>
                 <p className="text-zinc-400 text-xl leading-relaxed italic font-light relative">
                   <span className="text-brand-gold text-4xl absolute -top-4 -left-6 opacity-30">"</span>
                   To serve as the silent backbone of every project we supply. Whether a residential complex or commercial infrastructure, we deliver the foundation of your success.
                   <span className="text-brand-gold text-4xl absolute -bottom-6 -right-4 opacity-30">"</span>
                 </p>
               </div>
               
               {/* Accent elements */}
               <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 border border-brand-gold/30 rounded-full mix-blend-overlay" />
               <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 border border-blue-500/30 rounded-full mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-black/60 backdrop-blur-sm border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          >
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Visual Quality</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Our Operations</h2>
              <p className="text-zinc-400 text-lg md:text-xl font-light">
                Take a look at our operations and the genuine quality of the construction materials we supply daily across Cairo.
              </p>
            </div>
            <a href={`tel:${PHONE_NUMBER}`} className="hidden md:inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">
              Request a sample <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="w-full h-full rounded-3xl overflow-hidden border border-white/10 group relative"
             >
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               <img 
                 src="https://drive.google.com/uc?export=view&id=1ev_r9Wkzu25S490fSlMohsrPyyJlx7x-" 
                 alt="Construction Project Supplies" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <span className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/10">Active Sites</span>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="w-full h-full rounded-3xl overflow-hidden border border-white/10 group relative"
             >
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               <img 
                 src={cementImg} 
                 alt="Premium Cement Supply" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
               />
               <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <span className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/10">Premium Cement</span>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="w-full h-full rounded-3xl overflow-hidden border border-white/10 group relative lg:col-span-2"
             >
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               <img 
                 src={sandImg} 
                 alt="Bulk Sand and Gravel" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
               />
               <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <span className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/10">Aggregates Storage</span>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="w-full h-full rounded-3xl overflow-hidden border border-white/10 group relative lg:col-span-4 lg:h-[400px]"
             >
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               <img 
                 src={brickImg} 
                 alt="Red Brick Storage" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] object-center"
               />
               <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <span className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold border border-white/10 shadow-lg">High-Grade Red Brick Stock</span>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Epic CTA Section */}
      <section id="location" className="py-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 -translate-y-16">
          <div className="bg-gradient-to-br from-brand-gold to-[#c49a3c] rounded-[3rem] p-1 sm:p-2 sm:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(252,208,117,0.3)] border border-brand-gold/50 relative overflow-hidden">
             
            {/* Inner Content Box */}
            <div className="bg-[#0c0c0e] rounded-[2.5rem] sm:rounded-[3.5rem] p-10 md:p-16 lg:p-24 relative overflow-hidden">
               {/* Decorational lights inside */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-white leading-[1.1]">Let's build <br/>something <span className="text-brand-gold italic font-light font-sans">solid.</span></h2>
                    <p className="text-zinc-400 text-xl md:text-2xl font-light mb-12 max-w-lg">
                      Contact our specialized team today to discuss bulk pricing, schedule express deliveries, and secure top-tier materials.
                    </p>
                    
                    <div className="space-y-4 max-w-md">
                      <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-md hover:border-brand-gold/50">
                        <div className="w-14 h-14 bg-brand-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(252,208,117,0.4)] text-black">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-1">Direct Line</div>
                          <div className="text-2xl font-bold font-display tracking-tight text-white">{PHONE_NUMBER}</div>
                        </div>
                      </a>
                      
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-md hover:border-[#25D366]/50">
                        <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] text-white">
                          <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold tracking-widest uppercase text-[#25D366] mb-1">WhatsApp</div>
                          <div className="text-2xl font-bold font-display tracking-tight text-white">{WHATSAPP_NUMBER}</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center lg:justify-end">
                    <div className="w-full max-w-md bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
                      <h3 className="font-display text-white text-3xl font-bold mb-10 pb-6 border-b border-white/10">Location details</h3>
                      
                      <ul className="space-y-8 relative z-10">
                        <li className="flex items-start gap-5 group">
                          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-gold group-hover:text-black transition-colors duration-300 text-brand-gold">
                             <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-xl mb-1">Headquarters</div>
                            <div className="text-zinc-400 text-lg font-light">Nasr City, Cairo, Egypt</div>
                            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="inline-flex mt-4 text-brand-gold font-bold text-sm tracking-wider uppercase hover:underline items-center gap-2">
                              Open Maps <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </li>
                        
                        <li className="flex items-start gap-5 group">
                          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-gold group-hover:text-black transition-colors duration-300 text-brand-gold">
                             <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-xl mb-1">Email Adress</div>
                            <div className="text-zinc-400 text-lg font-light break-all">{EMAIL}</div>
                            <a href={`mailto:${EMAIL}`} className="inline-flex mt-4 text-brand-gold font-bold text-sm tracking-wider uppercase hover:underline">
                              Send Enquiry
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 pt-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(252,208,117,0.3)]">
              <Building2 className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none tracking-tight text-white">ROCK GATE</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">Contracting & Supplies</span>
            </div>
          </div>
          
          <div className="text-zinc-500 text-sm md:text-right font-medium">
            &copy; {new Date().getFullYear()} Rock Gate. All rights reserved.<br/>
            Engineered for Cairo's finest developers.
          </div>
        </div>
      </footer>
    </div>
  );
}

