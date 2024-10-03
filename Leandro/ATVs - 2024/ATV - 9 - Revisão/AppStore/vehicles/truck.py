from land import Land

class Caminhao(Land):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_carga, tipo_pneu):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_pneu)
        self._tipo_carga = tipo_carga

    def get_tipo_carga(self):
        return self._tipo_carga

    def informacoes(self):
        info = super().informacoes()
        info += f", Tipo de Carga: {self.get_tipo_carga()}"
        return info
