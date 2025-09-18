import { useEffect, useRef, useState } from 'react';
import { Leaf, Shield, Heart, Truck, Award, Recycle } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Натуральные материалы',
    description: 'Только экологически чистые компоненты и натуральные ароматы'
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Все продукты сертифицированы и безопасны для здоровья'
  },
  {
    icon: Heart,
    title: 'Ручная работа',
    description: 'Каждый продукт создается вручную с особой заботой'
  },
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставляем по всей России в течение 2-5 дней'
  },
  {
    icon: Award,
    title: 'Премиум качество',
    description: 'Только лучшие материалы и проверенные производители'
  },
  {
    icon: Recycle,
    title: 'Eco-friendly',
    description: 'Заботимся об окружающей среде и используем переработанную упаковку'
  }
];

export const Features = () => {
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
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают <span className="gradient-text">нас</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Мы создаем не просто товары, а атмосферу уюта и комфорта в вашем доме
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card group transition-all duration-700 ${
                  isVisible ? 'fade-in-up animate opacity-100 translate-y-0' : 'fade-in-up opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="product-card p-8 text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};