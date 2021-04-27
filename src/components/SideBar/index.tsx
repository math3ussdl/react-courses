import React, { Component } from 'react';

class SideBar extends Component {
  state = {
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

  render() {
    const { modules } = this.state;

    return (
      <aside>
        {modules.map((mod) => (
          <div key={mod.id}>
            <strong>{mod.title}</strong>
            <ul>
              {mod.lessons.map((les) => (
                <li key={les.id}>{les.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

export default SideBar;
