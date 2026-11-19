import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, User, ArrowRight, Phone, CheckCircle, Tag } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import { BLOG_POSTS } from "@/data/blogData";

export const metadata = {
  title: "Tankless Water Heater Blog & Diagnostic Guides | Colorado Springs",
  description:
    "Expert technical articles, troubleshooting guides, error code fixes, and high-altitude tankless advice for Colorado Springs homeowners. Read all 10 in-depth guides.",
};

export default function BlogIndexPage() {
  const breadcrumbs = [{ name: "Blog", url: "/blog" }];

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Knowledge Base & Homeowner Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Colorado Springs Tankless Water Heater Blog
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            In-depth engineering analyses, high-altitude gas troubleshooting, error code diagnostics, and preventative maintenance advice written by master plumbers and combustion technicians.
          </p>
        </div>
      </section>

      {/* Blog Grid (10 Complete Posts) */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-10">
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-navy-950">
                All 10 Educational Guides
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Comprehensive 750+ word technical breakdowns for Front Range homeowners
              </p>
            </div>
            <span className="text-xs font-bold bg-navy-100 text-navy-900 px-3 py-1 rounded-full">
              10 Articles Published
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="drainhaus-card overflow-hidden bg-white border border-slate-200 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-brand-orange text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-heading font-extrabold text-navy-950 group-hover:text-brand-orange transition-colors mb-3 leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-auto">
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Card */}
          <PhoneCallerCard
            title="Have Questions About an Error Code on Your Unit?"
            subtitle="Skip the guesswork and speak with an on-call Colorado Springs technician right now. Direct 24/7 phone dispatch."
          />

        </div>
      </section>
    </div>
  );
}
