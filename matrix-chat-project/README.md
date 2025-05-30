# Matrix Chat Room Assignment

This project demonstrates a Matrix Synapse chat server deployed on an EC2 instance with a React frontend chat client using `matrix-js-sdk`. The setup includes:

- Matrix Synapse server running via Docker Compose
- NGINX reverse proxy with SSL using DuckDNS and Let's Encrypt
- React frontend that connects to the Matrix server and displays messages from a private chat room
- User authentication with Matrix protocol

---

## Demo Video

Watch the full walkthrough of the project setup, configuration, and demo here:

[![Loom Video](https://cdn.loom.com/sessions/thumbnails/13bf7c67410f44c794492c381ed11920-with-play.gif)](https://www.loom.com/share/13bf7c67410f44c794492c381ed11920)

Or open the link:  
https://www.loom.com/share/13bf7c67410f44c794492c381ed11920

---

## Project Structure

- `docker-compose.yml` - Matrix Synapse deployment
- `nginx.conf` - NGINX reverse proxy and SSL config
- `matrix-chat-client/` - React frontend application

---

## How to Use

1. Clone this repository
2. Follow the deployment steps (see docs)
3. Run React app with `npm run dev` inside `matrix-chat-client`
4. Login via Element or React app to chat

---

Thank you for checking out this project!
