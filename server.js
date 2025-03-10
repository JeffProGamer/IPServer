const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/api/server/start', (req, res) => {
  exec('start /B java -jar beta_server.jar', (err) => {
    if (err) return res.send('Failed to start.');
    res.send('Server started!');
  });
});

app.get('/api/server/stop', (req, res) => {
  exec('taskkill /IM java.exe /F', (err) => {
    if (err) return res.send('Failed to stop.');
    res.send('Server stopped!');
  });
});

app.get('/api/server/force-stop', (req, res) => {
  exec('taskkill /IM java.exe /F', (err) => {
    if (err) return res.send('Failed to force stop.');
    res.send('Server force-stopped!');
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
