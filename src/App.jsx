import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CanvaDesignPage from './pages/CanvaDesignPage';

const GraphicDesign = React.lazy(() => import('./pages/GraphicDesign'));
const BookACall = React.lazy(() => import('./Components/BookACall'));
// const CanvaDesignPage = React.lazy(() => import('./pages/OldCanvaDesignPage'));
const SocialMediaPage = React.lazy(() => import('./pages/SocialMediaPage'));
const AllOurImgWorks = React.lazy(() =>
  import('./Components/WorkPage/AllOurImgWorks')
);
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const OurWorkPage = React.lazy(() => import('./pages/OurWorkPage'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: (
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/graphic-design',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <GraphicDesign />
              {/* <SocialMediaPage /> */}
            </Suspense>
          ),
        },
        {
          path: '/canva-design',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <CanvaDesignPage />
            </Suspense>
          ),
        },
        {
          path: '/book-a-call',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <BookACall />
            </Suspense>
          ),
        },
        {
          path: '/our-work',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <OurWorkPage />
            </Suspense>
          ),
          // children: [
          //   {
          //     path: '/our-work/all',
          //     element: (
          //       <Suspense fallback={<p>Loading...</p>}>
          //         <AllOurImgWorks />
          //       </Suspense>
          //     ),
          //   },
          // ],
        },
        {
          path: '/pricing',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <PricingPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
