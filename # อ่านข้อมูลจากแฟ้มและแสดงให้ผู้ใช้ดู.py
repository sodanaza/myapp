# อ่านข้อมูลจากแฟ้มและแสดงให้ผู้ใช้ดู
with open('user.txt', 'r', encoding='utf-8') as file:
    content = file.read()

print("ข้อมูลในแฟ้ม user.txt:")
print(content)

# ให้ผู้ใช้เลือกว่าจะเพิ่มข้อมูลที่ไหน
line_number = int(input("กรุณากรอกหมายเลขบรรทัดที่ต้องการเพิ่มข้อมูล (เริ่มจาก 1): "))
new_data = input("กรุณากรอกข้อมูลใหม่ที่จะเพิ่ม: ")

# แปลงข้อมูลเป็นรายการบรรทัด
lines = content.split('\n')

# เพิ่มข้อมูลใหม่ในบรรทัดที่ระบุ
lines.insert(line_number - 1, new_data)

# เขียนข้อมูลที่แก้ไขแล้วกลับลงในแฟ้ม
with open('user.txt', 'w', encoding='utf-8') as file:
    file.write("\n".join(lines))

print("ข้อมูลถูกเพิ่มลงในแฟ้ม user.txt เรียบร้อยแล้ว")
