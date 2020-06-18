import {UserDBModel} from 'infra/database';

export interface Context {
  dbModels: {
    user: UserDBModel;
  };
}
