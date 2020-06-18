import {UserReadModel} from '../readModel/UserReadModel';

export interface UserQuery {
  findById(id: string): Promise<UserReadModel | undefined>;
}
