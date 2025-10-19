
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MatchDetail from './pages/MatchDetail';
import Wallet from './pages/Wallet';
import MyContests from './pages/MyContests';
import Admin from './pages/Admin';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { useRouter } from './hooks/useRouter';

const App: React.FC = () => {
  const { page, params } = useRouter();

  const renderPage = () => {
    switch (page) {
      case '':
      case 'home':
        return <Home />;
      case 'match':
        return <MatchDetail matchId={params[0]} />;
      case 'wallet':
        return <Wallet />;
      case 'my-contests':
        return <MyContests />;
      case 'admin':
        return <Admin />;
      case 'login':
        return <Login />;
      default:
        return <NotFound />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-dark-bg">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
