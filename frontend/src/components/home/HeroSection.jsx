import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span
              data-aos="fade-down"
              data-aos-duration="700"
              className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700"
            >
              Smart City Portal
            </span>

            <h1
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="800"
              className="mt-6 text-5xl font-bold leading-tight text-slate-900 dark:text-white"
            >
              Report City Problems.
              <br />
              <span className="text-blue-600">
                Build a Better Community.
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300"
            >
              Submit complaints about roads, utilities, sanitation, and other
              public services. Track your complaint from submission until it is
              resolved by the responsible department.
            </p>

            <div
              data-aos="zoom-in"
              data-aos-delay="450"
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 transition hover:scale-105"
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
                className="bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition hover:scale-105"
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex gap-8">

              <div
                data-aos="flip-left"
                data-aos-delay="600"
                className="cursor-pointer transition hover:scale-105"
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  24/7
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Online Complaint Service
                </p>
              </div>

              <div
                data-aos="flip-right"
                data-aos-delay="750"
                className="cursor-pointer transition hover:scale-105"
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  Fast
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Complaint Tracking
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div
            className="flex justify-center"
            data-aos="zoom-in-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div
              className="
                flex
                aspect-square
                w-full
                max-w-[280px]
                sm:max-w-[384px]
                items-center
                justify-center
                rounded-full
                bg-blue-100
                shadow-xl
                p-6
                sm:p-8
                overflow-hidden
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-2xl
              "
            >
              <img
                src="/hero-banner.4a7e9cb0.webp"
                alt="Connected Smart City Illustration"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;