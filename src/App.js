import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import Landing from "pages/Landing";
import OurStory from "pages/OurStory";
import ForSchools from "pages/ForSchools";

// Font assets
import theme from "./assets/theme";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

// Material UI Theme
import { ThemeProvider } from "@mui/material/styles";

import app from "./assets/firebaseConfig";
import { getAnalytics } from "firebase/analytics";

getAnalytics(app);

// import firebase from "./assets/firebaseConfig";
// firebase.analytics();
// analytics.logEvent("Page View");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Landing {...props} />} />
          <Route
            path="/ourstory"
            exact
            render={(props) => <OurStory {...props} />}
          />
          <Route
            path="/forschools"
            exact
            render={(props) => <ForSchools {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
