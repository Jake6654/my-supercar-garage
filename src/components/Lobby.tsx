import { Car } from "@/data/cars";
import Link from "next/link";

interface LobbyProps {
  cars: Car[];
}

export default function Lobby({ cars }: LobbyProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">My Supercar Garage</h1>
        <p className="text-xl text-gray-400">A collection of beautiful 3D car models. Click on a car to see it in 3D.</p>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <Link href={`/cars/${car.slug}`} key={car.name}>
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                <img src={car.thumbnail} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; 2025 My Supercar Garage. All Rights Reserved.</p>
      </footer>
    </div>
  );
}