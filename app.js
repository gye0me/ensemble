const express = require('express');
const path = require('path');

const characters = require('./data');

const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static
app.use(express.static('public'));

// 시작 페이지
app.get('/', (req, res) => {
    res.render('start');
});

// 퀴즈 페이지
app.get('/quiz', (req, res) => {
    res.render('quiz');
});

// 결과 계산
app.post('/match', (req, res) => {

    const userAnswers = req.body;

    // 평균 계산 함수
    const avg = (arr) =>
        arr.reduce((sum, v) => sum + Number(v || 0), 0) / arr.length;

    // 사용자 성향
    const userProfile = {

        passion: avg([
            userAnswers.p1,
            userAnswers.p2,
            userAnswers.p3,
            userAnswers.p4
        ]),

        elegance: avg([
            userAnswers.e1,
            userAnswers.e2,
            userAnswers.e3,
            userAnswers.e4
        ]),

        intelligence: avg([
            userAnswers.i1,
            userAnswers.i2,
            userAnswers.i3,
            userAnswers.i4
        ]),

        loyalty: avg([
            userAnswers.l1,
            userAnswers.l2,
            userAnswers.l3,
            userAnswers.l4
        ]),

        freedom: avg([
            userAnswers.f1,
            userAnswers.f2,
            userAnswers.f3,
            userAnswers.f4
        ])
    };

    let bestMatches = [];
    let minDistance = Infinity;

    characters.forEach(char => {

        const distance = Math.sqrt(
            Math.pow(userProfile.passion - char.scores.passion, 2) +
            Math.pow(userProfile.elegance - char.scores.elegance, 2) +
            Math.pow(userProfile.intelligence - char.scores.intelligence, 2) +
            Math.pow(userProfile.loyalty - char.scores.loyalty, 2) +
            Math.pow(userProfile.freedom - char.scores.freedom, 2)
        );

        if (distance < minDistance - 0.0001) {

            minDistance = distance;
            bestMatches = [char];

        } else if (Math.abs(distance - minDistance) < 0.0001) {

            bestMatches.push(char);
        }
    });

    // 랜덤 선택
    const finalMatch =
        bestMatches[
            Math.floor(Math.random() * bestMatches.length)
        ];

    // 최대 거리
    const maxDistance = Math.sqrt(
        10 ** 2 +
        10 ** 2 +
        10 ** 2 +
        10 ** 2 +
        10 ** 2
    );

    // 호환도 계산
    const chemistry = Math.max(
        0,
        Math.round((1 - minDistance / maxDistance) * 100)
    );

    // 결과 렌더링
    res.render('result', {
        partner: finalMatch,
        user: userProfile,
        chemistry: chemistry
    });
});

// 서버 실행
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`서버 실행중! http://localhost:${PORT}`);
});