import VideoStreamWidget from './VideoStreamWidget';
import Widget from './Widget';

import '../styles/App.css';

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
          <Col>
            <Widget heading="Driveway">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img src="http://192.168.1.137:8081/101/stream/" class="img-fluid" alt="Responsive image" />
              </Grid>
            </Widget>
          </Col>
          <Col>
            <Widget heading="Garage">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img src="http://192.168.1.137:8081/2/stream/" class="img-fluid" alt="Responsive image" />
                {/* <video src="http://192.168.1.104:8160/" class="img-fluid" alt="Responsive image" type="video/mp4"/> */}
              </Grid>
            </Widget>
          </Col>
          <Col>
            <Widget heading="Front Door">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img src="http://192.168.1.137:8081/2/stream/" class="img-fluid" alt="Responsive image"  />
              </Grid>
            </Widget>
          </Col>
          <Col>
            <Widget heading="Garage 2">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img src="http://192.168.1.137:8081/103/stream/" class="img-fluid" alt="Responsive image" />
              </Grid>
            </Widget>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
