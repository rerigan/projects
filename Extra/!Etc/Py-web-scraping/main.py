from web_driver import CustomWebDriver
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.common.exceptions import NoSuchElementException
import time

class Bot():
    
    def __init__(self, url) -> None:
        self.driver = CustomWebDriver()
        self.url=url
            
    def scrape_data(self):
        cards = []
        
        browser = webdriver.Chrome(service=self.driver.get_service(), options=self.driver.get_options())
        browser.get(url)
        time.sleep(5)
        
        cards.extend(browser.find_elements(by=By.CLASS_NAME, value='resultContent'))
        
        print(f'Numero de cartas {len(cards)}')


if __name__ == '__main__':
    url = 'https://br.indeed.com/jobs?q=est%C3%A1gio&l=londrina%2C+pr'
    bot = Bot(url)
    bot.scrape_data()