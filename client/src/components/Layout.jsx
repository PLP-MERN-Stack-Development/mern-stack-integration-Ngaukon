import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow max-w-6xl mx-auto w-full p-6">
        {children}
      </main>

      {/* Footer (optional) */}
      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;