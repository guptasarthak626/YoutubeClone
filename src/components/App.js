import React , { useState , useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube'
import VideoList from './VideoLsit';
import VideoDetail from './VideoDetail';
const App = () =>{
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState(null);

    useEffect(() => {
        handleSubmit('');
    }, []);

    const handleSubmit = async term =>{
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        // console.log(response);

        setVideos(response.data.items);
        setSelectedVideos(response.data.items[0]);
    }

    const onVideoSelect = video =>{
        console.log("app", video)
        setSelectedVideos(video);
    }

    return(
        <div className="ui container">
            <SearchBar handleSubmit={handleSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideos} />
                    </div>
                    <div className={"five wide column"}>
                        <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;