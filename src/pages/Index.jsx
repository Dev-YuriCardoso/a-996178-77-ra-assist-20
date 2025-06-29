
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginModal from '@/components/LoginModal';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Credenciais hardcoded para demonstração
    if ((email === 'admin' && password === 'alan@123') || 
        (email === 'admin@admin.com' && password === 'alan@123')) {
      setIsLoggedIn(true);
      setUser({ email, name: 'Administrador' });
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  if (isLoggedIn) {
    return <AdminPanel user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Tool Tester
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your Ultimate AI Tools Resource
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => setShowLoginModal(true)}
            >
              Admin Login
            </Button>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-green-400">Top AI Tools</CardTitle>
              <CardDescription className="text-gray-300">
                Discover the best AI tools available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Explore our curated collection of AI tools for various use cases.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Expert Reviews</CardTitle>
              <CardDescription className="text-gray-300">
                In-depth analysis and ratings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Read comprehensive reviews from AI experts and practitioners.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Trending Now</CardTitle>
              <CardDescription className="text-gray-300">
                Latest AI trends and innovations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Stay updated with the latest trends in AI technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
