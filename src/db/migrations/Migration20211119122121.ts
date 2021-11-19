import { Migration } from '@mikro-orm/migrations';

export class Migration20211119122121 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" add constraint "users_username_unique" unique ("username");');

    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');
  }

}
