from water import Water

class Motorboat(Water):
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_motor, potencia):
        super().__init__(modelo, marca, ano, cor, velocidade_maxima, peso, capacidade, tipo_uso="motor")
        self._tipo_motor = tipo_motor
        self._potencia = potencia  # Potência em HP

    def get_tipo_motor(self):
        return self._tipo_motor

    def get_potencia(self):
        return self._potencia

    def informacoes(self):
        info = super().informacoes()
        info += f", Tipo de Motor: {self.get_tipo_motor()}, Potência: {self.get_potencia()} HP"
        return info
