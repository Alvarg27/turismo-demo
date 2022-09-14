import Banner from "../components/Banner";
import Recommended from "../components/Recommended";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div>
        <Recommended />
      </div>
    </div>
  );
}
