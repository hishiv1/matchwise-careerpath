
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
      
      {/* Background mesh pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-50 pointer-events-none" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-border rounded-full bg-white/80 backdrop-blur-sm">
            <span className="badge badge-primary mr-2">New</span>
            <span className="text-sm text-foreground/80">AI-powered resume matching</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            Find your perfect career match with intelligent resume analysis
          </h1>
          
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Upload your resume, select your interests, and let our AI match you with ideal jobs and recommend courses to enhance your skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              className="btn-primary group min-w-[180px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Upload Resume
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <button className="btn-secondary min-w-[180px]">
              Learn More
            </button>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { value: '98%', label: 'Resume Match Accuracy' },
            { value: '2,500+', label: 'Jobs Matched Daily' },
            { value: '300+', label: 'Skills Analyzed' },
            { value: '5,000+', label: 'Course Recommendations' },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-3xl font-bold text-primary mb-1">{stat.value}</span>
              <span className="text-sm text-foreground/70">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
