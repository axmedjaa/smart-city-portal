import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <div className="container mx-auto px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Smart City Portal
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Report City Problems.
              <br />
              <span className="text-blue-600">Build a Better Community.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Submit complaints about roads, utilities, sanitation, and other
              public services. Track your complaint from submission until it is
              resolved by the responsible department.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                <Link
                  to="/register"
                  className="flex items-center whitespace-nowrap"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="
                bg-white 
                text-black 
                border 
                border-gray-300
                hover:bg-gray-100
                dark:bg-white
                dark:text-black
                dark:hover:bg-gray-200
  "
              >
                <Link to="/about" className="whitespace-nowrap">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-sm text-slate-500">
                  Online Complaint Service
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">Fast</h3>
                <p className="text-sm text-slate-500">Complaint Tracking</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            {/* The circular container  */}
            <div className="
                flex 
                aspect-square 
                w-full 
                max-w-[280px] /* Prevents mobile overflow */
                sm:max-w-[384px] /* Original size for larger screens */
                items-center 
                justify-center 
                rounded-full 
                bg-blue-100 
                shadow-xl 
                p-6 
                sm:p-8 
                overflow-hidden /* Clips image to the circle */
            ">
              <img 
                // image source located in public folder
                src="/hero-banner.4a7e9cb0.webp" 
                alt="Connected Smart City Illustration" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
