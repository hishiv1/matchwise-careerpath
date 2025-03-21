
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResumeUploader from '@/components/ResumeUploader';
import JobMatch from '@/components/JobMatch';
import CourseCard from '@/components/CourseCard';
import SkillGauge from '@/components/SkillGauge';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Briefcase, GraduationCap, Zap } from 'lucide-react';

// Placeholder data
const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    matchPercentage: 92,
    postedDate: '2 days ago',
    logo: 'https://via.placeholder.com/150',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL']
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignMaster',
    location: 'Remote',
    type: 'Contract',
    matchPercentage: 85,
    postedDate: '1 week ago',
    logo: 'https://via.placeholder.com/150',
    skills: ['Figma', 'UI Design', 'Wireframing', 'Prototyping']
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'DataViz Analytics',
    location: 'New York, NY',
    type: 'Full-time',
    matchPercentage: 78,
    postedDate: '3 days ago',
    logo: 'https://via.placeholder.com/150',
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Analysis']
  }
];

const mockCourses = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    provider: 'Frontend Masters',
    duration: '12 hours',
    students: '15.4K',
    level: 'Advanced',
    thumbnail: 'https://via.placeholder.com/800x400',
    skills: ['React', 'TypeScript', 'State Management', 'Performance'],
    rating: 4.8,
    relevanceScore: 94
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    provider: 'DesignLab',
    duration: '8 weeks',
    students: '32.7K',
    level: 'Beginner',
    thumbnail: 'https://via.placeholder.com/800x400',
    skills: ['UI Design', 'User Research', 'Prototyping', 'Figma'],
    rating: 4.6,
    relevanceScore: 88
  },
  {
    id: '3',
    title: 'Data Science Specialization',
    provider: 'Coursera',
    duration: '6 months',
    students: '245K',
    level: 'Intermediate',
    thumbnail: 'https://via.placeholder.com/800x400',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
    rating: 4.7,
    relevanceScore: 80
  }
];

const Index = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(['React', 'TypeScript', 'UI/UX Design']);
  
  const handleResumeUpload = (file: File) => {
    console.log('Resume uploaded:', file.name);
    // In a real app, you would process the file here
    setTimeout(() => {
      setResumeUploaded(true);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-20 bg-mesh-pattern bg-white relative overflow-hidden">
          <div className="container-tight">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="badge badge-primary mb-4"
              >
                How It Works
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="heading-lg mb-6"
              >
                Three simple steps to find your ideal career match
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-foreground/70 text-lg max-w-2xl mx-auto"
              >
                Our AI-powered platform analyzes your resume and interests to recommend the perfect jobs and courses for your career growth.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Briefcase className="text-primary" size={28} />,
                  title: "Upload Your Resume",
                  description: "Upload your resume in PDF or Word format. Our AI will analyze your skills and experience."
                },
                {
                  icon: <GraduationCap className="text-primary" size={28} />,
                  title: "Select Your Interests",
                  description: "Tell us what you're interested in so we can tailor our recommendations to your career goals."
                },
                {
                  icon: <Zap className="text-primary" size={28} />,
                  title: "Get Matched",
                  description: "Receive personalized job matches with compatibility scores and courses to enhance your skills."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mx-auto max-w-2xl">
              <ResumeUploader onUploadComplete={handleResumeUpload} />
            </div>
          </div>
        </section>
        
        {resumeUploaded && (
          <>
            <section className="py-20 bg-gradient-radial from-secondary/50 to-white/0">
              <div className="container-tight">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                  <div>
                    <span className="badge badge-primary mb-4">Matches Found</span>
                    <h2 className="heading-md mb-2">Your Top Job Matches</h2>
                    <p className="text-foreground/70">
                      Based on your skills and experience, we found these matching jobs for you.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <button className="btn-ghost">
                      View All Matches
                      <ArrowRight size={16} className="ml-1.5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockJobs.map((job, index) => (
                    <JobMatch key={job.id} job={job} index={index} />
                  ))}
                </div>
                
                <div className="mt-16 glass-card rounded-2xl p-8">
                  <div className="mb-8">
                    <h3 className="heading-sm mb-4">Your Skills Analysis</h3>
                    <p className="text-foreground/70">
                      Based on your resume, we've analyzed your skills compared to market demand.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { skill: 'React', percentage: 92, color: 'primary' },
                      { skill: 'TypeScript', percentage: 85, color: 'primary' },
                      { skill: 'UI/UX Design', percentage: 78, color: 'blue' },
                      { skill: 'Node.js', percentage: 65, color: 'green' },
                      { skill: 'GraphQL', percentage: 60, color: 'amber' },
                      { skill: 'Python', percentage: 45, color: 'red' },
                    ].map((skill, index) => (
                      <SkillGauge 
                        key={index}
                        label={skill.skill}
                        percentage={skill.percentage}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-20 bg-white">
              <div className="container-tight">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                  <div>
                    <span className="badge badge-primary mb-4">Recommended Courses</span>
                    <h2 className="heading-md mb-2">Enhance Your Skills</h2>
                    <p className="text-foreground/70">
                      These courses can help you improve your skills and boost your job prospects.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <button className="btn-ghost">
                      View All Courses
                      <ArrowRight size={16} className="ml-1.5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockCourses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
        
        <section className="py-20 bg-primary/5">
          <div className="container-tight">
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="heading-md mb-6">Ready to find your perfect career match?</h2>
                  <p className="text-foreground/70 mb-6">
                    Upload your resume now and discover jobs that match your skills and experience, plus courses to help you grow your career.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Personalized job recommendations',
                      'Skills gap analysis',
                      'Tailored course suggestions',
                      'Career path guidance'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="rounded-full bg-primary/10 p-0.5 mr-3 mt-1">
                          <Check size={14} className="text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary">
                    Get Started Now
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary/70 p-12 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">93%</div>
                    <p className="text-white/80 text-lg mb-6">
                      of users found better job opportunities within 30 days
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star}
                          className="w-5 h-5 text-white fill-white"
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/80 mt-2">
                      Based on 2,500+ users
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
