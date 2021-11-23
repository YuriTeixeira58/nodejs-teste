import { Router } from 'express';
import examsRouter from './exams.routes'
import usersRouter from './users.routes'
import sessionsRouter from './session.routes'

const routes = Router();

routes.use('/exams', examsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
