
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { ArrowUpRight } from 'lucide-react';

// Portfolio categories
const categories = [
  { id: "all", label: "All Work" },
  { id: "wordpress", label: "WordPress Dev" },
  { id: "amazon-ppc", label: "Amazon PPC" },
  { id: "shopify-ppc", label: "Shopify PPC" },
  { id: "meta", label: "Meta Ads" },
  { id: "infographics", label: "Infographics" },
  { id: "ebc", label: "EBC/A+ Content" },
  { id: "seo", label: "SEO" },
  { id: "tiktok", label: "TikTok Shop" }
];

// Portfolio projects
const allProjects = [
  {
    title: "Skincare Store Redesign & Optimization",
    category: "wordpress",
    description: "Complete WordPress redesign with WooCommerce optimization for 87% faster loading and 43% higher conversion rate.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "87% improvement in page load speed",
      "43% increase in conversion rate",
      "32% reduction in cart abandonment"
    ],
    client: "GlowSkin Organics"
  },
  {
    title: "Amazon PPC Campaign for Home Brand",
    category: "amazon-ppc",
    description: "Structured campaign strategy that reduced ACOS from 32% to 19% while increasing total sales by 57%.",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "ACOS reduced from 32% to 19%",
      "57% increase in total sales",
      "3 products reached Amazon's Choice status"
    ],
    client: "HomeStyle Essentials"
  },
  {
    title: "Shopify Meta Ad Campaign",
    category: "meta",
    description: "Targeted Facebook and Instagram campaign for Shopify store with 3.2x ROAS and 112% revenue increase.",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "3.2x Return on Ad Spend",
      "112% increase in monthly revenue",
      "68% increase in new customer acquisition"
    ],
    client: "Urban Fashion Co."
  },
  {
    title: "Product Infographics Series",
    category: "infographics",
    description: "Eye-catching infographics that increased product page engagement by 76% and improved conversion rate.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "76% increase in time spent on product pages",
      "23% improvement in conversion rate",
      "Featured in industry publications"
    ],
    client: "TechGadgets Pro"
  },
  {
    title: "Amazon A+ Content for Electronics",
    category: "ebc",
    description: "Premium A+ Content creation that boosted product conversion rate by 34% and reduced return rate.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "34% improvement in conversion rate",
      "27% reduction in product return rate",
      "15% increase in average order value"
    ],
    client: "ElectroPro Audio"
  },
  {
    title: "WooCommerce SEO Campaign",
    category: "seo",
    description: "Comprehensive SEO strategy that increased organic traffic by 215% and first-page rankings for 78 keywords.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "215% increase in organic traffic",
      "78 keywords ranking on first page",
      "43% of new revenue from organic search"
    ],
    client: "Wellness Supplements"
  },
  {
    title: "TikTok Shop Integration",
    category: "tiktok",
    description: "WordPress to TikTok Shop integration and content strategy that generated 43K in first month sales.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "$43K in first month sales",
      "10K+ new visitors to WordPress store",
      "3 viral TikTok videos with 1M+ views"
    ],
    client: "Trendy Fashion Boutique"
  },
  {
    title: "Shopping Ads for Apparel Store",
    category: "shopify-ppc",
    description: "Google & Microsoft Shopping campaign for Shopify store that achieved 418% ROI and expanded market reach.",
    image: "https://images.unsplash.com/photo-1629374355565-7736f382410a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "418% Return on Investment",
      "62% increase in new customers",
      "28% increase in average order value"
    ],
    client: "OutdoorLife Apparel"
  },
  {
    title: "WordPress Store Migration & SEO",
    category: "wordpress",
    description: "Complex migration from Magento to WordPress with full SEO preservation and performance improvements.",
    image: "https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "Zero SEO traffic loss during migration",
      "65% improvement in page load time",
      "22% increase in conversion rate post-migration"
    ],
    client: "Kitchen Essentials Store"
  },
  {
    title: "Cross-Platform Integration",
    category: "wordpress",
    description: "Custom WordPress development to sync inventory and orders across WooCommerce, Amazon, and Shopify.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "Real-time inventory synchronization",
      "78% reduction in overselling issues",
      "8 hours saved weekly on manual updates"
    ],
    client: "MultiChannel Retailer"
  },
  {
    title: "Amazon Store Brand Content",
    category: "ebc",
    description: "Complete Amazon Store redesign with premium A+ content for all main product lines, boosting brand perception.",
    image: "https://images.unsplash.com/photo-1608557222797-2b1776828761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "48% increase in Amazon Store traffic",
      "32% improvement in conversion rate",
      "Brand awarded Amazon's 'Featured Brand' status"
    ],
    client: "PetCare Naturals"
  },
  {
    title: "Local SEO for Physical Store",
    category: "seo",
    description: "Local SEO campaign for WordPress site that boosted in-store visits and local search visibility.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    results: [
      "Top 3 rankings for all local keywords",
      "94% increase in 'Get Directions' clicks",
      "42% increase in in-store traffic attributed to web"
    ],
    client: "Hometown Crafts"
  }
];

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.some(cat => cat.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchParams({ category });
    setSelectedProject(null);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-agency-purple/10 to-agency-blue/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agency-black mb-6">Our WordPress E-commerce Portfolio</h1>
              <p className="text-lg text-agency-gray mb-8">
                Explore our most successful projects across various e-commerce categories
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Project Detail View */}
            {selectedProject && (
              <div className="mb-16 border border-gray-100 rounded-xl overflow-hidden shadow-md">
                <div className="h-[400px] relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-agency-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-agency-black mb-3">{selectedProject.title}</h2>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-agency-gray">Client: <span className="font-medium text-agency-black">{selectedProject.client}</span></span>
                      <span className="text-xs font-medium uppercase bg-gray-100 text-agency-gray px-3 py-1 rounded-full">
                        {categories.find(cat => cat.id === selectedProject.category)?.label}
                      </span>
                    </div>
                    <p className="text-lg text-agency-gray">{selectedProject.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-agency-black mb-4">Project Results</h3>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <ul className="space-y-3">
                        {selectedProject.results.map((result: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="shrink-0 w-6 h-6 bg-agency-purple/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-agency-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-agency-gray">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="text-agency-purple hover:text-agency-darkPurple font-medium"
                    >
                      Back to all projects
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-agency-purple text-white' 
                      : 'bg-gray-100 text-agency-gray hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer border border-gray-100"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-agency-black group-hover:text-agency-purple transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-agency-gray text-sm mb-4">{project.description}</p>
                    <div className="flex items-center text-agency-purple text-sm font-medium">
                      View details <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
