import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
// import AllImgWorks from './Components/WorkPage/AllOurImgWorks';
const AllImgWorks = React.lazy(() =>
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
          path: '/our-work',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <OurWorkPage />
            </Suspense>
          ),
          children: [
            {
              path: '/our-work/all',
              element: (
                <Suspense fallback={<p>Loading...</p>}>
                  <AllImgWorks />
                </Suspense>
              ),
            },
          ],
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
