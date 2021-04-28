import { ILesson } from '../../models/Lesson';
import { IModule } from '../../models/Module';

export function toggleLesson(module: IModule, lesson: ILesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  };
}
