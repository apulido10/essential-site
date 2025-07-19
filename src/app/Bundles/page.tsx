import Link from "next/link";
import Header from "../components/Header";

const bundles = [
  {
    title: "Starter Bundle",
    features: [
      "1-Page Custom Website",
      "Mobile-Friendly Design",
      "Business Email Setup (Save $72/year)",
      "Contact Form",
      "Affordable monthly hosting",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    title: "Professional Bundle",
    features: [
      "Up to 5 Pages",
      "Mobile & Tablet Responsive",
      "Business Email Setup (Save $72/year)",
      "Contact + Quote Forms",
      "Affordable monthly hosting",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    title: "Business Bundle",
    features: [
      "Up to 7 Pages",
      "Mobile-Optimized Layout",
      "Business Email Setup (Save $72/year)",
      "Contact + Quote Forms",
      "Basic Stripe Payment Integration",
      "Affordable monthly hosting",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    title: "Appointments Bundle",
    features: [
      "Custom Appointment-Ready Website",
      "Multi-User Booking System (Perfect for Barbers, Clinics, etc.)",
      "Business Email Setup (Save $72/year)",
      "Contact + Quote Forms",
      "Affordable monthly hosting",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    title: "Stripe Cart Bundle",
    features: [
      "Up to 10 Products w/ Custom Cart",
      "Customers Can Add Multiple Items",
      "Advanced Stripe Payment Integration",
      "Business Email Setup (Save $72/year)",
      "Contact + Quote Forms",
      "Affordable monthly hosting",
      "Ongoing Support & Maintenance",
    ],
  },
];

export default function Bundles() {
  return (
    <div>
      <Header/>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Website Bundle
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {bundle.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/Quote"
                  className="inline-block mt-auto bg-blue-800 hover:bg-blue-900 text-white text-center py-2 px-4 rounded transition"
                >
                  Get a Free Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
