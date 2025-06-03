<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Real-Time Chat Application - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 2rem;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    code {
      background-color: #eee;
      padding: 2px 5px;
      border-radius: 3px;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>

  <h1>💬 Real-Time Chat Application</h1>

  <p>A real-time chat application that enables users to communicate instantly using WebSockets powered by <strong>Socket.IO</strong>. Built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> for the backend and a responsive frontend.</p>

  <h2>🌐 Live Demo</h2>
  <p>👉 <a href="https://real-time-chat-application-1-97hx.onrender.com/" target="_blank">Check it out here</a></p>

  <h2>🚀 Features</h2>
  <ul>
    <li>🔐 User authentication (login/signup)</li>
    <li>💬 Real-time messaging with Socket.IO</li>
    <li>👥 Online/offline user status</li>
    <li>🕒 Timestamps for every message</li>
    <li>📱 Mobile-responsive UI</li>
    <li>🧼 Chat history saved in MongoDB</li>
    <li>✅ Logout and session management</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li>HTML, CSS, JavaScript</li>
    <li>Bootstrap or Tailwind CSS (if used)</li>
    <li>React (if applicable)</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Socket.IO</li>
  </ul>
  <h3>Database</h3>
  <ul>
    <li>MongoDB with Mongoose</li>
  </ul>

  <h2>🔧 Installation & Setup</h2>
  <pre><code>git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app

npm install
</code></pre>

  <p>Create a <code>.env</code> file in the root directory:</p>
  <pre><code>MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_jwt_secret</code></pre>

  <p>Run the server:</p>
  <pre><code>npm start</code></pre>

  <p>Visit <code>http://localhost:5000</code> in your browser.</p>

  <h2>📂 Project Structure</h2>
  <pre><code>realtime-chat-app/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── socket.js
│   └── server.js
│
├── client/
│   ├── public/
│   ├── src/
│   └── index.html
│
└── .env
</code></pre>

  <h2>🙌 Acknowledgements</h2>
  <ul>
    <li><a href="https://socket.io/docs/">Socket.IO Documentation</a></li>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>

  <h2>📬 Contact</h2>
  <p>
    <strong>Yaswanth</strong><br/>
    📧 yaswanth.email@example.com<br/>
    🔗 <a href="https://www.linkedin.com/in/mallavarapu-yaswanth/">LinkedIn</a><br/>
    🔗 <a href="https://v0-portfolio-qjcokg.vercel.app/">Portfolio</a>
  </p>

  <hr />

  <p><strong>🔗 Live App:</strong> <a href="https://real-time-chat-application-1-97hx.onrender.com/" target="_blank">Live Link</a></p>

</body>
</html>
