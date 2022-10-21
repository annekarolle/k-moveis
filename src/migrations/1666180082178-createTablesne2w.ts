import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablesne2w1666180082178 implements MigrationInterface {
    name = 'createTablesne2w1666180082178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_1f39cdedd1b25660e7c0ba62d7f"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339"`);
        await queryRunner.query(`CREATE TABLE "schedule_users_properties" ("id" uuid NOT NULL, "date" TIMESTAMP NOT NULL, "hour" TIMESTAMP NOT NULL, "propertyIdId" uuid NOT NULL, "userIdId" uuid NOT NULL, CONSTRAINT "PK_faa0c537e16649c3bf77873b1c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "propertyIdId"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_e6c6f3e566f21936c1db15225e1" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_634bdf07e6874eefa16aa687fb9" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_634bdf07e6874eefa16aa687fb9"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_e6c6f3e566f21936c1db15225e1"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "userIdId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "propertyIdId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "hour" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`DROP TABLE "schedule_users_properties"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9649d9a071c23fbb66d0b67b339" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_1f39cdedd1b25660e7c0ba62d7f" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
