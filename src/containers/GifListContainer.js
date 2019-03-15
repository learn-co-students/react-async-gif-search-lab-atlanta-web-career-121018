import React from 'react';

import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

const URL = 'http://api.giphy.com/v1/gifs/search?q='
const apiKey = '&api_key=dc6zaTOxFJmzC&rating=g&limit=10'

class GifListContainer extends React.Component {

    state = {
        searchWord: 'Austin Powers',
        gifs: []
    }

    handleSearch = (event) => {
        this.setState({ searchWord: event.target.value })
    }

    fetchGIFs = (event) => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchWord).concat(apiKey))
            .then(res => res.json())
            .then(({ data }) => this.setState({ gifs: data.map((gif) => ({url: gif.images.original.url }) ) }));
            // .then(res => this.setState({ reviews: res.results }))
    }

    componentDidMount() {
        fetch(URL.concat(this.state.searchWord).concat(apiKey))
            .then(res => res.json())
            .then(({ data }) => this.setState({ gifs: data.map((gif) => ({ url: gif.images.original.url })) }));
    }

    render() {
        return (

            <div>
                <GifSearch updateSearchTerm={this.handleSearch} fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;