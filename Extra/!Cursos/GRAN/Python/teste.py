import matplotlib.pyplot as plt

alturas = [158, 163, 173, 184, 190]
pesos = [50, 60, 65, 70, 80]

plt.scatter(alturas, pesos)
plt.xlabel('Alturas')
plt.ylabel('Pesos')
plt.title('Relação entre altura e peso')
plt.show()