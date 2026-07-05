import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, Check, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { ContactFormInput } from '../types';

interface ContactProps {
  selectedPlanName: string;
  messagePreset: string;
  onClearSelectedPlan: () => void;
}

export default function Contact({ selectedPlanName, messagePreset, onClearSelectedPlan }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'instagram',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  // Honeypot: bots fill hidden fields; humans never see this one.
  const [honeypot, setHoneypot] = useState('');

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (data: ContactFormInput) => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!data.name.trim()) next.name = 'Please enter your name.';
    if (!data.email.trim()) next.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(data.email.trim())) next.email = 'Please enter a valid email address.';
    if (!data.message.trim()) next.message = 'Tell us a little about your project.';
    return next;
  };

  // Sync preset values when client selects package from Pricing table
  useEffect(() => {
    if (selectedPlanName) {
      // Resolve service value
      let serviceKey = 'instagram';
      if (selectedPlanName.toLowerCase().includes('seo')) {
        serviceKey = 'seo';
      } else if (selectedPlanName.toLowerCase().includes('youtube')) {
        serviceKey = 'youtube';
      } else if (selectedPlanName.toLowerCase().includes('facebook')) {
        serviceKey = 'facebook';
      } else if (selectedPlanName.toLowerCase().includes('custom')) {
        serviceKey = 'custom';
      } else if (selectedPlanName.toLowerCase().includes('pro') || selectedPlanName.toLowerCase().includes('ultimate')) {
        serviceKey = 'custom'; // custom/high value
      }

      setFormData((prev) => ({
        ...prev,
        service: serviceKey,
        message: messagePreset || `Hello, I'd like to query details about the ${selectedPlanName}.`,
        plan: selectedPlanName,
      }));
    }
  }, [selectedPlanName, messagePreset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it
    if (name === 'name' || name === 'email' || name === 'message') {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Silently accept + drop spam bots that fill the honeypot
    if (honeypot) {
      setSubmitSuccess(true);
      return;
    }

    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // TODO (#1): replace this simulation with a real submit (e.g. POST to a
    // serverless endpoint / Formspree / Resend). Right now nothing is sent.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onClearSelectedPlan();
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'instagram',
      message: '',
    });
    setErrors({});
    setHoneypot('');
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Info & Action Hooks */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-900/40 px-2.5 py-1 rounded inline-block">
                Start Your Journey
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight mt-4">
                Let&apos;s Plan Your Digital Takeover
              </h2>
              <p className="font-sans text-slate-400 mt-4 text-sm sm:text-base leading-relaxed font-light">
                Fill out the brief scope form on the right, or reach us directly by email or WhatsApp. We will prepare your custom agency audits in under 24 business hours.
              </p>
            </div>

            {/* Direct Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <div className="bg-orange-600/10 text-orange-400 p-2.5 rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-orange-400 font-mono tracking-wider block uppercase font-bold">EMAIL INQUIRIES</span>
                  <a href="mailto:growth@monarchix.eu" className="text-sm font-sans font-semibold text-ink hover:text-orange-300">growth@monarchix.eu</a>
                </div>
              </div>

              <a
                href="https://wa.me/447454754062"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors cursor-pointer group"
              >
                <div className="bg-orange-600/10 text-orange-400 p-2.5 rounded-xl">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-orange-400 font-mono tracking-wider block uppercase font-bold">WHATSAPP SUPPORT</span>
                  <span className="text-sm font-sans font-semibold text-ink group-hover:text-orange-300 transition-colors">+44 7454 754062</span>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <div className="bg-orange-600/10 text-orange-400 p-2.5 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-orange-400 font-mono tracking-wider block uppercase font-bold">OFFICE ADDRESS</span>
                  <span className="text-sm font-sans font-semibold text-ink not-italic">
                    Monarchix LLC<br />1209 Mountain Road Pl NE<br />Ste N<br />Albuquerque, NM 87110
                  </span>
                </div>
              </div>
            </div>

            {/* Inclusions note */}
            <div className="bg-slate-900/10 border border-slate-900 p-5 rounded-2xl flex space-x-3">
              <Calendar className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Free Growth Diagnostics Included</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans mt-0.5">Every inquiry receives a complimentary 30-minute strategic mapping session where we showcase competitors traffic funnels.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Module */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-amber-300 rounded-t-3xl" />

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Header informing of auto-filled plan */}
                    {formData.plan && (
                      <div className="bg-orange-950/45 border border-orange-900/50 p-4 rounded-2xl flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <p className="text-xs text-orange-300 font-semibold font-sans">
                            Inquiry focused: <strong className="text-ink font-extrabold">{formData.plan}</strong>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            onClearSelectedPlan();
                            setFormData((prev) => ({ ...prev, plan: undefined, message: '' }));
                          }}
                          className="text-[10px] text-slate-400 hover:text-ink font-sans font-bold uppercase underline"
                        >
                          Clear Selection
                        </button>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="cf-name" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Your Name *</label>
                        <input
                          id="cf-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Elena Rostova"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'cf-name-err' : undefined}
                          className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-100 outline-none transition-colors ${
                            errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-800 focus:border-orange-500/80'
                          }`}
                        />
                        {errors.name && <p id="cf-name-err" className="text-[11px] text-rose-400 font-sans">{errors.name}</p>}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="cf-email" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Business Email *</label>
                        <input
                          id="cf-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="elena@company.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'cf-email-err' : undefined}
                          className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-100 outline-none transition-colors ${
                            errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-800 focus:border-orange-500/80'
                          }`}
                        />
                        {errors.email && <p id="cf-email-err" className="text-[11px] text-rose-400 font-sans">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Honeypot — hidden from humans, catches bots. Do not remove. */}
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="cf-website">Leave this field empty</label>
                      <input
                        id="cf-website"
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+49 (151) 1234-567"
                          className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none transition-colors"
                        />
                      </div>

                      {/* Company name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Company / Brand Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="BellaVita Skincare"
                          className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Channel of Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/80 rounded-xl px-4 py-3.5 text-sm text-slate-300 outline-none transition-colors cursor-pointer"
                      >
                        <option value="instagram">Instagram Account Growth</option>
                        <option value="facebook">Facebook Page Boosting</option>
                        <option value="youtube">YouTube Acceleration</option>
                        <option value="seo">Local & Site SEO Mastery</option>
                        <option value="custom">Custom Pack (Multiple Channels)</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label htmlFor="cf-message" className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Brief project scope *</label>
                      <textarea
                        id="cf-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your target goals, monthly ad budget limits, or current social channels..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'cf-message-err' : undefined}
                        className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-100 outline-none transition-colors resize-none ${
                          errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-800 focus:border-orange-500/80'
                        }`}
                      />
                      {errors.message && <p id="cf-message-err" className="text-[11px] text-rose-400 font-sans">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand hover:bg-brand-light disabled:bg-orange-800 text-white font-display font-semibold text-sm py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 shadow-[0_4px_18px_rgba(249,115,22,0.3)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Inquiry For Audit</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Elegant visual Success State
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400 text-3xl">
                      <Check className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-ink">Inquiry Received Successfully</h3>
                      <p className="font-sans text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                        Thank you! Your growth diagnostic setup has been queued. A Monarchix strategist is already auditing your website and social handles.
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 max-w-sm mx-auto text-left space-y-1">
                      <p className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">NEXT STEPS:</p>
                      <p className="text-xs text-slate-300 font-sans font-semibold">1. Competitor traffic graph generated</p>
                      <p className="text-xs text-slate-300 font-sans font-semibold">2. Local SEO audit report processed</p>
                      <p className="text-xs text-slate-300 font-sans font-semibold">3. Free diagnostic booking link sent via email</p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center space-x-2 text-xs font-display font-bold uppercase tracking-wider text-slate-400 hover:text-ink border border-slate-800 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Submit New Inquiry</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
