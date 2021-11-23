import { Router } from 'express';
import { getCustomRepository } from 'typeorm'

import ExamRepository from '../repositories/ExamsRepository';
import CreateExamService from '../services/CreateExamService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const examsRouter = Router();

examsRouter.use(ensureAuthenticated)

examsRouter.get('/', async (req, res) => {
  const examRepository = getCustomRepository(ExamRepository);
  const exams = await examRepository.find();
  return res.json(exams);
})

examsRouter.post('/', async (req, res) => {
  try {
    const {
      code,
      cocaine,
      amphetamine,
      methamphetamine,
      mda,
      mdma,
      thc,
      morphine,
      codeine,
      heroin,
      benzoylecgonine,
      cocaethylene,
      norcocaine } = req.body;

    const createExam = new CreateExamService();

    const exam = await createExam.execute({
      code,
      cocaine,
      amphetamine,
      methamphetamine,
      mda,
      mdma,
      thc,
      morphine,
      codeine,
      heroin,
      benzoylecgonine,
      cocaethylene,
      norcocaine
    })

    return res.json(exam)
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
})

export default examsRouter;
