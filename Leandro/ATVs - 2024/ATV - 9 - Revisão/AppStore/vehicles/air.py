from vehicle import Vehicle

class Air(Vehicle):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, altura_maxima):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade)
        self._altura_maxima = altura_maxima

    def get_altura_maxima(self):
        return self._altura_maxima

    def informacoes(self):
        info = super().informacoes()
        info += f", Altura Máxima: {self.get_altura_maxima()} m"
        return info
