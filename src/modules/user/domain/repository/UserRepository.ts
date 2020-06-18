import {User} from '../Model/User';

export interface UserRepository {
  create(user: User): Promise<void>;
}
