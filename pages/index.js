import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Feed from "../components/Feed";
import Nearby from "../components/Nearby";
import Recommended from "../components/Recommended";
import SearchBar from "../components/SearchBar";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <>
      <div className="">
        <Categories />
        <Feed />
        <Nearby />

        <Recommended />
      </div>
    </>
  );
}
