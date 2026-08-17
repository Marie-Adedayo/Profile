

const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                MA
                            </div>
                            <h2 className="text-xl font-bold">Marie Adedayo</h2>
                        </div>
                        <p className="text-gray-400 mt-2 max-w-md">
                            Creating beautiful web experiences with clean code and modern design.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div>
                            <h3 className="font-bold mb-3">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a></li>
                                <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Experience</a></li>
                                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</a></li>
                            </ul>
                        </div>
                    <div>
                    <h3 className="font-bold mb-3">Contact</h3>
                    <ul className="space-y-2">
                        <li><a href="mailto:fasanyaadedayo14@gmail.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Email Me</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Form</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Social</h3>
                    <div className="flex space-x-3">
                        <a href="https://github.com/Marie-Adedayo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/fasanyamarie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="https://x.com/Fasanya_Marie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500">© {new Date().getFullYear()} Marie Adedayo. All rights reserved.</p>
                <div className="mt-4 md:mt-0">
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        <i className="fas fa-arrow-up mr-2"></i> Back to top
                    </button>
                </div>
            </div>
        </div>
    </footer>

    );
};
export default Footer ;