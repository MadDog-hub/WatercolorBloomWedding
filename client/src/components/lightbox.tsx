import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const handleOpenLightbox = (event: CustomEvent) => {
      setCurrentImage(event.detail.src);
      setIsOpen(true);
    };

    window.addEventListener('openLightbox', handleOpenLightbox as EventListener);

    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={closeLightbox}
    >
      <button 
        onClick={closeLightbox}
        className="absolute top-4 right-4 text-white text-4xl font-bold z-10 hover:text-gray-300"
      >
        <X size={40} />
      </button>
      <img 
        src={currentImage}
        alt="Gallery image"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
