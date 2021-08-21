import { useState } from 'react';
import { TodoList } from './TodoList';
export const TodoTab = () => {
  const tablist: string[] = ['ToDo', 'Finish'];
  const [selectTab, setSelectTab] = useState(tablist[0]);

  return (
    <div>
      <div className="tab_container">
        {tablist.map((tab: string) => {
          return (
            <>
              <span
                className={'tab ' + tab + (tab === selectTab ? ' selected' : '')}
                onClick={() => setSelectTab(tab)}
                key={tab}
              >
                {tab}
              </span>
            </>
          );
        })}
      </div>
      <div>
        {selectTab === tablist[0] && <TodoList isFinished={false} />}
        {selectTab === tablist[1] && <TodoList isFinished={true} />}
      </div>
    </div>
  );
};
