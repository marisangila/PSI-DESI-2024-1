from vehicles.vehicle import Vehicle

class Car(Vehicle):
    def __init__(self, name, portas):
        super().__init__(name, rodas=4)
        self.__portas = portas  

    def get_portas(self):
        return self.__portas  

    def set_portas(self, portas):
        self.__portas = portas  

    def infos(self):
        return f"{super().infos()}\nPortas: {self.__portas}"