from vehicle import Vehicle

class Land(Vehicle):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_pneu):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade)
        self._tipo_pneu = tipo_pneu

    def get_tipo_pneu(self):
        return self._tipo_pneu

    def informacoes(self):
        info = super().informacoes()
        info += f", Tipo de Pneu: {self.get_tipo_pneu()}"
        return info
