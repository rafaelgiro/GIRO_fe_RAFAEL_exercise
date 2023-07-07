import { useSearchParams } from 'react-router-dom';

export function useSearch(): [string | null, (e: React.FormEvent<HTMLFormElement>) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log('search', searchParams);

  function handleSearch(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);

    const { search } = Object.fromEntries(formData) as { search: string };
    const newParams = new URLSearchParams(search ? { search } : undefined);

    setSearchParams(newParams);
  }

  return [searchParams.get('search'), handleSearch];
}
