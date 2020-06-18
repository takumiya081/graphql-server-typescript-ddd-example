import {User} from '../../domain/model/User';

export interface UserDBModel {
  create: (user: User) => void | Promise<void>;
}
