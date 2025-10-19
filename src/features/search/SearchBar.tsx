import debounce from 'lodash.debounce';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import './SearchBar.css';
import { setSearchQuery } from './searchSlice';

interface SearchBarProps {
  popularQueries?: string[];
}

export default function SearchBar({ popularQueries = [] }: SearchBarProps) {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const debouncedDispatch = useMemo(
    () =>
      debounce((value: string) => {
        if (value !== '') {
          dispatch(setSearchQuery(value));
        }
      }, 400),
    [dispatch]
  );

  useEffect(() => {
    if (input === '') {
      dispatch(setSearchQuery(''));
    } else {
      debouncedDispatch(input);
    }

    return () => {
      debouncedDispatch.cancel?.();
    };
  }, [input, debouncedDispatch, dispatch]);

  const handlePopularClick = (phrase: string) => {
    setInput(phrase);
    dispatch(setSearchQuery(phrase));
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-input-container">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="search-bar-input"
          placeholder="Найти товары"
        />
        <span className="search-icon">
          <img src="/icon_search.svg" alt="icon search" />
        </span>
      </div>

      {isFocused && input === '' && popularQueries?.length > 0 && (
        <div className="popular-searches">
          <h4>Часто ищут</h4>
          <ul>
            {popularQueries.map(item => (
              <li key={item} onMouseDown={() => handlePopularClick(item)}>
                <img src="/icon_search.svg" alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
