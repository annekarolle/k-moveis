import { MigrationInterface, QueryRunner } from "typeorm";

export class correct1666289987562 implements MigrationInterface {
    name = 'correct1666289987562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(8) NOT NULL`);
    }

}
