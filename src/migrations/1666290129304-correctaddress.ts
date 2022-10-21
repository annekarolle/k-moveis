import { MigrationInterface, QueryRunner } from "typeorm";

export class correctaddress1666290129304 implements MigrationInterface {
    name = 'correctaddress1666290129304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(8) NOT NULL`);
    }

}
