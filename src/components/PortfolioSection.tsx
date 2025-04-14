
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const projects = [
  {
    title: "Skincare Store Redesign & Optimization",
    category: "wordpress",
    description: "Complete WordPress redesign with WooCommerce optimization for 87% faster loading and 43% higher conversion rate.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Amazon PPC Campaign for Home Brand",
    category: "amazon-ppc",
    description: "Structured campaign strategy that reduced ACOS from 32% to 19% while increasing total sales by 57%.",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Shopify Meta Ad Campaign",
    category: "meta",
    description: "Targeted Facebook and Instagram campaign for Shopify store with 3.2x ROAS and 112% revenue increase.",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Product Infographics Series",
    category: "infographics",
    description: "Eye-catching infographics that increased product page engagement by 76% and improved conversion rate.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Amazon A+ Content for Electronics",
    category: "ebc",
    description: "Premium A+ Content creation that boosted product conversion rate by 34% and reduced return rate.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "WooCommerce SEO Campaign",
    category: "seo",
    description: "Comprehensive SEO strategy that increased organic traffic by 215% and first-page rankings for 78 keywords.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "TikTok Shop Integration",
    category: "tiktok",
    description: "WordPress to TikTok Shop integration and content strategy that generated 43K in first month sales.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Shopping Ads for Apparel Store",
    category: "shopify-ppc",
    description: "Google & Microsoft Shopping campaign for Shopify store that achieved 418% ROI and expanded market reach.",
    image: "https://images.unsplash.com/photo-1629374355565-7736f382410a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  }
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="section-padding bg-gray-50" id="portfolio-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our WordPress E-commerce Portfolio</h2>
          <p className="section-subtitle mx-auto">Explore our most successful work across different categories</p>
        </div>

        <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="flex justify-center flex-wrap mb-10 bg-transparent overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="data-[state=active]:bg-agency-purple data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
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
                    <Link to="/portfolio" className="flex items-center text-agency-purple text-sm font-medium hover:underline">
                      View project <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="bg-agency-purple hover:bg-agency-darkPurple text-white font-medium py-2.5 px-6 rounded-md transition-all duration-300 inline-flex items-center"
          >
            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
