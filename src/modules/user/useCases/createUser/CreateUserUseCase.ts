import {UserRepository} from 'modules/user/domain/repository/UserRepository';
import {UserName} from 'modules/user/domain/model/UserName';
import {User} from 'modules/user/domain/model/User';
import {UserReadModel} from '../../domain/readModel/UserReadModel';

interface CreateUserDTO {
  name: string;
}

type ErrorType = string;

export class CreateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async exec(request: CreateUserDTO): Promise<{error?: ErrorType; user?: UserReadModel}> {
    const {result: name, error: nameError} = UserName.create(request.name);
    if (nameError) {
      return {error: nameError};
    }
    if (!name) {
      throw new Error('nameが取得できません');
    }

    const {result: user, error: userError} = User.create({name});
    if (userError) {
      return {error: userError};
    }
    if (!user) {
      throw new Error('userが取得できません');
    }

    try {
      await this.userRepository.create(user);
      return {
        error: undefined,
        user: {
          id: user.id.toString(),
          name: user.name.value,
        },
      };
    } catch (err) {
      console.log(err);
      return {error: '保存できませんでした'};
    }
  }
}
