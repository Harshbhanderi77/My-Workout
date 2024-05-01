import Post from './post';
import database from '../database';
class DBHelper {
  async sinupDatabase(
    name: string,
    email: string,
    number: string,
    password: string,
  ): Promise<void> {
    try {
      const newUser = await database.write(async () => {
        const createdUser = await database.collections
          .get<Post>('posts')
          .create((user: any) => {
            user.name = name;
            user.email = email;
            user.phoneNumber = number;
            user.password = password;
          });
        const userData = {
          name: createdUser.name,
          email: createdUser.email,
          phoneNumber: createdUser.phoneNumber,
          password: createdUser.password,
        };
        console.log('User created:', userData);
        // console.log('User created:', createdUser);
        return createdUser;
      });
      // console.log('User created:', newUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
}
export const dbHelper = new DBHelper();
