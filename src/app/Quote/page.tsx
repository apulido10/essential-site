
import Header from "../components/Header";
export default function Quote() {
  return (
    <div>
      <Header />
      <section id="quote" className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get a Personalized Quote
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Fill out this form with a few details about your business and we&apos;ll
            send you a personalized proposal within 24 hours.
          </p>

          <form className="bg-white p-8 rounded-lg shadow-md text-left">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Business Name (optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Your Business Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Website Type</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
                <option>Starter Site</option>
                <option>Booking Site</option>
                <option>eCommerce</option>
                <option>Custom</option>
                <option>Not Sure Yet</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Features You Want
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label>
                  <input type="checkbox" className="mr-2" />
                  Contact Form
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Quote Form
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Stripe Checkout
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Booking Calendar
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Blog
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Store with Cart
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Business Email
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Other
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Do you have a domain or logo?
              </label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
                <option>Yes</option>
                <option>No</option>
                <option>I need help with that</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Tell us about your business and what you need
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Share any helpful info about your goals, design ideas, or problems you're trying to solve"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Budget Range</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
                <option>$500 – $1,000</option>
                <option>$1,000 – $2,000</option>
                <option>$2,000+</option>
                <option>Not Sure</option>
              </select>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 mb-2">
                Preferred Timeline
              </label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
                <option>1–2 Weeks</option>
                <option>2–4 Weeks</option>
                <option>Flexible</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded font-semibold transition"
            >
              Request Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
