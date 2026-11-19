import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
  Bookmark,
  Share2,
  ExternalLink,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import { BLOG_POSTS, BlogPost } from "@/data/blogData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Colorado Springs Tankless Guide`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Suggest other articles
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.brandName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.siteUrl}/favicon.ico`,
      },
    },
    "datePublished": "2026-08-01",
    "dateModified": "2026-11-15",
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>{post.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <User className="w-4 h-4 text-brand-orange" />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-navy-800">
            <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Bookmark className="w-4 h-4" />
              <span>Key Takeaways for Homeowners</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {post.content.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-orange">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 tracking-tight">
                  {section.heading}
                </h2>

                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.callout && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm font-semibold text-amber-900 my-4">
                    {section.callout}
                  </div>
                )}

                {section.list && (
                  <ul className="space-y-2 text-base text-slate-700 list-disc pl-5">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-heading font-bold text-navy-950 mb-2">
                Conclusion & Professional Recommendations
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* Internal Links to Services & Locations (At least 5 as requested) */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-heading font-bold text-navy-950 uppercase tracking-wider mb-4">
              Related Services & Local Coverage:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link href="/tankless-water-heater-repair" className="in-content-link flex items-center justify-between">
                <span>Tankless Water Heater Repair (Colorado Springs)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-repair/emergency" className="in-content-link flex items-center justify-between text-red-600">
                <span>Emergency 24/7 Dispatch Hotline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-repair/gas" className="in-content-link flex items-center justify-between">
                <span>High-Altitude Gas Combustion Tuning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-maintenance/descaling" className="in-content-link flex items-center justify-between">
                <span>Annual Chemical Descaling & Flush</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/locations/monument" className="in-content-link flex items-center justify-between">
                <span>Monument, CO High-Altitude Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/locations/woodland-park" className="in-content-link flex items-center justify-between">
                <span>Woodland Park 8,500 ft Alpine Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
              <span>External Standard Reference: </span>
              <a
                href="https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters"
                target="_blank"
                rel="noopener noreferrer"
                className="in-content-link inline-flex items-center gap-1"
              >
                <span>U.S. Department of Energy (DOE) Tankless Guide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Conversion Card */}
          <div className="mt-12">
            <PhoneCallerCard
              title="Need Diagnostic Help on Your Tankless System?"
              subtitle="Call our local Colorado Springs dispatch line. No waiting for email or form replies—speak directly with an on-call technician."
            />
          </div>

          {/* Other Articles Recommendation */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-extrabold text-navy-950">
                Continue Reading
              </h3>
              <Link href="/blog" className="text-xs font-bold text-brand-orange hover:underline">
                View All 10 Guides →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <div key={p.slug} className="drainhaus-card p-5 bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider block mb-1">
                      {p.category}
                    </span>
                    <h4 className="text-sm font-heading font-bold text-navy-950 hover:text-brand-orange transition-colors leading-snug line-clamp-2 mb-2">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-2 mb-4">
                      {p.summary}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-xs font-bold text-brand-orange flex items-center gap-1 hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
