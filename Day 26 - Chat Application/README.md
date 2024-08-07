# Chat Application

A simple chat application built with Node.js and WebSocket for real-time communication.

## Features

- **Real-Time Messaging**: Send and receive messages instantly.
- **User Authentication**: Simple username-based login.
- **Responsive Design**: Mobile-friendly chat interface.
- **WebSocket Integration**: Efficient communication with WebSocket.

## Installation

To get started with the chat application, follow these steps:

1. **Clone the Repository**

   ```bash

   git clone https://github.com/megh-bari/30-days-javascript-challenge

   ```

2. Navigate to the specific day's challenge/project folder.

   ```bash

   cd '30-days-javascript-challenge\Day 26 - Chat Application'

   ```

3. **Install Dependencies**

   Open terminal and run:

   ```bash

   npm init -y

   npm install ws

   ```

   This will install all the necessary dependencies for both the client and server.

4. **Run the Application**

   Start the server:

   ```bash

   cd server

   node server.js

   ```

   The server will run on `http://localhost:8080`.

   Open another terminal and Install wscat globally (if you haven't already):

   ```bash

     npm install -g wscat

   ```

   and after that run:

   ```bash

    wscat -c ws://localhost:8080

   ```

## Usage

1. **Login**: Enter a username and click the "Login" button to enter the chat room.
2. **Send Messages**: Type your message in the input field and click the "Send" button or press Enter to send the message.
3. **View Messages**: Messages from other users will appear in the chat window.

## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **WebSocket**: Protocol for real-time communication.
- **HTML/CSS**: Front-end structure and styling.
- **JavaScript**: Client-side scripting for interactive features.

## Contact

Feel free to reach out with any questions or feedback:

- **GitHub**: [megh-bari](https://github.com/megh-bari)
- **Twitter**: [@megh_bari](https://x.com/megh_bari)
- **Email**: [meghbari01@gmail.com](mailto:meghbari01@gmail.com).

## Author

This repo is maintained by @ Megh bari.

## Happy Coding 🎈
