import json
import requests

TELEGRAM_BOT_TOKEN = '1986772280:AAHr634wuaK7kRVydaPx6pw4jrKtXuXWww0'
SMARTOLT_API_BASE_URL = 'https://api.smartolt.com/api'
SMARTOLT_AUTH_TOKEN = '76c97d1a2fa04d319ba1445114a84939'

def main(event, context):
    # Extraer parámetros del evento
#    command = 'get'     
#    chat_id = '-1002196183623'
    command = event.get('command')
    chat_id = event.get('chat_id')

    if command == 'get':
        response = requests.get(
            f'{SMARTOLT_API_BASE_URL}/onu/get_onus_statuses',
            headers={'Authorization': f'Bearer {SMARTOLT_AUTH_TOKEN}'}
        )
        message = response.json()
    elif command == 'post':
        data = {'key1': 'value1', 'key2': 'value2'}
        response = requests.post(
            f'{SMARTOLT_API_BASE_URL}/tu_endpoint',
            json=data,
            headers={'Authorization': f'Bearer {SMARTOLT_AUTH_TOKEN}'}
        )
        message = response.json()
    else:
        message = 'Comando no reconocido.'

    send_message_to_telegram(chat_id, message)
    return {
        'statusCode': 200,
        'body': json.dumps('Request processed.')
    }

def send_message_to_telegram(chat_id, message):
    url = f'https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage'
    payload = {
        'chat_id': chat_id,
        'text': str(message)
    }
    requests.post(url, json=payload)

