import Menu from '../../components/Menu';
import { memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import ScrollCard from './ScrollCard';

export default memo(function Scrolls({ searchNotes }) {
  return (
    <div className="py-1">
      <div className="space-y-4">
        <Menu>
          <List
            height={500}
            itemCount={searchNotes.length}
            itemSize={120}
            width={'100%'}
          >
            {({ index, style }) => (
              <div style={style}>
                <ScrollCard
                  key={searchNotes[index].id}
                  note={searchNotes[index]}
                />
              </div>
            )}
          </List>
        </Menu>
      </div>
    </div>
  );
});
