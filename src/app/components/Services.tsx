export default function Services() {
  const services = [
    {
      title: "Custom Website Design",
      description: "Modern, mobile-friendly websites built to match your business and convert visitors into customers.",
    },
    {
      title: "Fast Performance",
      description: "Speed-optimized sites that load fast and offer a seamless experience for your visitors.",
    },
    {
      title: "Mobile Optimization",
      description: "Your site will look and work beautifully on any screen size—from desktop to mobile.",
    },
    {
      title: "Payment Integration",
      description: "Accept payments online with Stripe or PayPal, fully integrated into your site.",
    },
    {
      title: "Maintenance Plans",
      description: "Ongoing updates, security checks, and support so your site stays smooth and secure.",
    },
    {
      title: "SEO Basics",
      description: "Get found online with clean markup, meta tags, and optimized page structure.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Everything you need to launch and grow your online presence.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
