import { getCustomRepository, getRepository } from 'typeorm'

import Exam from '../models/Exam'
import ExamsRepository from '../repositories/ExamsRepository';

interface Request {
  code: number;
  cocaine: number;
  amphetamine: number;
  methamphetamine: number;
  mda: number;
  mdma: number;
  thc: number;
  morphine: number;
  codeine: number;
  heroin: number;
  benzoylecgonine: number;
  cocaethylene: number;
  norcocaine: number;
}

class CreateExamService {
  public async execute({
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
    norcocaine }: Request): Promise<Exam> {
    const examsRepository = getCustomRepository(ExamsRepository)
    const findCode = await examsRepository.findByCode(code)

    if (findCode) {
      throw new Error('Code already exists');
    }

    const data = {
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
    }

    const verifyPositiveOrFalseExam = checkExam(data)

    const exam = examsRepository.create({ ...data, exam_result: verifyPositiveOrFalseExam?.exam_result ? verifyPositiveOrFalseExam?.exam_result : "negativo" })

    await examsRepository.save(exam)

    return exam
  }
}

function checkExam(data: any) {
  if (data.cocaine > 0.5 && data.benzoylecgonine > 0.05 || data.cocaethylene > 0.05 || data.norcocaine > 0.05) {
    console.log("aqui 1")
    return {
      exam_result: "positivo"
    }
  }

  if (data.amphetamine > 0.2 || data.methamphetamine > 0.2 || data.mda > 0.2 || data.mdma > 0.2 || data.morphine > 0.2 || data.codeine > 0.2 || data.heroin > 0.2) {
    console.log("aqui 2")
    return {
      exam_result: "positivo"
    }
  }

  if (data.thc > 0.05) {
    console.log("aqui 3")
    return {
      exam_result: "positivo"
    }
  }
}

export default CreateExamService
