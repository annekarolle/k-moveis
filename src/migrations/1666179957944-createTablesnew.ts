import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablesnew1666179957944 implements MigrationInterface {
    name = 'createTablesnew1666179957944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "hour" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "propertyIdId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "userIdId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_569744d22a75c5e53e33360ccf1"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "addressIDId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_569744d22a75c5e53e33360ccf1" FOREIGN KEY ("addressIDId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_f051b757f8e45139549dceb39af" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_1f39cdedd1b25660e7c0ba62d7f" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_1f39cdedd1b25660e7c0ba62d7f"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_f051b757f8e45139549dceb39af"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_569744d22a75c5e53e33360ccf1"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "addressIDId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_569744d22a75c5e53e33360ccf1" FOREIGN KEY ("addressIDId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "propertyIdId"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryIdId"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
    }

}
