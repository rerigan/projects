# import pyautogui as pa
import time 
# import pyperclip
import keyboard
from selenium import webdriver
import requests
from bs4 import BeautifulSoup

pagina = requests.get('https://divulgavagas.com.br/vagas-de-emprego?estado=PR&cidade=Londrina')
dados_pagina = BeautifulSoup(pagina.text, 'html.parser')


job_titles = dados_pagina.find_all('div', class_='vaga-titulo-text')
with open("saida.txt", "a", encoding="utf-8") as arquivo:
    for div in job_titles:
        tex = div.find('a').text
        texto = tex.lstrip()
        link=div.find('a')['href']
        print(texto, file=arquivo)
        print(link +'\n', file=arquivo)
        
time.sleep(2)
pagina2 = requests.get('https://divulgavagas.com.br/vagas-de-emprego?pag=2&estado=PR&cidade=Londrina')
dados_pagina2 = BeautifulSoup(pagina2.text, 'html.parser')

job_titles2 = dados_pagina2.find_all('div', class_='vaga-titulo-text')
with open("saida.txt", "a", encoding="utf-8") as arquivo:
    for div in job_titles2:
        tex = div.find('a').text
        texto = tex.lstrip()
        link=div.find('a')['href']
        print(texto, file=arquivo)
        print(link +'\n', file=arquivo)


print("Vagas capturadas!")           


# keyboard.add_hotkey('ctrl+h', my_function)
# print("Press Ctrl+H to execute the script.")
# keyboard.wait('esc')