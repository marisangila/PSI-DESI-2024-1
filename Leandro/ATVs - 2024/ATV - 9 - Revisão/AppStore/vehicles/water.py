from vehicle import Vehicle

class Water(Vehicle):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_uso):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade)
        self._tipo_uso = tipo_uso

    def get_tipo_uso(self):
        return self._tipo_uso

    def informacoes(self):
        info = super().informacoes()
        info += f", Tipo de Uso: {self.get_tipo_uso()}"
        return info
