import Categories from "../components/Categories";
import Feed from "../components/Feed";
import Nearby from "../components/Nearby";
import Recommended from "../components/Recommended";

export default function Home() {
  return (
    <div>
      <Categories />
      <Feed />
      <Nearby />
      <Recommended />
    </div>
  );
}
