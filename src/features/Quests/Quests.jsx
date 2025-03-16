import { useSelector } from 'react-redux';
import { Scroll } from 'lucide-react';
import { FixedSizeList as List } from 'react-window';

import QuestCard from './QuestCard';
import Empty from '../../components/Empty';
import Menu from '../../components/Menu';
import { useSearchParams } from 'react-router-dom';

export default function Quests() {
  const [searchParams] = useSearchParams();
  const quests = useSelector((state) => state.quests.quests) || [];

  if (!quests.length) {
    return <Empty message="No quests found" icon={Scroll} />;
  }

  // FILTER
  const filter = searchParams.get('filter') || 'not-completed';
  let filteredQuests = [];

  switch (filter) {
    case 'completed':
      filteredQuests = quests.filter((quest) => quest.completed);
      break;

    case 'not-completed':
      filteredQuests = quests.filter((quest) => !quest.completed);
      break;

    case 'created-first':
      filteredQuests = quests
        .slice()
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      break;

    case 'created-last':
      filteredQuests = quests
        .slice()
        .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
      break;

    case 'a-z':
      filteredQuests = quests
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      break;

    case 'z-a':
      filteredQuests = quests
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
      break;

    default:
      filteredQuests = quests.filter((quest) => !quest.completed);
      break;
  }

  return (
    <div className="space-y-4">
      <Menu>
        <List
          height={600}
          itemCount={filteredQuests.length}
          itemSize={200}
          width={'100%'}
        >
          {({ index, style }) => {
            return (
              <div style={style}>
                <QuestCard
                  quest={filteredQuests[index]}
                  key={filteredQuests[index].id}
                />
              </div>
            );
          }}
        </List>
      </Menu>
    </div>
  );
}
