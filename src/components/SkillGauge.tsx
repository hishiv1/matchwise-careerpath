
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillGaugeProps {
  percentage: number;
  label: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const SkillGauge: React.FC<SkillGaugeProps> = ({ 
  percentage, 
  label, 
  color = 'primary', 
  size = 'md',
  showLabel = true
}) => {
  const controls = useAnimation();
  const progressRef = useRef<HTMLDivElement>(null);
  
  // Map color string to Tailwind class
  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'primary': 'bg-primary',
      'green': 'bg-green-500',
      'amber': 'bg-amber-500',
      'red': 'bg-red-500',
      'blue': 'bg-blue-500',
      'purple': 'bg-purple-500',
      'indigo': 'bg-indigo-500',
      'pink': 'bg-pink-500',
    };
    
    return colorMap[color] || 'bg-primary';
  };
  
  // Map size to dimensions
  const getSizeClass = (size: string) => {
    const sizeMap: Record<string, string> = {
      'sm': 'h-1.5',
      'md': 'h-2',
      'lg': 'h-3',
    };
    
    return sizeMap[size] || 'h-2';
  };

  useEffect(() => {
    controls.start({
      width: `${percentage}%`,
      transition: { duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }
    });
    
    // Add glow effect after progress is complete
    const timer = setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.classList.add('shadow-glow');
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [percentage, controls]);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1.5">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-sm font-medium text-foreground/70">{percentage}%</span>
        </div>
      )}
      <div className={cn("w-full bg-secondary rounded-full overflow-hidden", getSizeClass(size))}>
        <motion.div
          ref={progressRef}
          initial={{ width: 0 }}
          animate={controls}
          className={cn(
            "h-full rounded-full transition-shadow duration-700", 
            getColorClass(color)
          )}
        />
      </div>
    </div>
  );
};

export default SkillGauge;
