import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 
import Container from '@material-ui/core/Container'   
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';



import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerOneMinutes: 0,
      playerOneSeconds: 0,
      playerTwoMinutes: 0,
      playerTwoSeconds: 0,
      turn: 'One'
    };
    this.updateGameTimeMinutes = this.updateGameTimeMinutes.bind(this);
    this.updateGameTimeSeconds = this.updateGameTimeSeconds.bind(this);
    this.startTurn = this.startTurn.bind(this);
  }
  startTurn(player){
    console.log(player);
  }
  updateGameTimeMinutes(e){
    this.setState({
      playerOneMinutes: e.target.value,
      playerOneSeconds: this.state.playerOneSeconds,
      playerTwoMinutes: e.target.value,
      playerTwoSeconds: this.state.playerTwoSeconds,
      turn: this.state.turn,

    })
  };
  updateGameTimeSeconds(e){
    this.setState({
      playerOneMinutes: this.state.playerOneMinutes,
      playerOneSeconds: e.target.value,
      playerTwoMinutes: this.state.playerTwoMinutes,
      playerTwoSeconds: e.target.value,
      turn: this.state.turn,

    })
  }
  render(){
    return (
      <div className="App">
      <Container maxWidth='sm' >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <SetTime title={'Time Per Turn'} 
                       minutes={this.state.playerOneMinutes} 
                       seconds={this.state.playerOneSeconds}
                       onChangeMinutes={this.updateGameTimeMinutes}
                       onChangeSeconds={this.updateGameTimeSeconds}
                       />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper><Clock name={'Player 1'} 
                          minutes={this.state.playerOneMinutes}
                          seconds={this.state.playerOneSeconds}
                          startTurn={this.startTurn}/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper><Clock name={'Player 2'} 
                          minutes={this.state.playerTwoMinutes}
                          seconds={this.state.playerTwoSeconds}
                          startTurn={this.startTurn}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </div>
    );
  }

}


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      secondsRemaining: this.props.seconds,
      minutesRemaining: this.props.minutes,
    }
  }
  render(){
    return(
      <div className='Clock'>
      <Typography variant="h6">
        {this.props.name}
      </Typography>
      <Box p={1}>
        <div>
          Time Remaining: {this.state.minutesRemaining}:{this.state.secondsRemaining}
        </div>
      </Box>
      <Box p={1}>
        <Button variant="contained" color="primary" className='Start' onClick={() => this.props.startTurn(this.props.name)}>Begin Turn</Button>
      </Box>
    </div>
    )
  }
}


function SetTime(props){
 return(
  <div className='SetTime'>
    <Typography variant="h4" component="h2">
      {props.title}
    </Typography>

    <Typography variant="h5" component="h2">

      <Box p={2}>
        <Input className='SetTimeInputMinutes' 
               type='number' 
               placeholder={props.minutes.toString()}
               onChange = {props.onChangeMinutes}/> Minutes
      </Box>

      <Box p={2}>
        <Input className='SetTimeInputSeconds' 
               type='number' 
               placeholder={props.seconds.toString()}
               onChange={props.onChangeSeconds}/> Seconds
      </Box>

    </Typography>

  </div>
 );
}

export default App;
