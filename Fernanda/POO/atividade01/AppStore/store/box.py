class Box:
    def __init__(self, name):
        self.__name = name  
        self.__vehicles = []

    def display(self):
        print(self.__name)

    def get_name(self):
        return self.__name 

    def set_name(self, name):
        self.__name = name 

    def add_vehicle(self, vehicle):
        self.__vehicles.append(vehicle)

    def remove_vehicle(self, vehicle):
        self.__vehicles.remove(vehicle)

    def list_vehicles(self):
        if not self.__vehicles:
            print("Seu carrinho está vazio")
        else:
            for vehicle in self.__vehicles:
                print(vehicle.infos() + "\n")
