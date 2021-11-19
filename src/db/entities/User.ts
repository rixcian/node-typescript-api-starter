import {Entity, Property} from '@mikro-orm/core';

import {BaseEntity} from "./BaseEntity";


@Entity({ collection: 'users' })
export class User extends BaseEntity {

  @Property({ length: 255 })
  username!: string;

  @Property({ length: 255 })
  email!: string;

  @Property({ length: 255 })
  password!: string;

}
