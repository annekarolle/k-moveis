import { MigrationInterface, QueryRunner } from "typeorm";

export class editeTabl32s1666201878514 implements MigrationInterface {
    name = 'editeTabl32s1666201878514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(150) NOT NULL`);
    }

}
