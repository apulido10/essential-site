export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} EssentialSites.co – All rights reserved.
        </p>
        <p className="text-sm">
          Contact:{" "}
          <a href="mailto:hello@essentialsites.co" className="hover:text-blue-800">
            hello@essentialsites.co
          </a>
        </p>
      </div>
    </footer>
  );
}
