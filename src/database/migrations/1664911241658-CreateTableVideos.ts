import { MigrationInterface, Table, QueryRunner } from "typeorm"

export class CreateTableVideos1664911241658 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "videos",
				columns: [
					{
						name: "id", 
						type: "uuid",
						isPrimary: true
					},
					{
						name: "name",
						"type": "varchar",
						isUnique: true
					},
					{
						name: "description",
						type: "varchar",
					},
					{
						name: "duration",
						type: "numeric",
					},
					{
						name: "category_id",
						type: "uuid",
					},
					{
						name: "created-at",
						type: "timestamp",
						default: "now()",
					},
				],
				foreignKeys: [
					{
						name: "fk_videos_category",
						columnNames: ["category_id"],
						referencedTableName: "categories",
						referencedColumnNames: ["id"],
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable("videos");
	}
}
