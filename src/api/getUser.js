const API_BASE = 'https://randomuser.me/api/';

export const getUser = async (page) => {
   const res = await fetch(`${API_BASE}?page=${page}&results=10&seed=pfm-2023`);
   return await res.json();
}