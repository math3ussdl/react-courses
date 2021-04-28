import { ILesson } from './Lesson';

export interface IModule {
  id: number;
  title: string;
  lessons: ILesson[];
}
