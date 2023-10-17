import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import Properties from "./components/pages/property/Properties";
import Premium from "./components/pages/Premium";
import Contact from "./components/pages/Contact/Contact";
import NotFoundPage from "./components/pages/404page/NotFoundPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./components/form/main/LoginPage";
import { useEffect, useState } from "react";
import Dashboard from "./admin/Page/Dashboard";
import AllPropertyTable from "./admin/Page/AllPropertyTable";
import AddProperty from "./admin/Page/AddProperty/AddProperty";
import Profile from "./admin/Page/Profile";
import SideBar from "./admin/Component/SideBar";
import Preloader from "./components/PreLoader/PreLoader";
import Nri from "./components/pages/Nri/Nri";
import FAQ from "./components/pages/faq/FAQ";
import Residential from "./components/pages/property/Residential/Residential";
import Commercial from "./components/pages/property/Commercial/Commercial";
import Land from "./components/pages/property/Lands/Land";
import AllProperty from "./components/propertiesList/filterProerty/AllProperty";
import PropertyDetails from "./components/pages/property/Residential/PropertyDetails";
import ResidentialBuy from "./components/pages/property/Residential/ResidentialBuy";
import ResidentialRent from "./components/pages/property/Residential/ResidentialRent";
import CommercialRent from "./components/pages/property/Commercial/CommercialRent";
import CommercialBuy from "./components/pages/property/Commercial/CommercialBuy";
import LandSale from "./components/pages/property/Lands/LandSale";
import Sale from "./components/pages/Sale/Sale";
import AddUser from "./admin/Page/AddUser";
import EditProperty from "./admin/Page/AddProperty/EditProperty";

function PrivateRoute({ element, allowedRoles, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes("admin")) {
    return <Navigate to="/" />;
  }

  console.log("Rendering private route...");

  return element;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set loading to false after 2 seconds (adjust as needed)
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="properties" element={<Properties />}>
                <Route index element={<AllProperty />} />
                <Route path="commercial" element={<Commercial />} />
                <Route path="commercial/buy" element={<CommercialBuy />} />
                <Route
                  path="commercial/buy/:id"
                  element={<PropertyDetails />}
                />
                <Route path="commercial/rent" element={<CommercialRent />} />
                <Route
                  path="commercial/rent/:id"
                  element={<PropertyDetails />}
                />
                <Route path="residential" element={<Residential />} />
                <Route path="residential/buy" element={<ResidentialBuy />} />
                <Route
                  path="residential/buy/:id"
                  element={<PropertyDetails />}
                />
                <Route path="residential/rent" element={<ResidentialRent />} />
                <Route
                  path="residential/rent/:id"
                  element={<PropertyDetails />}
                />
                <Route path="land" element={<Land />} />
                <Route path="land/sale" element={<LandSale />} />
                <Route path="land/sale/:id" element={<PropertyDetails />} />
              </Route>
              <Route path="premium" element={<Premium />} />
              <Route path="contact" element={<Contact />} />
              <Route path="nri" element={<Nri />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="sale" element={<Sale />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route
              path="/login"
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/admin"
              element={
                <PrivateRoute
                  element={<SideBar />}
                  allowedRoles={["admin"]}
                  isAuthenticated={isAuthenticated} // List allowed roles for this route
                />
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="allproperty" element={<AllPropertyTable />} />
              <Route path="allproperty/edit/:id" element={<EditProperty />} />
              <Route path="addproperty" element={<AddProperty />} />
              <Route path="profile" element={<Profile />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
