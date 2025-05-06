import json

vagas = [
    {"titulo": "Desenvolvedor Python", "link": "https://exemplo.com/vaga1"},
    {"titulo": "Analista de Dados", "link": "https://exemplo.com/vaga2"},
]

with open("public/vagas.json", "w", encoding="utf-8") as f:
    json.dump(vagas, f, ensure_ascii=False, indent=4)