
# Telegram to SmartOLT Integration

Este proyecto es una función en DigitalOcean que integra la API de Telegram con la API de SmartOLT. Permite enviar comandos desde Telegram para interactuar con SmartOLT y obtener o enviar datos.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/{REPO-OWNER}/{REPO-NAME}/tree/{BRANCH-NAME})

## Descripción

La función implementada en este proyecto realiza lo siguiente:

- **GET**: Obtiene el estado de ONUs desde la API de SmartOLT.
- **POST**: Envía datos a un endpoint específico de la API de SmartOLT.
- Envía los resultados de estas operaciones de vuelta a un chat de Telegram utilizando el bot de Telegram.

## Requisitos

- **Python 3.8** o superior.
- **requests**: Biblioteca para realizar solicitudes HTTP.

## Instalación

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd telegram-api
   ````
2. **Configura las Dependencias**

El archivo requirements.txt incluye las bibliotecas necesarias para la función.

  ```bash
  pip install -r requirements.txt
````

##  Configuración
1. **Crea el archivo config.py**

Crea un archivo llamado config.py en el mismo directorio que tu script main.py y añade las siguientes variables con tus credenciales:

````bash
TELEGRAM_BOT_TOKEN = 'tu_token_de_telegram'
SMARTOLT_API_BASE_URL = 'https://api.smartolt.com/api'
SMARTOLT_AUTH_TOKEN = 'tu_token_de_auth_smartolt'
````

2. **Configura DigitalOcean Functions**

Sube el archivo main.py y requirements.txt a DigitalOcean Functions.
Configura el handler de la función como main.main.
Configura el endpoint HTTP en DigitalOcean para invocar tu función.

## Uso
Para invocar la función a través del endpoint HTTP:

- **Método GET**

````bash
GET https://your-function-url?command=get&chat_id=YOUR_CHAT_ID
````

- **Método POST**

````bash
POST https://your-function-url
Content-Type: application/json

{
  "command": "post",
  "chat_id": "YOUR_CHAT_ID"
}
````

Reemplaza https://your-function-url con la URL real de tu función y YOUR_CHAT_ID con el ID del chat de Telegram.

## Ejemplos
**Ejemplo de Solicitud GET**

````bash
curl -X GET "https://your-function-url?command=get&chat_id=YOUR_CHAT_ID"
````
**Ejemplo de Solicitud POST**

````bash
curl -X POST "https://your-function-url" \
-H "Content-Type: application/json" \
-d '{"command": "post", "chat_id": "YOUR_CHAT_ID"}'
````

## Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Fork el repositorio.
2. Crea una nueva rama (git checkout -b feature-branch).
3. Realiza tus cambios y haz commits (git commit -am 'Añadir nueva característica').
4. Push a la rama (git push origin feature-branch).
5. Crea una nueva pull request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

------------------------------------------------------------------------------------------------

> [!NOTE]
> No olvides reemplazar los valores de ejemplo como tu_token_de_telegram, tu_token_de_auth_smartolt, your-function-url, y YOUR_CHAT_ID con tus valores reales.

````bash
Asegúrate de ajustar los valores de ejemplo (`tu-usuario/tu-repo`, `tu_token_de_telegram`, `
````
