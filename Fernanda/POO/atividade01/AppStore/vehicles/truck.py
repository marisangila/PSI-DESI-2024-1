from vehicles.vehicle import Vehicle

class Truck(Vehicle):
    def __init__(self, name):
        super().__init__(name, rodas=6)

    def infos(self):
        return super().infos()
