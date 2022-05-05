import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from 'pages/Landing';
import OurStory from 'pages/OurStory';
import ForSchools from 'pages/ForSchools';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact render={(props) => <Landing {...props} />} />
                <Route path='/ourstory' exact render={(props) => <OurStory {...props} />} />
                <Route path='/forschools' exact render={(props) => <ForSchools {...props} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
