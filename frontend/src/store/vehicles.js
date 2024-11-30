import {data} from "react-router-dom"
import {create} from "zustand"

export const useVehicleStore = create((set) => ({
    vehicles: [],
    setVehicles: (vehicles) => set({vehicles}),
    createVehicle: async(newVehicle) => {
        try {
            const baseUrl = process.env.NODE_ENV === 'development' 
                ? 'http://localhost:5000' 
                : '';
            
            console.log('Sending vehicle data:', newVehicle);
            console.log('To URL:', `${baseUrl}/api/vehicles`);
            
            const res = await fetch(`${baseUrl}/api/vehicles`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newVehicle)
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Server response:', errorText);
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            
            if (data.success) {
                set((state) => ({vehicles: [...state.vehicles, data.data]}));
                return {success: true, message: "Vehicle created successfully."};
            } else {
                return {success: false, message: data.message || "Failed to create vehicle"};
            }
        } catch (error) {
            console.error("Error creating vehicle:", error);
            return {success: false, message: error.message};
        }
    },
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

