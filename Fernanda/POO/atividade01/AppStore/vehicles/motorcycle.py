from vehicles.vehicle import Vehicle

class Motorcycle(Vehicle):
    def __init__(self, name):
        super().__init__(name, rodas=2) 
        
    def infos(self):
        return super().infos()