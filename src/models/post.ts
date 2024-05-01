import {Model} from '@nozbe/watermelondb';
import {text} from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';

  @text('name')
  name!: string;

  @text('email')
  email!: string;

  @text('phoneNumber')
  phoneNumber!: string;

  @text('password')
  password!: string;
}
