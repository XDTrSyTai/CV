import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ZoomIn, Sparkles } from 'lucide-react';
import { galleryItems } from '../data/portfolioData';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 relative z-10 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-4">
            <Image className="w-3.5 h-3.5" />
            <span>Khoảnh khắc & Không gian học tập</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Gallery & Campus Life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Ghi dấu những khoảnh khắc học tập, nghiên cứu và thảo luận học thuật tại Đại học Sư phạm Kỹ thuật Đà Nẵng.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay & Details on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white mb-1 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-4 h-4 text-sky-400" />
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Category Badge on Top-Right */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-900/70 text-slate-200 backdrop-blur-md border border-white/10 group-hover:opacity-0 transition-opacity">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Đóng ảnh"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              <div className="p-6 bg-slate-900 text-left">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

