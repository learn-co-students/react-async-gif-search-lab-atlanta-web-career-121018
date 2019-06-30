import React from 'react';

class GifSearch extends React.Component {
    render(){
        return (
            <div>
                <form onSubmit={this.props.fetchGIFs}>
                        <label>Search Gifs: </label>
                        <input id='search' type='text' onChange={this.props.updateSearchTerm} />
                        <button type="submit">Search!</button>
                    </form>
            </div>
        )
    }
}
export default GifSearch;


// import React, { Component } from 'react'
// class GifSearch extends Component {
//     state = {
//         query: ""
//     }
//     handleSubmit = event => {
//         event.preventDefault()
//         this.props.fetchGIFs(this.state.query)
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" value={this.state.query} onChange={event => this.setState({ query: event.target.value })} />
//                 </form>
//             </div>
//         )
//     }
// }
// export default GifSearch