import {WebElArtGallery} from "./WebElArtGallery/WebElArtGallery";
import {photos} from "./WebElArtGallery/PhotoData";

function App() {
  return (
    <div className="App">
      <WebElArtGallery photos={photos}/>
    </div>
  )
}

export default App
