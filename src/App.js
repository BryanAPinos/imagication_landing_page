import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import OurStory from 'pages/OurStory';
import ForSchools from 'pages/ForSchools';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/ourstory" component={OurStory} />
            <Route exact path="/forschools" component={ForSchools} />
            <Redirect from="*" to="/" />

        </Switch>
    );
}

export default App;
