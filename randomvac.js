

/*document.getElementById("header").innerHTML = "อาหารไทยเท่านั้น ขี้เกียจคีย์";

var randomFood = function()
{
    let foodList = ["ต้มยำกุ้ง", "แกงส้มผักรวม", "แกงเขียวหวาน", "พะแนงไก่", "แกงมัสมั่น", "ไก่ผัดผงกะหรี่", "แกงจืด", "จิ้มจุ่ม", "ข้าวหน้าเป็ด",
     "ไข่เจียวหมูสับ", "ข้าวเหนียวหมูปิ้ง", "หมูแดดเดียว", "ยำคอหมูย่าง"];
    let x = foodList[Math.round((Math.random()* (foodList.length-1)))];
    document.getElementById("randomLoey").innerHTML = x + "<br><br><button id='button1' onclick=\"randomFood()\">ไม่อยากแดกอ่ะ สุ่มใหม่</button>";
}
*/
let x
let y
let vaccineList = [""]
let vaccineList2 = [""]
const text = "<br><br><button onclick=\"randomVac()\">สุ่มเข็มแรกใหม่</button>"
const cryUrl = "<img = src=\"cry.jpg\">"
var randomVac = function()
{
    vaccineList = ["Sinovac", "Aztrazeneca", "Aztra SBS (ซาบซึ้ง Version)", "กดจอง Sinopharm ไม่ทัน", "Pfizer VVIP", "โมเดอ(ชาติ)หน้า", "น้ำเกลือ", "รอจัดสรรเป็นกลุ่มต่อไป"];
    x = Math.round((Math.random() * (vaccineList.length-1)));
    document.getElementById("randomDose2").innerHTML = "";
    document.getElementById("dose3").innerHTML = "";
    if (x != 7 && x != 3) 
    {
        document.getElementById("randomVaccine").innerHTML = "เข็มแรก คุณจะได้ฉีด<br>" + vaccineList[x] + "<br><br><button onclick=\"randomVac2()\">กดอีกทีเพื่อสุ่มเข็มสอง</button>" 
        + text;
    } else if (x == 7)
    {
    document.getElementById("randomVaccine").innerHTML = vaccineList[x] + text;
    } else if (x == 3)
    {
        document.getElementById("randomVaccine").innerHTML = vaccineList[x] + text;
    }
    checkLoyalty()
}

var randomVac2 = function()
{
    vaccineList2 = ["Sinovac", "Aztrazeneca", "Aztra SBS (ซาบซึ้ง Version)", "กดจอง Sinopharm ไม่ทัน", "Pfizer หมดอายุ", "โมเดอ(ชาติ)หน้า", "น้ำเกลือ", "โดนเท"];
    y = Math.round((Math.random() * (vaccineList2.length-1)));
    document.getElementById("randomVaccine").innerHTML = "เข็มแรก คุณจะได้ฉีด<br>" + vaccineList[x];
    document.getElementById("randomDose2").innerHTML = "เข็มสองคุณจะได้ฉีด<br>" + vaccineList2[y] + text;
    if (vaccineList[x] == "Sinovac" && vaccineList2[y] == "Sinovac")
    {
        document.getElementById("dose3").innerHTML = "ยินดีด้วย คุณได้ลุ้นจับฉลากลุ้นบูสเตอร์ Pfizer";
    }
    checkLoyalty()
    x = y = null;
}

var checkLoyalty = function()
{
    if (x == 2 || y == 2)
    {
        document.getElementById("dose3").innerHTML = cryUrl;
    }
}