import React, { useEffect, useState } from "react";
import * as sdk from "matrix-js-sdk";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const client = sdk.createClient({
      baseUrl: "https://matrixdh.duckdns.org",
    });

    const startClient = async () => {
      try {
        await client.loginWithPassword("dharshu711", "Dharshan@1234");

        const roomId = "!CZeNnJaqDqhTTxOnMU:matrixdh.duckdns.org";

        await client.startClient();

        client.once("sync", (state) => {
          if (state === "PREPARED") {
            const room = client.getRoom(roomId);
            if (!room) return;
            const events = room.timeline || [];
            const msgs = events
              .filter(e => e.getType() === "m.room.message")
              .map(event => ({
                sender: event.getSender(),
                body: event.getContent().body,
              }));
            setMessages(msgs);
          }
        });
      } catch (err) {
        console.error("Login or sync failed", err);
      }
    };

    startClient();
  }, []);

  return (
    <div>
      <h1>Matrix Chat Room</h1>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}><strong>{msg.sender}</strong>: {msg.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

