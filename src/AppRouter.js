import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter