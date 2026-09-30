function calculateFare(distance, ratePerKm = 10) {
  // คำนวณค่ารถจากระยะทาง
  return distance * ratePerKm;
}

console.log(calculateFare(5)); // 50