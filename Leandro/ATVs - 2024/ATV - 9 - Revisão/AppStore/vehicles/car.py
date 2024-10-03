from land import Land

class Car(Land):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_combustivel, tipo_pneu):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_pneu)
        self._tipo_combustivel = tipo_combustivel

    def get_tipo_combustivel(self):
        return self._tipo_combustivel

    def informacoes(self):
        info = super().informacoes()
        info += f", Tipo de Combustível: {self.get_tipo_combustivel()}"
        return info
