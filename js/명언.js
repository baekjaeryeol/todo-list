const wiseSaying = [
    {
        quote: "컴퓨터는 어떤 바보라도 사용할 수 있다. 그래서 많은 사람들이 컴퓨터를 사용한다",
        author: "-Ted Nelson, HTML을 만든 사회 과학자-"
    },
    {
        quote: "고객을 “유저”라고 부르는 딱 두 개의 산업이 있다 – 마약, IT",
        author: "-Edward Tufte, 데이터 시각화의 선구자-"
    },
    {
        quote: "우리는 프로그래머 3대 미덕을 잘 알고 있다 – 게으름, 괴팍함, 그리고 자만심",
        author: "-Seymour Cray, 슈퍼컴퓨터 크레이를 만든 사람-"
    },
    {
        quote: "사람들은 그들이 컴퓨터를 미워할 거라고 생각했다. 하지만 그들이 진짜로 미워하는 건 프로그래머들이었다",
        author: "-Larry Niven, Ringworld  유명한 SF소설가-"
    },
    {
        quote: "붓과 색을 공부한다고 훌륭한 화가가 되지 않듯, 컴퓨터과학을 공부한다고 훌륭한 프로그래머가 되지는 않는다",
        author: "-Eric Raymond, 인류학자, 오픈소스 운동의 대표 서술가-"
    },
    {
        quote: "최고의 프로그래머는 그냥 좋은 프로그래머들보다 조금 더 나은 게 아니다. 그들은 어떻게 측정하던 간에 보통 사람들 보다 한 자리 수 이상이다 : 창의력, 스피드, 설계능력, 문제해결 능력까지",
        author: "-Randall E. Stross, 뉴욕타임즈 테크부문 기자-"
    },
    {
        quote: "훌륭한 기계공은 일반 기계공보다 몇배의 급여를 더 높이 받는다. 그러나 훌륭한 코드를 만들어내는 개발자는 일반적인 개발자보다 1만배 이상의 가치가 있다",
        author: "-Bill Gates-"
    },
    {
        quote: "올바로 작동하지 않는다고 걱정하지 마라. 모든 게 잘 되었다면, 내가 할 일이 없어진다",
        author: "-Mosher의 소프트웨어 공학법칙-"
    },
    {
        quote: "사람은 반복문을 쓰고, 신은 재귀함수를 쓴다",
        author: "-L. Peter Deutsch, PDF Interpreter, Ghostscript, PostScript의 창시자-"
    }
];
const quote = document.querySelector("div#wiseSaying span:first-child");
const author = document.querySelector("div#wiseSaying span:last-child")

const todayWiseSaying = wiseSaying[Math.floor(Math.random() * wiseSaying.length)];

quote.innerText = todayWiseSaying.quote;
author.innerText = todayWiseSaying.author;