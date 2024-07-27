import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Navigation from '../../components/Navigation';

const HomePage = lazy(() => import('../../pages/HomePage'));
const HelpDonationPage = lazy(() => import('../../pages/HelpDonationPage'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));
const SearchPage = lazy(() => import('../../pages/SearchPage'));
const AboutUsPage = lazy(() => import('../../pages/AboutUsPage'));
const MyAccountPage = lazy(() => import('../../pages/MyAccountPage'));
const SignInPage = lazy(() => import('../../pages/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage'));

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/help-donations" element={<HelpDonationPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;