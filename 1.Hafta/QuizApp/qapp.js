document.addEventListener('DOMContentLoaded', () => {
    const sorular = [{
            S: ' Metni kalın yazmak için kullanılan etiket aşağıdakilerden hangisidir ?',
            options: ['H1', 'B', 'I', 'U'],
            correctAnswer: 'B'
        },
        {
            S: ' Kullanıcı bir HTML öğesine tıkladığında hangi olay gerçekleşir ?',
            options: ['onmouseclick', 'onclick', 'onmouseover', 'hiçbiri'],
            correctAnswer: 'onclick'
        },
        {
            S: ' Aşağıdakilerden hangisi sayilar dizisini sıralar ?',
            options: ['sayilar.sort();', 'sort.sayilar[];', 'sort(sayilar);', 'sayışar(sort);'],
            correctAnswer: 'sayilar.sort();'
        },
        {
            S: 'CSS aşağıdakilerden hangisidir ?',
            options: ['Colorful Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets'],
            correctAnswer: 'Cascading Style Sheets'
        },
        {
            S: 'Stil şablonlarımıza açıklama satırı eklemek için ne kullanılır ?',
            options: ['/* açıklama satırı */', '/* açıklama satırı */', '// açıklama satırı //', '// açıklama satırı'],
            correctAnswer: '/* açıklama satırı */'
        },
        {
            S: 'Aşağıdaki kod parçasında, numbers dizisinin uzunluğu kaçtır ? let numbers = 1, 2, 3, 4, 5;',
            options: ['4', '5', '6', '7'],
            correctAnswer: '5'
        },
        {
            S: 'HELAL LAN KARDEEEŞ',
            options: [],
            correctAnswer: null
        }
    ];

    const sorularElement = document.querySelector('#sorular');
    const next = document.querySelector('#nxt');
    const optElements = document.querySelectorAll('.box2');
    const tryAgainBtn = document.querySelector('.btn-nxt');
    const winnerElement = document.querySelector('.winner');
    const boxElement = document.querySelector('.box');
    const headingElement = document.querySelector('.hding');

    let m = 0;

    function quiz() {
        const currentQuestion = sorular[m];

        sorularElement.innerHTML = currentQuestion.S;

        optElements.forEach((optElement, i) => {
            if (i < currentQuestion.options.length) {
                optElement.innerHTML = currentQuestion.options[i];
                optElement.parentElement.style.backgroundColor = 'gray';
                optElement.parentElement.style.display = 'flex';
            } else {
                optElement.parentElement.style.display = 'none';
            }
        });

        next.style.display = 'none';

        optElements.forEach(optElement => {
            optElement.removeEventListener('click', handleOptionClick);
        });

        optElements.forEach(optElement => {
            optElement.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(e) {
        const currentQuestion = sorular[m];
        let selectedAnswer = e.target.innerText;

        if (currentQuestion.correctAnswer === selectedAnswer) {
            e.target.parentElement.style.backgroundColor = 'green';
            next.style.display = 'flex';
        } else {
            boxElement.style.display = 'none';
            e.target.parentElement.style.backgroundColor = 'red';
            winnerElement.style.display = 'block';
        }
    }

    next.addEventListener('click', () => {
        m++;
        if (m < sorular.length) {
            quiz();
        } else {
            boxElement.style.display = 'none';
            next.style.display = 'none';
            headingElement.style.display = 'none';
        }
    });

    tryAgainBtn.addEventListener('click', () => {
        m = 0;
        quiz();
        winnerElement.style.display = 'none';
        boxElement.style.display = 'flex';
        next.style.display = 'none';
        headingElement.style.display = 'flex';
    });

    quiz();
});