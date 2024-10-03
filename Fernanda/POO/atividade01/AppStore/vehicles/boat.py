from vehicles.vehicle import Vehicle

class Boat(Vehicle):
    def __init__(self,name):
        super().__init__(name, rodas=0)
        
    def infos(self):
        return super().infos()