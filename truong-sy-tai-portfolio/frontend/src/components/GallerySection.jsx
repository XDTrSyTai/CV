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
    <section id="gallery" className="py-24 relative z-10 overflow-hidden border-t border-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Prestigious & Minimalist */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
            <p className="text-xs font-mono text-[#9BA1AC] tracking-wide">
              Hình ảnh & Không gian học tập
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-7 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#F1F3F5]">
              Khoảnh Khắc —{' '}
              <span className="text-[#9BA1AC]">
                Nhịp sống giảng đường, nghiên cứu dữ liệu & công nghệ.
              </span>
            </h2>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[#6C727F] leading-relaxed">
              Trải nghiệm tương tác 3D đa chiều khám phá môi trường đào tạo năng động tại Trường Đại học Sư phạm Kỹ thuật Đà Nẵng.
            </p>
          </div>
        </div>

        {/* 3D Cylinder Presentation Container */}
        <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] overflow-hidden">
          <CircularCarousel
            items={carouselItems}
            preset="cylinder"
            intro="rise"
            cardWidth={230}
            aspectRatio={1.2}
            gap={26}
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
            fadeColor={isDark ? '#090A0C' : '#F7F8FA'}
            innerShade={0.6}
            cornerRadius={12}
            captions={true}
            onItemClick={(item) => setSelectedImage(item)}
            className="text-[#F1F3F5]"
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
            className="fixed inset-0 z-50 bg-[#090A0C]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0F1115] rounded-2xl overflow-hidden border border-[#1A1D24] shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#14171D]/90 hover:bg-[#262A34] text-[#F1F3F5] transition-colors cursor-pointer border border-[#1A1D24]"
                aria-label="Đóng ảnh"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#090A0C] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.src || selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 border-t border-[#1A1D24] bg-[#0F1115] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#F1F3F5]">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-[#6C727F] font-mono mt-0.5">
                    {selectedImage.subtitle || selectedImage.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
