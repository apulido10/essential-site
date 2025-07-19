export default function WhyUs() {
  const features = [
    {
      title: "Simple Pricing",
      description:
        "No hidden fees. Straightforward, transparent pricing with no surprises.",
      icon: "✅",
    },
    {
      title: "Fast Turnaround",
      description:
        "Most websites are delivered within 5–7 days from the start date.",
      icon: "⚡",
    },
    {
      title: "Ongoing Support",
      description:
        "We’re available even after your site goes live—for updates or advice.",
      icon: "🔧",
    },
    {
      title: "Maintenance Plans",
      description:
        "Monthly plans available for updates, backups, and priority support.",
      icon: "📦",
    },
  ];
  return (
    <div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Here’s what makes EssentialSites.co a smart choice for your
            business.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-left">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
