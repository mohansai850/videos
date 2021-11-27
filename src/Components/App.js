import React from 'react'
import youtube from '../apis/youtube';
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    appSubmit = term => {
        youtube.get('/search', {
            params: {
                q: term
            }
        }).then(res => {
            this.setState({videos: res.data.items, selectedVideo: res.data.items[0]})
        })
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    componentDidMount() {
        this.appSubmit('latest telugu songs')
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onappSubmit={this.appSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;