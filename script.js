function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน (ในที่นี้ใช้ค่า hard-coded)
    if (username === 'admin' && password === 'password') {
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
}

function updateContent() {
    const content = document.getElementById('content').value;
    document.getElementById('message').innerText = 'เนื้อหาถูกอัปเดต: ' + content;
    document.getElementById('content').value = ''; // ล้าง textarea
}