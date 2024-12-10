import "./MastHead.css";
import SearchBar from "./searchbar/SearchBar.tsx";
import VoiceSearch from "./voicesearch/VoiceSearch.tsx";
import ProfileBlock from "./profileblock/ProfileBlock.tsx";
import UtilsHeader from "./utilsheader/UtilsHeader.tsx";

export default function MastHead() {
  return (<div className="masthead-container">
          <UtilsHeader/>
          <div className="search-container">
              <SearchBar/>
              <VoiceSearch/>
          </div>
          <ProfileBlock/>
  </div>
    )
}
