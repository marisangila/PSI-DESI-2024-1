from store.box import Box
from vehicles.car import Car
from vehicles.motorcycle import Motorcycle
from vehicles.boat import Boat
from vehicles.plane import Plane
from vehicles.helicopter import Helicopter
from vehicles.truck import Truck
from vehicles.motorboat import Motorboat
import os

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')
    
def main():
    clear()
    box = Box("Carrinho")
    box.display()
    
    vehicles = [
        Car("Ferrari", 2),
        Motorcycle("Harley"),
        Boat("Yacht"),
        Plane("Boeing 747"),
        Helicopter("Apache"),
        Truck("Volvo"),
        Motorboat("Speedboat")
    ]

    box.add_vehicle(vehicles[0])
    box.add_vehicle(vehicles[1])  
    box.add_vehicle(vehicles[2]) 

    box.list_vehicles()

    box.remove_vehicle(vehicles[1])

    box.list_vehicles()
  
if __name__ == "__main__":
    main()