import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
const App = () => {
    const [page, setPage] = React.useState('home');
    const renderPage = () => {
        switch (page) {
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default: return <Home />;
        }
    };
    return (
        <div>
            <Header setPage={setPage} />
            {renderPage()}
            <Footer />
        </div>
    );
};
export default App;