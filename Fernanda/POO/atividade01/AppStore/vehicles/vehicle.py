class Vehicle:
    def __init__(self,name,rodas):
        self.__name = name
        self.__rodas= rodas
        
    def get_name(self):
        return self.__name
    
    def set_name(self, name):
        self.__name = name
    
    def get_rodas(self):
        return self.__rodas
    
    def set_rodas(self, rodas):
        self.__rodas = rodas
        
    def infos(self):
        return f"Veículo: {self.__name}\nRodas: {self.__rodas}"