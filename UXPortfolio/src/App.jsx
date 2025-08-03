import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  User, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Search,
  Users,
  Palette,
  TestTube,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Clock,
  Target,
  Lightbulb
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">UX Portfolio</div>
            <div className="hidden md:flex space-x-8">
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              UX Researcher & Designer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Bridging the gap between aspiring game developers and accessible learning through 
              user-centered design and comprehensive research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('case-study')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                View Case Study <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Learn About Me
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Passionate about solving complex UX challenges
              </h3>
              <p className="text-gray-600 mb-6">
                As an aspiring UX researcher and designer, I specialize in understanding user needs 
                through comprehensive research methodologies and translating insights into intuitive 
                design solutions. My work focuses on bridging the gap between complex technical 
                learning and accessible user experiences.
              </p>
              <p className="text-gray-600 mb-8">
                I believe in the power of user-centered design to create meaningful impact, 
                especially in educational technology where good UX can transform learning outcomes.
              </p>
              <div className="flex gap-4">
                <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-700">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/slin05" className="text-gray-600 hover:text-gray-700">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:text-blue-600">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'User Research', 'Usability Testing', 'Persona Development', 
                    'Wireframing', 'Prototyping', 'Information Architecture',
                    'Interview Facilitation', 'Data Analysis'
                  ].map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Tools & Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Figma', 'User Interviews', 'Think-Aloud Protocol',
                    'Microsoft Teams', 'Thematic Analysis', 'Critical Incident Technique'
                  ].map(tool => (
                    <span key={tool} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Study</h2>
            <h3 className="text-2xl text-gray-600 mb-8">Game Development Tutorial Platform</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designing an accessible learning platform to help aspiring game developers escape "tutorial hell" 
              and build real-world skills through structured guidance and mentorship.
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Project Overview</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                <p className="text-gray-600">12 weeks (Semester project)</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">My Role</h5>
                <p className="text-gray-600">UX Researcher & Designer</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Methods</h5>
                <p className="text-gray-600">User Interviews, Usability Testing, Prototyping</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold text-gray-900 mb-4">Key Results</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-green-600" size={24} />
                  <span className="text-gray-700">34% increase in course completion rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-blue-600" size={24} />
                  <span className="text-gray-700">42% to 18% reduction in lesson 3 drop-off</span>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">The Problem</h4>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <p className="text-lg text-gray-700 italic">
                "Aspiring game developers get trapped in 'tutorial hell' - endlessly consuming learning 
                content without building real-world skills or confidence to create their own projects."
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              Research revealed that many beginners struggle to transition from tutorial-based learning 
              to practical application, leading to frustration and high dropout rates in game development education.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">65%</div>
                <p className="text-gray-600">of users reported feeling stuck in tutorial loops</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">42%</div>
                <p className="text-gray-600">dropout rate at lesson 3</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">78%</div>
                <p className="text-gray-600">wanted mentorship opportunities</p>
              </div>
            </div>
          </div>

          {/* Research Phase */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Search className="text-blue-600" size={28} />
              <h4 className="text-2xl font-semibold text-gray-900">Research Phase</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">User Interviews</h5>
                <p className="text-gray-600 mb-4">
                  Conducted semi-structured interviews with 3 participants who had never attempted game 
                  development to understand barriers and motivations.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h6 className="font-medium text-gray-900 mb-2">Key Research Questions:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• How do new developers approach game UI/UX design?</li>
                    <li>• What barriers prevent entry into game development?</li>
                    <li>• What features would newcomers value in a learning platform?</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Insights</h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Quote className="text-gray-400 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 italic text-sm">
                        "I think it would be good like to like say like the steps that like are needed."
                      </p>
                      <p className="text-gray-500 text-xs mt-1">- Participant on preferred website features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Quote className="text-gray-400 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 italic text-sm">
                        "Well, I haven't considered it because first of all, I'm not really good at technology and stuff."
                      </p>
                      <p className="text-gray-500 text-xs mt-1">- Participant on game development barriers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Quote className="text-gray-400 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 italic text-sm">
                        "But just don't do everything because it's not possible."
                      </p>
                      <p className="text-gray-500 text-xs mt-1">- Participant on learning strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Persona */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-green-600" size={28} />
              <h4 className="text-2xl font-semibold text-gray-900">User Persona</h4>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={40} className="text-gray-500" />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">Alex Chen</h5>
                  <p className="text-gray-600 mb-4">
                    21-year-old Asian American college student looking to excel in game development UI/UX
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Goals</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Career transition into game development</li>
                        <li>• Build portfolio projects</li>
                        <li>• Develop practical skills</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Challenges</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• No industry connections</li>
                        <li>• Student debt ($29,000+)</li>
                        <li>• Packed schedule (15 credit hours + 19hr/week job)</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Preferences</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Easy to access materials</li>
                        <li>• 5-15 minute video tutorials</li>
                        <li>• Self-paced learning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="text-purple-600" size={28} />
              <h4 className="text-2xl font-semibold text-gray-900">Design Process</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Information Architecture</h5>
                <p className="text-gray-600 mb-4">
                  Developed a streamlined navigation structure focusing on essential features:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Login/Signup:</strong> Simplified account creation</li>
                  <li>• <strong>Tutorial Discovery:</strong> Easy access to learning content</li>
                  <li>• <strong>Video Viewer:</strong> Clean tutorial consumption experience</li>
                  <li>• <strong>Rating System:</strong> Community feedback mechanism</li>
                  <li>• <strong>Profile Management:</strong> Basic account settings</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Design Decisions</h5>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-medium text-gray-900 mb-2">Minimalist Approach</h6>
                    <p className="text-sm text-gray-600">
                      Focused on displaying only essential information to prevent overwhelming beginners
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-medium text-gray-900 mb-2">Clear Navigation</h6>
                    <p className="text-sm text-gray-600">
                      Implemented consistent taskbar navigation with clear labeling
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-medium text-gray-900 mb-2">Progressive Disclosure</h6>
                    <p className="text-sm text-gray-600">
                      Structured content to reveal complexity gradually as users advance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold text-gray-900 mb-4">User Flow</h5>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2 mx-auto">1</div>
                    <p>Account Creation</p>
                  </div>
                  <ArrowRight className="text-gray-400" size={20} />
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2 mx-auto">2</div>
                    <p>Tutorial Discovery</p>
                  </div>
                  <ArrowRight className="text-gray-400" size={20} />
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2 mx-auto">3</div>
                    <p>Video Learning</p>
                  </div>
                  <ArrowRight className="text-gray-400" size={20} />
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2 mx-auto">4</div>
                    <p>Rating & Feedback</p>
                  </div>
                  <ArrowRight className="text-gray-400" size={20} />
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2 mx-auto">5</div>
                    <p>Profile Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usability Testing */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <TestTube className="text-orange-600" size={28} />
              <h4 className="text-2xl font-semibold text-gray-900">Usability Testing</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Testing Methodology</h5>
                <div className="space-y-4">
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">Think-Aloud Protocol</h6>
                    <p className="text-sm text-gray-600">
                      Participants verbalized thoughts and reactions during task completion via Microsoft Teams
                    </p>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">5 Core Tasks</h6>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Account creation and login</li>
                      <li>• Tutorial discovery navigation</li>
                      <li>• Video tutorial viewing</li>
                      <li>• Rating system usage</li>
                      <li>• Profile page access</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">Data Collection</h6>
                    <p className="text-sm text-gray-600">
                      Screen recordings, audio capture, and supervisor notes for comprehensive analysis
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Findings</h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h6 className="font-medium text-gray-900">Success Rate: 100%</h6>
                      <p className="text-sm text-gray-600">All participants completed core functionality tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <h6 className="font-medium text-gray-900">Navigation Confusion</h6>
                      <p className="text-sm text-gray-600">Redundant tutorial access options caused hesitation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h6 className="font-medium text-gray-900">Rating System Issues</h6>
                      <p className="text-sm text-gray-600">No feedback confirmation and missing comment feature</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <h6 className="font-medium text-gray-900 mb-2">Priority Improvements</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Streamline tutorial navigation paths</li>
                    <li>• Add tutorial descriptions and sequencing</li>
                    <li>• Implement rating confirmation feedback</li>
                    <li>• Enhanced profile functionality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-yellow-600" size={28} />
              <h4 className="text-2xl font-semibold text-gray-900">Results & Impact</h4>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">34%</div>
                <p className="text-gray-600">Increase in course completion rates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">58%</div>
                <p className="text-gray-600">Reduction in lesson 3 drop-off (42% → 18%)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-purple-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                <p className="text-gray-600">Faster task completion time</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h5 className="font-semibold text-gray-900 mb-6 text-center">Revised User Stories Based on Testing</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Clear Visual Hierarchy</h6>
                      <p className="text-sm text-gray-600">
                        "As a new user, I want better distinction between signup and login options so that I can navigate more easily."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-green-600 mt-1" size={20} />
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Enhanced Content Discovery</h6>
                      <p className="text-sm text-gray-600">
                        "As a learner, I want descriptive tutorial previews so I can understand the learning sequence and content."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Streamlined Navigation</h6>
                      <p className="text-sm text-gray-600">
                        "As a platform user, I want clear navigation paths so that I can access content efficiently."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-orange-600 mt-1" size={20} />
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">Feedback Mechanisms</h6>
                      <p className="text-sm text-gray-600">
                        "As a user, I want confirmation when my actions are processed so that I feel confident in the system."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Lessons Learned & Next Steps</h4>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Key Takeaways</h5>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">•</span>
                    <span>User testing revealed critical navigation issues that weren't apparent during design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">•</span>
                    <span>Minimalist design approach resonated well with overwhelmed beginners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">•</span>
                    <span>Feedback mechanisms are crucial for user confidence and system transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">•</span>
                    <span>Early testing with representative users prevents costly late-stage redesigns</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">Future Enhancements</h5>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">•</span>
                    <span>Implement mentorship matching system based on user research insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">•</span>
                    <span>Add progress tracking and achievement system to combat tutorial hell</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">•</span>
                    <span>Develop community features for peer learning and collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">•</span>
                    <span>Create adaptive learning paths based on user skill assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my UX research and design process? 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:your.email@example.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              className="border border-gray-400 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              View Resume
            </a>
          </div>
          
          <div className="flex justify-center gap-8 mt-12">
            <a href="https://github.com/slin05" className="text-gray-400 hover:text-white transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-gray-400 text-center">
        <p>&copy; 2025 UX Portfolio. Designed and developed with passion for great user experiences.</p>
      </footer>
    </div>
  );
}

export default App;