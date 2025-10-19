
import React from 'react';

const Login: React.FC = () => {
  // TODO: Implement Firebase login logic using signInWithPopup for Google
  // and signInWithEmailAndPassword for email.

  const handleGoogleLogin = () => {
    alert('Google Login logic to be implemented.');
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Email Login logic to be implemented.');
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-dark-card rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-brand-light">Welcome Back!</h1>
        <p className="text-center text-gray-400 mb-8">Sign in to continue to CricketPredict</p>
        
        <button 
          onClick={handleGoogleLogin}
          className="w-full flex justify-center items-center gap-3 bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors mb-4">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691c-1.246 3.14-2.006 6.551-2.006 10.119C4.3 29.449 5.06 32.86 6.306 36.001l-5.657 5.657C-1.049 36.852-2 30.613-2 24c0-6.613.951-12.852 2.657-18.309L8.964 8.348z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-5.657-5.657C30.01 35.091 27.215 36 24 36c-5.22 0-9.651-3.344-11.303-7.918l-5.657 5.657C9.143 40.023 16.06 44 24 44z" />
        </svg>
          Sign in with Google
        </button>

        <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-dark-border"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-dark-border"></div>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email address</label>
            <input type="email" name="email" id="email" required className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input type="password" name="password" id="password" required className="w-full bg-dark-border rounded-md p-2 text-white border-2 border-transparent focus:border-brand-primary focus:ring-0" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-secondary transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
