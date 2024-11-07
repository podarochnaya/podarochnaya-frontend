import AuthProvider from './providers/AuthProvider.tsx';
import Router from './routers/Router.tsx';

export const App = () => {
    return (
        <AuthProvider>
            <Router></Router>
        </AuthProvider>
    );
};

export default App;
