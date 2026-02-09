import React, { useEffect } from 'react';
import { 
  BarChart3, 
  Search, 
  Users, 
  Map as MapIcon, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Target, 
  ShieldAlert,
  ChevronRight,
  Menu,
  X,
  Link as LinkIcon,
  Trophy,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Load Tally Embed Script
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    
    const loadTally = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof (window as any).Tally !== 'undefined') {
      loadTally();
    } else if (d.querySelector(`script[src="${w}"]`) === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = loadTally;
      s.onerror = loadTally;
      d.body.appendChild(s);
    } else {
      loadTally();
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-mono font-bold">SQ</span>
            </div>
            Saif Qazi
          </span>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">How It Works</a>
            <a href="#why-it-matters" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Methodology</a>
            <a 
              href="#request-report" 
              className="px-4 py-2 text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300"
            >
              Request Report
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4 shadow-lg">
            <a href="#how-it-works" className="block text-sm font-medium text-slate-600 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#why-it-matters" className="block text-sm font-medium text-slate-600 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Methodology</a>
            <a href="#request-report" className="block w-full text-center px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Request Report
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              AI Category <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Visibility Map
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Most tools track if you rank for "best CRM software." But AI doesn't stop there—it asks follow-up questions about team size, budget, and existing tools. This tool maps your visibility across those scenarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#request-report" 
                className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200"
              >
                Request Your Report 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://ai-visibility-tracker-reports.s3.eu-north-1.amazonaws.com/reports/bestcrm_report.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg hover:bg-slate-50 border border-slate-200 transition-colors flex items-center justify-center gap-2 shadow-sm group"
              >
                See Sample Report
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Actual Report UI Mockup */}
          <div className="relative rounded-xl bg-slate-100 border border-slate-200 p-1 shadow-2xl shadow-slate-200 transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 blur-2xl -z-10 opacity-50"></div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-inner h-full flex flex-col">
               
               {/* 1. Dark Header (Matches Report HTML) */}
               <div className="bg-slate-900 p-5 text-white">
                 <div className="flex items-center gap-2 text-orange-400 text-[10px] font-bold tracking-wider uppercase mb-2">
                    <BarChart3 className="w-3 h-3" /> AI Category Visibility Map
                 </div>
                 <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold leading-tight">"Best CRM for agencies"</h2>
                    <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">Global</div>
                        <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">GPT-4o</div>
                    </div>
                 </div>
                 <p className="text-slate-400 text-xs mt-2">Baseline answer + 12 follow-up scenarios</p>
               </div>

               {/* 2. Tabs */}
               <div className="px-5 border-b border-slate-200 bg-slate-50 flex gap-6">
                 <div className="py-3 text-xs font-medium border-b-2 border-orange-500 text-orange-600">Rankings</div>
                 <div className="py-3 text-xs font-medium border-b-2 border-transparent text-slate-500">Sources</div>
                 <div className="py-3 text-xs font-medium border-b-2 border-transparent text-slate-500">Qualifiers</div>
               </div>

               {/* 3. Table Content (Shortened) */}
               <div className="p-0 overflow-hidden bg-white">
                 <div className="w-full text-left">
                    {/* Header Row */}
                    <div className="bg-slate-50 text-[10px] uppercase text-slate-500 flex px-4 py-2 border-b border-slate-100">
                        <div className="w-10 text-center">Rank</div>
                        <div className="flex-1">Brand</div>
                        <div className="w-16 text-center">Score</div>
                    </div>

                    {/* Row 1 */}
                    <div className="flex items-center px-4 py-2.5 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <div className="w-10 text-center">
                            <div className="w-5 h-5 mx-auto rounded-full bg-green-100 border border-green-200 text-green-700 text-[10px] font-bold flex items-center justify-center">1</div>
                        </div>
                        <div className="flex-1 font-bold text-slate-800 text-xs">Salesforce</div>
                        <div className="w-16 text-center">
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-green-100 text-green-700 border border-green-200 font-bold">95%</span>
                        </div>
                    </div>

                    {/* Row 2 (Target Brand Highlight) */}
                    <div className="flex items-center px-4 py-2.5 border-b border-slate-50 bg-orange-50/40 hover:bg-orange-50/60 transition-colors">
                        <div className="w-10 text-center">
                            <div className="w-5 h-5 mx-auto rounded-full bg-green-100 border border-green-200 text-green-700 text-[10px] font-bold flex items-center justify-center">2</div>
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-slate-800 text-xs">HubSpot</div>
                        </div>
                        <div className="w-16 text-center">
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-green-100 text-green-700 border border-green-200 font-bold">92%</span>
                        </div>
                    </div>
                 </div>
               </div>

               {/* 4. Follow-up Qualifiers Section (New) */}
               <div className="p-5 bg-slate-50/50 border-t border-slate-200">
                 <div className="flex items-center gap-2 mb-3">
                   <SlidersHorizontal className="w-3 h-3 text-slate-400" />
                   <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">Follow-up Qualifiers</h4>
                   <span className="px-1.5 py-0.5 rounded text-[9px] bg-slate-100 border border-slate-200 text-slate-500 font-medium">AI-Derived</span>
                 </div>

                 <div className="flex gap-3 overflow-hidden">
                   
                   {/* Card 1: Team Size */}
                   <div className="w-40 flex-shrink-0 bg-white border border-slate-200 rounded-lg p-3 relative shadow-sm">
                     <div className="absolute top-0 left-0 w-full h-1 bg-green-400 rounded-t-lg"></div>
                     <h5 className="font-bold text-slate-800 text-xs mt-1 mb-1">Team Size</h5>
                     <p className="text-[9px] text-slate-500 mb-2 leading-tight">AI asks about company size (Small, Mid, Enterprise).</p>
                     
                     {/* Mini Ranking */}
                     <div className="bg-slate-50 rounded border border-slate-100 p-1.5 space-y-1">
                       <div className="flex justify-between items-center text-[9px]">
                         <span className="font-medium text-slate-700">1. HubSpot</span>
                         <span className="w-3 h-3 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-[8px]">1</span>
                       </div>
                       <div className="flex justify-between items-center text-[9px]">
                         <span className="font-medium text-slate-700">2. Zoho</span>
                         <span className="w-3 h-3 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-[8px]">2</span>
                       </div>
                     </div>
                   </div>

                   {/* Card 2: Budget */}
                   <div className="w-40 flex-shrink-0 bg-white border border-slate-200 rounded-lg p-3 relative shadow-sm opacity-90">
                     <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-lg"></div>
                     <h5 className="font-bold text-slate-800 text-xs mt-1 mb-1">Budget</h5>
                     <p className="text-[9px] text-slate-500 mb-2 leading-tight">AI refines by budget ranges (Free, Low-cost, Premium).</p>
                     
                     {/* Mini Ranking */}
                     <div className="bg-slate-50 rounded border border-slate-100 p-1.5 space-y-1">
                       <div className="flex justify-between items-center text-[9px]">
                         <span className="font-medium text-slate-700">1. Monday</span>
                         <span className="w-3 h-3 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-[8px]">1</span>
                       </div>
                       <div className="flex justify-between items-center text-[9px]">
                         <span className="font-medium text-slate-700">2. HubSpot</span>
                         <span className="w-3 h-3 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-[8px]">4</span>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section id="why-it-matters" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Follow-Up Qualifiers Matter</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              These follow-up qualifiers reveal the long-tail buying intent. Your visibility across these scenarios matters as much as the baseline ranking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                 <div className="text-slate-500 font-mono text-xs uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-slate-50">Standard AEO</div>
                 <ShieldAlert className="w-6 h-6 text-slate-400 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The "Baseline" Prompt</h3>
              <div className="p-4 bg-slate-50 rounded border border-slate-200 mb-6">
                <p className="text-slate-600 text-sm font-mono">"What's the best CRM software?"</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                   <span className="text-slate-500">Result</span>
                   <span className="font-bold text-slate-800">Rank #3</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full">
                   <div className="bg-slate-400 w-[60%] h-full rounded-full"></div>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-500 leading-relaxed">
                Treating the baseline prompt as traditional SEO is incomplete. Tracking a single prompt ignores the conversational nature of AI and mimics only the start of the journey, not the destination.
              </p>
            </div>

            {/* The Reality */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 relative overflow-hidden shadow-md shadow-orange-100">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Target className="w-32 h-32 text-orange-600" />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-orange-600 font-mono text-xs uppercase tracking-widest border border-orange-200 bg-white px-2 py-1 rounded">AI Reality</div>
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Active Conversation</h3>
              <div className="p-4 bg-white rounded border border-orange-100 mb-6 relative shadow-sm">
                 <div className="absolute -left-1 top-4 bottom-4 w-0.5 bg-orange-500"></div>
                <p className="text-slate-900 text-sm italic leading-relaxed">"Are you B2B or B2C? Do you use Slack? What is your budget per seat?"</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                   <span className="text-orange-800">Result</span>
                   <span className="font-bold text-slate-900">Variable Ranking</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex">
                   <div className="bg-red-400 w-[20%] h-full"></div>
                   <div className="bg-yellow-400 w-[30%] h-full"></div>
                   <div className="bg-emerald-500 w-[50%] h-full"></div>
                </div>
              </div>
              <p className="mt-6 text-slate-700/80 text-sm leading-relaxed">
                Recommendations on AI happen in a multi-threaded conversation. Unlike static search results, this tool tracks those critical next steps where the user refines their intent to find the perfect match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-orange-200 to-slate-200 -z-10"></div>

          {/* Step 1 */}
          <div className="relative group">
            <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:border-orange-400 group-hover:shadow-lg shadow-sm transition-all duration-300 z-10">
              <Search className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute top-10 left-[50%] -translate-x-1/2 w-24 h-24 bg-orange-200 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">1. Extract Qualifiers</h3>
            <p className="text-slate-600 text-center text-sm leading-relaxed px-4">
              We run the baseline prompt and extract the follow-up qualifiers AI introduces (team size, budget, existing tools, use case).
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group">
             <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:border-orange-400 group-hover:shadow-lg shadow-sm transition-all duration-300 z-10">
              <Users className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute top-10 left-[50%] -translate-x-1/2 w-24 h-24 bg-orange-200 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">2. Generate Segments</h3>
            <p className="text-slate-600 text-center text-sm leading-relaxed px-4">
              We create specific scenarios within each qualifier—size bands (1-10, 11-50), budget ranges, "uses Slack" vs "doesn't."
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group">
             <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:border-orange-400 group-hover:shadow-lg shadow-sm transition-all duration-300 z-10">
              <MapIcon className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute top-10 left-[50%] -translate-x-1/2 w-24 h-24 bg-orange-200 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">3. Map Visibility</h3>
            <p className="text-slate-600 text-center text-sm leading-relaxed px-4">
              We run 20-30 prompts across segments and see where you rank vs. competitors in each scenario, with full citations.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT'S IN THE REPORT */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">What's In The Report</h2>
              <p className="text-slate-600">Comprehensive analysis of your AI footprint.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-5 hover:border-blue-400 transition-colors group shadow-sm hover:shadow-md">
              <div className="p-3 bg-blue-50 rounded-lg h-fit group-hover:bg-blue-100 transition-colors">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Baseline Snapshot</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your ranking for the generic category prompt, with citations, sources, and initial competitor analysis.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-5 hover:border-emerald-400 transition-colors group shadow-sm hover:shadow-md">
              <div className="p-3 bg-emerald-50 rounded-lg h-fit group-hover:bg-emerald-100 transition-colors">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Segment Win Rate</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  How often you rank in the top 3 across all scenarios (e.g., 15 out of 20 segments = 75% win rate).
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-5 hover:border-orange-400 transition-colors group shadow-sm hover:shadow-md">
              <div className="p-3 bg-orange-50 rounded-lg h-fit group-hover:bg-orange-100 transition-colors">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-700 transition-colors">Qualifier Breakdown</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Detailed rankings across each follow-up qualifier—team size, budget, existing tools, and specific use cases.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-5 hover:border-red-400 transition-colors group shadow-sm hover:shadow-md">
              <div className="p-3 bg-red-50 rounded-lg h-fit group-hover:bg-red-100 transition-colors">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">Primary Threat</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Which competitor outranks you most often across segments (e.g., Salesforce beats you in 8 out of 15 scenarios).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSTRAINTS & CAVEATS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-bold text-amber-800">Methodology & Constraints</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-slate-600">
            <ul className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Snapshot, not definitive</strong> AI responses are stochastic. This is a point-in-time view. Trend analysis over time is recommended.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">ChatGPT only</strong> Currently using GPT-5.2 with web search enabled (triggers ~99% of time).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">API vs. UI</strong> Results generated via API. In B2B SaaS, results converge closely with UI due to smaller brand universes.</span>
              </li>
            </ul>
            <ul className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Relevance over Infinity</strong> Segments are generated based on the model's own knowledge of your category, not arbitrary lists.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Explicit Citations</strong> Only sources explicitly cited by the AI are listed. Implicit knowledge is not sourced.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Context Sensitive</strong> Results vary based on chat history and personalization settings.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. REQUEST FORM */}
      <section id="request-report" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-amber-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Your Report</h2>
            <p className="text-slate-600">
              I'll need a few details about your brand. Reports are manually reviewed—you'll hear back within 24-48 hours.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl relative">
            <iframe 
              data-tally-src="https://tally.so/embed/0QB0Z6?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="739" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="AI Visibility Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-8 text-center border-t border-slate-200 bg-slate-50 text-slate-500 text-sm">
        <p className="flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} AI Visibility Map.</span>
          <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
          <span>Built by Saif Qazi</span>
        </p>
      </footer>
    </div>
  );
}