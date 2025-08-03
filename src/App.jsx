import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  User, 
  Mail, 
  Linkedin
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'case-study', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-gray-900">Steven Lin</div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'case-study', label: 'Case Study' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Steven Lin
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              UX Design Student interested in making game development more accessible to beginners
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('case-study')}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors mr-4"
              >
                View My Case Study
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                About Me
              </button>
            </div>
          </div>
          <div className="mt-12">
            <ChevronDown size={24} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              I'm a student studying UX design with a focus on educational technology. I got interested in this field 
              because I've seen how confusing and overwhelming learning new technical skills can be, especially in 
              game development.
            </p>
            <p className="text-gray-700 mb-6">
              Through my coursework, I've learned that good design can make complex topics more approachable and help 
              people actually stick with learning instead of giving up. That's what drives my work.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What I'm learning:</h3>
              <p className="text-gray-700">User research, usability testing, wireframing, prototyping, and how to conduct interviews. I mainly use Figma for design and Microsoft Teams for testing.</p>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="mailto:linsv@mail.uc.edu" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                <Mail size={20} />
                Email me
              </a>
              <a href="https://www.linkedin.com/in/steven-lin-b1182426b/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Case Study</h2>
            <h3 className="text-xl text-gray-700 mb-4">Game Development Tutorial Platform</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For my class project, I designed a learning platform to help beginners learn game development 
              without getting stuck in "tutorial hell."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Timeline:</strong> 4 weeks
              </div>
              <div>
                <strong>Role:</strong> Student UX Designer
              </div>
              <div>
                <strong>Methods:</strong> User interviews, testing, prototyping
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">The Problem</h4>
              <p className="text-gray-700 mb-4">
                Many people want to learn game development but get stuck watching tutorial after tutorial 
                without actually building anything. This is called "tutorial hell" - you consume content 
                but never develop real skills.
              </p>
              <div className="bg-red-50 border-l-4 border-red-300 p-4">
                <p className="text-gray-700 italic">
                  "I keep watching tutorials but I still can't make my own game"
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Research</h4>
              <p className="text-gray-700 mb-4">
                I interviewed 3 people who had never tried game development to understand what stops them 
                from getting started and what would help them learn.
              </p>
              <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-medium text-gray-900 mb-2">Key insights:</h5>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• People want clear step-by-step guidance</li>
                  <li>• Technology feels intimidating to beginners</li>
                  <li>• They prefer short, focused lessons (5-15 minutes)</li>
                  <li>• Having a mentor would make them feel more confident</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Who I Designed For</h4>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <User size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Alex Chen</h5>
                    <p className="text-gray-700 text-sm mb-2">21-year-old college student</p>
                    <p className="text-gray-600 text-sm">
                      Wants to learn game development but feels overwhelmed by all the options. 
                      Has a busy schedule and limited money. Prefers learning at their own pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Design Solution</h4>
              <p className="text-gray-700 mb-4">
                I created a simple platform with 5 main features: account creation, tutorial browsing, 
                video watching, rating system, and basic profile management.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-medium text-gray-900 mb-2">Design principles I followed:</h5>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Keep it simple - don't overwhelm beginners</li>
                  <li>• Make navigation obvious and consistent</li>
                  <li>• Show information step by step</li>
                  <li>• Give clear feedback when users do something</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Testing My Design</h4>
              <p className="text-gray-700 mb-4">
                I had 3 people test my prototype over Microsoft Teams. They talked through their thoughts 
                while trying to complete 5 basic tasks.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Good news:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Everyone completed all the tasks</li>
                    <li>• They liked the simple, clean design</li>
                    <li>• Navigation was mostly intuitive</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Issues found:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Some confusion about tutorial organization</li>
                    <li>• Rating system didn't give confirmation</li>
                    <li>• Needed better tutorial descriptions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Learned</h4>
              <div className="bg-green-50 p-4 rounded">
                <p className="text-gray-700 mb-3">
                  This project taught me that user testing is crucial - it revealed problems I completely missed 
                  during design. I also learned that simpler is often better, especially for beginners who already 
                  feel overwhelmed.
                </p>
                <p className="text-gray-700">
                  If I had more time, I'd add mentorship features and better progress tracking to help people 
                  escape tutorial hell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Want to chat about UX design or collaborate on a project? Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:linsv@mail.uc.edu"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/steven-lin-b1182426b/"
              className="border border-gray-400 text-gray-200 px-6 py-3 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-950 text-gray-400 text-center">
        <p>&copy; 2025 Steven Lin</p>
      </footer>
    </div>
  );
}

export default App;