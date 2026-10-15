/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  BarChart3,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
  Copy,
  Download,
  Code2
} from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  metric: string;
  metricLabel: string;
  before: string;
  after: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    budget: '$10k-$25k',
    websiteUrl: '',
    primaryGoal: 'full_funnel',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // ROI Calculator state
  const [monthlySpend, setMonthlySpend] = useState<number>(20000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.2);

  const estimatedApexRoas = (currentRoas * 1.85).toFixed(1);
  const currentRevenue = Math.round(monthlySpend * currentRoas);
  const projectedRevenue = Math.round(monthlySpend * Number(estimatedApexRoas));
  const estimatedRevenueLift = projectedRevenue - currentRevenue;

  const services = [
    {
      num: '01',
      title: 'Search Engine Optimization (SEO)',
      tagline: 'High-converting keyword strategy, technical SEO, and authority building.',
      outcome: '+240% avg. organic inbound pipeline',
      details: [
        'High-intent semantic keyword clustering',
        'Technical Core Web Vitals optimization',
        'Digital PR & editorial authority acquisition',
        'Programmatic content engines that convert'
      ],
      icon: Search
    },
    {
      num: '02',
      title: 'Paid Media & Performance Ads',
      tagline: 'Meta, Google Ads, and TikTok campaigns engineered for high ROAS.',
      outcome: '4.2x avg. blended return on ad spend',
      details: [
        'Algorithmic bid pacing & predictive targeting',
        'High-velocity creative testing pipeline (20+ ads/mo)',
        'Server-side Conversions API (CAPI) tracking',
        'Cross-channel attribution modeling'
      ],
      icon: BarChart3
    },
    {
      num: '03',
      title: 'Content & Social Strategy',
      tagline: 'Brand storytelling, organic growth, and viral content execution.',
      outcome: '12M+ monthly qualified impressions',
      details: [
        'Direct-response short-form video production',
        'Executive thought leadership ghostwriting',
        'Omnichannel editorial calendar orchestration',
        'Influencer & affiliate relationship scaling'
      ],
      icon: Layers
    },
    {
      num: '04',
      title: 'Conversion Rate Optimization (CRO)',
      tagline: 'A/B testing and landing page design that turns clicks into customers.',
      outcome: '+38% lift in baseline page conversion',
      details: [
        'Full-funnel session recording & heat mapping',
        'Bespoke high-converting lander development',
        'Checkout friction reduction & 1-click flows',
        'Scientific multivariate experimentation'
      ],
      icon: TrendingUp
    }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'lumina',
      client: 'Lumina Audio',
      industry: 'Direct-to-Consumer Hardware',
      headline: '+312% Organic Traffic in 6 Months',
      metric: '+312%',
      metricLabel: 'Organic Search Revenue',
      before: '$85,000 / mo revenue at 1.8x ROAS',
      after: '$410,000 / mo revenue at 4.8x ROAS',
      description:
        'Lumina was struggling with soaring Meta CPAs and stagnant organic reach. We completely rebuilt their technical SEO structure, deployed semantic product category hubs, and paired it with a high-cadence TikTok UGC ad funnel.',
      tags: ['SEO', 'Paid Social', 'Creative Production'],
      imageSrc: '/src/assets/images/case_study_audio_1791965049529.jpg'
    },
    {
      id: 'veloce',
      client: 'Veloce Cloud',
      industry: 'Enterprise B2B SaaS',
      headline: '+184% Qualified Demos Booked',
      metric: '+184%',
      metricLabel: 'Sales Qualified Pipeline',
      before: '$320 CAC with 14-day booking lag',
      after: '$185 CAC with 3.4x pipeline velocity',
      description:
        'Veloce needed to scale qualified demo requests for their cloud workflow platform. We engineered intent-driven Google Search campaigns targeting high-friction competitor keywords and paired them with custom high-speed landing pages.',
      tags: ['Google Search', 'Landing Page CRO', 'B2B Funnels'],
      imageSrc: '/src/assets/images/case_study_saas_1791965071250.jpg'
    },
    {
      id: 'arcane',
      client: 'Arcane Athletics',
      industry: 'Omnichannel Apparel',
      headline: '+420% Black Friday Revenue Surge',
      metric: '5.1x',
      metricLabel: 'Blended Black Friday ROAS',
      before: '2.1x ROAS on Meta with high churn',
      after: '5.1x blended ROAS across $620k spend',
      description:
        'For Q4 peak season, Arcane needed bulletproof creative pacing and retention. We designed a pre-launch VIP early access waitlist, deployed 45 variations of direct-response video assets, and tuned automated bid caps in real-time.',
      tags: ['Paid Media', 'Retention Funnels', 'Creative Testing'],
      imageSrc: '/src/assets/images/hero_marketing_agency_1791965029057.jpg'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Deep Audit',
      description:
        'We run a comprehensive 40-point technical audit across your ad accounts, tracking infrastructure, organic rankings, and conversion funnels to identify profit leaks.'
    },
    {
      step: '02',
      title: 'Custom Strategy Formulation',
      description:
        'We engineer a bespoke 90-day growth roadmap with exact budget allocations, high-intent keyword targets, and creative briefs designed for positive cashflow.'
    },
    {
      step: '03',
      title: 'Execution & Optimization',
      description:
        'Our dedicated growth squad launches tailored campaigns, conducts rapid A/B testing on ad creative and landing pages, and tunes bid strategies daily.'
    },
    {
      step: '04',
      title: 'Scale & Transparent Reporting',
      description:
        'We aggressively scale winning channels while maintaining unit economics. You receive a live 24/7 client dashboard and weekly executive strategy calls.'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Chief Marketing Officer',
      company: 'Lumina Audio',
      quote:
        'Apex Media restructured our paid media from the ground up. In six months, our monthly revenue scaled from $85k to over $400k while cutting our blended CPA by 34%. They operate with extreme financial discipline.',
      rating: 5,
      impact: 'Scaled revenue by 4.8x'
    },
    {
      name: 'Sarah Lin',
      role: 'VP of Growth',
      company: 'Veloce Cloud',
      quote:
        'The level of data rigor Apex brings is unmatched. They do not just generate vanity clicks; they delivered a 184% lift in sales-qualified pipeline for our enterprise sales reps. Best agency partnership we have ever had.',
      rating: 5,
      impact: '+184% qualified demos'
    },
    {
      name: 'Julian Thorne',
      role: 'Founder & CEO',
      company: 'Arcane Athletics',
      quote:
        'Apex engineered our biggest Q4 yet. We achieved a 5.1x blended ROAS during the most expensive advertising period of the year. They feel like an in-house SWAT team of growth operators.',
      rating: 5,
      impact: '5.1x Peak Season ROAS'
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How fast can we expect measurable results?',
      answer:
        'Paid media campaigns (Google Ads, Meta, TikTok) typically produce measurable traffic and conversion data within the first 7 to 14 days of launch. For SEO and organic authority building, substantial traffic compounding and top-tier ranking improvements generally materialize between months 2 and 4.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer:
        'No. We operate on month-to-month performance retainers after an initial 90-day sprint. We believe client retention should be earned through consistent ROI, not restrictive legal lock-ins. Our 98% client retention rate is a direct result of this philosophy.'
    },
    {
      question: 'What industries and business models do you specialize in?',
      answer:
        'We specialize primarily in high-growth Direct-to-Consumer (DTC) brands, B2B SaaS platforms, and technology-driven professional service companies. Our performance frameworks are engineered specifically for businesses with proven product-market fit looking to scale past $1M to $25M+ in annual revenue.'
    },
    {
      question: 'What minimum ad spend or marketing budget do you work with?',
      answer:
        'To ensure statistical significance during testing and generate predictable returns, our minimum recommended paid media spend is $5,000/month. However, for specialized SEO or conversion rate optimization sprints, we evaluate accounts individually during the initial audit.'
    }
  ];

  // Handle Form Validation & Submission
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!formData.workEmail.trim()) {
      errors.workEmail = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errors.workEmail = 'Please provide a valid email address.';
    }
    if (!formData.websiteUrl.trim()) {
      errors.websiteUrl = 'Please enter your website URL or project details.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      budget: '$10k-$25k',
      websiteUrl: '',
      primaryGoal: 'full_funnel',
    });
    setFormErrors({});
    setFormSubmitted(false);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Standalone Single-File HTML string for download or copy
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apex Media | Scale Ambitious Brands Through Data-Driven Marketing</title>
  <meta name="description" content="Apex Media is a premier digital marketing agency scaling ambitious brands through SEO, Paid Media, Content Strategy, and CRO.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; background-color: #0B0F19; color: #F8FAFC; }
    body { line-height: 1.6; overflow-x: hidden; }
    a { color: inherit; text-decoration: none; }
    button, input, select, textarea { font-family: inherit; }
    .container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 1.5rem; }
    .btn-primary { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #6366F1, #4F46E5); color: #FFFFFF; font-weight: 600; font-size: 0.875rem; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.35); text-wrap: nowrap; }
    .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 20px 0 rgba(99, 102, 241, 0.45); filter: brightness(1.08); }
    .btn-secondary { display: inline-flex; align-items: center; justify-content: center; background: rgba(30, 41, 59, 0.7); color: #F8FAFC; font-weight: 600; font-size: 0.875rem; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 1px solid #334155; cursor: pointer; transition: all 0.2s ease; text-wrap: nowrap; }
    .btn-secondary:hover { background: #1E293B; border-color: #475569; }
    
    /* Header */
    .site-header { position: sticky; top: 0; z-index: 50; background: rgba(11, 15, 25, 0.88); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(51, 65, 85, 0.4); }
    .nav-wrapper { display: flex; align-items: center; justify-content: space-between; height: 4.5rem; gap: 2rem; }
    .brand-wordmark { display: flex; align-items: center; gap: 0.65rem; font-weight: 800; font-size: 1.25rem; letter-spacing: -0.02em; color: #FFFFFF; white-space: nowrap; }
    .brand-icon { width: 1.75rem; height: 1.75rem; background: #6366F1; border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; color: white; }
    .desktop-nav { display: none; align-items: center; gap: 1.75rem; }
    @media (min-width: 860px) { .desktop-nav { display: flex; } }
    .nav-link { font-size: 0.9rem; font-weight: 500; color: #94A3B8; transition: color 0.15s ease; white-space: nowrap; }
    .nav-link:hover { color: #FFFFFF; }
    .mobile-menu-btn { display: flex; align-items: center; justify-content: center; background: transparent; border: 1px solid #334155; border-radius: 0.375rem; padding: 0.5rem; color: #F8FAFC; cursor: pointer; }
    @media (min-width: 860px) { .mobile-menu-btn { display: none; } }
    
    /* Hero */
    .hero-section { padding: 5rem 0 4rem; position: relative; }
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
    @media (min-width: 960px) { .hero-grid { grid-template-columns: 1.15fr 0.85fr; } }
    .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: #818CF8; margin-bottom: 1.25rem; }
    .hero-title { font-size: 2.5rem; font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; color: #FFFFFF; margin-bottom: 1.25rem; text-wrap: balance; }
    @media (min-width: 768px) { .hero-title { font-size: 3.5rem; } }
    .hero-desc { font-size: 1.125rem; color: #94A3B8; margin-bottom: 2rem; max-width: 36rem; }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem; }
    .hero-img-wrap { border-radius: 0.75rem; overflow: hidden; border: 1px solid #334155; position: relative; box-shadow: 0 20px 40px -15px rgba(0,0,0,0.7); }
    .hero-img-wrap img { width: 100%; height: auto; display: block; object-fit: cover; aspect-ratio: 16/9; }
    
    /* Stats Bar */
    .stats-strip { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; padding: 2rem 0; border-top: 1px solid rgba(51, 65, 85, 0.5); border-bottom: 1px solid rgba(51, 65, 85, 0.5); margin-top: 2rem; }
    @media (min-width: 768px) { .stats-strip { grid-template-columns: repeat(4, 1fr); } }
    .stat-number { font-family: 'JetBrains Mono', monospace; font-size: 2rem; font-weight: 700; color: #FFFFFF; font-variant-numeric: tabular-nums; }
    .stat-label { font-size: 0.8125rem; color: #94A3B8; margin-top: 0.25rem; }
    
    /* Section Headings */
    .section-wrap { padding: 6rem 0; }
    .section-header { margin-bottom: 3.5rem; }
    .section-kicker { font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #818CF8; margin-bottom: 0.75rem; }
    .section-title { font-size: 2.25rem; font-weight: 800; letter-spacing: -0.02em; color: #FFFFFF; margin-bottom: 1rem; }
    .section-subtitle { font-size: 1.05rem; color: #94A3B8; max-width: 40rem; }
    
    /* Cards */
    .card-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    @media (min-width: 640px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
    .agency-card { background: #111827; border: 1px solid #1E293B; border-radius: 0.75rem; padding: 2rem; transition: transform 0.2s ease, border-color 0.2s ease; position: relative; }
    .agency-card:hover { transform: translateY(-3px); border-color: #4F46E5; }
    .card-num { font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; font-weight: 600; color: #818CF8; margin-bottom: 1rem; }
    .card-title { font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.75rem; }
    .card-desc { font-size: 0.9375rem; color: #94A3B8; margin-bottom: 1.5rem; }
    .card-outcome { font-size: 0.875rem; font-weight: 600; color: #6366F1; display: flex; align-items: center; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid #1E293B; }
    
    /* Results / Case Studies */
    .case-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
    @media (min-width: 900px) { .case-grid { grid-template-columns: repeat(3, 1fr); } }
    .case-card { background: #111827; border: 1px solid #1E293B; border-radius: 0.75rem; overflow: hidden; display: flex; flex-direction: column; }
    .case-card-body { padding: 1.75rem; flex-grow: 1; display: flex; flex-direction: column; }
    .case-metric { font-family: 'JetBrains Mono', monospace; font-size: 2.25rem; font-weight: 700; color: #6366F1; line-height: 1; margin: 0.75rem 0 0.25rem; }
    .case-metric-label { font-size: 0.8125rem; font-weight: 600; color: #CBD5E1; margin-bottom: 1rem; }
    .case-meta { font-size: 0.8125rem; color: #94A3B8; margin-bottom: 0.5rem; }
    .case-diff { background: rgba(30, 41, 59, 0.6); border-radius: 0.5rem; padding: 0.75rem 1rem; font-size: 0.8125rem; margin-top: auto; border: 1px solid #1E293B; }
    .case-diff span { display: block; }
    .case-diff-before { color: #94A3B8; }
    .case-diff-after { color: #34D399; font-weight: 600; margin-top: 0.25rem; }

    /* Timeline / Process */
    .process-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    @media (min-width: 768px) { .process-grid { grid-template-columns: repeat(4, 1fr); } }
    .process-card { background: #111827; border: 1px solid #1E293B; border-radius: 0.75rem; padding: 1.75rem; position: relative; }
    .process-step { font-family: 'JetBrains Mono', monospace; font-size: 1.5rem; font-weight: 700; color: #6366F1; margin-bottom: 0.75rem; }
    .process-title { font-size: 1.125rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem; }
    .process-desc { font-size: 0.875rem; color: #94A3B8; }

    /* Testimonials */
    .test-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    @media (min-width: 768px) { .test-grid { grid-template-columns: repeat(3, 1fr); } }
    .test-card { background: #111827; border: 1px solid #1E293B; border-radius: 0.75rem; padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; }
    .test-stars { color: #F59E0B; margin-bottom: 1rem; font-size: 0.875rem; letter-spacing: 2px; }
    .test-quote { font-size: 0.9375rem; color: #E2E8F0; font-style: italic; margin-bottom: 1.5rem; }
    .test-author { display: flex; flex-direction: column; }
    .test-name { font-weight: 700; color: #FFFFFF; font-size: 0.9375rem; }
    .test-role { font-size: 0.8125rem; color: #94A3B8; }

    /* FAQ Accordion */
    .faq-list { max-width: 48rem; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
    .faq-item { background: #111827; border: 1px solid #1E293B; border-radius: 0.5rem; overflow: hidden; transition: border-color 0.2s; }
    .faq-item.active { border-color: #6366F1; }
    .faq-question { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; background: none; border: none; color: #FFFFFF; font-weight: 600; font-size: 1.05rem; text-align: left; cursor: pointer; }
    .faq-icon { font-size: 1.25rem; color: #818CF8; transition: transform 0.2s ease; }
    .faq-answer { padding: 0 1.5rem 1.25rem; color: #94A3B8; font-size: 0.9375rem; display: none; line-height: 1.6; }
    .faq-item.active .faq-answer { display: block; }
    .faq-item.active .faq-icon { transform: rotate(180deg); }

    /* Contact Form Section */
    .form-wrap { background: #111827; border: 1px solid #1E293B; border-radius: 1rem; padding: 2.5rem 1.75rem; max-width: 42rem; margin: 0 auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
    @media (min-width: 640px) { .form-wrap { padding: 3rem; } }
    .form-group { margin-bottom: 1.25rem; }
    .form-label { display: block; font-size: 0.875rem; font-weight: 600; color: #CBD5E1; margin-bottom: 0.5rem; }
    .form-input, .form-select, .form-textarea { width: 100%; background: #0B0F19; border: 1px solid #334155; border-radius: 0.5rem; padding: 0.75rem 1rem; color: #F8FAFC; font-size: 0.9375rem; outline: none; transition: border-color 0.15s ease; }
    .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: #6366F1; box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2); }
    .form-grid-2 { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
    @media (min-width: 640px) { .form-grid-2 { grid-template-columns: 1fr 1fr; } }
    .success-panel { text-align: center; padding: 2rem 1rem; }
    .success-icon { width: 3.5rem; height: 3.5rem; background: rgba(52, 211, 153, 0.15); color: #34D399; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 1.75rem; margin-bottom: 1rem; }

    /* Footer */
    .site-footer { border-top: 1px solid #1E293B; padding: 4rem 0 2rem; background: #070A11; }
    .footer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-bottom: 3rem; }
    @media (min-width: 768px) { .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; } }
    .footer-bottom { display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 1rem; border-top: 1px solid #1E293B; padding-top: 2rem; font-size: 0.8125rem; color: #64748B; }
    @media (min-width: 640px) { .footer-bottom { flex-direction: row; } }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container nav-wrapper">
      <a href="#" class="brand-wordmark">
        <span class="brand-icon">▲</span>
        Apex Media
      </a>
      <nav class="desktop-nav">
        <a href="#services" class="nav-link">Services</a>
        <a href="#results" class="nav-link">Results</a>
        <a href="#process" class="nav-link">Process</a>
        <a href="#testimonials" class="nav-link">Testimonials</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </nav>
      <div style="display:flex;align-items:center;gap:1rem;">
        <a href="#contact" class="btn-primary">Get Free Audit</a>
        <button id="mobileToggle" class="mobile-menu-btn" aria-label="Toggle navigation">☰</button>
      </div>
    </div>
  </header>

  <main>
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div class="hero-badge">✦ Performance Growth Partner</div>
            <h1 class="hero-title">We Scale Ambitious Brands Through Data-Driven Marketing</h1>
            <p class="hero-desc">SEO, Performance Ads, and Content Strategies built to deliver predictable revenue and maximum ROI.</p>
            <div class="hero-actions">
              <a href="#contact" class="btn-primary">Book a Strategy Call</a>
              <a href="#results" class="btn-secondary">View Case Studies</a>
            </div>
          </div>
          <div class="hero-img-wrap">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" alt="Apex Media Agency Studio">
          </div>
        </div>

        <div class="stats-strip">
          <div>
            <div class="stat-number">$50M+</div>
            <div class="stat-label">Revenue Generated</div>
          </div>
          <div>
            <div class="stat-number">98%</div>
            <div class="stat-label">Client Retention</div>
          </div>
          <div>
            <div class="stat-number">4.2x</div>
            <div class="stat-label">Avg. Blended ROAS</div>
          </div>
          <div>
            <div class="stat-number">$120M+</div>
            <div class="stat-label">Managed Ad Spend</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section-wrap" style="background:#0E1321;">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Core Capabilities</div>
          <h2 class="section-title">Engineered For Measurable Growth</h2>
          <p class="section-subtitle">No bloated scopes or vague vanity metrics. We deploy high-converting strategies mapped directly to bottom-line profitability.</p>
        </div>

        <div class="card-grid">
          <div class="agency-card">
            <div class="card-num">01. CAPABILITY</div>
            <h3 class="card-title">Search Engine Optimization (SEO)</h3>
            <p class="card-desc">High-converting keyword strategy, technical SEO, and authority building designed to capture high-intent buyers.</p>
            <div class="card-outcome">✓ +240% avg. organic inbound pipeline</div>
          </div>
          <div class="agency-card">
            <div class="card-num">02. CAPABILITY</div>
            <h3 class="card-title">Paid Media & Performance Ads</h3>
            <p class="card-desc">Meta, Google Ads, and TikTok campaigns engineered for high ROAS with algorithmic bid pacing and rapid creative testing.</p>
            <div class="card-outcome">✓ 4.2x avg. blended return on ad spend</div>
          </div>
          <div class="agency-card">
            <div class="card-num">03. CAPABILITY</div>
            <h3 class="card-title">Content & Social Strategy</h3>
            <p class="card-desc">Brand storytelling, organic growth, and viral content execution that builds undeniable community authority.</p>
            <div class="card-outcome">✓ 12M+ monthly engaged impressions</div>
          </div>
          <div class="agency-card">
            <div class="card-num">04. CAPABILITY</div>
            <h3 class="card-title">Conversion Rate Optimization (CRO)</h3>
            <p class="card-desc">A/B testing and landing page design that turns clicks into customers through deep session analysis and UX testing.</p>
            <div class="card-outcome">✓ +38% lift in baseline conversion rates</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results / Case Studies -->
    <section id="results" class="section-wrap">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Proven Track Record</div>
          <h2 class="section-title">Quantified Client Success Stories</h2>
          <p class="section-subtitle">Real performance numbers from leading brands scaling revenue with Apex Media.</p>
        </div>

        <div class="case-grid">
          <div class="case-card">
            <div class="case-card-body">
              <div class="case-meta">Lumina Audio · Direct-to-Consumer Hardware</div>
              <div class="case-metric">+312%</div>
              <div class="case-metric-label">Organic Search Traffic in 6 Months</div>
              <p style="font-size:0.875rem;color:#94A3B8;margin-bottom:1.5rem;">Restructured technical site architecture and launched semantic product hubs paired with direct-response social campaigns.</p>
              <div class="case-diff">
                <span class="case-diff-before">Before: $85,000 / mo at 1.8x ROAS</span>
                <span class="case-diff-after">After: $410,000 / mo at 4.8x ROAS</span>
              </div>
            </div>
          </div>

          <div class="case-card">
            <div class="case-card-body">
              <div class="case-meta">Veloce Cloud · Enterprise B2B SaaS</div>
              <div class="case-metric">+184%</div>
              <div class="case-metric-label">Qualified Demo Bookings</div>
              <p style="font-size:0.875rem;color:#94A3B8;margin-bottom:1.5rem;">Engineered high-intent search acquisition funnels and custom lightning-fast landing pages with multi-step qualification.</p>
              <div class="case-diff">
                <span class="case-diff-before">Before: $320 CAC with 14-day booking lag</span>
                <span class="case-diff-after">After: $185 CAC with 3.4x pipeline velocity</span>
              </div>
            </div>
          </div>

          <div class="case-card">
            <div class="case-card-body">
              <div class="case-meta">Arcane Athletics · Omnichannel Activewear</div>
              <div class="case-metric">5.1x</div>
              <div class="case-metric-label">Blended Peak Season ROAS</div>
              <p style="font-size:0.875rem;color:#94A3B8;margin-bottom:1.5rem;">Executed aggressive holiday creative pacing, VIP waitlist mechanics, and real-time algorithmic bid management across Meta and TikTok.</p>
              <div class="case-diff">
                <span class="case-diff-before">Before: 2.1x ROAS with high ad churn</span>
                <span class="case-diff-after">After: 5.1x blended ROAS across $620k spend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="process" class="section-wrap" style="background:#0E1321;">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">How We Work</div>
          <h2 class="section-title">A Predictable 4-Stage Growth System</h2>
          <p class="section-subtitle">From audit to aggressive scaling, our process eliminates guesswork and safeguards capital.</p>
        </div>

        <div class="process-grid">
          <div class="process-card">
            <div class="process-step">01</div>
            <h3 class="process-title">Discovery & Audit</h3>
            <p class="process-desc">Comprehensive 40-point diagnostic of ad accounts, tracking architecture, and user drop-off points.</p>
          </div>
          <div class="process-card">
            <div class="process-step">02</div>
            <h3 class="process-title">Custom Strategy</h3>
            <p class="process-desc">Bespoke 90-day growth roadmap with exact channel allocations and creative production schedules.</p>
          </div>
          <div class="process-card">
            <div class="process-step">03</div>
            <h3 class="process-title">Execution & Testing</h3>
            <p class="process-desc">Deployment of ad creative, conversion funnels, and real-time algorithmic bid management.</p>
          </div>
          <div class="process-card">
            <div class="process-step">04</div>
            <h3 class="process-title">Scale & Report</h3>
            <p class="process-desc">Compounding top-performing ad sets, continuous CRO, and weekly executive strategy briefings.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="section-wrap">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Client Feedback</div>
          <h2 class="section-title">Trusted By Visionary Founders & CMOs</h2>
        </div>

        <div class="test-grid">
          <div class="test-card">
            <div class="test-stars">★★★★★</div>
            <p class="test-quote">"Apex Media restructured our paid media from the ground up. In six months, our monthly revenue scaled from $85k to over $400k while cutting CPA by 34%."</p>
            <div class="test-author">
              <span class="test-name">Marcus Vance</span>
              <span class="test-role">Chief Marketing Officer, Lumina Audio</span>
            </div>
          </div>
          <div class="test-card">
            <div class="test-stars">★★★★★</div>
            <p class="test-quote">"The level of data rigor Apex brings is unmatched. They do not just generate vanity clicks; they delivered a 184% lift in sales-qualified pipeline for our sales team."</p>
            <div class="test-author">
              <span class="test-name">Sarah Lin</span>
              <span class="test-role">VP of Growth, Veloce Cloud</span>
            </div>
          </div>
          <div class="test-card">
            <div class="test-stars">★★★★★</div>
            <p class="test-quote">"Apex engineered our biggest Q4 yet. We achieved a 5.1x blended ROAS during the most expensive advertising period of the year. They operate as true equity partners."</p>
            <div class="test-author">
              <span class="test-name">Julian Thorne</span>
              <span class="test-role">Founder & CEO, Arcane Athletics</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section-wrap" style="background:#0E1321;">
      <div class="container">
        <div class="section-header" style="text-align:center;">
          <div class="section-kicker">Got Questions?</div>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle" style="margin: 0 auto;">Everything you need to know about partnering with Apex Media.</p>
        </div>

        <div class="faq-list">
          <div class="faq-item active">
            <button class="faq-question">
              <span>How fast can we expect results?</span>
              <span class="faq-icon">▾</span>
            </button>
            <div class="faq-answer">
              Paid media campaigns (Google Ads, Meta, TikTok) typically produce measurable traffic and conversion data within the first 7 to 14 days of launch. For SEO and organic authority building, substantial traffic compounding and top-tier ranking improvements generally materialize between months 2 and 4.
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Do you require long-term contracts?</span>
              <span class="faq-icon">▾</span>
            </button>
            <div class="faq-answer">
              No. We operate on month-to-month performance retainers after an initial 90-day sprint. We believe client retention should be earned through consistent ROI, not restrictive legal lock-ins. Our 98% client retention rate is a direct result of this philosophy.
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>What industries do you specialize in?</span>
              <span class="faq-icon">▾</span>
            </button>
            <div class="faq-answer">
              We specialize primarily in high-growth Direct-to-Consumer (DTC) brands, B2B SaaS platforms, and technology-driven professional service companies. Our performance frameworks are engineered specifically for businesses looking to scale past $1M to $25M+ in annual revenue.
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>What minimum ad spend or budget do you work with?</span>
              <span class="faq-icon">▾</span>
            </button>
            <div class="faq-answer">
              To ensure statistical significance during testing and generate predictable returns, our minimum recommended paid media spend is $5,000/month. However, for specialized SEO or conversion rate optimization sprints, we evaluate accounts individually during the initial audit.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="section-wrap">
      <div class="container">
        <div class="section-header" style="text-align:center;">
          <div class="section-kicker">Ready To Grow?</div>
          <h2 class="section-title">Get Your Free Growth Audit</h2>
          <p class="section-subtitle" style="margin: 0 auto;">Tell us about your brand. We will analyze your funnel, uncover friction points, and deliver a custom blueprint.</p>
        </div>

        <div class="form-wrap">
          <form id="auditForm">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label" for="fullName">Full Name</label>
                <input class="form-input" type="text" id="fullName" name="fullName" placeholder="Alex Morgan" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="workEmail">Work Email</label>
                <input class="form-input" type="email" id="workEmail" name="workEmail" placeholder="alex@company.com" required>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label" for="budget">Monthly Marketing Budget</label>
                <select class="form-select" id="budget" name="budget">
                  <option value="<$5k">&lt;$5,000 / month</option>
                  <option value="$5k-$10k">$5,000 - $10,000 / month</option>
                  <option value="$10k-$25k" selected>$10,000 - $25,000 / month</option>
                  <option value="$25k+">$25,000+ / month</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="websiteUrl">Website URL</label>
                <input class="form-input" type="text" id="websiteUrl" name="websiteUrl" placeholder="https://yourbrand.com" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">Current Bottlenecks & Targets (Optional)</label>
              <textarea class="form-textarea" id="message" name="message" rows="3" placeholder="Tell us about your customer acquisition challenges or primary 2026 growth goals..."></textarea>
            </div>

            <button type="submit" class="btn-primary" style="width:100%;padding:1rem;font-size:1rem;margin-top:0.5rem;">
              Get My Custom Growth Plan
            </button>
          </form>

          <div id="formSuccess" class="success-panel" style="display:none;">
            <div class="success-icon">✓</div>
            <h3 style="font-size:1.5rem;font-weight:700;color:#FFFFFF;margin-bottom:0.5rem;">Audit Request Received</h3>
            <p style="color:#94A3B8;font-size:0.9375rem;max-width:28rem;margin:0 auto 1.5rem;">
              Our senior strategist has received your inquiry. We are conducting your initial funnel analysis and will email your custom growth blueprint within 24 hours.
            </p>
            <button id="resetFormBtn" class="btn-secondary" style="font-size:0.8125rem;">Submit Another Request</button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand-wordmark" style="margin-bottom:1rem;">
            <span class="brand-icon">▲</span>
            Apex Media
          </div>
          <p style="color:#94A3B8;font-size:0.875rem;max-width:22rem;">
            We partner with high-growth DTC brands and enterprise scale-ups to engineer high-velocity acquisition engines and predictable revenue.
          </p>
        </div>
        <div>
          <div style="font-weight:700;color:#FFFFFF;font-size:0.875rem;margin-bottom:1rem;">Navigation</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem;font-size:0.875rem;color:#94A3B8;">
            <li><a href="#services" class="nav-link">Services</a></li>
            <li><a href="#results" class="nav-link">Case Studies</a></li>
            <li><a href="#process" class="nav-link">Our Process</a></li>
            <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
            <li><a href="#faq" class="nav-link">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div style="font-weight:700;color:#FFFFFF;font-size:0.875rem;margin-bottom:1rem;">Connect</div>
          <p style="font-size:0.875rem;color:#94A3B8;margin-bottom:1rem;">growth@apexmedia.agency</p>
          <div style="display:flex;gap:1rem;font-size:0.875rem;color:#818CF8;">
            <a href="#">LinkedIn</a> · <a href="#">Twitter / X</a> · <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 Apex Media Agency LLC. All rights reserved.</div>
        <div style="display:flex;gap:1.5rem;">
          <a href="#" style="color:#64748B;">Privacy Policy</a>
          <a href="#" style="color:#64748B;">Terms of Service</a>
          <a href="#" style="color:#64748B;">Security</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Accordion Logic
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });

    // Form Submission
    const auditForm = document.getElementById('auditForm');
    const formSuccess = document.getElementById('formSuccess');
    const resetFormBtn = document.getElementById('resetFormBtn');

    if (auditForm) {
      auditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = auditForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Generating Plan...';
        submitBtn.disabled = true;

        setTimeout(() => {
          auditForm.style.display = 'none';
          formSuccess.style.display = 'block';
        }, 800);
      });
    }

    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        auditForm.reset();
        const submitBtn = auditForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Get My Custom Growth Plan';
        submitBtn.disabled = false;
        formSuccess.style.display = 'none';
        auditForm.style.display = 'block';
      });
    }
  </script>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const downloadHtmlFile = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'apex-media.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-[#6366F1] selection:text-white flex flex-col">
      {/* Top Banner with Standalone HTML Code Action */}
      <div className="bg-[#111827] border-b border-slate-800 text-xs py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Apex Media Production Engine</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="hidden sm:inline text-slate-500">Self-contained HTML export available</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCodeModal(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors text-xs font-medium cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>Single-File HTML Code</span>
          </button>
          <button
            onClick={downloadHtmlFile}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#6366F1]/10 text-[#818CF8] hover:bg-[#6366F1]/20 rounded transition-colors text-xs font-medium cursor-pointer border border-[#6366F1]/30"
          >
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline">Download</span> .html
          </button>
        </div>
      </div>

      {/* Primary Header conforming to Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single text element wordmark in display face) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <span className="font-mono text-sm font-bold tracking-tighter">▲</span>
            </div>
            <span>Apex Media</span>
          </a>

          {/* Zone 2: 4-5 single-line clean navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => scrollToSection('audit')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#5b5ef0] hover:to-[#4338ca] rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              Get Free Audit
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0E1422] px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                Results & Case Studies
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                Our 4-Stage Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                Client Testimonials
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                FAQ
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('audit')}
                className="w-full py-3 px-4 text-center font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4F46E5] rounded-lg shadow-md"
              >
                Get Free Growth Audit
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
          {/* Subtle ambient glow behind hero */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6366F1]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Value Proposition & CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-4">
                  <Sparkles className="w-4 h-4 text-[#818CF8]" />
                  <span>Growth Architecture for Ambitious Brands</span>
                </div>

                <h1
                  className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
                  style={{ textWrap: 'balance' }}
                >
                  We Scale Ambitious Brands Through Data-Driven Marketing
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                  SEO, Performance Ads, and Content Strategies built to deliver predictable revenue and maximum ROI.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                  <button
                    onClick={() => scrollToSection('audit')}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#5b5ef0] hover:to-[#4338ca] rounded-lg shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>Book a Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('results')}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-200 bg-[#1E293B]/80 hover:bg-[#1E293B] border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all cursor-pointer"
                  >
                    View Case Studies
                  </button>
                </div>

                {/* Sub-CTA Trust markers */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> No long-term lock-ins
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-indigo-400" /> 24-Hour audit turnaround
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-400" /> Global multi-channel execution
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#111827] shadow-2xl shadow-black/80 group">
                  <img
                    src="/src/assets/images/hero_marketing_agency_1791965029057.jpg"
                    alt="Apex Media strategy studio"
                    className="w-full h-auto aspect-[16/10] object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Performance Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#111827]/90 backdrop-blur-md border border-slate-700/60 rounded-lg p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-medium text-slate-400">Q3-Q4 Blended Performance</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span>+$14.2M Attributed Pipeline</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono font-semibold text-[#818CF8] bg-[#6366F1]/10 px-2 py-0.5 rounded border border-[#6366F1]/20">
                        Top 1% Agency
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DYNAMIC METRIC BAR (Quantitative rigor, tabular numbers) */}
            <div className="mt-16 pt-10 pb-8 border-t border-b border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  $50M+
                </div>
                <div className="text-sm font-semibold text-slate-300 mt-1">Revenue Generated</div>
                <div className="text-xs text-slate-400 mt-0.5">Across 140+ active brand campaigns</div>
              </div>

              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  98%
                </div>
                <div className="text-sm font-semibold text-slate-300 mt-1">Client Retention</div>
                <div className="text-xs text-slate-400 mt-0.5">Industry average: 64% retention</div>
              </div>

              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  4.2x
                </div>
                <div className="text-sm font-semibold text-slate-300 mt-1">Avg. Blended ROAS</div>
                <div className="text-xs text-slate-400 mt-0.5">Verified across Meta, Google & TikTok</div>
              </div>

              <div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  $120M+
                </div>
                <div className="text-sm font-semibold text-slate-300 mt-1">Managed Ad Spend</div>
                <div className="text-xs text-slate-400 mt-0.5">Zero budget waste or click fraud</div>
              </div>
            </div>

            {/* Client Brand Logos */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6 opacity-60 hover:opacity-90 transition-opacity">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                Trusted by high-growth scaleups:
              </span>
              <div className="flex flex-wrap items-center gap-8 text-sm font-bold tracking-tight text-slate-400">
                <span className="hover:text-white transition-colors">LUMINA AUDIO</span>
                <span className="hover:text-white transition-colors">VELOCE CLOUD</span>
                <span className="hover:text-white transition-colors">ARCANE ATHLETICS</span>
                <span className="hover:text-white transition-colors">HYPERIA LABS</span>
                <span className="hover:text-white transition-colors">NEXA HEALTH</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-3">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Services Engineered for Predictable Revenue
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We reject generic marketing fluff. Every campaign, keyword, and ad variation is strictly designed to maximize Customer Lifetime Value (LTV) while driving down Customer Acquisition Cost (CAC).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.num}
                    className="bg-[#111827] border border-slate-800 rounded-xl p-8 hover:border-[#6366F1]/60 transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-sm font-semibold text-[#818CF8]">
                          {service.num}. CAPABILITY
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-[#1E293B] border border-slate-700 flex items-center justify-center text-[#818CF8] group-hover:bg-[#6366F1]/10 group-hover:border-[#6366F1]/30 transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {service.tagline}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                            <span className="text-[#6366F1] font-bold mt-0.5">·</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-400">Target Benchmark:</span>
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {service.outcome}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI / REVENUE LIFT ESTIMATOR */}
        <section className="py-16 bg-[#0B0F19] border-t border-b border-slate-800/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-2">
                    Interactive Revenue Estimator
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Estimate Your Growth Opportunity
                  </h3>
                  <p className="text-sm text-slate-300 mb-6">
                    Adjust your monthly paid media spend to preview the estimated revenue impact with Apex Media&apos;s full-funnel optimization model.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                        <span>Monthly Ad Spend</span>
                        <span className="font-mono text-sm text-[#818CF8]">
                          ${monthlySpend.toLocaleString()} / mo
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="100000"
                        step="5000"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full accent-[#6366F1] h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                        <span>Current Baseline ROAS</span>
                        <span className="font-mono text-sm text-slate-200">{currentRoas}x</span>
                      </div>
                      <input
                        type="range"
                        min="1.0"
                        max="4.0"
                        step="0.1"
                        value={currentRoas}
                        onChange={(e) => setCurrentRoas(Number(e.target.value))}
                        className="w-full accent-[#6366F1] h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0B0F19] border border-slate-800 rounded-xl p-6 text-center">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Projected Monthly Lift
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums mb-2">
                    +${estimatedRevenueLift.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mb-4">
                    Based on typical 1.85x ROAS acceleration across search and paid channels.
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 flex justify-between text-xs text-slate-300">
                    <div>
                      <span className="block text-slate-500">Target ROAS</span>
                      <span className="font-mono font-bold text-white">{estimatedApexRoas}x</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">Projected Run Rate</span>
                      <span className="font-mono font-bold text-white">
                        ${(projectedRevenue * 12).toLocaleString()} / yr
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToSection('audit')}
                    className="w-full mt-5 py-2.5 px-4 text-xs font-bold text-white bg-[#6366F1] hover:bg-[#5254e0] rounded-lg transition-colors cursor-pointer"
                  >
                    Lock In This Growth Model
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS & CASE STUDIES SECTION */}
        <section id="results" className="py-20 lg:py-28 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-3">
                Proven Client Outcomes
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Real Numbers. Zero Vanity Metrics.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Take a look at how we helped high-growth brands unlock explosive customer acquisition while increasing enterprise valuation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-800">
                    <img
                      src={study.imageSrc}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0F19]/80 backdrop-blur-sm border border-slate-700/60 px-2.5 py-1 rounded text-xs font-medium text-slate-300">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#818CF8] mb-1">
                        {study.client}
                      </div>

                      <div className="font-mono text-3xl font-extrabold text-white tracking-tight tabular-nums mb-1">
                        {study.metric}
                      </div>
                      <div className="text-xs font-medium text-slate-400 mb-4">
                        {study.metricLabel}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3">
                        {study.headline}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        {study.description}
                      </p>
                    </div>

                    <div>
                      {/* Before / After comparison card */}
                      <div className="bg-[#0B0F19] border border-slate-800/80 rounded-lg p-3 text-xs mb-4">
                        <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800/60">
                          <span>Before Apex:</span>
                          <span className="font-mono text-slate-400">{study.before}</span>
                        </div>
                        <div className="flex items-center justify-between text-emerald-400 pt-1.5 font-semibold">
                          <span>After 90 Days:</span>
                          <span className="font-mono text-emerald-400">{study.after}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {study.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS (4-STAGE TIMELINE WORKFLOW) */}
        <section id="process" className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-3">
                How It Works
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Our 4-Stage Growth Framework
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                A systematic, repeatable methodology designed to reduce risk, uncover hidden revenue levers, and compound performance month-over-month.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#111827] border border-slate-800 rounded-xl p-6 relative flex flex-col justify-between hover:border-[#6366F1]/50 transition-colors"
                >
                  <div>
                    <div className="font-mono text-2xl font-black text-[#6366F1] mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <span>Phase {step.step} Deliverable</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#818CF8]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & SOCIAL PROOF */}
        <section id="testimonials" className="py-20 lg:py-28 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-3">
                Client Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                What Growth Leaders Say About Apex Media
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We measure our success exclusively by the commercial outcomes achieved for our client partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, index) => (
                <div
                  key={index}
                  className="bg-[#111827] border border-slate-800 rounded-xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400 mb-6">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">{test.name}</div>
                      <div className="text-xs text-slate-400">
                        {test.role}, <span className="text-slate-300">{test.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {test.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section id="faq" className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-3">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Everything You Need to Know
              </h2>
              <p className="text-base text-slate-300">
                Transparent answers to common questions about our engagements, timelines, and guarantees.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-xl transition-colors overflow-hidden ${
                      isOpen
                        ? 'bg-[#111827] border-[#6366F1]/50 shadow-lg shadow-indigo-950/20'
                        : 'bg-[#111827]/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-base sm:text-lg font-bold text-white transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <div className="ml-4 shrink-0 p-1 rounded bg-slate-800 text-[#818CF8]">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LEAD GENERATION & CONTACT SECTION */}
        <section id="audit" className="py-20 lg:py-28 bg-[#0B0F19] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] mb-3">
                Ready to Scale?
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Get Your Free 40-Point Growth Audit
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Our principal strategists will analyze your ad accounts, search rankings, and conversion funnels to deliver an actionable growth roadmap.
              </p>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/80">
              {formSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Growth Audit Request Received!
                  </h3>
                  <p className="text-slate-300 max-w-md mb-6 text-sm sm:text-base leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our lead strategist is conducting an initial teardown of <span className="text-[#818CF8]">{formData.websiteUrl}</span>. We will deliver your custom growth blueprint to <span className="text-white font-semibold">{formData.workEmail}</span> within 24 hours.
                  </p>
                  <div className="bg-[#0B0F19] border border-slate-800 rounded-lg p-4 text-xs text-slate-400 mb-8 max-w-sm w-full text-left">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Assigned Specialist:</span>
                      <span className="text-white font-medium">Senior Growth Lead</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span>Monthly Budget:</span>
                      <span className="text-white font-mono">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Expected Delivery:</span>
                      <span className="text-emerald-400 font-medium">Tomorrow by 5:00 PM</span>
                    </div>
                  </div>
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Audit Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-2">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-3 bg-[#0B0F19] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          formErrors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-[#6366F1]'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-rose-400 mt-1.5">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-300 mb-2">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 bg-[#0B0F19] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          formErrors.workEmail ? 'border-rose-500' : 'border-slate-800 focus:border-[#6366F1]'
                        }`}
                      />
                      {formErrors.workEmail && (
                        <p className="text-xs text-rose-400 mt-1.5">{formErrors.workEmail}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Monthly Budget Dropdown */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-slate-300 mb-2">
                        Monthly Marketing Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0B0F19] border border-slate-800 focus:border-[#6366F1] rounded-lg text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="<$5k">&lt;$5,000 / month</option>
                        <option value="$5k-$10k">$5,000 - $10,000 / month</option>
                        <option value="$10k-$25k">$10,000 - $25,000 / month</option>
                        <option value="$25k+">$25,000+ / month</option>
                      </select>
                    </div>

                    {/* Website URL */}
                    <div>
                      <label htmlFor="websiteUrl" className="block text-xs font-semibold text-slate-300 mb-2">
                        Website URL / Brand Domain <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className={`w-full px-4 py-3 bg-[#0B0F19] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          formErrors.websiteUrl ? 'border-rose-500' : 'border-slate-800 focus:border-[#6366F1]'
                        }`}
                      />
                      {formErrors.websiteUrl && (
                        <p className="text-xs text-rose-400 mt-1.5">{formErrors.websiteUrl}</p>
                      )}
                    </div>
                  </div>

                  {/* Message / Primary Goals */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                      Growth Challenges & Current Bottlenecks (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="e.g. High Meta CPA, stagnating organic traffic, or looking to scale for upcoming product drop..."
                      className="w-full px-4 py-3 bg-[#0B0F19] border border-slate-800 focus:border-[#6366F1] rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#5b5ef0] hover:to-[#4338ca] rounded-lg shadow-xl shadow-indigo-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {formSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Analyzing Funnel Parameters...</span>
                      </>
                    ) : (
                      <>
                        <span>Get My Custom Growth Plan</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Strict confidentiality guaranteed. We never sell or share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#070A11] border-t border-slate-800/80 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 text-xl font-bold text-white mb-4">
                <div className="w-7 h-7 rounded-md bg-[#6366F1] flex items-center justify-center text-white text-xs font-mono font-bold">
                  ▲
                </div>
                <span>Apex Media</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                Apex Media is a premier performance marketing agency partnering with high-growth DTC brands and enterprise scale-ups to engineer predictable revenue engines.
              </p>
              <div className="text-xs text-slate-400">
                Direct Inquiries: <span className="text-slate-200 font-medium">growth@apexmedia.agency</span>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Services & Capabilities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('results')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Case Studies & Results
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Our 4-Stage Process
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Client Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Strategic Intelligence
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Receive our monthly private memo on emerging algorithmic ad platform shifts, ROAS benchmarks, and conversion experiments.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="bg-[#111827] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#6366F1] flex-grow"
                />
                <button
                  type="button"
                  onClick={() => alert('Subscribed to private growth memo.')}
                  className="px-3.5 py-2 bg-[#6366F1] text-white text-xs font-semibold rounded-lg hover:bg-[#5254e0] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Join Memo
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>&copy; 2026 Apex Media Agency LLC. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Security & Attribution</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL: SINGLE-FILE HTML CODE VIEWER & EXPORT */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111827] border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#818CF8]" />
                  <span>Apex Media — Single-File HTML Codebase</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Self-contained HTML file incorporating HTML, embedded &lt;style&gt;, and &lt;script&gt;. Ready to save as an .html file.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#6366F1] hover:bg-[#5254e0] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy HTML</span>
                    </>
                  )}
                </button>
                <button
                  onClick={downloadHtmlFile}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .html</span>
                </button>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 flex-grow overflow-auto bg-[#070A11] font-mono text-xs text-slate-300 leading-relaxed selection:bg-[#6366F1] selection:text-white">
              <pre>
                <code>{standaloneHtmlCode}</code>
              </pre>
            </div>

            <div className="p-4 border-t border-slate-800 bg-[#0B0F19] flex justify-between items-center text-xs text-slate-400">
              <span>Saved also to <code>public/apex-media.html</code></span>
              <button
                onClick={() => setShowCodeModal(false)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium cursor-pointer"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
