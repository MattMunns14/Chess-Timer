import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import './App.css';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote: []
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  getNewQuote(){
    fetch('https://quota.glitch.me/random', 
  )
    .then(res => res.json())
    .then((data) => {
      this.setState({ quote: data })
    })
    .catch(console.log)


  }
  componentDidMount() {
    fetch('https://quota.glitch.me/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ quote: data })
      
    })
    .catch(console.log)
  }
  render(){
    return (
      <Container maxWidth="sm">
        <Box m={2} p={3}>
      <Card>

      <div className="App">
        <div className = "quoteBox">
          <QuoteBox quote={this.state.quote.quoteText} author={this.state.quote.quoteAuthor}/>
          <NewQuote handleClick = {this.getNewQuote}/>
        </div>

      </div>
      </Card>
      </Box>
      </Container>
    );
  }
}

export default App;

function QuoteBox(props){
return (
  <div className="quoteBox">
          <Typography variant="h5" component="h2">
          {props.quote}
          </Typography>
          <Typography variant="h6" component="h2">
          - {props.author}
          </Typography>
  </div>);
}

function NewQuote(props){
  return (
    <div className = "newQuote">
      <Button variant="contained" color="primary" onClick = {props.handleClick}>
        New Quote</Button>
    </div>
  )
}
