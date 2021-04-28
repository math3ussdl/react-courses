import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }: any) => {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
};

export default connect((state: any) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
