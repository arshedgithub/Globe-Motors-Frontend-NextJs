import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-gray-800 text-white flex flex-col justify-between h-full p-4">
          <div>
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
              Logout
            </a>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex flex-col bg-gray-100 p-6 overflow-y-auto h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
