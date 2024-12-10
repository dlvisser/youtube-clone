import "./MastHead.css";
import SearchBar from "./searchbar/SearchBar.tsx";
import VoiceSearch from "./voicesearch/VoiceSearch.tsx";

export default function MastHead() {
  return (<div className="masthead-container">
        <SearchBar/>
        <VoiceSearch/>
  </div>
    )
}
