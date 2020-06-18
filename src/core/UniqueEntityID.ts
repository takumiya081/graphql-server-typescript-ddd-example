import {v4 as uuid} from 'uuid';
import {Identifier} from './Identifier';

export class UniqueEntityID extends Identifier<string | number> {
  constructor(id?: string | number) {
    if (id === '') {
      throw new Error('idは空文字禁止');
    }
    super(id ? id : uuid());
  }
}
