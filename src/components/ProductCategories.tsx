import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Home, Sparkles } from 'lucide-react';
import decorImage from '@/assets/decor-products.jpg';
import aromaticsImage from '@/assets/aromatherapy-scene.jpg';

const categories = [
  {
    id: 'aromatics',
    title: 'Ароматизация пространства',
    description: 'Современные решения для моментального и долговременного ароматизирования, подходящие для вашего дома, автомобиля или рабочего пространства.',
    image: aromaticsImage,
    icon: Leaf,
    color: 'from-primary/20 to-primary-glow/20'
  },
  {
    id: 'decor',
    title: 'Декор в интерьере',
    description: 'Современный интерьер все чаще становится отражением вкусов, настроений и индивидуального стиля хозяев дома, который способен преобразить любое пространство.',
    image: decorImage,
    icon: Home,
    color: 'from-accent/20 to-secondary/30'
  }
];

export const ProductCategories = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.category-card');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 px-6" id="catalog">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full hero-glass mb-6">
            <span className="text-primary font-mono text-sm">(01)</span>
            <span className="text-sm font-medium">КАТАЛОГ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="gradient-text">категории</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Откройте для себя мир натуральных ароматов и стильного декора
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={category.id}
                data-index={index}
                className={`category-card product-card rounded-3xl overflow-hidden group transition-all duration-700 ${
                  isVisible ? 'fade-in-up animate opacity-100 translate-y-0' : 'fade-in-up opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-80 transition-opacity`} />
                  
                  {/* Floating icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center backdrop-blur-sm">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-glow"
                  >
                    Смотреть все
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 text-center">
          <div className="hero-glass rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-semibold gradient-text">Специальное предложение</span>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <p className="text-foreground/80">
              На новинки скидка до <span className="font-bold text-primary">20%</span>, ищите «NEW» на карточке товара
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};