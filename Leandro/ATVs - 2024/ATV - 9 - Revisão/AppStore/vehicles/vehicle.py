class Vehicle:
    # Construtor
    def __init__(self, modelo, marca, ano, cor, velocidade_maxima, peso, capacidade):
        self._modelo = modelo
        self._marca = marca
        self._ano = ano
        self._cor = cor
        self._velocidade_maxima = velocidade_maxima
        self._peso = peso
        self._capacidade = capacidade
        pass


    # Getters and Setters
    def modelo(self):
        return self._modelo

    def modelo(self, novo_modelo):
        self._modelo = novo_modelo

    def marca(self):
        return self._marca

    def marca(self, nova_marca):
        self._marca = nova_marca

    def ano(self):
        return self._ano

    def ano(self, novo_ano):
        if novo_ano < 1886:  # Primeiro carro foi inventado em 1886
            raise ValueError("O ano deve ser igual ou superior a 1886.")
        self._ano = novo_ano

    def cor(self):
        return self._cor

    def cor(self, nova_cor):
        self._cor = nova_cor


    # Metodos
    def acelerar(self, incremento):
        self.velocidade_atual += incremento
        if self.velocidade_atual > self.velocidade_maxima:
            self.velocidade_atual = self.velocidade_maxima
        print(f"{self.modelo} acelerou para {self.velocidade_atual} km/h.")

    def frear(self, decremento):
        self.velocidade_atual -= decremento
        if self.velocidade_atual < 0:
            self.velocidade_atual = 0
        print(f"{self.modelo} desacelerou para {self.velocidade_atual} km/h.")

    def ligar(self):
        print(f"{self.modelo} está ligado.")

    def desligar(self):
        print(f"{self.modelo} está desligado.")

    def informacoes(self):
        return (f"Modelo: {self.modelo}, Marca: {self.marca}, Ano: {self.ano}, "
                f"Cor: {self.cor}, Velocidade Máxima: {self.velocidade_maxima} km/h, "
                f"Peso: {self.peso} kg, Capacidade: {self.capacidade}")