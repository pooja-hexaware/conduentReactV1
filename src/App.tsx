import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import routes from './configs/routes.config';
import ErrorFallback from './common/pages/Error';
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const GlobalRoutes = () => useRoutes(routes());

function App() {
    return (<ReduxProvider store={store}>

        <Router>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <GlobalRoutes></GlobalRoutes>
          </ErrorBoundary>
        </Router>
      
    </ReduxProvider>)
}

export default App;
