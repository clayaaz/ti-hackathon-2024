import {data} from "react-router-dom"
import {create} from "zustand"

export const useVehicleStore = create((set) => ({
    vehicles: [],
    setVehicles: (vehicles) => set({vehicles}),

    fetchVehicles: async() => {
        try {
            // Use explicit URL in development
            const baseUrl = process.env.NODE_ENV === 'development' 
                ? 'http://localhost:5000' 
                : '';
            
            const res = await fetch(`${baseUrl}/api/vehicles`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            set({vehicles: data.data});
        } catch (error) {
            console.error("Error fetching vehicles:", error);
            set({vehicles: []});
        }
    }
}));

