// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020
function getCurrentDate(str)
{
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()
    let now = day+str+month+str+year
    return now
}
console.log(getCurrentDate('/'))
// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate()
}
console.log(getDaysInMonth(2020,2))
// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
function checkDayLastWeek(year,month,day){
    return new Date(year,month,day).getDay()==0 ? true : false
}
console.log(checkDayLastWeek(2022,2,20))
// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
function minutesTime(hour,minutes){
    let time = new Date(0,0,0,hour,minutes)
    let hourToMinutes = time.getHours()*60 + time.getMinutes() 
    return hourToMinutes
}
console.log(minutesTime(2,30))
// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
function dayRemove(year,month,day){
    let dayNow = new Date(year,month,day)
    let dayStart = new Date(year,0,0)
    let Remove = dayNow - dayStart
    let dayOne = 24*60*60*1000
    let dayPass = Math.floor(Remove/dayOne)
    return dayPass
}
console.log(dayRemove(2022,2,12))
// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))
function calculate_age(year,month,day)
{
    // let dayBorn = new Date(year,month,day)
    let today = new Date()
    let dayNow = today.getDate()
    let monthNow = today.getMonth()+1
    let yearNow = today.getFullYear()
    let age = yearNow - year + " tuổi "
    let monthA = month > monthNow ? month - monthNow : monthNow- month 
    let dayA = dayNow - day + ' ngày'
    return age + monthA +' tháng ' + dayA
}
console.log(calculate_age(1999,4,1))
// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)
function startOfWeek()
{
    let dt = new Date()
    let firstDay = dt.getDate() - dt.getDay()
    return new Date(dt.setDate(firstDay))
}
console.log(startOfWeek())
// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);
function  endOfMonth()
{
    let dt = new Date()
    let year = dt.getFullYear()
    let month = dt.getMonth()+1
    let lastDay = getDaysInMonth(year,month)

    return new Date(dt.setDate(lastDay))
}
console.log(endOfMonth())
// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''


// |----------------|
// |  String :  9   |
// |  Array  : 13   |
// |  Number :  6   |
// |  Object :  6   |
// |  Date   : 10   |
// |----------------|
// |  Tổng   : 44   |
// |----------------|
