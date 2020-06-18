import {UserQuery as IUserQuery} from '../../domain/query/UserQuery';
import {UserDBModel} from './UserDBModel';
import {UserReadModel} from '../../domain/readModel/UserReadModel';

export class UserQuery implements IUserQuery {
  private userDbModel: UserDBModel;

  constructor(userDbModel: UserDBModel) {
    this.userDbModel = userDbModel;
  }

  public async findById(id: string): Promise<UserReadModel | undefined> {
    return this.userDbModel.findUserById(id);
  }
}
