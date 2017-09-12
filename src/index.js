import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import { debounce } from 'lodash';

const API_KEY = 'AIzaSyB5KaynJRVGVli_nXbtDgVRTFaKHtP_kI8';

// Create a new component. This component should produce some html
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term }, videos => {
            this.setState({ videos, selectedVideo:videos[0] });
        });
    };

    render() {
        return (
        <div>
            <SearchBar onSearchTermChange={debounce( term => { this.videoSearch(term)}, 300)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={ this.state.videos } />
        </div>
        );
    }
};


// Take this component's generated HTML and put it on the page (in the DOM)
// ReactDOM.render(<App> </App>); this is the same
// We need to pass one instance of the App class :)
ReactDOM.render(<App />, document.querySelector('.container'));


// Downwords data flow:
// Only the most parent component in the application should be responsive to fetch data
