import {Link, Outlet, Route, Routes,} from 'react-router-dom';
import Private from "./Private/Private";
import RequireAuth from "./RequireAuth/RequireAuth";
import {useEffect, useMemo, useState} from "react";
import {KeycloakContext} from "./KeycloakContext/KeycloakContext";
import {initKeycloak} from "./Initialization/Initialization";
import {KeycloakInstance, KeycloakTokenParsed} from "keycloak-js";

export function App() {

  const [keycloak, setKeycloak] = useState<KeycloakInstance>();
  const [tokenParsed, setTokenParsed] = useState<KeycloakTokenParsed>();

  useEffect(() => {
    initKeycloak().then(keycloak => {
      setKeycloak(keycloak);
      setTokenParsed(keycloak.tokenParsed);
    });
  }, []);

  const children = useMemo(
    () => (
      <>
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <div role="navigation">

          <h2>Hello to Keycloak react app</h2>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/private">Private</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
            <li>
              <Link to="/page-3">Page 3</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Some/>}
          />
          <Route element={<RequireAuth/>}>
            <Route
              path="/private"
              element={<Private/>}
            />
          </Route>
          <Route
            path="/page-2"
            element={<Page2/>}
          />
          <Route element={<AnOutlet/>}>
            <Route
              path="/page-3"
              element={<Page3/>}
            />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/* END: routes */}
      </>
    ), []);

  return (
    <KeycloakContext.Provider value={{keycloak, tokenParsed, setTokenParsed}}>
      {keycloak && children}
    </KeycloakContext.Provider>
  );
}

const NotFound = () => {
  return <h3>NotFound</h3>;
}

const Page2 = () => (
  <div>
    <Link to="/">Click here to go back to root page from page 2.</Link>
  </div>
);

const Page3 = () => (
  <div>
    <Link to="/">Click here to go back to root page from page 3.</Link>
  </div>
);

const AnOutlet = () => {
  console.log('AnOutlet');

  useEffect(() => {
    console.log('running effect from AnOutlet');
  }, []);

  return (
    <Outlet/>
  );
};

const Some = () => (
  <div>
    This is the generated root route.{' '}
    <Link to="/page-2">Click here for page 2.</Link>
  </div>
)

export default App;
