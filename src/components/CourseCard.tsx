
import React from 'react';
import { Clock, Users, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  students: string;
  level: string;
  thumbnail: string;
  skills: string[];
  rating: number;
  relevanceScore: number;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            className={cn(
              "w-3.5 h-3.5", 
              star <= Math.floor(rating) 
                ? "text-amber-400 fill-amber-400" 
                : star <= rating + 0.5 
                  ? "text-amber-400 fill-amber-400/50" 
                  : "text-gray-300 fill-gray-300"
            )}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        <span className="text-xs text-foreground/70 ml-1.5">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const getRelevanceColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-primary';
    return 'bg-amber-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg card-hover"
    >
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-36 object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={cn(
            "text-white text-xs font-medium px-2 py-1 rounded-full",
            getRelevanceColor(course.relevanceScore)
          )}>
            {course.relevanceScore}% Match
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{course.title}</h3>
        </div>
        
        <p className="text-sm text-foreground/70 mb-3">{course.provider}</p>
        
        <div className="mb-4">
          {renderStars(course.rating)}
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center bg-secondary/50 p-2 rounded-md">
            <Clock size={14} className="text-foreground/50 mb-1" />
            <span className="text-xs text-foreground/70">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center bg-secondary/50 p-2 rounded-md">
            <Users size={14} className="text-foreground/50 mb-1" />
            <span className="text-xs text-foreground/70">{course.students}</span>
          </div>
          <div className="flex flex-col items-center bg-secondary/50 p-2 rounded-md">
            <Award size={14} className="text-foreground/50 mb-1" />
            <span className="text-xs text-foreground/70">{course.level}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-xs font-medium mb-2">Skills You'll Learn</div>
          <div className="flex flex-wrap gap-1.5">
            {course.skills.slice(0, 3).map((skill, idx) => (
              <span 
                key={idx} 
                className="inline-flex text-xs bg-secondary px-2 py-0.5 rounded-full"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="inline-flex text-xs bg-secondary px-2 py-0.5 rounded-full">
                +{course.skills.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <button className="btn-primary w-full text-sm">
          View Course
          <ExternalLink size={14} className="ml-1.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
