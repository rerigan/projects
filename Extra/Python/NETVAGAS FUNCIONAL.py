# import pyautogui as pa
# import time 
# import pyperclip
import keyboard
from selenium import webdriver
import requests
from bs4 import BeautifulSoup
import json

pagina = requests.get('https://www.netvagas.com.br/empresa/anuncios/cidade/londrina-pr/cargo/estagio/')
dados_pagina = BeautifulSoup(pagina.text, 'html.parser')

job_titles = dados_pagina.find_all('div', class_='advs_title')
vagas = []
with open("saida.txt", "a", encoding="utf-8") as arquivo:
    for div in job_titles:
        texto = div.find('a').text
        link=div.find('a')['href']
        print(texto, file=arquivo)
        print(link, file=arquivo)

print("Vagas capturadas!")    

# keyboard.add_hotkey('ctrl+h', my_function)
# print("Press Ctrl+H to execute the script.")
# keyboard.wait('esc')