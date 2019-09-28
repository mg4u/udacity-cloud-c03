import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';
// import { User } from '../../../../../../udacity-c3-restapi/src/controllers/v0/users/models/User';
// import { requireAuth } from '../../../../../../udacity-c3-restapi/src/controllers/v0/users/routes/auth.router';

@Table
export class FeedItem extends Model<FeedItem> {
  @Column
  public caption!: string;

  @Column
  public url!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
