/**
 * Author: Von Manaois
 *
 * This component sets up the main application routes using React Router.
 * It includes routes for home, sign-in, sign-up, profile, listings, and more.
 * Some routes are protected by a private route component that requires authentication.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Listings from "./pages/Listings";
import PrivateRoute from "./components/PrivateRoute";
import MyListing from "./pages/MyListing";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import ContactUs from "./pages/ContactUs";
import Listing from "./pages/Listing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-listings" element={<MyListing />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
        <Route path="/listings/" element={<Listings />} />
        <Route path="/listing/:listingId" element={<Listing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
