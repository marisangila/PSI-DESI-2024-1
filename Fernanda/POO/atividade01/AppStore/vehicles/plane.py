from vehicles.vehicle import Vehicle

class Plane(Vehicle):
    def __init__(self, name):
        super().__init__(name, rodas=3)
        
    def infos(self):
        return super().display_info()