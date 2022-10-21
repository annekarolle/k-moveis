import { MigrationInterface, QueryRunner } from "typeorm";

export class schedule1666275208993 implements MigrationInterface {
    name = 'schedule1666275208993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD "userIdId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_634bdf07e6874eefa16aa687fb9" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_634bdf07e6874eefa16aa687fb9"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP COLUMN "userIdId"`);
    }

}
