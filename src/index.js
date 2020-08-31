import './index.css'
import Router from 'preact-router'
import Home from './routes/Home'
import Privacy from './routes/Privacy'
import PrivacyList from './routes/PrivacyList'

export default () => (
  <div id='app'>
    <Router>
      <Privacy path='/privacy-policy/shufflepong' app='Shufflepong' />
      <Privacy path='/privacy-policy/tubesnake' app='Tubesnake' />
      <Privacy path='/privacy-policy/fish-in-a-watch' app='Fish in a Watch' />
      <PrivacyList path='/privacy-policy' />
      <Home default />
    </Router>
  </div>
)
