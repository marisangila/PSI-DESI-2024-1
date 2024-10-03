from water import Water

class Boat(Water):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_uso):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_uso)
