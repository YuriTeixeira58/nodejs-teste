import { EntityRepository, Repository } from 'typeorm'

import Exam from '../models/Exam';

@EntityRepository(Exam)
class ExamsRepository extends Repository<Exam> {
  public async findByCode(code: number): Promise<Exam | null> {
    const findExam = await this.findOne({
      where: { code },
    })

    return findExam || null
  }
}

export default ExamsRepository
