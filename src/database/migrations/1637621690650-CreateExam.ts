import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateExam1637621690650 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exams',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'code',
            type: 'int',
            isNullable: false
          },
          {
            name: 'cocaine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'amphetamine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'methamphetamine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'mda',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'mdma',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'thc',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'morphine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'codeine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'heroin',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'benzoylecgonine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'cocaethylene',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'norcocaine',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'exam_result',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: "now()"
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: "now()"
          }
        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
