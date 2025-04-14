
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, DollarSign, PercentCircle, Store } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: "Total Revenue Added",
    value: "12.5M",
    icon: DollarSign,
    prefix: "$"
  },
  {
    id: 2,
    title: "Average Growth",
    value: "156",
    icon: TrendingUp,
    suffix: "%"
  },
  {
    id: 3,
    title: "Success Rate",
    value: "98.5",
    icon: PercentCircle,
    suffix: "%"
  },
  {
    id: 4,
    title: "Profitable Stores",
    value: "325",
    icon: Store,
    prefix: ""
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
    <section className="py-16 bg-gradient-to-b from-white to-agency-lightGreen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-agency-black">Our Impact in Numbers</h2>
          <p className="section-subtitle text-agency-gray">Measurable results that speak for themselves</p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-white p-6 rounded-xl shadow-sm border border-agency-lightGreen hover:shadow-md transition-all ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${stat.id * 100}ms`,
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto bg-agency-lightGreen rounded-full">
                <stat.icon className="w-6 h-6 text-agency-green" />
              </div>
              <h3 className="text-3xl font-bold text-agency-green mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </h3>
              <p className="text-agency-gray font-medium">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesCounter;
