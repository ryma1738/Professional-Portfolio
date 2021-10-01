import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Container } from 'react-bootstrap';
import './styles.css';

function App() {

  const tabs =['About', 'Portfolio', 'Contact', 'Resume']

  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <Container fluid className="gradient-bg p-0">
      <header>
        <Navigator 
        tabs={tabs} 
        setCurrentTab={setCurrentTab} 
        currentTab={currentTab}>
        </Navigator>
      </header>
      <main className="m-0 p-0">
        {
        currentTab === 'About' ? <About></About> :
        currentTab === 'Portfolio' ? <Portfolio></Portfolio> : 
        currentTab === 'Contact'? <Contact></Contact> :
        currentTab === 'Resume' ? <Resume></Resume> : <div></div>
        }
      </main>
      <Footer></Footer>
    </Container>
  );
}

export default App;
