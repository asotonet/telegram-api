const axios = require('axios');

const TELEGRAM_BOT_TOKEN = '1986772280:AAHr634wuaK7kRVydaPx6pw4jrKtXuXWww0';
const SMARTOLT_API_BASE_URL = 'https://api.smartolt.com/api';
const SMARTOLT_AUTH_TOKEN = '76c97d1a2fa04d319ba1445114a84939';

async function main(event) {
    const command = event.command;
    const chat_id = event.chat_id;
    let message;

    try {
        if (command === 'get') {
            const response = await axios.get(`${SMARTOLT_API_BASE_URL}/onu/get_onus_statuses`, {
                headers: { 'Authorization': `Bearer ${SMARTOLT_AUTH_TOKEN}` }
            });
            message = response.data;
        } else if (command === 'post') {
            const data = { key1: 'value1', key2: 'value2' };
            const response = await axios.post(`${SMARTOLT_API_BASE_URL}/tu_endpoint`, data, {
                headers: { 'Authorization': `Bearer ${SMARTOLT_AUTH_TOKEN}` }
            });
            message = response.data;
        } else {
            message = 'Comando no reconocido.';
        }

        await sendMessageToTelegram(chat_id, message);
    } catch (error) {
        message = `Error: ${error.message}`;
        await sendMessageToTelegram(chat_id, message);
    }

    return {
        statusCode: 200,
        body: JSON.stringify('Request processed.')
    };
}

async function sendMessageToTelegram(chat_id, message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
        chat_id: chat_id,
        text: JSON.stringify(message)
    };
    await axios.post(url, payload);
}

module.exports = main;
