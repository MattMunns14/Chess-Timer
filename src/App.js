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
      turn: '',
      disableOne: false,
      disableTwo: false,
      gameOn: false,
      endGame: false,
      buttonText: 'Start Game',
      buttonType: 'default',
      intervalId: NaN,
      
    };
    this.updateGameTimeMinutes = this.updateGameTimeMinutes.bind(this);
    this.updateGameTimeSeconds = this.updateGameTimeSeconds.bind(this);
    this.startTurn = this.startTurn.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset(){
    clearInterval(this.state.intervalId);
    this.setState({
      playerOneMinutes: 0,
      playerOneSeconds: 0,
      playerTwoMinutes: 0,
      playerTwoSeconds: 0,
      turn: '',
      disableOne: false,
      disableTwo: false,
      gameOn: false,
      endGame: false,
      buttonText: 'Start Game',
      buttonType: 'default',
      intervalId: NaN,
      

    })
  }
  startTurn(player){
    if(!this.state.gameOn){
      let myInterval = setInterval(this.tick,1000)
      
      this.setState({
        gameOn:true,
        buttonText: 'End Turn',
        buttonType: 'primary',
        turn: player,
        intervalId: myInterval
      })
      if(player === 'Player 1'){
        this.setState({
          disableTwo:true,
        })
      }
      else{
        this.setState({
          disableOne: true,
        })
      }
      
      
    }
    else if(this.state.gameOn){
      if(player === 'Player 1'){
        this.setState({
          disableOne: true,
          disableTwo: false,
          turn: 'Player 2',
        })
      } 
      else{
        this.setState({
          disableOne: false,
          disableTwo: true,
          turn: 'Player 1',
        })
      }
      }

  }

  tick(timer){
    if (this.state.gameOn){
      if (this.state.turn === 'Player 1'){
          var newSeconds = this.state.playerOneSeconds;
          var newMinutes = this.state.playerOneMinutes;
          
  
          if (newSeconds <60 && newSeconds>0){
            newSeconds--;
            
            }
          else if (newSeconds===0){
            if(newMinutes === 0){
              console.log('Game Over');
              this.setState({
                gameOn: false,
                endGame: true,
              })
            }
            else{
              newMinutes--;
              newSeconds = 59;
            }
          }
          
          this.setState({
            playerOneMinutes: newMinutes,
            playerOneSeconds: newSeconds,
          })
      }
      else if(this.state.turn === 'Player 2'){
        var newSeconds = this.state.playerTwoSeconds;
        var newMinutes = this.state.playerTwoMinutes;

        if (newSeconds <60 && newSeconds>0){
          newSeconds--;
          
          }
        else if (newSeconds===0){
          if(newMinutes === 0){
            console.log('Game Over');
            this.setState({
              gameOn: false,
              endGame: true,
            })
          }
          else{
            newMinutes--;
            newSeconds = 59;
          }
        }
        
        this.setState({
          playerTwoMinutes: newMinutes,
          playerTwoSeconds: newSeconds,
        })
      } 
  }}

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
    if (!this.state.endGame){
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
                        gameOn = {this.state.gameOn}
                        />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper><Clock name={'Player 1'} 
                            minutes={this.state.playerOneMinutes}
                            seconds={this.state.playerOneSeconds}
                            startTurn={this.startTurn}
                            disabledToggle = {this.state.disableOne}
                            buttonText = {this.state.buttonText}
                            buttonType = {this.state.buttonType}/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper><Clock name={'Player 2'} 
                            minutes={this.state.playerTwoMinutes}
                            seconds={this.state.playerTwoSeconds}
                            startTurn={this.startTurn}
                            disabledToggle = {this.state.disableTwo}
                            buttonText = {this.state.buttonText}
                            buttonType = {this.state.buttonType}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        </div>
      );
    }
    else{
    return(
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
                          startTurn={this.startTurn}
                          disabledToggle = {this.state.disableOne}
                          buttonText = {this.state.buttonText}
                          buttonType = {this.state.buttonType}/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper><Clock name={'Player 2'} 
                          minutes={this.state.playerTwoMinutes}
                          seconds={this.state.playerTwoSeconds}
                          startTurn={this.startTurn}
                          disabledToggle = {this.state.disableTwo}
                          buttonText = {this.state.buttonText}
                          buttonType = {this.state.buttonType}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Box p={1}>
              {this.state.turn} loses.
              </Box>
              <Box p={1}>
              <Button variant="contained" color="secondary" onClick={this.reset}>Reset</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </div>
    );
    
  }
  }

}


class Clock extends React.Component{
  
  render(){
    return(
      <div className='Clock'>
      <Typography variant="h6">
        {this.props.name}
      </Typography>
      <Box p={1}>
        <div>
          Time Remaining: {this.props.minutes}:{this.props.seconds}
        </div>
      </Box>
      <Box p={1}>
        <Button variant="contained" 
                color={this.props.buttonType} 
                className='Start' 
                onClick={() => this.props.startTurn(this.props.name)}
                disabled = {this.props.disabledToggle}>
                {this.props.buttonText}
                
                </Button>
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
               onChange = {props.onChangeMinutes}
               disabled={props.gameOn}/> Minutes
      </Box>

      <Box p={2}>
        <Input className='SetTimeInputSeconds' 
               type='number' 
               placeholder={props.seconds.toString()}
               onChange={props.onChangeSeconds}
               disabled={props.gameOn}/> Seconds
      </Box>

    </Typography>

  </div>
 );
}

export default App;
