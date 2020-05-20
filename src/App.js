import React from 'react';
import {fetchAdvice} from './api';
import './App.css';

class App extends React.Component {
    state = { advice: ''};

    componentDidMount() {
        this.getAdvice();
    }
    getAdvice = async() => {
        const data = await fetchAdvice();
        console.log(data);
        this.setState({advice: data});
    }
    render() {
        const {advice} = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.getAdvice.bind(this)}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App