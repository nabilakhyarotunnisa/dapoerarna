import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <Link to="/admin" className="text-xl font-bold text-orange-500 flex items-center">
              <span className="mr-2">🍔</span>
              <span>Admin Panel</span>
            </Link>
          </div>
          
          <nav className="mt-8">
            <Link
              to="/admin"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              <LayoutDashboard size={20} className="mr-3" />
              Dashboard
            </Link>
            <Link
              to="/admin/products"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              <Package size={20} className="mr-3" />
              Products
            </Link>
            <Link
              to="/admin/orders"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              <ShoppingBag size={20} className="mr-3" />
              Orders
            </Link>
            <Link
              to="/admin/customers"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              <Users size={20} className="mr-3" />
              Customers
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;