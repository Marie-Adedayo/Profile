// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
const App: React.FC = () => {
const [activeFilter, setActiveFilter] = useState('all');
const [darkMode, setDarkMode] = useState(() => {
const savedMode = localStorage.getItem('darkMode');
return savedMode ? JSON.parse(savedMode) : false;
});
const [mobileOpen, setMobileOpen] = useState(false);
useEffect(() => {
localStorage.setItem('darkMode', JSON.stringify(darkMode));
if (darkMode) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
}, [darkMode]);
const toggleDarkMode = () => {
setDarkMode(!darkMode);
};
const projects = [
{
id: 1,
title: 'E-Commerce Platform',
description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment processing.',
image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20icon%2C%20and%20payment%20options.%20Soft%20white%20background%20with%20blue%20accent%20colors%2C%20professional%20UI%20elements%2C%20and%20responsive%20design%20features&width=600&height=400&seq=1&orientation=landscape',
technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
liveDemo: 'https://famtek.vercel.app/',
github: 'https://github.com/Marie-Adedayo/fam-tek',
category: 'fullstack'
},
{
id: 2,
title: 'Task Management App',
description: 'A productivity application that helps users organize tasks, set deadlines, and track progress with intuitive UI.',
image: 'https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20board%2C%20colorful%20task%20cards%2C%20progress%20tracking%20charts%2C%20and%20deadline%20calendar.%20Clean%20white%20background%20with%20minimal%20design%2C%20productivity%20focused%20UI%20elements%2C%20and%20modern%20typography&width=600&height=400&seq=2&orientation=landscape',
technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
liveDemo: 'https://taskapp-demo.com',
github: 'https://github.com/username/task-management',
category: 'frontend'
},
{
id: 3,
title: 'Real Estate Analytics Dashboard',
description: 'Interactive dashboard for real estate market analysis with data visualization and predictive analytics.',
image: 'https://readdy.ai/api/search-image?query=Real%20estate%20analytics%20dashboard%20with%20property%20price%20charts%2C%20market%20trend%20graphs%2C%20interactive%20maps%20showing%20housing%20data%2C%20and%20statistical%20widgets.%20Professional%20blue%20and%20white%20color%20scheme%2C%20data%20visualization%20elements%2C%20and%20business%20intelligence%20interface&width=600&height=400&seq=3&orientation=landscape',
technologies: ['React', 'D3.js', 'Python', 'Django'],
liveDemo: 'https://realestate-analytics.com',
github: 'https://github.com/username/realestate-dashboard',
category: 'data'
},
{
id: 4,
title: 'Social Media Platform',
description: 'A community platform with user profiles, real-time messaging, post sharing, and content discovery features.',
image: 'https://readdy.ai/api/search-image?query=Social%20media%20application%20interface%20with%20user%20profiles%2C%20messaging%20interface%2C%20content%20feed%20with%20posts%20and%20images%2C%20and%20notification%20icons.%20Modern%20purple%20and%20white%20design%2C%20social%20interaction%20elements%2C%20and%20mobile%20responsive%20layout&width=600&height=400&seq=4&orientation=landscape',
technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
liveDemo: 'https://social-platform.com',
github: 'https://github.com/username/social-platform',
category: 'fullstack'
},
{
id: 5,
title: 'Weather Forecast App',
description: 'A weather application with 7-day forecasts, location-based weather data, and interactive maps.',
image: 'https://readdy.ai/api/search-image?query=Weather%20forecast%20application%20with%20temperature%20graphs%2C%20weather%20icons%2C%207-day%20forecast%20layout%2C%20and%20location-based%20map%20integration.%20Gradient%20blue%20background%2C%20meteorological%20data%20visualization%2C%20clean%20typography%2C%20and%20mobile-friendly%20interface%20design&width=600&height=400&seq=5&orientation=landscape',
technologies: ['JavaScript', 'Weather API', 'Leaflet.js'],
liveDemo: 'https://weather-app.com',
github: 'https://github.com/username/weather-app',
category: 'frontend'
},
{
id: 6,
title: 'Financial Portfolio Tracker',
description: 'Investment portfolio management tool with real-time stock data, performance analytics, and investment insights.',
image: 'https://readdy.ai/api/search-image?query=Financial%20portfolio%20tracking%20application%20with%20stock%20price%20charts%2C%20investment%20performance%20graphs%2C%20asset%20allocation%20pie%20charts%2C%20and%20market%20trend%20indicators.%20Professional%20dark%20blue%20and%20green%20color%20scheme%2C%20financial%20data%20visualization%2C%20and%20investment%20tracking%20interface&width=600&height=400&seq=6&orientation=landscape',
technologies: ['React', 'Chart.js', 'Financial APIs', 'Node.js'],
liveDemo: 'https://portfolio-tracker.com',
github: 'https://github.com/username/portfolio-tracker',
category: 'data'
}
];
const skills = [
{ name: 'HTML5', category: 'Frontend', level: 95 },
{ name: 'CSS3/SASS', category: 'Frontend', level: 90 },
{ name: 'JavaScript', category: 'Frontend', level: 95 },
{ name: 'TypeScript', category: 'Frontend', level: 85 },
{ name: 'React', category: 'Frontend', level: 90 },
{ name: 'Vue.js', category: 'Frontend', level: 80 },
{ name: 'Angular', category: 'Frontend', level: 75 },
{ name: 'Node.js', category: 'Backend', level: 85 },
{ name: 'Express', category: 'Backend', level: 80 },
{ name: 'MongoDB', category: 'Backend', level: 75 },
{ name: 'SQL', category: 'Backend', level: 70 },
{ name: 'GraphQL', category: 'Backend', level: 65 },
{ name: 'Git', category: 'Tools', level: 90 },
{ name: 'Docker', category: 'Tools', level: 70 },
{ name: 'Jest', category: 'Tools', level: 75 },
{ name: 'Webpack', category: 'Tools', level: 80 },
];
const experience = [

{
company: 'McYouniverse Group',
position: 'Frontend Developer',
period: 'Jan 2024 - May 2025',
description: 'Developed and maintained multiple client-facing web applications. Collaborated with UX/UI designers to implement pixel-perfect interfaces.',
achievements: [
'Built serveral responsive web applications for clients',
'Contributed to major client projects',
'Mentored junior developers and conducted code reviews',
'Taught student web development for serval corhots',
'Constructed a web development circulum for the team '

]
},
{
company: 'McYouniverse',
position: 'Junior Web Developer/Admistrative Officer ',
period: 'May 2023 - Nov 2023',
description: 'Assisted in the development of web applications and websites. Worked on bug fixes and feature implementations for existing projects.',
achievements: [

'Developed reusable component library reducing development time',
'Improved website accessibility meeting WCAG 2.1 standards'
]
}
];
const filteredProjects = activeFilter === 'all'
? projects
: projects.filter(project => project.category === activeFilter);
return (
  <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-200`}>
    
    {/* Header */}
    <header
      className={`${ darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} shadow-sm fixed w-full top-0 z-50 transition-colors duration-200`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Images/logo.png" alt="Logo" className="h-4 md:h-8 w-auto" />
          </div>

          {/* Center Nav + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <nav>
              {/* Desktop links */}
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="font-medium hover:text-blue-600 transition-colors">Home</a>
                <a href="#projects" className="font-medium hover:text-blue-600 transition-colors">Projects</a>
                <a href="#experience" className="font-medium hover:text-blue-600 transition-colors">Experience</a>
                <a href="#skills" className="font-medium hover:text-blue-600 transition-colors">Skills</a>
                <a href="#contact" className="font-medium hover:text-blue-600 transition-colors">Contact</a>
              </div>

              {/* Hamburger icon (mobile) */}
              <button
                className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
              </button>
            </nav>

            {/* Contact button (desktop only) */}
            <a
              href="#contact"
              className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
            >
              Contact
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
              } transition-colors cursor-pointer !rounded-button whitespace-nowrap`}
            >
              <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} md:hidden border-t`}>
            <nav className="flex flex-col space-y-4 px-4 py-4">
              <a href="#home" className="font-medium hover:text-blue-600 transition-colors">Home</a>
              <a href="#projects" className="font-medium hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="font-medium hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="font-medium hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="font-medium hover:text-blue-600 transition-colors">Contact</a>

              <a
                href="#contact"
                className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-800 transition-colors text-center"
              >
                Hire Me
              </a>
            </nav>
          </div>
        )}
    </header>
    
    {/* Hero Section */}
    <section id="home" className={`pt-32 pb-20 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} transition-colors duration-200`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Hi, I'm <span className="text-green-600">Marie Adedayo</span></h2>
          <h3 className="text-2xl font-medium mb-6 text-gray-700">Frontend Developer</h3>
          <p className="text-lg text-gray-600 mb-8">
            I craft responsive websites where technology meets creativity. With 3+ years of experience in web development, I'm passionate about building exceptional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Get In Touch
            </a>
            <a href="#" className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-download mr-2"></i> Download CV
            </a>
          </div>
          <div className="flex mt-10 space-x-6">
            <a href="https://github.com/Marie-Adedayo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/fasanyamarie/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://x.com/Fasanya_Marie" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
              <i className="fab fa-twitter text-2xl"></i>
              </a>
    
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/Images/marie.png"
                alt="John Doe"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-gray-500">Currently</div>
              <div className="font-bold text-green-600">Available for Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development, designed and implemented from scratch.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              All Projects
            </button>

            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === 'frontend' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Frontend
            </button>

            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === 'fullstack' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setActiveFilter('data')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeFilter === 'data' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              Data Visualization
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
          <div key={project.id} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 border`}>
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {tech}
                </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-center py-2 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white text-center py-2 rounded-md font-medium hover:bg-gray-900 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fab fa-github mr-2"></i> Code
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in web development and the companies I've had the privilege to work with.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
          <div key={index} className="relative pl-8 pb-12">
            {/* Timeline line */}
            {index !== experience.length - 1 && (
            <div className="absolute left-3 top-0 h-full w-0.5 bg-blue-200"></div>
          )}
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow"></div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-building text-gray-500"></i>
                </div>
                <span className="text-lg font-medium text-gray-700">{job.company}</span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>{achievement}</span>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical skills and areas of expertise in web development and related technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-xl shadow-sm transition-colors duration-200`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-code text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>
            <div className="space-y-4">
              {skills
                .filter(skill => skill.category === 'Frontend')
                .map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Backend Skills */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-xl shadow-sm transition-colors duration-200`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-server text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Backend Development</h3>
            </div>
            <div className="space-y-4">
            {skills
              .filter(skill => skill.category === 'Backend')
              .map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tools & Others */}
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-xl shadow-sm transition-colors duration-200`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-tools text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Tools & Workflow</h3>
            </div>
          <div className="space-y-4">
            {skills
              .filter(skill => skill.category === 'Tools')
              .map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} transition-colors duration-200`}>
    <div className="container mx-auto px-4">
    <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
    Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
    </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-sm transition-colors duration-200`}>
    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
    <form>
    <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
    <input
    type="text"
    id="name"
    className={`w-full px-4 py-3 border ${darkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
    placeholder="John Smith"
    />
    </div>
    <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
    <input
    type="email"
    id="email"
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="john@example.com"
    />
    </div>
    <div className="mb-4">
    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
    <input
    type="text"
    id="subject"
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="Project Inquiry"
    />
    </div>
    <div className="mb-6">
    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
    <textarea
    id="message"
    rows={5}
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="Hello, I'd like to talk about..."
    ></textarea>
    </div>
    <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
    >
    Send Message
    </button>
    </form>
    </div>
    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-sm transition-colors duration-200`}>
    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
    <div className="space-y-6">
    <div className="flex items-start">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
    <i className="fas fa-envelope text-blue-600"></i>
    </div>
    <div>
    <h4 className="font-medium text-gray-900">Email</h4>
    <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline">john.doe@example.com</a>
    <p className="text-sm text-gray-500 mt-1">I usually respond within 24 hours</p>
    </div>
    </div>
    <div className="flex items-start">
    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
    <i className="fas fa-map-marker-alt text-green-600"></i>
    </div>
    <div>
    <h4 className="font-medium text-gray-900">Location</h4>
    <p>San Francisco, California</p>
    <p className="text-sm text-gray-500 mt-1">Pacific Time (GMT-7)</p>
    </div>
    </div>
    <div className="flex items-start">
    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
    <i className="fas fa-calendar-alt text-purple-600"></i>
    </div>
    <div>
    <h4 className="font-medium text-gray-900">Availability</h4>
    <p>Monday - Friday: 9am - 6pm PT</p>
    <p className="text-sm text-gray-500 mt-1">Currently available for freelance work</p>
    </div>
    </div>
    <div className="pt-6 mt-6 border-t border-gray-200">
    <h4 className="font-medium text-gray-900 mb-4">Connect with me</h4>
    <div className="flex space-x-4">
    <a href="https://github.com/Marie-Adedayo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors cursor-pointer">
    <i className="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/fasanyamarie/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors cursor-pointer">
    <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://x.com/Fasanya_Marie" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors cursor-pointer">
    <i className="fab fa-twitter"></i>
    </a>
   {/*  <a href="https://dribbble.com/johndoe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors cursor-pointer">
    <i className="fab fa-versel"></i>
    </a> */}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* Footer */}
      
    <Footer />
    
    </div>
);
};
export default App
