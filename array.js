//bài 1
function minNumber(array){
    let arrayA = array.reduce((accumulator,currentValue) =>{
        return accumulator<currentValue ? accumulator:currentValue
    })
    return arrayA
}
console.log(minNumber([1,1,2,3]))

// bải 2
function max2Numbers(array) {
    let arrayA=array.sort((a,b)=> b-a)
    return arrayA[arrayA.length -1]
}
console.log(max2Numbers([2, 1, 6,6, 4 ])); 

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
function sortStudents(array){
    return array.sort((a,b) => b-a)
}
console.log(sortStudents(['Nam','Hoa','Tuan'])) 

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum(array){
    let sum = 0;
    const result = array.filter(element => {
        return (element%5==0);
    });
    result.forEach(element => {
        sum+= element
    }); // tìm hiểu về reduce
    return sum;
}
 console.log(sum([1,2,3,4,5,6,7,8,9,10]))
// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function newArray(array){
    let arrayA = array.map(element =>{
        return element%2
    });
    return arrayA
}
console.log(newArray([1,3,4,5]))
// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].
function getLongestString(array) {
    let longestStringLength = 0
    array.forEach((element) => {
      if (element.length >= longestStringLength) {
        longestStringLength = element.length
      }
    })
    const result = array.filter((element) => {
      return element.length === longestStringLength
    })
    return result
}
console.log(getLongestString(['aba', 'aa', 'ad', 'c', 'vcd']))
// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9
function sample(array){
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}
console.log(sample([3,7,9,11]))
// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function Replace(array){
    let randomPlace = array.sort(() => Math.random()-0.5);
    return randomPlace;
}
console.log(Replace([3,5,4,9]))
// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(arrayA , arrayB){
    let array = arrayA.filter(element =>{
        return arrayB.includes(element)
    })
    return array;
}
console.log((similarity([1, 2, 3], [1, 2, 4])))
// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
function symmetricDifference(arrayA,arrayB){
    let array = arrayA.filter(element => {
        return !arrayB.includes(element) 
    })
    let arrayC = arrayB.filter(element => {
        return !arrayA.includes(element) 
    })
    return array.concat(arrayC);// tìm hiểu concat
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))
// Bài 11: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]

function substringString(string) {
    const stringLength = string.length
    const arrayResult = []
    for (let index = 0; index < stringLength; index++) {
      const substring = string.substring(0, index + 1)
      arrayResult.push(substring)
    }
    for (let index = -stringLength + 1; index < 0; index++) {
      const substring = string.slice(index)
      arrayResult.push(substring)
    }
    return arrayResult
}
console.log(substringString("dog"))

// Bài 12: Kiểm tra mảng xem có phải mảng tăng dần hay không
function checkArrayIncreaseValue(array) {
    for(let i=0;i<array.length;i++){
        return array[i]<array[i+1] ? true:false
    }
}
console.log(checkArrayIncreaseValue([1,5,3,4,7,8]))
// Bài 13: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
function checkDecrease(array){
    let check = array.map((element) => element)
    array.sort((a,b)=> b-a)
    let checkA = array.every((element) => element % 2 !==0)
    if(checkA){
        return true;
    }
    return false;
}
console.log(checkDecrease([1,3,5]))