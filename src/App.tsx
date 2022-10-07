import './App.css';
import rawData from './data';
import SiteContext from './SiteContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const Data = rawData[0];

function App() {
  return (
    <SiteContext.Provider value={Data}>
      <div className="App">
        <Header/>

        <Main />

        <Footer />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
