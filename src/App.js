import {Component} from 'react'
import ButtonItem from './components/ButtonItem'
import GreetingList from './components/GreetingList'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const btnList = [
  {tabId: 'English', displayText: 'English'},
  {tabId: 'Tamil', displayText: 'Tamil'},
  {tabId: 'Telugu', displayText: 'Telugu'},
]

// Replace your code here

class App extends Component {
  state = {activeBtn: btnList[0].tabId}

  btnChanged = tabId => {
    this.setState({activeBtn: tabId})
  }

  render() {
    const {activeBtn, isActive} = this.state
    const filterList = languageGreetingsList.filter(
      each => each.buttonText === activeBtn,
    )
    return (
      <div className="bg-container">
        <h1 className="bg-heading">Multilingual Greetings</h1>
        <ul className="buttonList">
          {btnList.map(each => (
            <ButtonItem
              buttonDetails={each}
              key={each.id}
              btnChanged={this.btnChanged}
              isActive={activeBtn === btnList.tabId}
            />
          ))}
        </ul>
        <ul className="greetingList">
          {filterList.map(each => (
            <GreetingList greetDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
