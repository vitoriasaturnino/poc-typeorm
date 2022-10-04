import { MigrationInterface, Table, QueryRunner } from "typeorm"

export class CreateTableCategories1664891554517 implements MigrationInterface {

public async up(queryRunner: QueryRunner): Promise<void> {
	// cria a base 
	await queryRunner.createTable(
		new Table({
			// table name
			name: "categories",
			columns: [
				{
					// collunm name
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
					name: "created-at",
					type: "timestamp",
					default: "now()"
				}
			]
		})
	)
}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("categories");
	}
}
