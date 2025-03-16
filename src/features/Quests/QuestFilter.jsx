import { Filter } from 'lucide-react';
import Menu from '../../components/Menu';
import { useSearchParams } from 'react-router-dom';

export default function QuestFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (filter) => {
    searchParams.set('filter', filter);
    setSearchParams(searchParams);
  };

  return (
    <Menu>
      <Menu.Toggle id="quest-filter" icon={Filter} />

      <Menu.List id="quest-filter">
        <Menu.Item onClick={() => handleFilter('completed')}>
          Completed
        </Menu.Item>
        <Menu.Item onClick={() => handleFilter('not-completed')}>
          Not Completed
        </Menu.Item>
        <Menu.Item onClick={() => handleFilter('created-first')}>
          Created first
        </Menu.Item>
        <Menu.Item onClick={() => handleFilter('created-last')}>
          Created last
        </Menu.Item>

        <Menu.Item onClick={() => handleFilter('a-z')}>A-Z</Menu.Item>
        <Menu.Item onClick={() => handleFilter('z-a')}>Z-A</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
