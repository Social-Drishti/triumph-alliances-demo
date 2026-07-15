import React, { useState } from "react";
import { ArrowLeft, Clock, User, Tag, Calendar, ArrowRight, Share2, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { blogArticles } from "../data";

const categories = ["All Insights", "Sales Strategy", "Industry Insights", "Digital Marketing"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof blogArticles[0] | null>(null);

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Insights" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-left relative">
      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stock_buildings (4).jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">
            Triumph Intel Hub
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light tracking-tight mt-6 leading-[0.95]">
            Real Estate Strategy, Insights & Micro-Trends
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-sans font-light leading-relaxed mt-8 max-w-4xl">
            Data-backed breakdowns of Mumbai Metropolitan Region (MMR) micromarkets, performance marketing guides, and developer frameworks.
          </p>
        </div>
      </section>

      {/* Blog Directory Section */}
      <section className="py-24 max-w-none px-4 sm:px-8 lg:px-16">

        {/* Filters + Search — Left-aligned split */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 border-b border-gray-100 pb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 font-accent font-light text-sm sm:text-base tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-navy text-white"
                    : "bg-brand-offwhite text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-sm shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-brand-offwhite border-none focus:outline-none text-base font-sans font-light text-gray-700 placeholder-gray-400 transition-all"
            />
          </div>
        </div>

        {/* Article Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 space-y-6">
            <p className="text-gray-500 font-sans text-xl font-light">No articles match your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All Insights");
                setSearchQuery("");
              }}
              className="px-12 py-5 bg-brand-navy text-white text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                whileHover={{ y: -4 }}
                className="bg-white overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy text-white px-4 py-2 text-sm sm:text-base font-accent font-medium tracking-widest uppercase">
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6 text-left">
                    <div className="flex items-center space-x-3 text-base sm:text-lg font-mono font-light text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" /> {article.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy mb-4 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 bg-brand-teal/10 text-brand-navy rounded-full flex items-center justify-center font-light text-xs">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-sm sm:text-base font-sans font-light text-gray-600">{article.author}</span>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-sm sm:text-base font-light tracking-[0.18em] uppercase border-b border-brand-navy text-brand-navy hover:text-brand-teal hover:border-brand-teal cursor-pointer transition-colors pb-0.5"
                  >
                    Read Article
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-3xl w-full overflow-hidden relative flex flex-col max-h-[90vh]"
            >
              {/* Header image — larger */}
              <div className="relative aspect-[21/8] overflow-hidden bg-brand-navy shrink-0">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/50 mix-blend-multiply" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 bg-black/30 text-white hover:bg-black/50 p-3 rounded-full cursor-pointer focus:outline-none transition-colors"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
                  <span className="inline-block bg-brand-navy text-white px-4 py-2 text-sm sm:text-base font-accent font-medium tracking-widest uppercase">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-light leading-tight tracking-tight">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="p-8 sm:p-10 overflow-y-auto space-y-8 text-left font-sans">
                {/* Meta & Author */}
                <div className="flex flex-wrap justify-between items-center gap-4 py-4 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-teal/10 text-brand-navy rounded-full flex items-center justify-center font-light text-base">
                      {selectedArticle.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-accent font-light text-lg text-brand-navy leading-none">{selectedArticle.author}</p>
                      <p className="text-base font-mono font-light text-gray-400 mt-1.5">{selectedArticle.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-base sm:text-lg font-mono font-light text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" /> {selectedArticle.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" /> {selectedArticle.readTime}
                    </span>
                  </div>
                </div>

                {/* Article body */}
                <div className="space-y-5 text-gray-600 leading-relaxed text-lg sm:text-xl font-sans font-light whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center text-sm sm:text-base font-light tracking-[0.18em] uppercase border-b border-brand-navy text-brand-navy hover:text-brand-teal hover:border-brand-teal transition-colors pb-0.5"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }}
                    className="inline-flex items-center text-sm sm:text-base font-light tracking-[0.18em] uppercase border-b border-brand-sky text-brand-sky hover:text-brand-navy hover:border-brand-navy transition-colors pb-0.5 space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
