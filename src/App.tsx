import { RouterProvider, createHashRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';
import TeachingPage from './pages/TeachingPage';
import CVPage from './pages/CVPage';
import ContactPage from './pages/ContactPage';

// Create the router using HashRouter for GitHub Pages
const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'research',
        element: <ResearchPage />,
      },
      {
        path: 'publications',
        element: <PublicationsPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'teaching',
        element: <TeachingPage />,
      },
      {
        path: 'cv',
        element: <CVPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
