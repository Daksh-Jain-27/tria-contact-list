import { Input } from './common/Input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <Input
      type="search"
      placeholder="Search contact by name..." 
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};