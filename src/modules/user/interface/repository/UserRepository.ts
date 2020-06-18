import {UserRepository as IUserRepository} from 'modules/user/domain/repository/UserRepository';
import {UserDBModel} from './UserDBModel';
import {User} from 'modules/user/domain/model/User';

export class UserRepository implements IUserRepository {
  private userDbModel: UserDBModel;
  constructor(userDbModel: UserDBModel) {
    this.userDbModel = userDbModel;
  }

  public async create(user: User): Promise<void> {
    await this.userDbModel.create(user);
  }
}
