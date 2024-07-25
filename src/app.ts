import express from 'express';
import routes from './routers';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use('/api/v1', routes);

app.listen(3333, () => console.log('Server is running in port 3333'));