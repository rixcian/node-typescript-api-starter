import {Entity, Property, Unique} from '@mikro-orm/core';

import {BaseEntity} from "./BaseEntity";


@Entity({ collection: 'users' })
export class User extends BaseEntity {

  @Property({ length: 255 })
  @Unique()
  username!: string;

  @Property({ length: 255 })
  @Unique()
  email!: string;

  @Property({ length: 255 })
  password!: string;

  constructor(username: string, email: string, password: string) {
    super();
    this.username = username;
    this.email = email;
    this.password = password;
  }

}
