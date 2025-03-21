
import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  matchPercentage: number;
  postedDate: string;
  logo: string;
  skills: string[];
}

interface JobMatchProps {
  job: Job;
  index: number;
}

const JobMatch: React.FC<JobMatchProps> = ({ job, index }) => {
  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-primary';
    if (percentage >= 60) return 'text-amber-500';
    return 'text-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center shadow-sm overflow-hidden p-2">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-foreground/70">{job.company}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className={cn(
              "font-bold text-xl",
              getMatchColor(job.matchPercentage)
            )}>
              {job.matchPercentage}%
            </div>
            <div className="text-xs text-foreground/60">Match</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="flex items-center text-sm text-foreground/70">
            <MapPin size={16} className="mr-2 text-foreground/50" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <Briefcase size={16} className="mr-2 text-foreground/50" />
            {job.type}
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <Clock size={16} className="mr-2 text-foreground/50" />
            {job.postedDate}
          </div>
        </div>
        
        <div className="mt-5">
          <div className="text-sm font-medium mb-2">Key Skills</div>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="inline-flex text-xs bg-secondary px-2.5 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-secondary/50 p-4 flex justify-between items-center border-t border-border/50">
        <button className="btn-ghost text-sm">
          <Star size={16} className="mr-1.5" />
          Save
        </button>
        <button className="btn-primary text-sm group-hover:translate-x-0.5 transition-transform">
          View Job
          <ExternalLink size={14} className="ml-1.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default JobMatch;
