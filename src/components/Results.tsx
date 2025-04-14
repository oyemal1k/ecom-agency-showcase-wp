
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    category: "shopify",
    title: "Skincare Brand Revenue Growth",
    description: "How we helped a skincare brand increase their revenue by 137% through WordPress optimization and targeted Meta ads.",
    metrics: [
      { label: "Revenue Increase", value: "137%" },
      { label: "ROAS", value: "4.6x" },
      { label: "Conversion Rate", value: "5.2%" }
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "amazon",
    title: "Amazon FBA Seller Visibility",
    description: "Strategic PPC management and A+ content that boosted a home goods brand's visibility and sales on Amazon.",
    metrics: [
      { label: "Sales Growth", value: "94%" },
      { label: "ACOS Reduction", value: "32%" },
      { label: "Bestseller Categories", value: "3" }
    ],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "tiktok",
    title: "TikTok Shop Launch Success",
    description: "Complete TikTok Shop integration with WordPress that drove 10,000+ visitors in the first month for a fashion brand.",
    metrics: [
      { label: "First-Month Sales", value: "$43K" },
      { label: "TikTok Traffic", value: "10K+" },
      { label: "Avg. Order Value", value: "$78" }
    ],
    image: "https://images.unsplash.com/photo-1633439708729-ae69e8fb95a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    category: "seo",
    title: "Organic Traffic Explosion",
    description: "WordPress SEO campaign that increased organic traffic by 312% for a supplements brand within 6 months.",
    metrics: [
      { label: "Traffic Increase", value: "312%" },
      { label: "Keyword Rankings", value: "150+" },
      { label: "Organic Conversion", value: "3.8%" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];

const Results = () => {
  return (
    <section className="section-padding bg-gray-50" id="results">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Impressive Results for Our Clients</h2>
          <p className="section-subtitle mx-auto">Real case studies that showcase our ability to drive meaningful results</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center flex-wrap mb-10 bg-transparent">
            <TabsTrigger value="all" className="data-[state=active]:bg-agency-purple data-[state=active]:text-white">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="shopify" className="data-[state=active]:bg-agency-purple data-[state=active]:text-white">
              Shopify
            </TabsTrigger>
            <TabsTrigger value="amazon" className="data-[state=active]:bg-agency-purple data-[state=active]:text-white">
              Amazon
            </TabsTrigger>
            <TabsTrigger value="tiktok" className="data-[state=active]:bg-agency-purple data-[state=active]:text-white">
              TikTok Shop
            </TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-agency-purple data-[state=active]:text-white">
              SEO
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-agency-black group-hover:text-agency-purple transition-colors">
                        {study.title}
                      </h3>
                      <span className="text-xs font-medium uppercase bg-gray-100 text-agency-gray px-2 py-1 rounded">
                        {study.category}
                      </span>
                    </div>
                    <p className="text-agency-gray mb-6">{study.description}</p>
                    <div className="flex justify-between mb-4">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <p className="text-2xl font-bold text-agency-purple">{metric.value}</p>
                          <p className="text-xs text-agency-gray">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link to="/portfolio" className="flex items-center text-agency-purple font-medium hover:underline">
                      View case study <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {["shopify", "amazon", "tiktok", "seo"].map(category => (
            <TabsContent value={category} key={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies
                  .filter(study => study.category === category)
                  .map((study, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                      <div className="h-52 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-agency-black group-hover:text-agency-purple transition-colors">
                            {study.title}
                          </h3>
                          <span className="text-xs font-medium uppercase bg-gray-100 text-agency-gray px-2 py-1 rounded">
                            {study.category}
                          </span>
                        </div>
                        <p className="text-agency-gray mb-6">{study.description}</p>
                        <div className="flex justify-between mb-4">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <p className="text-2xl font-bold text-agency-purple">{metric.value}</p>
                              <p className="text-xs text-agency-gray">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                        <Link to="/portfolio" className="flex items-center text-agency-purple font-medium hover:underline">
                          View case study <ArrowUpRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Results;
