import React from 'react'

class App extends React.Component {
    state = {
        itemList: null
    }
    render() {
        return (
            <div>
                App
            </div>
        )
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then(result => result.json())
            .then(items => {
                this.setState({
                    itemList: items
                })
            })
            setTimeout((() => console.log(this.state.itemList)), 1000)
    }

}


export default App