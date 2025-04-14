
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    content: "Working with this agency transformed our WordPress store. They redesigned our site, optimized our product pages, and set up Meta ads that actually convert. Our revenue is up 97% in just 4 months!",
    author: "Sarah Johnson",
    position: "Founder, Glow Organics",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    content: "Their Amazon PPC management is worth every penny. They restructured our campaigns, created A+ content that stands out, and our ACOS dropped from 32% to 18% while sales increased. Absolutely recommend them.",
    author: "Michael Thompson",
    position: "CEO, Home Essentials Co.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The WordPress SEO work they did for our store was exceptional. They fixed technical issues we didn't even know existed and got us ranking for competitive keywords. Our organic traffic is up 215%!",
    author: "Emily Rodriguez",
    position: "Marketing Director, FitLife Supplements",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    content: "They helped us launch our TikTok Shop integration with our WordPress store, and the results were immediate. Their team handled everything from setup to creating viral-worthy content that drove sales.",
    author: "David Chen",
    position: "Owner, Urban Style Co.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">Don't just take our word for it — hear from the store owners we've helped</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-agency-purple/5 to-agency-blue/5 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="inline-block w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-agency-black mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
              />
              <div>
                <p className="font-semibold text-agency-black">{testimonials[currentIndex].author}</p>
                <p className="text-agency-gray">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-agency-purple hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-agency-purple' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-agency-purple hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
