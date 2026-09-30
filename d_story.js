// คืนเมนูที่ราคาไม่เกินงบ เรียงจากถูกไปแพง
const filterMenuByBudget = (menus, budget) =>
  menus
    .filter(m => m.price <= budget)
    .sort((a, b) => a.price - b.price);

const menus = [
  { name: "ข้าวมันไก่", price: 40, category: "จานเดียว" },
  { name: "ผัดกะเพรา", price: 50, category: "จานเดียว" },
  { name: "ชานม", price: 30, category: "เครื่องดื่ม" },
  { name: "สเต็ก", price: 120, category: "อาหารตะวันตก" },
];

console.log(filterMenuByBudget(menus, 50));  // ชานม, ข้าวมันไก่, ผัดกะเพรา
console.log(filterMenuByBudget(menus, 40));  // ชานม, ข้าวมันไก่ (ราคาเท่างบ)
console.log(filterMenuByBudget(menus, 10));  // [] (กรณีขอบ)