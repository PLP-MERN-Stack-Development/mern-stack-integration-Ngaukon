import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <Layout>
        {/* Header or top bar could include auth buttons */}
        <header className="flex justify-between p-4 border-b">
          <h1 className="text-xl font-bold">MERN Blog</h1>

          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </div>
        </header>

        {/* Main routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage />} />

          {/* Protected route: only accessible when signed in */}
          <Route
            path="/create"
            element={
              <SignedIn>
                <CreatePostPage />
              </SignedIn>
            }
          />
          <Route
            path="/create"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;