const express = require('express'); //เรียกใช้ express ผ่าน require
const app = express(); //สร้างตัวแปร app เพื่อใช้งาน express
const port = 3000; //พอร์ตของ Server ที่ใช้ในการเปิด Localhost
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index',{username: 'Mao'});
});

app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});