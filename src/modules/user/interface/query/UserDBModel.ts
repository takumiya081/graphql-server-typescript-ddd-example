import {UserReadModel} from '../../domain/readModel/UserReadModel';

export interface UserDBModel {
  findUserById: (id: string) => Promise<UserReadModel | undefined>;
}
