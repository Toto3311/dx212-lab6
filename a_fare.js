// คำนวณค่าโดยสารรถ NGV: 2 กม.แรก 10 บาท, กม.ถัดไป กม.ละ 2 บาท (เศษปัดขึ้น)
const calcFare = (distanceKm) => {
  // ไม่ใช่ตัวเลข, ไม่ใช่ค่าที่จำกัด (NaN/Infinity) หรือติดลบ คืน 0
  if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const km = Math.ceil(distanceKm); // ปัดเศษกิโลเมตรขึ้น
  if (km <= 2) return 10;           // 2 กม.แรก คิด 10 บาทเหมาจ่าย
  return 10 + (km - 2) * 2;         // กม.ถัดไป กม.ละ 2 บาท
};

console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22