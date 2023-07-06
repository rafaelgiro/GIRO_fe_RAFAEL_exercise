import { API_URL } from '@/config';

export async function api(path: string, options: RequestInit = {}): Promise<any> {
  const defaultOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const fetchOptions: RequestInit = { ...defaultOptions, ...options };

  try {
    const response = await fetch(`${API_URL}${path}`, fetchOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}
