import "./VideoItem.css"

const VideoItem = ({video})=>{
    return (
        <div className="video-item item">
            <img 
                src={video.snippet.thumbnails.medium.url} 
                className="ui image" 
                alt={video.snippet.title}
            />
            <div className="content">
                <h4 className="header">{video.snippet.title}</h4>
            </div>
        </div>
    )
}

export default VideoItem;