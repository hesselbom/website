import './index.css'
import Avatar from './components/Avatar'
import Card from './components/Card'
import Grid from './components/Grid'

export default () => (
  <div id='app'>
    <Avatar />
    <h1>Viktor Hesselbom</h1>
    <h2>Web, iOS, Android, Apple Watch Developer</h2>
    <Grid>
      <Card
        title='Shufflepong'
        img={require('./images/shufflepong.png').default}
        href='https://apps.apple.com/us/app/shufflepong/id1527268585'
        year='2020'
      />
      <Card
        title='Tubesnake'
        img={require('./images/tubesnake.png').default}
        href='https://apps.apple.com/se/app/tubesnake/id1484342417'
        year='2020'
      />
      <Card
        title='Fish in a Watch'
        img={require('./images/fishinawatch.png').default}
        href='https://apps.apple.com/us/app/fish-in-a-watch/id1454215856'
        year='2019'
      />
    </Grid>
  </div>
)
