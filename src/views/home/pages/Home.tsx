import { useEffect } from "react";
import { setNavigation } from "@/store/slices/navigation.slice";
import { getHomeNavigation } from "@/configs/navigation.config";
import { useDispatch } from "@/store";

function Home() {
    const dispatch = useDispatch();

                useEffect(() => {
                    dispatch(setNavigation(getHomeNavigation()))
                }, [])
                

  return (
    <section className="flex justify-center items-center">
      <h1>Welcome to RapidX</h1>
    </section>
  );
}

export default Home;
