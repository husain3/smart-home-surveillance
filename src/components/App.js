import VideoStreamWidget from './VideoStreamWidget';
import Widget from './Widget';

import '../styles/App.css';

import { feeds } from "./VideoAddresses";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Grid from '@material-ui/core/Grid';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Container>
        <Row xs={1} md={1} xl={2}>
          {feeds.videoAddresses.map((feed, i) => {
            return (
              <Col>
                <Widget heading={feed.videoTitle}>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <img src={feed.videoUrl} class="img-fluid" alt="Responsive image" />
                  </Grid>
                </Widget>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
