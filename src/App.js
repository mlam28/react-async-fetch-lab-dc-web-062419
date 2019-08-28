// create your App component here
import React from 'react'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    handlePeople = (newPeeps) => {
        debugger
        this.setState({
            people: newPeeps
        })
    }

    renderPeople = () => {
       return this.state.people.map((person, id) => <h1 key={id}> {person.name}</h1>)
    }

    componentDidMount(){
        fetch(' http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => {console.log(data); this.handlePeople(data.people)})
    }

    render() {

        return(
            <div>{this.renderPeople()}</div>
        )
    }
}


export default App;