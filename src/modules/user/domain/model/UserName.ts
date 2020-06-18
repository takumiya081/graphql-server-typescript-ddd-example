import {ValueObject} from '@/core/ValueObject';

interface UserNameProps {
  value: string;
}

type ErrorType = string;

export class UserName extends ValueObject<UserNameProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: UserNameProps) {
    super(props);
  }

  public static create(name: string): {result?: UserName; error?: ErrorType} {
    const trimName = name.trim();
    if (!trimName) {
      return {error: '名前が指定されていません'};
    }
    if (trimName.length > 50) {
      return {error: '名前は50文字以内にしてください'};
    }
    return {result: new UserName({value: trimName})};
  }
}
