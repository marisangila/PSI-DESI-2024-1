from air import Air

class Aviao(Air):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, altura_maxima, autonomia):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, altura_maxima)
        self._autonomia = autonomia  # Autonomia em km

    def get_autonomia(self):
        return self._autonomia

    def informacoes(self):
        info = super().informacoes()
        info += f", Autonomia: {self.get_autonomia()} km"
        return info
