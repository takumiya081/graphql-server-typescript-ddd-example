import {Model, DataTypes, Sequelize, BuildOptions} from 'sequelize';

export interface UserAttributes {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}
export type UserStatic = typeof Model & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (values?: {}, options?: BuildOptions): UserModel;
};

export function userFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define('Users', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
