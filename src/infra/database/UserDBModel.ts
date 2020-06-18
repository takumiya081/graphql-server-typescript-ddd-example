import {UserDBModel as IUserRepositoryDBModel} from '@/modules/user/interface/repository/UserDBModel';
import {UserStatic} from './model/User';
import {User} from 'modules/user/domain/model/User';
import {UserReadModel} from 'modules/user/domain/readModel/UserReadModel';
import {UserDBModel as IUserQueryDBModel} from '@/modules/user/interface/query/UserDBModel';

export class UserDBModel implements IUserRepositoryDBModel, IUserQueryDBModel {
  private userStatic: UserStatic;

  constructor(userStatic: UserStatic) {
    this.userStatic = userStatic;
  }

  public async create(user: User): Promise<void> {
    await this.userStatic.create({id: user.id.toString(), name: user.name.value});
  }

  public async findUserById(id: string): Promise<UserReadModel | undefined> {
    const result = await this.userStatic.findByPk(id);
    if (result === null) {
      return undefined;
    }
    return {
      id: result.id,
      name: result.name,
    };
  }
}
