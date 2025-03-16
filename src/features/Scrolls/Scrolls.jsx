import { memo } from 'react';
import { Scroll } from 'lucide-react';
import { FixedSizeList as List } from 'react-window';

import Menu from '../../components/Menu';
import ScrollCard from './ScrollCard';
import Empty from '../../components/Empty';

export default memo(function Scrolls({ scrolls }) {
  if (!scrolls.length)
    return <Empty message={'No scrolls found'} icon={Scroll} />;

  return (
    <div className="py-1">
      <div className="space-y-4">
        <Menu>
          <List
            height={500}
            itemCount={scrolls.length}
            itemSize={120}
            width={'100%'}
          >
            {({ index, style }) => (
              <div style={style}>
                <ScrollCard key={scrolls[index].id} note={scrolls[index]} />
              </div>
            )}
          </List>
        </Menu>
      </div>
    </div>
  );
});
