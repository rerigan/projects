import platform
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

CHROME_DRIVER_PATH = '/user/bin/chromedriver'
GOOGLE_CHROME_BIN_PATH = '/usr/bin/google-chrome'

class CustomWebDriver:
    def get_options(self):
        options = Options()
        options.page_load_strategy = 'eager'
        
        if not self.is_windows_os():
            options.binary_location = GOOGLE_CHROME_BIN_PATH
            options.add_argument('--headless')
        
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        return options
    
    def get_service(self):
        if not self.is_windows_os():
            service = Service(executable_path=CHROME_DRIVER_PATH)
        else:
            service = Service() # Caminho padrão Windows
        
        return service
    
    def is_windows_os(self):
        return 'Windows' in platform.system()
        
        
