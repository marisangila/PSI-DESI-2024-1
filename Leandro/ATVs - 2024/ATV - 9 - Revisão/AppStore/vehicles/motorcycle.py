from land import Land

class Motocicleta(Land):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_pneu="pneu de motocicleta")
        self._tipo = tipo

    def get_tipo(self):
        return self._tipo

    def informacoes(self):
        info = super().informacoes()
        info += f", Tipo: {self.get_tipo()}"
        return info
