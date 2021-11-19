import { Migration } from '@mikro-orm/migrations';

export class Migration20211119084118 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "users" add constraint "users_pkey" primary key ("id");');
  }

}
