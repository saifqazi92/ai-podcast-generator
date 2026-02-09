'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Rss, 
  Mic, 
  FileText, 
  Music, 
  Settings, 
  Layers, 
  Database, 
  Cloud, 
  Code,
  CheckCircle2,
  AlertTriangle,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Volume2,
  ExternalLink,
  Zap,
  Radio,
  TrendingUp,
  Megaphone,
  Globe,
  Headphones
} from 'lucide-react';

export default function PodcastLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotesOpen, setShowNotesOpen] = useState(true); // Default open to show content
  const [progress, setProgress] = useState(0);
  
  // Audio Player Refs
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------------------------
  // 🎧 CONFIGURATION: ADD YOUR MP3 HERE
  // ---------------------------------------------------------------------------
  const DEMO_AUDIO_URL = "https://podcast-gen-public-prod-9f3k.s3.eu-north-1.amazonaws.com/public/shows/industry-weekly-brief/episodes/ElevenLabs_2026-02-09T12_10_24.mp3"; 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  // Allow clicking on the progress bar to seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current && audioRef.current.duration) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      
      audioRef.current.currentTime = percentage * audioRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src={DEMO_AUDIO_URL} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

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
            <a href="#demo" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Listen</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">How It Works</a>
            <a href="#tech-stack" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Tech Stack</a>
            <a 
              href="#create-show" 
              className="px-4 py-2 text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300"
            >
              Create a Show
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
            <a href="#demo" className="block text-sm font-medium text-slate-600 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Listen</a>
            <a href="#how-it-works" className="block text-sm font-medium text-slate-600 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#tech-stack" className="block text-sm font-medium text-slate-600 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Tech Stack</a>
            <a href="#create-show" className="block w-full text-center px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Create a Show
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              New: ElevenLabs v3 Integration
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              RSS → Podcast, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Automatically.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Launch a high-quality audio news show for your brand without a media team. Ingests industry feeds, scripts the insights, and publishes a growth-ready podcast—mid-roll ads included.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#demo" 
                className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200"
              >
                Listen to the Demo 
                <Volume2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg hover:bg-slate-50 border border-slate-200 transition-colors text-center shadow-sm"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Visual: Podcast Workflow Visualization */}
          <div className="relative rounded-xl bg-slate-100 border border-slate-200 p-1 shadow-2xl shadow-slate-200 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 blur-2xl -z-10 opacity-50"></div>
            <div className="bg-white rounded-lg p-6 h-full relative overflow-hidden flex flex-col justify-between min-h-[320px]">
               
               {/* Step 1: Input Feeds */}
               <div className="flex justify-center gap-3 mb-4">
                 <div className="bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 text-xs font-medium text-slate-600">
                   <Rss className="w-3 h-3 text-orange-500" /> TechCrunch
                 </div>
                 <div className="bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 text-xs font-medium text-slate-600">
                   <Globe className="w-3 h-3 text-blue-500" /> The Verge
                 </div>
                 <div className="bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 text-xs font-medium text-slate-600">
                   <Megaphone className="w-3 h-3 text-emerald-500" /> Ad Copy
                 </div>
               </div>

               {/* Step 2: Generation Animation */}
               <div className="flex-1 flex flex-col items-center justify-center relative py-4">
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="w-full h-px bg-slate-300"></div>
                 </div>
                 <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-2 z-10 border border-orange-100 shadow-inner">
                   <Zap className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
                 </div>
                 <div className="flex gap-1 h-4 items-center">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-1 bg-orange-400 rounded-full animate-[bounce_1s_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                   ))}
                 </div>
                 <span className="text-[10px] uppercase font-bold text-orange-600 mt-2 tracking-wider">Generating Audio...</span>
               </div>

               {/* Step 3: Podcast Player Result */}
               <div className="mt-4 bg-slate-900 rounded-xl p-4 shadow-lg border border-slate-800 relative z-20">
                 <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                     <Headphones className="w-8 h-8 text-white" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wide mb-0.5">Ready to Publish</div>
                     <h3 className="text-white font-bold text-sm truncate">Daily Industry Brief</h3>
                     <p className="text-slate-400 text-xs truncate">Ep 5 • Agents & Automation</p>
                   </div>
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors">
                     <Play className="w-4 h-4 text-slate-900 fill-current ml-0.5" />
                   </div>
                 </div>
                 
                 {/* Progress Bar Mock */}
                 <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                   <span>0:00</span>
                   <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                     <div className="w-1/3 h-full bg-orange-500 rounded-full"></div>
                   </div>
                   <span>5:12</span>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. DEMO SECTION */}
      <section id="demo" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Demo Episode</h2>
            <p className="text-slate-600">Generated entirely by code. No human recording involved.</p>
          </div>

          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 relative">
            {/* Top Bar / Album Art Area */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                <Radio className="w-12 h-12 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Weekly Tech Brief</div>
                <h3 className="text-2xl font-bold text-white mb-2">Episode 5: Agents, Autos, and Ads: This Week in Voice & AI</h3>
                <div className="text-slate-400 text-sm flex items-center justify-center sm:justify-start gap-4">
                  <span>Feb 9, 2026</span>
                  <span>•</span>
                  <span>3 min 45 sec</span>
                </div>
              </div>
              
              <button 
                onClick={togglePlay}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-105 transition-transform shadow-lg shadow-white/10"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>
            </div>

            {/* Simulated Progress Bar (Clickable) */}
            <div 
              ref={progressBarRef}
              onClick={handleSeek}
              className="bg-slate-800 h-1.5 w-full relative group cursor-pointer"
            >
              {/* Buffer/Hover effect (optional enhancement could go here) */}
              <div 
                className="bg-orange-500 h-full absolute top-0 left-0 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
              
              {/* Scrubber Handle (visible on hover) */}
              <div 
                className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2 -ml-1.5 shadow opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              ></div>
            </div>

            {/* Show Notes Accordion */}
            <div className="bg-white text-slate-900">
              <button 
                onClick={() => setShowNotesOpen(!showNotesOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100"
              >
                <span className="font-bold text-sm uppercase tracking-wide text-slate-500 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Show Notes & Sources
                </span>
                {showNotesOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              
              {showNotesOpen && (
                <div className="px-6 py-6 bg-slate-50 animate-in slide-in-from-top-2 duration-200">
                  
                  {/* Episode Summary */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-orange-500" /> Episode Summary
                    </h4>
                    <ul className="space-y-2 list-disc pl-4 marker:text-orange-400 text-sm text-slate-600 leading-relaxed">
                      <li>Anthropic upgrades Claude Opus to push beyond coding and improve long-horizon, multi-step work.</li>
                      <li>OpenAI launches Frontier to centralise agent deployment, context, and permissions.</li>
                      <li>Benchmarks suggest agent performance on professional tasks is moving quickly.</li>
                    </ul>
                  </div>

                  {/* Operator Takeaways */}
                  <div className="mb-6">
                     <h4 className="text-xs font-bold text-slate-900 uppercase mb-3 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-orange-500" /> Operator Takeaways
                    </h4>
                    <ul className="space-y-2 list-disc pl-4 marker:text-orange-400 text-sm text-slate-600 leading-relaxed">
                      <li>Re-run your agent evals on real documents, spreadsheets, and multi-step workflows.</li>
                      <li>Treat permissions, boundaries, and shared context as production requirements, not extras.</li>
                      <li>Re-scope human review: keep it where risk is highest, but test guarded automation elsewhere.</li>
                    </ul>
                  </div>
                  
                  {/* Sources */}
                  <h4 className="text-xs font-bold text-slate-900 uppercase mb-3 flex items-center gap-2">
                    <ExternalLink className="w-3 h-3 text-orange-500" /> Sources Mentioned
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { 
                        text: "Anthropic debuts new model with hopes to corner the market beyond coding", 
                        site: "The Verge",
                        url: "https://www.theverge.com/ai-artificial-intelligence/874440/anthropic-opus-4-6-new-model-claude" 
                      },
                      { 
                        text: "OpenAI Frontier is a single platform to control your AI agents", 
                        site: "The Verge",
                        url: "https://www.theverge.com/ai-artificial-intelligence/874258/openai-frontier-ai-agent-platform-management" 
                      },
                      { 
                        text: "Maybe AI agents can be lawyers after all", 
                        site: "TechCrunch",
                        url: "https://techcrunch.com/2026/02/06/maybe-ai-agents-can-be-lawyers-after-all/" 
                      }
                    ].map((source, i) => (
                      <li key={i} className="text-sm text-slate-600">
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex flex-col sm:flex-row sm:items-center gap-1 hover:text-orange-600 transition-colors"
                        >
                          <span className="font-medium text-slate-900 group-hover:text-orange-600">{source.text}</span>
                          <span className="hidden sm:inline text-slate-300">—</span>
                          <span className="text-slate-400 text-xs flex items-center gap-1 group-hover:text-orange-400">
                             {source.site} <ExternalLink className="w-2.5 h-2.5" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] text-slate-400 italic">
                    Note: Sources are included here for reference. No URLs are read aloud in the audio script.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY IT MATTERS (Reframed for Growth/Acquisition) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why This Exists</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Turn a passive news feed into an active growth channel for your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Become the Industry Voice</h3>
              <p className="text-sm text-slate-600">Own the weekly news cycle in your niche without hiring a media team. Be the brand people listen to every Monday morning.</p>
            </div>
            
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Zero-Effort Content Engine</h3>
              <p className="text-sm text-slate-600">Feed it URLs, get a published episode. It's consistent content marketing that runs on autopilot, so you never miss a week.</p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500 mb-4">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Built-in Lead Gen</h3>
              <p className="text-sm text-slate-600">Turn listeners into leads. The engine automatically weaves your own mid-roll ads into the script to drive traffic to your main product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">How It Works</h2>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { icon: Rss, title: "Ingest", desc: "Poll RSS feeds automatically" },
                { icon: Zap, title: "Curate", desc: "AI selects stories valuable to your audience" },
                { icon: FileText, title: "Extract", desc: "Fetch full readable article text" },
                { icon: Code, title: "Script", desc: "AI writes a natural, human-like script" },
                { icon: Mic, title: "Publish", desc: "Synthesize Audio + RSS Feed" }
              ].map((step, i) => (
                <div key={i} className="relative group text-center bg-white p-4">
                  <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-4 group-hover:border-orange-400 group-hover:scale-110 transition-all shadow-sm z-10 relative">
                    <step.icon className="w-7 h-7 text-slate-400 group-hover:text-orange-500 transition-colors" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-500 px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT'S GENERATED */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Output Artifacts</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-slate-200 hover:border-orange-200 transition-colors">
               <div className="flex items-center gap-2 mb-3 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                 <FileText className="w-4 h-4" /> Artifact 01
               </div>
               <h4 className="font-bold text-slate-800 mb-2">Episode Script</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 A natural, readable script optimized for TTS, including transition cues ("Next up...") and pronunciation guides.
               </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 hover:border-orange-200 transition-colors">
               <div className="flex items-center gap-2 mb-3 text-orange-500 uppercase text-[10px] font-bold tracking-wider">
                 <Music className="w-4 h-4" /> Artifact 02
               </div>
               <h4 className="font-bold text-slate-800 mb-2">MP3 Audio</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 High-fidelity 128kbps MP3 generated via ElevenLabs v3, complete with consistent pacing and tone.
               </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 hover:border-orange-200 transition-colors">
               <div className="flex items-center gap-2 mb-3 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                 <Layers className="w-4 h-4" /> Artifact 03
               </div>
               <h4 className="font-bold text-slate-800 mb-2">Show Notes</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 A concise bulleted summary of stories covered, with direct outbound links to the source material.
               </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 hover:border-orange-200 transition-colors opacity-75">
               <div className="flex items-center gap-2 mb-3 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                 <Rss className="w-4 h-4" /> Artifact 04
               </div>
               <h4 className="font-bold text-slate-800 mb-2">RSS Feed</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 (Optional) A standard XML feed compatible with Apple Podcasts/Spotify for private distribution.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECH STACK */}
      <section id="tech-stack" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Built as a Lightweight Automation System</h2>
            <p className="text-slate-600">Multi-tenant by design. Change the settings, generate a new show.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className="bg-purple-100 p-2 rounded text-purple-600"><Zap className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Orchestration: Make.com</h4>
                <p className="text-xs text-slate-500 mt-1">Handles scheduling, logic routing, and error handling.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className="bg-blue-100 p-2 rounded text-blue-600"><Database className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Data Layer: Airtable</h4>
                <p className="text-xs text-slate-500 mt-1">Stores shows, source feeds, items, episode logs, and ad copy.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className="bg-green-100 p-2 rounded text-green-600"><Code className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Extraction: Apify</h4>
                <p className="text-xs text-slate-500 mt-1">Scrapes readable text from article URLs, removing ads/nav.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className="bg-orange-100 p-2 rounded text-orange-600"><Mic className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Voice: ElevenLabs v3</h4>
                <p className="text-xs text-slate-500 mt-1">Generates high-quality speech with specific voice IDs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 sm:col-span-2">
              <div className="bg-slate-200 p-2 rounded text-slate-600"><Cloud className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Publishing: AWS S3</h4>
                <p className="text-xs text-slate-500 mt-1">Hosts the public MP3 files and show notes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CREATE A SHOW */}
      <section id="create-show" className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-amber-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Create a Show</h2>
            <p className="text-slate-600">
              Configure your automated podcast. Define the audience, feeds, and voice.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-2xl relative">
            {/* Mock Form Structure */}
            <div className="space-y-6 opacity-40 blur-[1px] select-none pointer-events-none mb-6 grayscale">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase">Show Name</label>
                   <div className="h-10 bg-slate-50 rounded border border-slate-200"></div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase">Target Length</label>
                   <div className="h-10 bg-slate-50 rounded border border-slate-200"></div>
                 </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Source Feeds (RSS)</label>
                <div className="h-24 bg-slate-50 rounded border border-slate-200"></div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Sponsor Copy (Mid-roll)</label>
                <div className="h-24 bg-slate-50 rounded border border-slate-200"></div>
              </div>
              <div className="h-12 w-full bg-slate-200 rounded mt-4"></div>
            </div>

            {/* Placeholder Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl backdrop-blur-[2px] z-10">
              <div className="bg-white p-8 rounded-xl border border-orange-100 text-center max-w-sm shadow-xl mx-4">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-orange-100">
                  <Settings className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-slate-900 font-semibold mb-2 text-lg">Setup UI Coming Soon</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  We are finalizing the self-serve dashboard. If you want a sample demo, email me at <a href="mailto:saifqazi3@gmail.com" className="text-orange-600 hover:text-orange-700 font-medium underline decoration-orange-200 underline-offset-2 transition-colors">saifqazi3@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONSTRAINTS & CAVEATS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-bold text-amber-800">Constraints & Caveats</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-slate-600">
            <ul className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Derived Summaries</strong> Scripts are generated from available article text. We link to all sources for full context.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Extraction Limits</strong> Not all sites allow full-text extraction; we fallback to RSS descriptions when needed.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Point-in-Time Demo</strong> This is a working prototype. Production hardening would require deeper monitoring and retry logic.</span>
              </li>
            </ul>
            <ul className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Short Format</strong> Designed for 3-8 minute episodes. Longer formats risk hallucination or repetition.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="text-slate-800 block mb-1">Voice & Tone</strong> Delivery depends on the selected ElevenLabs voice model. Pronunciation cues are added programmatically.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-8 text-center border-t border-slate-200 bg-slate-50 text-slate-500 text-sm">
        <p className="flex items-center justify-center gap-4 mb-4">
          <a href="#" className="hover:text-orange-500 transition-colors">AI Category Visibility Map</a>
          <span className="text-slate-300">|</span>
          <a href="#" className="hover:text-orange-500 transition-colors">GitHub</a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Automated Podcast Generator.</span>
          <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
          <span>Built by Saif Qazi</span>
        </p>
      </footer>
    </div>
  );
}