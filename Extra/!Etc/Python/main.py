import os

mensagens = []

nome = input('Nome: ')

while True: 
    #limpa terminal
    os.system('cls')
    
    if len(mensagens) > 0:
        for m in mensagens:
            print(m['nome'], '-', m['texto'])
    
          
    print('_________________ \nSe quiser sair, digite "exit"')
    #obtendo texto
    texto = input('Mensagem: ')
    if texto == 'exit':
        break
    
    #adicionando mensagem na lista
    mensagens.append({
        'nome': nome,
        'texto': texto
    })