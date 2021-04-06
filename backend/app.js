import cors from 'cors';
import express from 'express';
import { user, listing, message } from './src/routes/index';
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/api/user', user);
app.use('/api/listing', listing);
app.use('/api/message', message);

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
