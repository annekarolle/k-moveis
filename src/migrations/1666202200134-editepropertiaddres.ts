import { MigrationInterface, QueryRunner } from "typeorm";

export class editepropertiaddres1666202200134 implements MigrationInterface {
    name = 'editepropertiaddres1666202200134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_569744d22a75c5e53e33360ccf1"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "addressIDId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "addressId" TO "addressIDId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_569744d22a75c5e53e33360ccf1" FOREIGN KEY ("addressIDId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
