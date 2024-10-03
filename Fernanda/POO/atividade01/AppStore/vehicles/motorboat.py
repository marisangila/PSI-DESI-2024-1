from vehicles.boat import Boat

class Motorboat(Boat):
    def __init__(self, name):
        super().__init__(name)

    def infos(self):
        return super().infos()
