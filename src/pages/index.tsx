import Lobby from "@/components/Lobby";
import { cars } from "@/data/cars";

export default function Home() {
  return <Lobby cars={cars} />;
}