import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CustomIllustrationsPage from './pages/CustomIllustrationsPage';
import VideoEditingPage from './pages/VideoEditingPage';
import MotioinGraphicsPage from './pages/MotioinGraphicsPage';
import PresentationDesignPage from './pages/PresentationDesignPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

const DashboardLayout = React.lazy(() => import('./layouts/DashboardLayout'));
const PhotoshopDesignPage = React.lazy(() =>
  import('./pages/PhotoshopDesignPage')
);
const DashboardTeam = React.lazy(() =>
  import('./Components/Dashboard/DashboardTeam')
);
const DashboardBrands = React.lazy(() =>
  import('./Components/Dashboard/DashboardBrands')
);
const DashboardRequests = React.lazy(() =>
  import('./Components/Dashboard/DashboardRequests')
);
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const DesignBlogsPage = React.lazy(() => import('./pages/DesignBlogsPage'));
const GuidesPage = React.lazy(() => import('./pages/GuidesPage'));
const WatchDemosPage = React.lazy(() => import('./pages/WatchDemosPage'));
const GraphicDesign = React.lazy(() => import('./pages/GraphicsDesignPage'));
const BookACall = React.lazy(() => import('./Components/BookACall'));
// const CustomIllustrationsPage = React.lazy(() => import('./pages/OldCustomIllustrations'));
const SocialMediaPage = React.lazy(() => import('./pages/SocialMediaPage'));
const AllOurImgWorks = React.lazy(() =>
  import('./Components/WorkPage/AllOurImgWorks')
);
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const OurWorkPage = React.lazy(() => import('./pages/OurWorkPage'));

function App() {
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

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
          path: '/photoshop-design',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <PhotoshopDesignPage />
              {/* <SocialMediaPage /> */}
            </Suspense>
          ),
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
          path: '/custom-illustrations',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <CustomIllustrationsPage />
            </Suspense>
          ),
        },
        {
          path: '/presentation-design',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <PresentationDesignPage />
            </Suspense>
          ),
        },
        {
          path: '/motion-graphics',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <MotioinGraphicsPage />
            </Suspense>
          ),
        },
        {
          path: '/video-editing',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <VideoEditingPage />
            </Suspense>
          ),
        },
        {
          path: '/contact',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: '/contact/terms',
          element: <TermsPage />,
        },
        {
          path: '/contact/privacy-policy',
          element: <PrivacyPolicy />,
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
          path: '/log-in',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <LoginPage />
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
        {
          path: '/watch-demos',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <WatchDemosPage />
            </Suspense>
          ),
        },
        {
          path: '/guides',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <GuidesPage />
            </Suspense>
          ),
        },
        {
          path: '/design-blogs',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <DesignBlogsPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <DashboardLayout />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorPage />
        </Suspense>
      ),

      children: [
        {
          path: '/dashboard',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <DashboardRequests />
            </Suspense>
          ),
        },
        {
          path: '/dashboard/brands',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <DashboardBrands />
            </Suspense>
          ),
        },
        {
          path: '/dashboard/team',
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <DashboardTeam />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
