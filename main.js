// //1.alert in ra thông báo
// alert('Hello word');
// //2. Console: in ra ở tab console 
// var fullName = 'Võ Thị Thảo Nguyên';
// console.error(fullName);
// console.warn(fullName);
// console.log(fullName);
// //3. confirm, messeage+button
// confirm('Xác nhận bạn đủ tuổi!');
// //4. prompt: có button xác nhận, có ô input để nhập giá trị
// prompt('Xác nhận bản đủ tuổi');
// //5. set timeout: thực hiện sau 1 khoảng thời gian, chỉ chạy 1 lần
// setTimeout(function(){
//     alert('Thông báo')
// }, 1000);
// //6. set interval: thực hiện sau 1 thời gian, thực hiện lien tục
// setInterval(function(){
// }, )

// var myArray = {


//     name: 'Javascript',
//     name2: 'PHP',
//     name3: 'Java'
// }
// var arrayLength= myArray.length;
// console.log(typeof (myArray));
// for(var i=0; i<arrayLength; i++)
// {
//     console.log(myArray[i]);
// }

// for(var key in myArray)
// {
//     console.log(myArray[key]);
// }
// for (var key of Object.values(myArray))
// {
//     console.log(key);
// }
for (var i=0; i<10; i++)
{
    
    if(i>7)
    {
        break;
    }
    console.log(i);
    
}