export const getUser = async () => {
   const res = await fetch('https://randomuser.me/api/?results=50');
   return await res.json();
}