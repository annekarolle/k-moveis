import { MigrationInterface, QueryRunner } from "typeorm";

export class editeTables1666193322906 implements MigrationInterface {
    name = 'editeTables1666193322906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_634bdf07e6874eefa16aa687fb9"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_f051b757f8e45139549dceb39af"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "categoryIdId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_e6c6f3e566f21936c1db15225e1"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD "hour" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ALTER COLUMN "propertyIdId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_f051b757f8e45139549dceb39af" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_e6c6f3e566f21936c1db15225e1" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_e6c6f3e566f21936c1db15225e1"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_f051b757f8e45139549dceb39af"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ALTER COLUMN "propertyIdId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD "hour" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_e6c6f3e566f21936c1db15225e1" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "categoryIdId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_f051b757f8e45139549dceb39af" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD "userIdId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_634bdf07e6874eefa16aa687fb9" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
