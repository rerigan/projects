import pyautogui as pa
import time 
import pyperclip
import keyboard

pa.PAUSE = 0.2
# print(pa.position(784,113))

def my_function():
    time.sleep(0.5)
    pa.press('win')
    pa.write('chrome')
    pa.press('enter')
    pa.write("youtube")
    pa.press('enter')
    time.sleep(2)
    pa.click(x=784,y=113)
    pyperclip.copy('joão do olhão')
    pa.hotkey('ctrl','v')
    pa.press('enter')

keyboard.add_hotkey('ctrl+h', my_function)
print("Press Ctrl+H to execute the script.")
keyboard.wait('esc')