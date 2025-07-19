import Head from "next/head";
import Header from "../components/Header";
export default function BookPage() {
  return (
    <div>
    <Header/>
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Book a Free Consultation
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          Pick a time that works best for you. We'll chat about your website and goals.
        </p>

        <div className="w-full">
          <iframe
            src="https://calendly.com/hello-essentialsites"
            width="100%"
            height="630"
            frameBorder="0"
            scrolling="no"
            className="rounded shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
    </div>
  );
}
