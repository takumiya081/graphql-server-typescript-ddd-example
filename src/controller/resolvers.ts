import {Resolvers} from './resolverTypes';
import {CreateUserUseCase} from '@/modules/user/useCases/createUser/CreateUserUseCase';
import {UserRepository} from '@/modules/user/interface/repository/UserRepository';

export const resolvers: Resolvers = {
  Query: {
    user: async (_, {id}, {dbModels: {user: userDBModel}}) => {
      const result = await userDBModel.findUserById(id);
      return result || null;
    },
  },
  Mutation: {
    userCreate: async (_, {input}, {dbModels: {user: userDBModel}}) => {
      const createUserUseCase = new CreateUserUseCase(new UserRepository(userDBModel));
      const result = await createUserUseCase.exec({name: input.name});
      return {
        error: result.error ? {message: result.error} : null,
        user: result.user || null,
      };
    },
  },
  User: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
  },
};
