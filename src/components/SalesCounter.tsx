
import { useEffect, useRef, useState } from 'react';
import { DollarSign, TrendingUp, PercentCircle, Store } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: "Total Revenue Added",
    value: "12.5M",
    icon: DollarSign,
    prefix: "$",
    color: "text-emerald-500"
  },
  {
    id: 2,
    title: "Average Growth",
    value: "156",
    icon: TrendingUp,
    suffix: "%",
    color: "text-emerald-500"
  },
  {
    id: 3,
    title: "Success Rate",
    value: "98.5",
    icon: PercentCircle,
    suffix: "%",
    color: "text-emerald-500"
  },
  {
    id: 4,
    title: "Profitable Stores",
    value: "325",
    icon: Store,
    prefix: "",
    color: "text-emerald-500"
  }
];

const SalesCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-agency-black mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-agency-gray">
            Measurable results that speak for themselves
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="space-y-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`flex items-center p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${stat.id * 200}ms`,
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mr-8">
                <stat.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-agency-gray font-medium mb-1">{stat.title}</p>
                <h3 className="text-4xl font-bold text-emerald-500">
                  {stat.prefix}{stat.value}{stat.suffix}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesCounter;
