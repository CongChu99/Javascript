// ------------Bai tap ve String----------------
// Bai 1
function checkStringExit(chuoiBanDau , chuoiKiemTra){
    if(chuoiBanDau.search(chuoiKiemTra) == 0 )
    {
        return false;
    }
    else 
    {
        return true;
    }
}
console.log(checkStringExit("i love you","you"));

// Bai 2
function shortenString(chuoiBanDau){
    var chuoiCat = "";
    chuoiCat = chuoiBanDau.slice(0,8)+"..."
    return chuoiCat;
}
console.log(shortenString('Xin chao cac ban'));

// Bai 3
function capitalizeString(chuoiBanDau){
    var chuoiThuong = "";
    chuoiThuong = chuoiBanDau.toLowerCase().split(" ");
    for(var i = 0 ; i<chuoiThuong.length;i++)
    {
        chuoiThuong[i] = chuoiThuong[i].charAt(0).toUpperCase() + chuoiThuong[i].substring(1);
    }
    return chuoiThuong.join(' ');
}
console.log(capitalizeString('chÀo MừnG đẾn với xTP')); 

// Bai 4
function copyString(str){
    var copy = "";
    copy = str.repeat(10);
    return copy;
}
console.log(copyString("HelloWorld"));

//Bai 5
function repeatString(str){
    var repeat10 = "";
    for (var i = 0;i<10;i++)
    {
        if (i == 9)
        {
            repeat10 += str;
            break;
        }
        repeat10 += str + '-';
    }
    return repeat10;
}
console.log(repeatString('a'));

//Bai 6
function repeatStringN(str,SoN){
    var copy = "";
    for (var i = 0;i<SoN;i++)
    {
        if (i ==SoN - 1)
        {
            copy += str;
            break;
        }
        copy += str +'-';
    }
    return copy;
}
console.log(repeatStringN('a',5));

// Bai 7
function reverseStrin(str){
    return str.split('').reverse().join('');
}
console.log(reverseStrin('Hello'));

// Bai 8
function CheckreverseStrin(str){
    var reverse = "";
    reverse = str.split('').reverse().join('');
    if (str.toLowerCase() == reverse.toLowerCase())
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(CheckreverseStrin('Racecar'));

// Bai 9
function Check(str)
{
    var chuoiKiemTra = "";
    chuoiKiemTra = str.toUpperCase();
    if (str == chuoiKiemTra)
    {
        return true ;
    }
    else 
    {
        return false;
    }
}
console.log(Check('ABC ADC'));

// ------------- Bài Tập về Number ---------
// Bài 1
function TheTich(r)
{
    return (4*3.14*r*r*r)/3;
}
console.log(TheTich(5));

// Bài 2
function soNguen(a,b)
{
    var sum = 0;
    for (var i = a+1;i<b;i++)
    {
        sum += i;
    }
    return sum ;
}
console.log(soNguen(3,8));

// Bài 3
function kiemTraSoNguyenTo(n)
{
    if (n<2)
    {
        return false;
    }
    else
    {
        for (var i = 2; i < n-1;i++)
        {
            if (n%i == 0)
            return false;
        }
        return true;
    }
}
console.log(kiemTraSoNguyenTo(10));

// Bài 4
function tongSoNguyenDuong(n)
{
    sum = 0;
    if (n<0)
    {
        return false;
    }
    else
    {
        for (var i = 0; i<= n;i++)
        {
            if(kiemTraSoNguyenTo(i)== true)
            {
                sum+= i ;
            }
            else
            {
                sum+= 0;
            }
        }
        return sum;
    }
}
console.log(tongSoNguyenDuong(10));

// Bài 5
function tongUocSo(n)
{
    var sum = 0;
    if (n<0)
    {
        return false;
    }
    else
    {
        for (var i = 1;i<=n;i++)
        {
            if (n%i==0)
            {
                sum += i;
            }
        }
        return sum;
    }
}
console.log(tongUocSo(24));

// Bài 6
function SapXep(n)
{
    var soNguyen = n.toString().split('');
    return soNguyen.reverse().join('');
}
console.log(SapXep(53751));