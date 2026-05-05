import React, { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Globe2, 
  Zap, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Lightbulb,
  Shield,
  MessageSquare,
  Building
} from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-orange-500/30">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
            <span className="text-xl font-bold tracking-tight text-white">GRIPR</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex text-sm text-slate-400 font-medium">India bolti hai. Builders sunenge.</span>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold px-6">
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505] z-10" />
            <img 
              src="/__mockup/images/gripr-hero.png" 
              alt="Vibrant India" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10 px-4 py-1 text-sm mb-6 rounded-full">
                Beta is live. 12,000+ problems analyzed.
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1]">
                Stop guessing. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                  Build what India actually needs.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                India's first anonymous problem-to-product platform. Real frustrations from 9 languages, ranked by AI demand.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 relative">
                <div className="flex shadow-2xl shadow-orange-900/20 rounded-full bg-white/5 border border-white/10 p-1 focus-within:border-orange-500/50 transition-colors">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-slate-500 px-6 h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 px-8 font-bold">
                    {submitted ? "Joined!" : "Get Early Access"}
                  </Button>
                </div>
                <p className="text-sm text-slate-500 mt-4">Join 340+ builders already on the waitlist. ₹0 for users.</p>
              </form>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24 border-y border-white/10 py-10">
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-white">12k+</h3>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Problems in Beta</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-white">340+</h3>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Builders Waitlisted</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-white">9</h3>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Indian Languages</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-white">₹0</h3>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Cost to Users</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How GRIPR Works</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">From raw frustration to validated product idea in 3 steps.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Card className="bg-[#111] border-white/5 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent" />
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/30">
                      <MessageSquare className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-2xl text-white">1. India Shares Frustrations</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-400 text-lg">
                    Anyone can submit their daily problems anonymously in 30 seconds. Hindi, English, or 7 other regional languages. Zero login required.
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Card className="bg-[#111] border-white/5 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                      <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <CardTitle className="text-2xl text-white">2. AI Ranks Real Demand</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-400 text-lg">
                    Our semantic engine clusters similar problems, scores frequency, and tracks momentum. No more guessing what the market actually needs.
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Card className="bg-[#111] border-white/5 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent" />
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
                      <Lightbulb className="w-6 h-6 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl text-white">3. Builders Get the Signal</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-400 text-lg">
                    Every Monday morning, get a digest of the top 10 unsolved problems in your specific niche. Build with confidence before writing code.
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-20 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto relative aspect-video bg-black shadow-2xl shadow-orange-900/20">
              <img 
                src="/__mockup/images/gripr-process.png" 
                alt="AI Processing Problems" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">The GRIPR Engine</h3>
                  <p className="text-slate-300">Processing thousands of daily signals into clear, actionable builder insights.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REAL PROBLEMS */}
        <section className="py-24 bg-[#050505] relative border-y border-white/5">
          <div className="absolute left-0 top-0 w-1/3 h-full bg-orange-600/5 blur-[150px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10 mb-4">
                  Live Feed Preview
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Real problems.<br/>Waiting for solutions.</h2>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 shrink-0">
                View Live Beta Board
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  id: "PRB-8921",
                  persona: "Farmer, Maharashtra",
                  problem: "Tomatoes rotting because I can't find a reefer truck for small loads to the city.",
                  demand: "Very High",
                  trend: "+42% this week",
                  tags: ["AgriTech", "Logistics"]
                },
                {
                  id: "PRB-7743",
                  persona: "Engineering Student, Delhi",
                  problem: "Taking factory client orders but impossible to find a verified, skilled welder nearby.",
                  demand: "High",
                  trend: "+18% this week",
                  tags: ["Gig Economy", "Manufacturing"]
                },
                {
                  id: "PRB-9012",
                  persona: "Manufacturer, Gujarat",
                  problem: "Losing export deals constantly because customs paperwork requirements keep changing silently.",
                  demand: "Critical",
                  trend: "+65% this week",
                  tags: ["Export", "Compliance", "LegalTech"]
                },
                {
                  id: "PRB-6534",
                  persona: "Small Business Owner, Bangalore",
                  problem: "No reliable way to verify if a raw material supplier is genuine before paying an advance.",
                  demand: "Very High",
                  trend: "+30% this week",
                  tags: ["B2B", "FinTech", "Trust"]
                }
              ].map((item, i) => (
                <Card key={i} className="bg-[#0a0a0a] border-white/10 hover:border-orange-500/50 transition-colors group">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10">
                        {item.id}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded-md">
                        <TrendingUp className="w-3 h-3" /> {item.trend}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-400 font-normal">
                      Reported by: <span className="text-white font-medium">{item.persona}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-medium text-white leading-snug mb-6">
                      "{item.problem}"
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-400">
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-md ml-auto font-medium flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Demand: {item.demand}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why GRIPR?</h2>
              <p className="text-xl text-slate-400">The world builds for the US. We build for Bharat.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-lg">
                    <th className="py-6 px-4 font-normal w-1/4">Feature</th>
                    <th className="py-6 px-4 font-semibold text-white bg-white/5 rounded-t-xl w-1/4">GRIPR</th>
                    <th className="py-6 px-4 font-normal w-1/4">ProductHunt</th>
                    <th className="py-6 px-4 font-normal w-1/4">Reddit / Twitter</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">Core Focus</td>
                    <td className="py-6 px-4 bg-white/5 font-bold text-orange-400">Raw unbuilt demand</td>
                    <td className="py-6 px-4">Finished solutions</td>
                    <td className="py-6 px-4">General discussion</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">Language Support</td>
                    <td className="py-6 px-4 bg-white/5 text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Hindi + 8 Regional
                    </td>
                    <td className="py-6 px-4">English only</td>
                    <td className="py-6 px-4">Mostly English</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">Signal vs Noise</td>
                    <td className="py-6 px-4 bg-white/5 text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> AI Ranked Demand
                    </td>
                    <td className="py-6 px-4">Upvotes on UI</td>
                    <td className="py-6 px-4">Chronological chaos</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-6 px-4 font-medium">Geography</td>
                    <td className="py-6 px-4 bg-white/5 text-white rounded-b-xl border-b-2 border-orange-500">
                      Bharat-Native
                    </td>
                    <td className="py-6 px-4">US-Biased</td>
                    <td className="py-6 px-4">Global</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BUILDER INSIGHTS IMAGE */}
        <section className="py-12 bg-[#050505]">
          <div className="container mx-auto px-4">
             <div className="rounded-3xl overflow-hidden border border-white/10 max-w-6xl mx-auto relative aspect-[21/9] bg-black">
                <img 
                  src="/__mockup/images/gripr-insights.png" 
                  alt="Builder Insights" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-12">
                  <div className="max-w-lg space-y-6">
                    <h3 className="text-4xl font-bold text-white leading-tight">Don't write code until you know they'll buy.</h3>
                    <p className="text-xl text-slate-300">Get weekly digests of validated problems in your exact niche. Claim a problem, build the solution, and launch to a pre-warmed waitlist.</p>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pricing for Builders</h2>
              <p className="text-xl text-slate-400">Users who share problems will always be free. Builders pay for the signal.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic */}
              <Card className="bg-[#111] border-white/10 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-300">Builder Basic</CardTitle>
                  <div className="mt-4 flex items-baseline text-4xl font-extrabold text-white">
                    ₹499 <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
                  </div>
                  <CardDescription className="text-slate-400 mt-2">Essential signals for indie hackers.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Top 10 weekly digest</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> 1 niche filter</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Access to problem tags</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Join Waitlist</Button>
                </CardFooter>
              </Card>

              {/* Pro */}
              <Card className="bg-gradient-to-b from-orange-900/20 to-[#111] border-orange-500/50 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">Builder Pro</CardTitle>
                  <div className="mt-4 flex items-baseline text-4xl font-extrabold text-white">
                    ₹999 <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
                  </div>
                  <CardDescription className="text-slate-300 mt-2">Deep insights for serious founders.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 text-slate-200">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Real-time alerts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> 3 niche filters</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Historical trend data</li>
                    <li className="flex items-center gap-3 font-semibold"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Claim a problem to build</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Get Early Access</Button>
                </CardFooter>
              </Card>

              {/* Founding */}
              <Card className="bg-[#111] border-white/10 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-1 text-xs font-bold rounded">
                  50 Spots Only
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-300">Founding Member</CardTitle>
                  <div className="mt-4 flex items-baseline text-4xl font-extrabold text-white">
                    ₹4,999 <span className="ml-1 text-xl font-medium text-slate-500">one-time</span>
                  </div>
                  <CardDescription className="text-slate-400 mt-2">Lifetime access for early believers.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Lifetime Builder Pro access</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Private founder Discord</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Direct feature requests</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10">Secure Spot</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="text-center mt-8 text-slate-500 text-sm">
              Agency or VC? Need API access? <a href="#" className="text-orange-400 hover:underline">Contact us</a> for the ₹4,999/mo plan.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-600">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
              The signal is loud.<br />Are you listening?
            </h2>
            <p className="text-2xl text-orange-100 max-w-2xl mx-auto mb-12 font-medium">
              Join 340+ builders getting validated Indian problems sent directly to their inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
              <div className="flex shadow-2xl rounded-full bg-black/20 border border-white/20 p-1 backdrop-blur-sm focus-within:border-white/50 transition-colors">
                <Input 
                  type="email" 
                  placeholder="builder@example.com" 
                  className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-white/60 px-6 h-14 text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-white text-orange-600 hover:bg-slate-100 rounded-full h-14 px-8 font-bold text-lg">
                  {submitted ? "Added to Waitlist" : "Join Waitlist"}
                </Button>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/10 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
            <span className="text-xl font-bold tracking-tight text-white">GRIPR</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 GRIPR. Founded in Jaipur, Rajasthan.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
