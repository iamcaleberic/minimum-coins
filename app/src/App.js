import React, { Component } from 'react';
import { Container, List, Label, Divider, Message } from 'semantic-ui-react';

import linkState  from './util/linked_state'
import { parseInput } from './util/parse_input'
import { handleCoin  } from './util/handle_coin'

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sterling: 0,
      hidden: true,
      error: false,
      'two_pounds':  0,
      'one_pound':  0,
      'fifty_pence': 0,
      'twenty_pence': 0,
      'ten_pence': 0,
      'five_pence':  0,
      'two_pence':  0,
      'one_pence':  0
    }

    //  bind this scope to function
    this.onKeyUp     = this.onKeyUp.bind(this)
    this.handleValue = this.handleValue.bind(this)
  }

  handleValue(coins){
    // set state from returned coins array
    this.setState({
      'two_pounds':  coins[0],
      'one_pound':  coins[1],
      'fifty_pence': coins[2],
      'twenty_pence': coins[3],
      'ten_pence': coins[4],
      'five_pence':  coins[5],
      'two_pence':  coins[6],
      'one_pence':  coins[7]
    })
  }

  onKeyUp(e){
    e.preventDefault()
    let state = this.state
    let value = parseInput(state.sterling)
    // display error Message
    if (value === 'invalid input'){
      this.setState({ hidden: false })
    } else {
      let coins = handleCoin(value)
      this.setState({ hidden: true })
      this.handleValue(coins)
    }
  }


  render() {
    let { sterling } = this.state
    let state = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BBC Africa Test</h1>
        </header>
        <Container >
          <div className='ui small input'>
            <Label pointing='right' size='small'>Please input the amount: </Label>
            <Divider />
            <input type='text' value={sterling} onChange={linkState(this, 'sterling')}  onKeyUp= { this.onKeyUp }/>
          </div>
        </Container>
        <Divider/>
        <Container text>
          <List divided selection>
            <List.Item>
              <Label circular horizontal  color='black'>{state.two_pounds}</Label>
                £2 coins
            </List.Item>
            <List.Item>
              <Label circular horizontal color='black'>{state.one_pound}</Label>
              £1 coins
             </List.Item>
             <List.Item>
               <Label circular horizontal color='black'>{state.fifty_pence}</Label>
               50p coins
             </List.Item>
             <List.Item>
               <Label circular horizontal color='black'>{state.twenty_pence}</Label>
               20p coins
             </List.Item>
             <List.Item>
               <Label circular horizontal color='black'>{state.ten_pence}</Label>
               10p coins
             </List.Item>
             <List.Item>
               <Label circular horizontal color='black'>{state.five_pence}</Label>
               5p coins
             </List.Item>
             <List.Item>
               <Label circular horizontal color='black'>{state.two_pence}</Label>
               2p coins
             </List.Item>
             <List.Item>
               <Label circular horizontal color='black'>{state.one_pence}</Label>
               1p coins
             </List.Item>
           </List>
        </Container>

        <Message hidden={state.hidden} negative>
         <Message.Header>Invalid Input</Message.Header>
         <p>Please <b>Check</b> Your input and try again</p>
       </Message>

      </div>
    );
  }
}

export default App;
