// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#year')
// option 목록 생성 여부 확인
let isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
    if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(let i = 1937; i <= 2022; i++) {
        // option element 생성
        const YearOption = document.createElement('option')
        YearOption.setAttribute('value', i)
        YearOption.innerText = i
        // birthYearEl의 자식 요소로 추가
        this.appendChild(YearOption);
        }
    }
});


// Month 셀렉트 박스
const birthMonthEl = document.querySelector('#month')

let isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function () {
    if(!isMonthOptionExisted){
        isMonthOptionExisted = true;
        for(let i = 1; i <= 12; i++){
            const MonthOption = document.createElement('option')
            MonthOption.setAttribute('value', i)
            MonthOption.innerText = i
            this.appendChild(MonthOption);
        }
    }
})


// Day 셀렉트 박스
const birthDayEl = document.querySelector('#day')

let isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function () {
    if(!isDayOptionExisted){
        isDayOptionExisted = true;
        for(let i = 1; i <= 31; i++){
            const DayOption = document.createElement('option')
            DayOption.setAttribute('value', i)
            DayOption.innerText = i
            this.appendChild(DayOption);
        }
    }
})

// first 버튼을 누르면 second 화면으로 넘어가기
const iljuButtonFind = document.querySelector('.ilju__button--find') //버튼
const iljuFirst = document.querySelector('#iljuFirst') // first섹션
const iljuSecond = document.querySelector('#iljuSecond')// second섹션

iljuButtonFind.addEventListener("click", function () {
    //first섹션 hide
    iljuFirst.classList.add('hide');

    //second섹션 hide 없애기
    iljuSecond.classList.remove('hide');
})


import {data} from './iljudata.js'

const iljuButtonBirthFind = document.querySelector('.ilju__button--birthFind')
const iljuResult = document.querySelector('#iljuResult')

iljuButtonBirthFind.addEventListener("click", function() {

//버튼 누르면 결과 창으로 바뀜
    iljuSecond.classList.add('hide');
    iljuResult.classList.remove('hide');



 //생년월일 일수 합계
    const iljuYear = birthYearEl.value - 1936;
    const iljuFourYear = Math.floor(iljuYear / 4)
    const iljuSumMonthDay = function() {
        let sumDay = 0;
        for(let i=1; i < birthMonthEl.value; i++){
            if(i===1||i===3||i===5||i===7||i===8||i===10||i===12){
                sumDay = sumDay + 31;
            }else if(i===4 || i===6 || i===9 || i===11){
                sumDay = sumDay + 30;
            }else if(i===2 && birthYearEl.value%4===0){
                sumDay = sumDay + 29;
            }else if(i===2){
                sumDay = sumDay + 28;
            }
        }
        return sumDay + Number(birthDayEl.value)
    }
// 기준일로부터 태어난 날짜까지의 합계
    const ilJuAllSum = iljuYear * 365 - 42 + iljuFourYear + iljuSumMonthDay();
    
//일간 숫자
    const ilGan = ilJuAllSum % 10;
    //0=갑 1=을 2=병 3=정 4=무 5=기 6=경 7=신 9=임 9=계

//일지 숫자
    const ilJi = ilJuAllSum % 12;
    //0=자 1=축 2=인 3=묘 4=진 5=사 6=오 7=미 8=신 9=유 10=술 11=해
//일주 id
    const dataIndex = '' + ilGan + ilJi



//일주 객체를 html로 만들기

    const iljuOne = document.querySelector('.result__title > p')
    const iljuTwo = document.querySelector('.result__title > h2')
    const title = document.querySelector('.result > h3')
    const content = document.querySelector('.result > p')
    const img = document.querySelector('.result > img')

    for(let i=0; i <=61; i++){
    if(data[i].id === dataIndex){
        iljuOne.innerText = data[i].iljuOne
        iljuTwo.innerText = data[i].iljuTwo
        title.innerText = data[i].title
        content.innerText = data[i].content
        img.setAttribute('src', data[i].img)
    }
}
})


//id가 00인 객체의 index를 알아내서
//해당 객체의 정보를 불러오기









