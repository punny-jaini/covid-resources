import {useState, useEffect} from 'react';
import { Layout } from 'antd';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import './App.css';
import 'antd/dist/antd.css';
import Home from './Home';
import Contact from './Contact';
import Seeker from './Seeker';
import Volunteer from './Volunteer';
import Admin from './Admin';
import Update from './Update';
import Dashboard from './Dashboard'
import { getHelpers, getUnverified, getLinks } from './actions';
import Resources from './resources';
import Navbar from './components/Navbar';

const { Content, Footer } = Layout;

const App = () => {
  const [help, setHelp] = useState({});
  const [unverified, setUnverified] = useState({});
  const [links, setLinks] = useState([]);

  useEffect(() => getHelpers(setHelp), [setHelp]);
  useEffect(() => getUnverified(setUnverified), [setUnverified]);
  useEffect(() => getLinks(setLinks), [setLinks]);

  return (
  <BrowserRouter>
    <Layout className="layout" style={{minHeight: '100vh'}}>
      <Navbar />
      <Content style={{ padding: '0 2%'}}>
        <Switch>
          <Route path="/resources">
              <Resources resources={links}/>
          </Route>
          <Route path="/about">
              <Contact />
          </Route>
          <Route path="/seeker">
              <Seeker queries={help}/>
          </Route>
          <Route path="/volunteer">
              <Volunteer />
          </Route>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/update">
              <Update queries={help} unchecked={unverified} functions={{v: setHelp, u: setUnverified}} />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'white', marginTop: '10px', color: '#646464'}}>
        Covid Khoj ©2021 Created by Lakshay Agrawal
      </Footer>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
