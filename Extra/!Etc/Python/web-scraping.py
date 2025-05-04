# import pyautogui as pa
# import time 
# import pyperclip
import keyboard
from selenium import webdriver
import requests
from bs4 import BeautifulSoup

pagina = requests.get('https://www.linkedin.com/jobs/search/?currentJobId=4214065000&distance=0&f_TPR=r604800&f_WT=1&geoId=107140601&keywords=est%C3%A1gio&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true')
dados_pagina = BeautifulSoup(pagina.text, 'html.parser')

job_titles = dados_pagina.find_all('div')

pri

    

# keyboard.add_hotkey('ctrl+h', my_function)
# print("Press Ctrl+H to execute the script.")
# keyboard.wait('esc')