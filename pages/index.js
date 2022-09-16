import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Nearby from "../components/Nearby";
import Recommended from "../components/Recommended";
import SearchBar from "../components/SearchBar";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <>
      <div className="">
        <VideoCard />
        <div className=" h-[50px] flex border-t-[1px]  border-b-[1px] mt-4">
          <p className="m-auto text text-indigo-700">Ver más videos</p>
        </div>
        <Nearby />
        <Categories />
        <Recommended />
      </div>
    </>
  );
}
