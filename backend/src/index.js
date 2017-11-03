import dotenv from 'dotenv';

import { app } from './server';

import { setupLogging } from './logging';

dotenv.config();
const { PORT = 3000 } = process.env;

setupLogging();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}!`);
});
