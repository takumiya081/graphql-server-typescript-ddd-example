import {Entity} from '@/core/Entity';
import {UniqueEntityID} from '@/core/UniqueEntityID';
import {UserName} from './UserName';

interface UserProps {
  name: UserName;
}

type ErrorType = string;

export class User extends Entity<UserProps> {
  public get id(): UniqueEntityID {
    return this._id;
  }

  public get name(): UserName {
    return this.props.name;
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID): {result?: User; error?: ErrorType} {
    const user = new User(props, id);
    return {result: user};
  }
}
