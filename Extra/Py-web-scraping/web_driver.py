import platform
from selenium.webdriver.chrome.service import Options
from selenium.webdriver.chrome.service import Service

class CustomWebDriver:
    def get_options(self):
        options = Options()
        options.page_load_strategy = 'eager'
        
