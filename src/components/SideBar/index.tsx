import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IModule } from '../../models/Module';
import * as CourseActions from '../../store/actions/course';

const SideBar = ({ modules, toggleLesson }: any) => {
  return (
    <aside>
      {modules.map((mod: IModule) => (
        <div key={mod.id}>
          <strong>{mod.title}</strong>
          <ul>
            {mod.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(mod, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

const mapStateToProps = (state: any) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
