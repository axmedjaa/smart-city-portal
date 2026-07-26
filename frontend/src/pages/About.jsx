import {
  Target,
  Eye,
  MessageSquare,
  Clock,
  Building2,
  BarChart3,
} from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Easy Complaint Reporting",
      icon: MessageSquare,
      text: "Citizens can submit complaints quickly by selecting categories such as roads, utilities, and sanitation.",
    },
    {
      title: "Real Time Tracking",
      icon: Clock,
      text: "Citizens can monitor complaint status and receive updates from responsible departments.",
    },
    {
      title: "Department Management",
      icon: Building2,
      text: "Complaints are assigned to the correct department for faster problem resolution.",
    },
    {
      title: "Smart Analytics",
      icon: BarChart3,
      text: "Data analytics help city administrators improve services and decision making.",
    },
  ];

  const steps = [
    "Citizen submits a complaint",
    "Complaint assigned to department",
    "Officer updates progress",
    "Issue resolved",
  ];

  return (
    <div className="space-y-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      {/* Hero */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-5">
          About Smart City Portal
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-blue-100">
          A digital platform that connects citizens with city departments to
          report problems, track progress, and improve public services.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 px-6">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/40 border border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Target
            size={40}
            className="text-blue-600 dark:text-blue-400 mb-4"
          />

          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            Our Mission
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to provide citizens with an easy and transparent way
            to report city issues and help departments deliver faster solutions.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/40 border border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Eye
            size={40}
            className="text-green-600 dark:text-green-400 mb-4"
          />

          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            Our Vision
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Building a smarter city where technology, citizens, and government
            services work together for a better future.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          How We Help
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  size={40}
                  className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
                />

                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          How Complaints Are Handled
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {index + 1}
              </div>

              <p className="font-medium text-gray-900 dark:text-white">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}