import { MigrationInterface, QueryRunner } from "typeorm";

export class createBaseTables1668542076361 implements MigrationInterface {
    name = 'createBaseTables1668542076361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "post_by" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."attachment_filetype_enum" AS ENUM('image', 'video')`);
        await queryRunner.query(`CREATE TABLE "attachment" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "fileType" "public"."attachment_filetype_enum" NOT NULL DEFAULT 'image', "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "postId" integer, CONSTRAINT "PK_d2a80c3a8d467f08a750ac4b420" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follower" ("id" SERIAL NOT NULL, "followeeId" integer, "followerId" integer, CONSTRAINT "PK_69e733c097e58ee41a00ccb02d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "index_follower_followee" ON "follower" ("followeeId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fee15063149442fa4a87d0efe9" ON "follower" ("followeeId", "followerId") `);
        await queryRunner.query(`CREATE TABLE "hashtag" ("id" SERIAL NOT NULL, "tag" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_cb36eb8af8412bfa978f1165d78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_hashtag" ("id" SERIAL NOT NULL, "postIdId" integer, "hashtagIdId" integer, CONSTRAINT "PK_05cb9053bd41f174f91053e0b0b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "index_post_hash_tag_post_id" ON "post_hashtag" ("postIdId") `);
        await queryRunner.query(`CREATE INDEX "index_post_hash_tag_post_id" ON "post_hashtag" ("hashtagIdId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_74e14b6f36812f380f1582247c" ON "post_hashtag" ("postIdId", "hashtagIdId") `);
        await queryRunner.query(`ALTER TABLE "attachment" ADD CONSTRAINT "FK_09f5bc45017ed4f20ad606985a0" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follower" ADD CONSTRAINT "FK_010646f90710f18c133fa74ceae" FOREIGN KEY ("followeeId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follower" ADD CONSTRAINT "FK_b100536f62259b7aa3733175e53" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_hashtag" ADD CONSTRAINT "FK_1a131eca1ee5fcf9a6fc0f235e8" FOREIGN KEY ("postIdId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_hashtag" ADD CONSTRAINT "FK_18b2e1cbe9a02a5b89f6dc27d53" FOREIGN KEY ("hashtagIdId") REFERENCES "hashtag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_hashtag" DROP CONSTRAINT "FK_18b2e1cbe9a02a5b89f6dc27d53"`);
        await queryRunner.query(`ALTER TABLE "post_hashtag" DROP CONSTRAINT "FK_1a131eca1ee5fcf9a6fc0f235e8"`);
        await queryRunner.query(`ALTER TABLE "follower" DROP CONSTRAINT "FK_b100536f62259b7aa3733175e53"`);
        await queryRunner.query(`ALTER TABLE "follower" DROP CONSTRAINT "FK_010646f90710f18c133fa74ceae"`);
        await queryRunner.query(`ALTER TABLE "attachment" DROP CONSTRAINT "FK_09f5bc45017ed4f20ad606985a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_74e14b6f36812f380f1582247c"`);
        await queryRunner.query(`DROP INDEX "public"."index_post_hash_tag_post_id"`);
        await queryRunner.query(`DROP INDEX "public"."index_post_hash_tag_post_id"`);
        await queryRunner.query(`DROP TABLE "post_hashtag"`);
        await queryRunner.query(`DROP TABLE "hashtag"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fee15063149442fa4a87d0efe9"`);
        await queryRunner.query(`DROP INDEX "public"."index_follower_followee"`);
        await queryRunner.query(`DROP TABLE "follower"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "attachment"`);
        await queryRunner.query(`DROP TYPE "public"."attachment_filetype_enum"`);
        await queryRunner.query(`DROP TABLE "post"`);
    }

}
