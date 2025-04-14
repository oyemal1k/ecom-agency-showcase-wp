
import { CheckCircle, ShoppingCart, Megaphone, BarChart2, Search, PenTool } from 'lucide-react';

const services = [
  {
    title: "E-commerce Development",
    description: "Custom e-commerce solutions, platform development, and integration tailored to your business needs.",
    icon: ShoppingCart,
    color: "bg-purple-100",
    iconColor: "text-agency-purple"
  },
  {
    title: "PPC Campaign Management",
    description: "Results-driven campaigns for Amazon, Shopify, and other platforms to maximize your advertising ROI.",
    icon: Megaphone,
    color: "bg-blue-100",
    iconColor: "text-agency-blue"
  },
  {
    title: "Conversion Rate Optimization",
    description: "Data-backed strategies to transform visitors into customers and boost your store's performance.",
    icon: BarChart2,
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "SEO for WordPress & WooCommerce",
    description: "Specialized SEO strategies for WordPress sites to improve visibility and drive organic traffic.",
    icon: Search,
    color: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    title: "Content & Creative Services",
    description: "Compelling content creation including EBC/A+ content, infographics, and product descriptions.",
    icon: PenTool,
    color: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    title: "Platform Integration",
    description: "Seamless integration with Shopify, Amazon, Meta, TikTok Shop and other e-commerce platforms.",
    icon: CheckCircle,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our E-commerce Services</h2>
          <p className="section-subtitle mx-auto">Comprehensive solutions to help your online store outperform the competition</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 hover:border-agency-purple/20 group">
              <div className={`${service.color} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agency-black group-hover:text-agency-purple transition-colors">{service.title}</h3>
              <p className="text-agency-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
