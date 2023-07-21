export interface Todo {
  title: string;
  completed: boolean;
  uid: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  archivedAt: {
    seconds: number;
    nanoseconds: number;
  } | null;
}
