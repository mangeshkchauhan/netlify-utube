import React, { useEffect, useState } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	useEffect(() => {
		onTermSubmit("stay");
	}, []);
	const onTermSubmit = async (searchTerm) => {
		const response = await youtube.get("/search", {
			params: {
				q: searchTerm,
			},
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};
	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<SearchBar onTermSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList 
                            onVideoSelect={setSelectedVideo} 
                            videos={videos}
                        />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
