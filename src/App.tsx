import { 
  GraduationCap, 
  ArrowRight, 
  Award, 
  Users, 
  FolderGit2, 
  CheckCircle2, 
  Code, 
  Terminal, 
  Cpu, 
  BarChart3, 
  Smartphone, 
  ChevronDown, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  BookOpen, 
  UserCheck, 
  Clock, 
  Target,
  Sparkles,
  Building2,
  FileCheck2,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 antialiased selection:bg-neutral-200 selection:text-neutral-950">
      
      {/* SUCCESS MODAL (Pure CSS3 triggered via form action #success-modal) */}
      <div 
        id="success-modal" 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/40 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-content relative w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-neutral-200/60 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-neutral-50 text-neutral-900">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">
            Application Submitted!
          </h3>
          <p className="text-neutral-600 mb-8 leading-relaxed text-sm">
            Thank you for applying. Our admissions team will review your academic record and contact you regarding the technical screening within 48 hours.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center w-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 active:bg-black rounded-lg shadow-sm border border-neutral-950 transition-all duration-200"
          >
            Return to Landing Page
          </a>
        </div>
      </div>

      {/* STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2.5 group" id="nav-logo">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-950 text-white group-hover:bg-neutral-900 transition-colors">
                <GraduationCap className="w-5.5 h-5.5" />
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-neutral-950">
                InternAcademy
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">Home</a>
              <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">About</a>
              <a href="#tracks" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">Tracks</a>
              <a href="#benefits" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">Benefits</a>
              <a href="#faq" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">Contact</a>
            </nav>

            {/* Desktop Apply Now Button */}
            <div className="hidden md:block">
              <a 
                href="#apply" 
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg shadow-sm transition-all duration-200"
                id="btn-nav-apply"
              >
                Apply Now
              </a>
            </div>

            {/* CSS-ONLY MOBILE MENU TOGGLE BUTTON (No JavaScript) */}
            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            
            <label 
              htmlFor="menu-toggle" 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-neutral-500 hover:bg-neutral-100 cursor-pointer select-none transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6 peer-checked:hidden" />
            </label>

            {/* Mobile Menu Backdrop */}
            <label 
              htmlFor="menu-toggle" 
              className="fixed inset-0 bg-neutral-950/20 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto md:hidden"
            ></label>

            {/* Mobile Navigation Drawer */}
            <div className="fixed top-0 right-0 z-40 w-72 h-full bg-white border-l border-neutral-100 shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out peer-checked:translate-x-0 md:hidden flex flex-col pt-6 pb-12 px-6">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <span className="font-extrabold font-display text-lg text-neutral-900">Navigation</span>
                <label 
                  htmlFor="menu-toggle" 
                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-100 cursor-pointer text-neutral-500"
                >
                  <X className="w-5 h-5" />
                </label>
              </div>

              <nav className="flex flex-col space-y-4 py-8" aria-label="Mobile navigation">
                <a href="#" className="text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-2">Home</a>
                <a href="#about" className="text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-2">About</a>
                <a href="#tracks" className="text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-2">Tracks</a>
                <a href="#benefits" className="text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-2">Benefits</a>
                <a href="#faq" className="text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-2">FAQ</a>
                <a href="#contact" className="text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors py-2">Contact</a>
              </nav>

              <div className="mt-auto">
                <a 
                  href="#apply" 
                  className="flex items-center justify-center w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg shadow-sm transition-all"
                >
                  Apply Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      <main>
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-white border-b border-neutral-200/50">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column (Copywriting & Call to Action) */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-fade-in">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200/60 shadow-sm">
                  <Sparkles className="w-4 h-4 text-neutral-900" />
                  <span className="text-xs font-semibold tracking-wider uppercase">Elite Partnership Program</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-neutral-950 leading-tight">
                  Launch Your Tech Career With <span className="text-neutral-950 underline decoration-neutral-300 underline-offset-8 decoration-4">Elite Internships</span>
                </h1>

                <p className="text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  Build production-ready codebases, collaborate in live agile sprints, and obtain cryptographically verified credentials endorsed by leaders at Google, Microsoft, and Coursera.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a 
                    href="#apply" 
                    className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-850 active:bg-black rounded-lg shadow-sm border border-neutral-950 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a 
                    href="#tracks" 
                    className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-300 rounded-lg shadow-sm transition-all"
                  >
                    Explore Tracks
                  </a>
                </div>

                {/* Micro social proof under CTA */}
                <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-neutral-400">
                  <span className="text-xs font-medium uppercase tracking-wider">Trusted by students from:</span>
                  <div className="flex items-center gap-4 text-sm font-semibold text-neutral-500">
                    <span className="hover:text-neutral-950 transition-colors">MIT</span>
                    <span className="text-neutral-300">•</span>
                    <span className="hover:text-neutral-950 transition-colors">Stanford</span>
                    <span className="text-slate-300">•</span>
                    <span className="hover:text-neutral-950 transition-colors">IIT Bombay</span>
                    <span className="text-slate-300">•</span>
                    <span className="hover:text-neutral-950 transition-colors">UC Berkeley</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Pure CSS3 Interactive Code Editor Illustration) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xl animate-float">
                  
                  {/* Decorative glowing backdrops */}
                  <div className="absolute inset-0 bg-neutral-200/40 rounded-2xl blur-xl -z-10"></div>
                  
                  {/* Mock Code Editor Container */}
                  <div className="w-full bg-neutral-950 rounded-xl shadow-xl border border-neutral-800 overflow-hidden font-mono text-sm leading-relaxed">
                    {/* Header bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800">
                      <div className="flex space-x-2">
                        <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                      </div>
                      <div className="text-neutral-400 text-xs tracking-wide">ReactApp.tsx</div>
                      <div className="w-10"></div>
                    </div>

                    {/* Window Content */}
                    <div className="grid grid-cols-12 h-80">
                      {/* Sidebar */}
                      <div className="col-span-3 bg-neutral-900/50 border-r border-neutral-800 p-3 hidden sm:block text-[11px] text-neutral-500 space-y-2">
                        <div className="text-neutral-400 font-bold uppercase tracking-wider mb-2">Workspace</div>
                        <div className="text-neutral-300 font-semibold">📁 src</div>
                        <div className="pl-3 text-neutral-400">📁 components</div>
                        <div className="pl-6 text-neutral-300 font-medium">📄 Hero.tsx</div>
                        <div className="pl-6 text-neutral-400 font-medium">📄 App.tsx</div>
                        <div className="pl-3 text-neutral-500">📁 styles</div>
                        <div className="pl-6 text-neutral-500">📄 index.css</div>
                        <div className="text-neutral-550">📄 package.json</div>
                      </div>

                      {/* Code Workspace */}
                      <div className="col-span-12 sm:col-span-9 p-5 overflow-auto text-neutral-350 text-xs sm:text-sm">
                        <pre>
                          <code>
                            <span className="code-comment">{"// 1. Initialize Internship Tracker"}</span>{"\n"}
                            <span className="code-keyword">import</span> {"{"} <span className="code-function">useInternship</span> {"}"} <span className="code-keyword">from</span> <span className="code-string">"intern-academy"</span>;{"\n\n"}
                            <span className="code-keyword">function</span> <span className="code-function">TrackProgress</span>() {"{"}{"\n"}
                            {"  "}<span className="code-keyword">const</span> {"{ student, track }"} = <span className="code-function">useInternship</span>();{"\n\n"}
                            {"  "}<span className="code-comment">{"// Build high-tier projects"}</span>{"\n"}
                            {"  "}<span className="code-keyword">return</span> ({"\n"}
                            {"    "}<span className="code-tag">&lt;</span><span className="code-keyword">Dashboard</span>{"\n"}
                            {"      "}level=<span className="code-string">"Level 4"</span>{"\n"}
                            {"      "}status=<span className="code-string">"Ready to Graduate"</span>{"\n"}
                            {"      "}stipendEligible={"{"}<span className="code-keyword">true</span>{"}"}{"\n"}
                            {"    "}<span className="code-tag">/&gt;</span>{"\n"}
                            {"  "});{"\n"}
                            {"}"}{"\n"}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Badge 1 */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md border border-neutral-200 flex items-center space-x-3 hidden sm:flex hover:translate-y-[-2px] transition-transform duration-200">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Project Completion</div>
                      <div className="text-sm font-bold text-neutral-900">95% Success Rate</div>
                    </div>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-neutral-200 flex items-center space-x-3 hidden sm:flex hover:translate-y-[-2px] transition-transform duration-200">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Top Recipient</div>
                      <div className="text-sm font-bold text-neutral-900">Official Certification</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="bg-neutral-50/50 py-12 border-y border-neutral-200/50 relative z-10" id="stats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200/50 text-center">
              
              <div className="pt-4 md:pt-0">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-neutral-100 text-neutral-900">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">10,000+</div>
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1.5">Students Empowered</div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-neutral-100 text-neutral-900">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">500+</div>
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1.5">Projects Launched</div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-neutral-100 text-neutral-900">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">95%</div>
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1.5">Completion Rate</div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-neutral-100 text-neutral-900">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">Industry</div>
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1.5">Digital Certificates</div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT THE INTERNSHIP SECTION */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-200/50" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                The Learning Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                What Makes Our Program Different?
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed font-light">
                Traditional tutorials leave you in "tutorial hell." Our industry-modeled framework focuses on continuous deployment, robust version controls, and expert code-reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-neutral-900 mb-3">Structured Tracks</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Vetted curriculums that take you from foundations to complex architectures with zero fluff.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-bold text-neutral-900 hover:underline">
                  Learn curriculum <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-neutral-900 mb-3">Real-World Projects</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Code on modern stacks. Integrate API endpoints, implement databases, and deploy your code.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-bold text-neutral-900 hover:underline">
                  Explore projects <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-neutral-900 mb-3">1-on-1 Feedback</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Get written feedback on your Git pull requests from experienced tech lead mentors.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-bold text-neutral-900 hover:underline">
                  Meet our mentors <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-neutral-900 mb-3">Fully Asynchronous</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Fit your workload smoothly around university lectures, exams, and personal events.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-bold text-neutral-900 hover:underline">
                  Check eligibility <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERNSHIP TRACKS SECTION */}
        <section className="py-20 md:py-28 bg-neutral-50/30 border-b border-neutral-200/50" id="tracks">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                Track Selection
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                Choose Your Professional Pathway
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed font-light">
                Select from our six core engineering specializations designed in collaboration with hiring partners to address active industry demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Track 1: Web Development */}
              <div className="bg-white rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 overflow-hidden group">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">Web Development</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    Master modern responsive interfaces, interactive state systems, and server setups to build secure, robust applications.
                  </p>
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">React</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">TypeScript</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Node.js</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:bg-neutral-100/50 transition-colors">
                  <span>12-Week Program</span>
                  <a href="#apply" className="text-neutral-900 hover:underline flex items-center font-bold">
                    Select Track <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Track 2: Python Engineering */}
              <div className="bg-white rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 overflow-hidden group">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">Python Software Engineering</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    Develop robust backend architectures, write automation scrapers, configure microservices, and design RESTful APIs.
                  </p>
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Python</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">FastAPI</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">PostgreSQL</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Docker</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:bg-neutral-100/50 transition-colors">
                  <span>12-Week Program</span>
                  <a href="#apply" className="text-neutral-900 hover:underline flex items-center font-bold">
                    Select Track <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Track 3: Java Development */}
              <div className="bg-white rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 overflow-hidden group">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">Java Enterprise Systems</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    Understand object-oriented principles deeply, work with Spring Boot to launch cloud-ready, enterprise databases.
                  </p>
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Java</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Spring Boot</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Hibernate</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">AWS</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:bg-neutral-100/50 transition-colors">
                  <span>12-Week Program</span>
                  <a href="#apply" className="text-neutral-900 hover:underline flex items-center font-bold">
                    Select Track <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Track 4: AI & Machine Learning */}
              <div className="bg-white rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 overflow-hidden group">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">AI & Machine Learning</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    Deploy machine learning architectures, optimize large language models, construct data ingestion pipelines, and evaluate model performance.
                  </p>
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">PyTorch</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Gemini SDK</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">HuggingFace</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">NumPy</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:bg-neutral-100/50 transition-colors">
                  <span>12-Week Program</span>
                  <a href="#apply" className="text-neutral-900 hover:underline flex items-center font-bold">
                    Select Track <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Track 5: Data Analytics */}
              <div className="bg-white rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 overflow-hidden group">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">Data Analytics</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    Cleanse raw data, run detailed SQL queries, construct visually striking dashboards, and translate metrics into clear actionable business plans.
                  </p>
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">SQL</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Pandas</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Power BI</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Matplotlib</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:bg-neutral-100/50 transition-colors">
                  <span>12-Week Program</span>
                  <a href="#apply" className="text-neutral-900 hover:underline flex items-center font-bold">
                    Select Track <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Track 6: Mobile App Development */}
              <div className="bg-white rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 overflow-hidden group">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">Mobile App Engineering</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    Build beautiful native-feeling apps that deploy smoothly on both iOS and Android. Master offline databases and reactive layout cycles.
                  </p>
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Core Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">React Native</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Flutter</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">SQLite</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 text-xs font-light border border-neutral-200/40">Redux</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-200/50 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:bg-neutral-100/50 transition-colors">
                  <span>12-Week Program</span>
                  <a href="#apply" className="text-neutral-900 hover:underline flex items-center font-bold">
                    Select Track <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERNSHIP LEVELS SECTION */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-200/50" id="levels">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                Weekly Timeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                Your 4-Level Progress Journey
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed font-light">
                Our curriculum has been carefully staged into structured milestones. Accomplish assignments, merge commits, and unlock upper tiers as you skill-up.
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="relative">
              {/* Center Timeline Line (Desktop-only) */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-2 bottom-2 w-1 timeline-line rounded-full"></div>

              <div className="space-y-16 lg:space-y-24">
                
                {/* Level 1 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  {/* Left Column (Content on desktop) */}
                  <div className="w-full lg:w-1/2 lg:pr-16 text-center lg:text-right order-2 lg:order-1">
                    <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 relative">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold mb-4">
                        Weeks 1-2
                      </div>
                      <h3 className="text-xl font-bold font-display text-neutral-900 mb-3">Level 1: Engineering Foundations</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Establish professional workspaces, configure local linters, master version control methodologies (advanced branch rebasings and interactive squashings), and solve diagnostic algorithmic puzzles.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Badge (Center) */}
                  <div className="absolute top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center font-extrabold font-display z-10 border-4 border-white order-1 lg:order-2 shadow-sm">
                    01
                  </div>

                  {/* Right Column (Placeholder to maintain alignment) */}
                  <div className="hidden lg:block w-1/2 pl-16 order-3"></div>
                </div>

                {/* Level 2 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  {/* Left Column (Placeholder) */}
                  <div className="hidden lg:block w-1/2 pr-16"></div>

                  {/* Timeline Badge */}
                  <div className="absolute top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center font-extrabold font-display z-10 border-4 border-white shadow-sm">
                    02
                  </div>

                  {/* Right Column (Content on desktop) */}
                  <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
                    <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold mb-4">
                        Weeks 3-6
                      </div>
                      <h3 className="text-xl font-bold font-display text-neutral-900 mb-3">Level 2: Core Module Implementation</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Design responsive frontend wireframes, write performant database schema queries, configure REST APIs with secure authentication tokens, and implement functional unit tests.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Level 3 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  {/* Left Column (Content) */}
                  <div className="w-full lg:w-1/2 lg:pr-16 text-center lg:text-right order-2 lg:order-1">
                    <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold mb-4">
                        Weeks 7-9
                      </div>
                      <h3 className="text-xl font-bold font-display text-neutral-900 mb-3">Level 3: Team Integration & Sprint Projects</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Work collaboratively in agile team sprints on complex systems. Resolve git conflicts, merge feature branches, pair-program on core services, and deploy modules to server infrastructures.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="absolute top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center font-extrabold font-display z-10 border-4 border-white shadow-sm">
                    03
                  </div>

                  {/* Right Column (Placeholder) */}
                  <div className="hidden lg:block w-1/2 pl-16 order-3"></div>
                </div>

                {/* Level 4 */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  {/* Left Column (Placeholder) */}
                  <div className="hidden lg:block w-1/2 pr-16"></div>

                  {/* Timeline Badge */}
                  <div className="absolute top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center font-extrabold font-display z-10 border-4 border-white shadow-sm">
                    04
                  </div>

                  {/* Right Column (Content) */}
                  <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
                    <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold mb-4">
                        Weeks 10-12
                      </div>
                      <h3 className="text-xl font-bold font-display text-neutral-900 mb-3">Level 4: Capstone & Review Panel</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed font-light">
                        Polishing and presenting products, publishing source code to public ports, building a comprehensive technical case-study, and undergoing rigorous review sessions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-200/50" id="benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Copywriting */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                  Career Capital
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                  Secure High-Value Career Dividends
                </h2>
                <p className="text-base text-neutral-500 leading-relaxed font-light">
                  We don't offer generic templates or meaningless digital files. Our graduates unlock robust, validated advantages to navigate highly competitive candidate pools successfully.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Endorsed Certificates</h4>
                      <p className="text-xs text-neutral-500 font-light mt-0.5">Showcase verified digital certificates recognized by our technical partners.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Direct Referrals</h4>
                      <p className="text-xs text-neutral-500 font-light mt-0.5">Top-performing engineering graduates receive warm introductions to partner teams.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Stipend Grants</h4>
                      <p className="text-xs text-neutral-500 font-light mt-0.5">Receive financial grants to support high-impact capstone project ideas.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Grid representing visual cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-neutral-50/50 p-6 rounded-xl border border-neutral-200/60 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-neutral-900 mb-2">Verified Digital Certs</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    Instantly exportable to LinkedIn with a cryptographically secure QR verification URL.
                  </p>
                </div>

                <div className="bg-neutral-50/50 p-6 rounded-xl border border-neutral-200/60 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-neutral-900 mb-2">Exclusive Alumni Hub</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    Join private channels where alumni post mock-interview schedules, templates, and resume reviews.
                  </p>
                </div>

                <div className="bg-neutral-50/50 p-6 rounded-xl border border-neutral-200/60 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-4">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-neutral-900 mb-2">Production Portfolios</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    Build tangible projects with public URLs, live performance metrics, and clean git histories.
                  </p>
                </div>

                <div className="bg-neutral-50/50 p-6 rounded-xl border border-neutral-200/60 shadow-sm hover:border-neutral-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-neutral-900 mb-2">Professional References</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    Selected candidates receive structured feedback letters and verified referee contacts.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 md:py-28 bg-neutral-50/20 border-b border-neutral-200/50" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                Alumni Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                Words From Selected Graduates
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed font-light">
                Discover how our structured learning environment helped graduates launch full-time software engineering roles at top tech companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex text-neutral-800 gap-1 text-xs">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light italic">
                    "The code review process was game-changing. My mentor pointed out micro-architectural cleanups that books simply don't teach. This structured guidance directly helped me secure my full-time SWE role at Microsoft."
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-800 font-bold flex items-center justify-center text-xs">
                    SJ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Sarah Jenkins</h4>
                    <p className="text-xs text-neutral-400 font-light">Microsoft SWE • Stanford Graduate</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-neutral-800 gap-1 text-xs">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light italic">
                    "Deploying our capstone project to AWS under real traffic parameters was incredibly intense. Working with other students in sprint structures simulated exactly what industry work looks like. It felt completely authentic."
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-800 font-bold flex items-center justify-center text-xs">
                    DC
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">David Chen</h4>
                    <p className="text-xs text-neutral-400 font-light">Google Associate Dev • MIT Senior</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200/70 shadow-sm hover:border-neutral-400 transition-colors duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-neutral-800 gap-1 text-xs">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light italic">
                    "I loved the flexibility of the Java track. The technical lectures were concise, and being able to access verified, cryptographically secure certificates made presenting my portfolio on LinkedIn incredibly simple."
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-800 font-bold flex items-center justify-center text-xs">
                    AP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Ananya Patel</h4>
                    <p className="text-xs text-neutral-400 font-light">Coursera Intern • IIT Bombay Senior</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* APPLICATION PROCESS SECTION */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-200/50" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                Step-by-Step Guide
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                Simple 4-Step Enrollment Process
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed font-light">
                Join our upcoming cohort in four clean milestones. Our system is fully automated to review academic logs and screening results immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Decorative line on tablet/desktop */}
              <div className="hidden md:block absolute top-[44px] left-1/8 right-1/8 h-0.5 bg-neutral-200/60 -z-10"></div>

              {/* Step 1 */}
              <div className="text-center group space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-900 font-bold font-display text-lg shadow-sm group-hover:scale-105 transition-all">
                  01
                </div>
                <h3 className="text-base font-bold text-neutral-900">Quick Apply</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px] mx-auto font-light">
                  Complete our straightforward online form specifying your current university and preferred track.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-900 font-bold font-display text-lg shadow-sm group-hover:scale-105 transition-all">
                  02
                </div>
                <h3 className="text-base font-bold text-neutral-900">Automated Screen</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px] mx-auto font-light">
                  Complete a 45-minute logic challenge evaluating core troubleshooting processes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-900 font-bold font-display text-lg shadow-sm group-hover:scale-105 transition-all">
                  03
                </div>
                <h3 className="text-base font-bold text-neutral-900">Mentor Connection</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px] mx-auto font-light">
                  Receive verified Slack and Git access logs to join your cohort and meet your lead mentor.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center group space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-900 font-bold font-display text-lg shadow-sm group-hover:scale-105 transition-all">
                  04
                </div>
                <h3 className="text-base font-bold text-neutral-900">Launch Project</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px] mx-auto font-light">
                  Kick off Level 1, configure your repositories, and start building high-impact platforms.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ SECTION (Pure CSS3 details/summary accordion) */}
        <section className="py-20 md:py-28 bg-neutral-50/20 border-b border-neutral-200/50" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                Support Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed font-light">
                Need clarifications regarding the registration sequence, weekly workloads, or stipend distributions? Locate clear, structured answers below.
              </p>
            </div>

            {/* Accordion Container */}
            <div className="space-y-4">
              
              {/* FAQ 1 */}
              <details className="group bg-white rounded-xl border border-neutral-200/70 shadow-sm overflow-hidden hover:border-neutral-400 transition-colors duration-200" open>
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-medium text-neutral-900 hover:text-neutral-700 transition-colors list-none animate-none">
                  <span>Is the internship 100% remote?</span>
                  <span className="ml-4 transition-transform duration-300 text-neutral-400 group-open:rotate-180 group-open:text-neutral-900">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4 font-light">
                  Yes. The internship is completely remote and asynchronous. You can complete your tasks, pull-requests, and discussions from anywhere worldwide, allowing you to easily balance university classes and exams.
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-white rounded-xl border border-neutral-200/70 shadow-sm overflow-hidden hover:border-neutral-400 transition-colors duration-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-medium text-neutral-900 hover:text-neutral-700 transition-colors list-none animate-none">
                  <span>How many hours of weekly commitment are required?</span>
                  <span className="ml-4 transition-transform duration-300 text-neutral-400 group-open:rotate-180 group-open:text-neutral-900">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4 font-light">
                  We recommend allocating 12-15 hours per week. This enables you to deep-dive into codebases, participate in asynchronous mentor discussions, write clean code-documentation, and successfully clear your weekly level targets.
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-white rounded-xl border border-neutral-200/70 shadow-sm overflow-hidden hover:border-neutral-400 transition-colors duration-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-medium text-neutral-900 hover:text-neutral-700 transition-colors list-none animate-none">
                  <span>Are there any enrollment fees for students?</span>
                  <span className="ml-4 transition-transform duration-300 text-neutral-400 group-open:rotate-180 group-open:text-neutral-900">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4 font-light">
                  No. The entire 12-week program is fully sponsored by our tech hiring partners and sponsors. There are zero tuition, enrollment, or hidden administrative fees for selected student candidates.
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-white rounded-xl border border-neutral-200/70 shadow-sm overflow-hidden hover:border-neutral-400 transition-colors duration-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-medium text-neutral-900 hover:text-neutral-700 transition-colors list-none animate-none">
                  <span>Will I receive a verifiable digital certificate?</span>
                  <span className="ml-4 transition-transform duration-300 text-neutral-400 group-open:rotate-180 group-open:text-neutral-900">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4 font-light">
                  Yes. Every graduate who clears all four level milestones is awarded a cryptographically secure digital certificate complete with a LinkedIn-sharable metadata URL and a QR code verification link.
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-white rounded-xl border border-neutral-200/70 shadow-sm overflow-hidden hover:border-neutral-400 transition-colors duration-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-medium text-neutral-900 hover:text-neutral-700 transition-colors list-none animate-none">
                  <span>Who are the engineering mentors?</span>
                  <span className="ml-4 transition-transform duration-300 text-neutral-400 group-open:rotate-180 group-open:text-neutral-900">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4 font-light">
                  Our mentors are active senior engineers, software architects, and tech leads employed at companies like Google, Microsoft, and Coursera. They review your git commits and host weekly Q&A group workspaces.
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* CALL TO ACTION & FORM SECTION */}
        <section className="py-20 md:py-28 bg-white" id="apply">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* CTA Banner Card */}
            <div className="relative bg-neutral-950 rounded-2xl shadow-xl overflow-hidden px-8 py-12 md:p-16 text-white border border-neutral-800">
              
              {/* Background Decorative Rings */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side text */}
                <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Sparkles className="w-4 h-4 text-neutral-300" />
                    <span className="text-xs font-semibold tracking-wider uppercase">Cohort Launching Soon</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight">
                    Secure Your Technical Future Today
                  </h2>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">
                    Positions are highly limited. Complete your digital enrollment profile to unlock immediate access to prep materials and algorithmic diagnostic modules.
                  </p>

                  <div className="space-y-3 pt-2 text-xs text-neutral-400 font-light hidden sm:block">
                    <div className="flex items-center space-x-2 justify-center lg:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                      <span>Next Cohort Begins: July 15, 2026</span>
                    </div>
                    <div className="flex items-center space-x-2 justify-center lg:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                      <span>100% Free / Sponsor-Backed</span>
                    </div>
                  </div>
                </div>

                {/* Right side form */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl text-neutral-800 shadow-xl border border-neutral-200">
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-6 text-center">
                    Admissions Form
                  </h3>

                  {/* FORM (Method is default GET to navigate to success modal hash) */}
                  <form action="#success-modal" className="space-y-4">
                    
                    <div>
                      <label htmlFor="full-name" className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="full-name" 
                        required 
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email-address" className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email-address" 
                          required 
                          placeholder="name@university.edu"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="academic-year" className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                          Academic Year
                        </label>
                        <select 
                          id="academic-year" 
                          required
                          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm transition-all text-neutral-700"
                        >
                          <option value="">Select Year...</option>
                          <option value="1">First Year (Freshman)</option>
                          <option value="2">Second Year (Sophomore)</option>
                          <option value="3">Third Year (Junior)</option>
                          <option value="4">Fourth Year (Senior)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="university-name" className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                          University Name
                        </label>
                        <input 
                          type="text" 
                          id="university-name" 
                          required 
                          placeholder="e.g. Stanford University"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="track-selection" className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1.5">
                          Preferred Track
                        </label>
                        <select 
                          id="track-selection" 
                          required
                          className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 text-sm transition-all text-neutral-700"
                        >
                          <option value="">Select Track...</option>
                          <option value="web">Web Development</option>
                          <option value="python">Python Engineering</option>
                          <option value="java">Java Enterprise Systems</option>
                          <option value="ai">AI & Machine Learning</option>
                          <option value="data">Data Analytics</option>
                          <option value="mobile">Mobile App Engineering</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="flex items-center justify-center w-full py-4 px-6 text-sm font-bold text-white bg-neutral-950 hover:bg-neutral-800 active:bg-black rounded-lg shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      >
                        Submit Admissions Application
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-400 text-center leading-relaxed mt-2 font-light">
                      By submitting, you agree to our Terms of Use and confirm you are a registered student or graduate. Zero spam guaranteed.
                    </p>

                  </form>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-800" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
            
            {/* Left side brand column */}
            <div className="md:col-span-4 space-y-4">
              <a href="#" className="flex items-center space-x-2.5 group animate-none">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-neutral-950 font-bold shadow-sm">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight text-white">
                  InternAcademy
                </span>
              </a>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                Empowering the next generation of engineers with structured, remote internship opportunities modeled after high-tier industry workflows. Sponsored by leading tech platforms.
              </p>
              {/* Social icons */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle links column 1 */}
            <div className="md:col-span-2.5 space-y-4">
              <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Internship Tracks</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="#tracks" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">Python Engineering</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">Java Systems</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">Mobile App Engineering</a></li>
              </ul>
            </div>

            {/* Middle links column 2 */}
            <div className="md:col-span-2.5 space-y-4">
              <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li><a href="#about" className="hover:text-white transition-colors">Curriculums</a></li>
                <li><a href="#levels" className="hover:text-white transition-colors">Timelines</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Graduation Benefits</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Admissions FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub Classroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Discord</a></li>
              </ul>
            </div>

            {/* Contact column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Contact Information</h4>
              <ul className="space-y-3.5 text-sm font-light">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" />
                  <span>San Francisco, California, USA</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-5 h-5 text-neutral-600 shrink-0" />
                  <a href="mailto:admissions@internacademy.edu" className="hover:text-white transition-colors">admissions@internacademy.edu</a>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-5 h-5 text-neutral-600 shrink-0" />
                  <span>+1 (800) 555-0199</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom copyright column */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
            <p>© 2026 InternAcademy Program. All rights reserved. Endorsed and sponsored by global tech partners.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
