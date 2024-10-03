from air import Air

class Helicoptero(Air):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, altura_maxima):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, altura_maxima)