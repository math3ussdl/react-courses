import { ILesson } from '../../models/Lesson';
import { IModule } from '../../models/Module';

interface AppState {
  activeLesson: ILesson | {};
  activeModule: IModule | {};
  modules: IModule[];
}

const INITIAL_STATE: AppState = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'React na prática',
      lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segunda aula' },
      ],
    },
    {
      id: 2,
      title: 'Redux do zero ao avançado',
      lessons: [
        { id: 3, title: 'Terceira aula' },
        { id: 4, title: 'Quarta aula' },
      ],
    },
  ],
};

const course = (state: AppState = INITIAL_STATE, action: any) => {
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }

  return state;
};

export default course;
