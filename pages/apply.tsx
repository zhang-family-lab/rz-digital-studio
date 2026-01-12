import React, { useState } from 'react';
import Head from 'next/head';

export default function Apply() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        identityDNA: '',
        academicTrends: '',
        visualEvidenceLink: '',
        narrativeBlock: '',
        major: '',
        honors: '',
        projects: '',
        creativePortfolio: '',
        leadership: '',
        easterEgg: '',
        designAesthetic: 'Academic Blue',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const res = await fetch('/api/submit-application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Head>
                <title>Student Digital Portfolio Questionnaire | RZ Digital Studio</title>
            </Head>

            <main className="max-w-3xl mx-auto py-12 px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">Student Digital Portfolio Questionnaire</h1>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        <span className="font-bold">Before you submit, please read our <a href="/blogs/submission-success-guide" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Submission Success Guide</a>!</span><br />
                        🚀 Submission Success Guide: Building Your Digital Portfolio.<br />
                        To build a world-class digital portfolio, we don't just need your information—we need your best assets.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-2">Application Submitted! 🚀</h3>
                        <p>We have received your details and will process your request shortly. Check your email for confirmation.</p>
                        <button onClick={() => setStatus('idle')} className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition">Submit Another</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-8">
                        {/* Section 1: Basic Info */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Basic Information</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                        placeholder="e.g. (555) 123-4567"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="major" className="block text-sm font-bold text-slate-700 mb-1">Intended Major / Field of Interest *</label>
                                <p className="text-xs text-slate-500 mb-2">AI uses this to theme your entire portfolio. Please be specific (e.g., 'Human-Computer Interaction' instead of just 'Computer Science'). If you are undecided, list your top two interests separated by a slash.</p>
                                <input
                                    type="text"
                                    id="major"
                                    name="major"
                                    required
                                    value={formData.major}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                />
                            </div>
                        </section>
                        {/* Section 2: Core Questions (A-D) */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Core Portfolio Questions</h2>
                            {/* Identity DNA */}
                            <div>
                                <label htmlFor="identityDNA" className="block text-base font-bold text-slate-900 mb-1">A. Identity DNA (The "Hook" Formula) *</label>
                                <p className="text-sm text-slate-500 mb-2 font-medium">Question Label: Core Identity DNA (Formulaic)</p>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                                    Instruction: needs a precise anchor. Please fill in this formula: <strong>[Identity/Role] + [Key Achievement] + [Unique/Contrasting Trait]</strong>.
                                    <br />
                                    Example: "A Neural Network researcher (Identity) with a published paper at NeurIPS (Achievement) who is also a competitive marathon runner (Trait)."
                                </p>
                                <input
                                    type="text"
                                    id="identityDNA"
                                    name="identityDNA"
                                    required
                                    value={formData.identityDNA}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-slate-50"
                                    placeholder="[Identity/Role] + [Key Achievement] + [Unique/Contrasting Trait]"
                                />
                            </div>
                            {/* Academic Assets */}
                            <div>
                                <label htmlFor="academicTrends" className="block text-base font-bold text-slate-900 mb-1">B. Academic Assets (Quantitative Trends) *</label>
                                <p className="text-sm text-slate-500 mb-2 font-medium">Question Label: Academic Growth & Resilience</p>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                                    Instruction: Provide your GPA trend across high school (e.g., 3.6 -{'>'} 3.8 -{'>'} 3.9). If there is a dip, provide a one-sentence data-driven explanation (e.g., "Slight dip in 11th grade due to Varsity Captain responsibilities, followed by a recovery in AP courses").
                                </p>
                                <textarea
                                    id="academicTrends"
                                    name="academicTrends"
                                    required
                                    rows={3}
                                    value={formData.academicTrends}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-slate-50"
                                />
                            </div>
                            {/* Visual Evidence */}
                            <div>
                                <label htmlFor="visualEvidenceLink" className="block text-base font-bold text-slate-900 mb-1">C. Visual Evidence (The "3+5" Standard) *</label>
                                <p className="text-sm text-slate-500 mb-2 font-medium">Question Label: Shared Google Drive Link (Standardized Assets)</p>
                                <div className="text-xs text-slate-500 mb-3 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <p className="mb-2"><strong>Instruction: Your folder must contain these specific "Demo-ready" files:</strong></p>
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li><strong>3 Action Clips (30s each):</strong> 1. Peak Performance (e.g., scoring a goal/presenting), 2. Influence (e.g., leading a meeting), 3. Process (e.g., timelapse of coding/building).</li>
                                        <li><strong>5 Key Images:</strong> 1 Professional Headshot, 2 Action/Team shots, 2 Detail shots (e.g., certificates, blueprints, or project close-ups).</li>
                                    </ul>
                                </div>
                                <input
                                    type="url"
                                    id="visualEvidenceLink"
                                    name="visualEvidenceLink"
                                    required
                                    value={formData.visualEvidenceLink}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                    placeholder="https://drive.google.com/..."
                                />
                            </div>
                            {/* Narrative Block */}
                            <div>
                                <label htmlFor="narrativeBlock" className="block text-base font-bold text-slate-900 mb-1">D. Narrative Block (The STAR Resilience Story) *</label>
                                <p className="text-sm text-slate-500 mb-2 font-medium">Question Label: The "Overcoming Adversity" Block</p>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                                    Instruction: Provide a raw story block for AI to process. It must follow the STAR format:
                                    <br />
                                    <strong>S (Situation):</strong> What was the specific obstacle?
                                    <br />
                                    <strong>T (Task):</strong> What was your goal?
                                    <br />
                                    <strong>A (Action):</strong> What was the one specific thing you did?
                                    <br />
                                    <strong>R (Result):</strong> What was the quantifiable outcome?
                                </p>
                                <textarea
                                    id="narrativeBlock"
                                    name="narrativeBlock"
                                    required
                                    rows={6}
                                    value={formData.narrativeBlock}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-slate-50"
                                    placeholder="S: ... T: ... A: ... R: ..."
                                />
                            </div>
                        </section>
                        <hr className="border-slate-100" />
                        {/* Section 3: Additional Details */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Additional Details</h2>
                            <div>
                                <label htmlFor="honors" className="block text-sm font-bold text-slate-700 mb-1">Top 3-5 Academic Honors</label>
                                <p className="text-xs text-slate-500 mb-2">Provide the 'Proof' for your portfolio. For each award, include: <strong>[Award Name] | [Selectivity, e.g., Top 5% of 200] | [Key reason you won]</strong>. This allows us to highlight your competitive edge. <span className="text-indigo-500 font-semibold">(Optional)</span></p>
                                <textarea
                                    id="honors"
                                    name="honors"
                                    rows={3}
                                    value={formData.honors}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                    placeholder="Award Name | Selectivity | Reason"
                                />
                            </div>
                            <div>
                                <label htmlFor="projects" className="block text-sm font-bold text-slate-700 mb-1">Core Projects & Extracurriculars</label>
                                <p className="text-xs text-slate-500 mb-2">List your top 2 projects. Focus on Results & Impact. Use numbers where possible (e.g., 'Coded a Python script that saved 10 hours of work' or 'Led 20 volunteers'). This gives the us 'hooks' to write your project descriptions. <span className="text-indigo-500 font-semibold">(Optional)</span></p>
                                <textarea
                                    id="projects"
                                    name="projects"
                                    rows={3}
                                    value={formData.projects}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="creativePortfolio" className="block text-sm font-bold text-slate-700 mb-1">Creative Portfolio</label>
                                <p className="text-xs text-slate-500 mb-2">Provide a link to your most significant creative work (Design, Code, Research Paper, or Art). Include a 30-word 'Creator’s Note' explaining the core problem you were trying to solve. This helps us write the 'Project Philosophy' section of your site. <span className="text-indigo-500 font-semibold">(Optional)</span></p>
                                <input
                                    type="url"
                                    id="creativePortfolio"
                                    name="creativePortfolio"
                                    value={formData.creativePortfolio}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                    placeholder="Link to work..."
                                />
                            </div>
                            <div>
                                <label htmlFor="leadership" className="block text-sm font-bold text-slate-700 mb-1">Leadership & Influence</label>
                                <p className="text-xs text-slate-500 mb-2">Please use the format: <strong>[Role] + [Organization] + [One Specific Impact]</strong>. Example: Founder of Coding Club - Taught 20 peers Python basics. <span className="text-indigo-500 font-semibold">(Optional)</span></p>
                                <input
                                    type="text"
                                    id="leadership"
                                    name="leadership"
                                    value={formData.leadership}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                    placeholder="[Role] + [Organization] + [Impact]"
                                />
                            </div>
                            <div>
                                <label htmlFor="easterEgg" className="block text-sm font-bold text-slate-700 mb-1">Easter Egg / Fun Fact</label>
                                <p className="text-xs text-slate-500 mb-2">What is one thing about you that isn't on your resume? (e.g., 'I have a black belt in Karate' or 'I can solve a Rubik’s cube in 20 seconds'). AI uses this to add 'personality' and 'humanity' to your digital brand. <span className="text-indigo-500 font-semibold">(Optional)</span></p>
                                <input
                                    type="text"
                                    id="easterEgg"
                                    name="easterEgg"
                                    value={formData.easterEgg}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="designAesthetic" className="block text-sm font-bold text-slate-700 mb-2">Design Aesthetic</label>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <label className={`block p-4 border rounded-xl cursor-pointer transition ${formData.designAesthetic === 'Academic Blue' ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-200' : 'hover:bg-slate-50'}`}>
                                        <input type="radio" name="designAesthetic" value="Academic Blue" className="hidden" onChange={handleChange} checked={formData.designAesthetic === 'Academic Blue'} />
                                        <div className="font-bold text-slate-900">Academic Blue</div>
                                        <div className="text-xs text-slate-500 mt-1">Professional, trustworthy, and authoritative. Best for traditional research, law, or STEM applications.</div>
                                    </label>
                                    <label className={`block p-4 border rounded-xl cursor-pointer transition ${formData.designAesthetic === 'Gallery Black' ? 'bg-slate-900 text-white border-slate-900' : 'hover:bg-slate-50'}`}>
                                        <input type="radio" name="designAesthetic" value="Gallery Black" className="hidden" onChange={handleChange} checked={formData.designAesthetic === 'Gallery Black'} />
                                        <div className={`font-bold ${formData.designAesthetic === 'Gallery Black' ? 'text-white' : 'text-slate-900'}`}>Gallery Black</div>
                                        <div className={`text-xs mt-1 ${formData.designAesthetic === 'Gallery Black' ? 'text-slate-400' : 'text-slate-500'}`}>High-contrast, bold, and modern. Best for arts, media, and design portfolios that want to stand out.</div>
                                    </label>
                                    <label className={`block p-4 border rounded-xl cursor-pointer transition ${formData.designAesthetic === 'Minimalist White' ? 'bg-white border-slate-300 ring-1 ring-slate-200' : 'hover:bg-slate-50'}`}>
                                        <input type="radio" name="designAesthetic" value="Minimalist White" className="hidden" onChange={handleChange} checked={formData.designAesthetic === 'Minimalist White'} />
                                        <div className="font-bold text-slate-900">Minimalist White</div>
                                        <div className="text-xs text-slate-500 mt-1">Clean, spacious, and content-focused. Best for writers, business leaders, or entrepreneurs.</div>
                                    </label>
                                    <label className={`block p-4 border rounded-xl cursor-pointer transition ${formData.designAesthetic === 'Championship Gold' ? 'bg-yellow-50 border-yellow-200 ring-1 ring-yellow-200' : 'hover:bg-slate-50'}`}>
                                        <input type="radio" name="designAesthetic" value="Championship Gold" className="hidden" onChange={handleChange} checked={formData.designAesthetic === 'Championship Gold'} />
                                        <div className="font-bold text-slate-900">Championship Gold</div>
                                        <div className="text-xs text-slate-500 mt-1">High-energy, dynamic, and competitive. Designed to showcase athletic highlights, strength, and team spirit.</div>
                                    </label>
                                </div>
                            </div>
                        </section>
                        <div className="pt-8">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-extrabold text-xl hover:bg-slate-800 transition shadow-xl disabled:opacity-50 tracking-tight"
                            >
                                {status === 'submitting' ? 'Processing...' : 'SUBMIT APPLICATION NOW'}
                            </button>
                            {status === 'error' && <p className="text-red-600 text-center mt-4 font-bold">Something went wrong. Please try again.</p>}
                        </div>
                    </form>
                )}
            </main>
        </div>
    );
}
