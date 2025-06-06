import { useEffect, useState } from 'react';
import vehiclesData from '../data/vehiclesData';
import VehicleCard from '../components/VehicleCard';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehiclesData);
  }, []);

  return (
    <main className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen text-orange-900">
      <section className="max-w-7xl mx-auto px-6">
        <h1
          className="text-5xl font-extrabold text-center mb-16
            bg-gradient-to-r from-yellow-600 via-orange-600 to-orange-700
            text-transparent bg-clip-text animate-text-flicker"
        >
          Kutch Tourism Vehicle Rental Plan
        </h1>

        {/* Horizontal scroll section */}
        <div
          className="flex space-x-6 overflow-x-auto scrollbar-hide mb-16 px-6 scroll-container"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {vehicles.map(vehicle => (
            <div
              key={vehicle.id}
              className="flex-shrink-0 w-[90vw] max-w-md scroll-snap-align-start"
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <style>{`
        /* Hide scrollbar for modern browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Add scroll padding for smooth snap & no cut edges */
        .scroll-container {
          scroll-padding-left: 1.5rem;
          scroll-padding-right: 1.5rem;
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 22%, 24%, 55% { opacity: 0.6; }
        }
        .animate-text-flicker {
          animation: flicker 3s infinite;
        }
      `}</style>
    </main>
  );
};

export default Vehicles;
