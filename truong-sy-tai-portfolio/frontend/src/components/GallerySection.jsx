import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryItems } from '../data/portfolioData';
import CircularCarousel from './CircularCarousel';
import { useTheme } from '../context/ThemeContext';

export const GallerySection = () => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  // Format gallery items for CircularCarousel
  const carouselItems = useMemo(() => {
    return galleryItems.map(item => ({
      src: item.imageUrl,
      alt: item.title,
      title: item.title,
      subtitle: item.category,
      description: item.description,
      category: item.category,
    }));
  }, []);

  return (
    <section id="gallery" className="py-24 relative z-10 overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Minimal Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Khoảnh Khắc
          </h2>
        </div>

        {/* 3D Cylinder Presentation Container - Blends seamlessly into main background */}
        <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[640px] overflow-hidden">
          <CircularCarousel
            items={carouselItems}
            preset="cylinder"
            intro="rise"
            cardWidth={220}
            aspectRatio={1.2}
            gap={24}
            speed={12}
            autoplay="drift"
            direction="left"
            draggable={true}
            momentum={0.65}
            snap={true}
            pauseOnHover={true}
            focusOnClick={true}
            parallax={0.35}
            stretch={0.4}
            depthFade={0.55}
            fadeColor={isDark ? '#0B0F19' : '#F8FAFC'}
            innerShade={0.6}
            cornerRadius={14}
            captions={true}
            onItemClick={(item) => setSelectedImage(item)}
            className="text-slate-800 dark:text-slate-100"
          />
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer shadow-lg backdrop-blur-md"
                aria-label="Đóng ảnh"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.src || selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-7 text-left bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    {selectedImage.subtitle || selectedImage.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
