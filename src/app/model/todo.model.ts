/**
 * A Todo object belong to a user
 */
export interface Todo {
  id?: number;
  userId: number;
  title: string;
  completed: boolean;
}
