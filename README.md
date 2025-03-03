# 作業1 負評救星-當機等候網頁

`
姓名: 劉政諺 
學號: D1018720
`

- 目標網站: [https://tixcraft.com/](https://tixcraft.com/)
- 作業網站: [https://d1018720.github.io/HW1_D1018720/](https://d1018720.github.io/HW1_D1018720/)

---

## 目錄

- [作業1 負評救星-當機等候網頁](#作業1-負評救星-當機等候網頁)
    - [目錄](#目錄)
    - [我的設計理念及如何契合目標網站](#我的設計理念及如何契合目標網站)
        - [目標網站的介紹](#目標網站的介紹)
        - [設計理念](#設計理念)
    - [介紹該網頁使用到哪些檔案](#介紹該網頁使用到哪些檔案)
        - [HTML](#html)
        - [CSS](#css)
        - [JavaScript](#javascript)
    - [commit次數的截圖](#commit次數的截圖)

---
## 我的設計理念及如何契合目標網站

### 目標網站的介紹
當今許多人有在追星追團的，抑或是喜歡看劇等等活動，不免俗地都會需要付費買票入場，
[Tixcraft](https://tixcraft.com/) 是一個提供各類活動門票銷售的線上平台，涵蓋音樂會、體育賽事、節慶等多元活動。

### 設計理念
- 讓使用者進入該網站時可以淺顯易懂的了解當前網頁當機了。
- [Tixcraft](https://tixcraft.com/) 的網站風格是以藍色與白色為主，所以我也將我的網站風格設計成與其相似為主。
- 盡量讓當機網頁與原始網頁相似，不要太過突兀。

---

## 介紹該網頁使用到哪些檔案

### [HTML](https://github.com/D1018720/HW1_D1018720/blob/master/index.html)

![NavBarPic](https://github.com/D1018720/HW1_D1018720/blob/master/img/NavbarPic.png?raw=true)
- NavBar在網頁的樣子
- 左邊紅框框為nav-left的部分，右邊紅框框為nav-right的部分。

![NavBarCode](https://github.com/D1018720/HW1_D1018720/blob/master/img/NavbarCode.png?raw=true)
- 主要使用了li以及a標籤來製作NavBar左側的部分。
- 右側則是使用了input標籤來製作搜尋欄。

![ErrorMessagePic](https://github.com/D1018720/HW1_D1018720/blob/master/img/ErrorMessagePic.png?raw=true)
- Error Message在網頁的樣子

![ErrorMessageCode](https://github.com/D1018720/HW1_D1018720/blob/master/img/ErrorMessageCode.png?raw=true)
- 使用了p、h1跟a標籤來製作Error Message的部分。

### [CSS](https://github.com/D1018720/HW1_D1018720/blob/master/styles.css)
![CSS1](https://github.com/D1018720/HW1_D1018720/blob/master/img/CSS1.png?raw=true)
- 這裡主要是對body以及NavBar的全域設計，透過flex讓版面至中。

![CSS2](https://github.com/D1018720/HW1_D1018720/blob/master/img/CSS2.png?raw=true)
- 這裡主要是對NavBar左側的設計，透過li以及a標籤來讓上面的字能夠按下去並前往該網址，
- 透過list-style將li的特徵移除，並以text-decoration讓a的字不會有線條。

![CSS3](https://github.com/D1018720/HW1_D1018720/blob/master/img/CSS3.png?raw=true)
![CSS4](https://github.com/D1018720/HW1_D1018720/blob/master/img/CSS4.png?raw=true)
- 這裡主要是對NavBar右側的設計，用justify-content將搜尋框框跟會員登錄區塊以space-between來隔開。
- 搜尋框框用input標籤來做，利用outline的去除以及border-radius讓四角圓潤，並修改placerholder內文字大小及顏色。
- 搜尋框框最右邊有個放大鏡是用button來做的，並透過i標籤來顯示放大鏡圖案，此外利用position來讓放大鏡能夠在框框最右邊。
- 會員登錄區塊則是用a標籤來做，並透過i標籤來顯示圖案。

![CSS5](https://github.com/D1018720/HW1_D1018720/blob/master/img/CSS5.png?raw=true)
![CSS6](https://github.com/D1018720/HW1_D1018720/blob/master/img/CSS6.png?raw=true)
- 這裡主要是對Error Message的設計，利用box-shadow來做陰影。
- 按鈕的部分則是透過cursor來指定鼠標碰到按鈕後會有箭頭指標的圖案在上面，並透過hover來製作一點動畫效果。

### [JavaScript](https://github.com/D1018720/HW1_D1018720/blob/master/script.js)
![script1](https://github.com/D1018720/HW1_D1018720/blob/master/img/Script1.png?raw=true)
- 使用script.js的檔案來撰寫javaScript，並用fontawsome這個圖案及符號應用的網站提供的js檔。

![script2](https://github.com/D1018720/HW1_D1018720/blob/master/img/Script2.png?raw=true)
- 利用html上的error-box這個class內有個id為countdown的標籤，並透過js來抓取來命名為countdown值在js檔中。
- 利用setInterval來讓countdown每秒減一，並透過textContent來將timeLeft的值給到countdown的值上顯示在網頁上。
- 透過location.reload()來重新整理網頁。
---

## commit次數的截圖
![commitTime](https://github.com/D1018720/HW1_D1018720/blob/master/img/commitPic.png?raw=true)
- 更新到１１次commit。
