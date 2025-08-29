# เปิดแฟ้ม user.txt ในโหมด 'w' (เขียนใหม่) เพื่อเคลียร์ข้อมูลทั้งหมด
with open('user.txt', 'w', encoding='utf-8') as file:
    file.write("")  # เขียนข้อมูลว่างลงในแฟ้ม

print("ข้อมูลในแฟ้ม user.txt ถูกลบเรียบร้อยแล้ว")
