const express = require('express');
const app = express();
const characters = require('./data');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('start');
});

app.get('/quiz', (req, res) => {
    res.render('quiz');
});

app.post('/match', (req, res) => {
    try {
        const b = req.body;

        // 사용자의 5가지 성격 특성 계산 (0~10점 척도)
        // passion(열정), elegance(우아함), intelligence(지성), loyalty(충성), freedom(자유)
        const user = {
            passion: (parseFloat(b.p1) + parseFloat(b.p2) + parseFloat(b.p3) + parseFloat(b.p4) + parseFloat(b.p5)) / 5,
            elegance: (parseFloat(b.e1) + parseFloat(b.e2) + parseFloat(b.e3) + parseFloat(b.e4) + parseFloat(b.e5)) / 5,
            intelligence: (parseFloat(b.i1) + parseFloat(b.i2) + parseFloat(b.i3) + parseFloat(b.i4) + parseFloat(b.i5)) / 5,
            loyalty: (parseFloat(b.l1) + parseFloat(b.l2) + parseFloat(b.l3) + parseFloat(b.l4) + parseFloat(b.l5)) / 5,
            freedom: (parseFloat(b.f1) + parseFloat(b.f2) + parseFloat(b.f3) + parseFloat(b.f4) + parseFloat(b.f5)) / 5
        };

        let bestPartner = null;
        let maxScore = -1;

        // 캐릭터와 유저의 호환도 계산
        characters.forEach(char => {
            let score = 100;

            // 각 특성별로 차이를 계산하고 가중치 적용
            score -= Math.abs(user.passion - char.scores.passion) * 2;     // 열정 매칭
            score -= Math.abs(user.elegance - char.scores.elegance) * 2;   // 우아함 매칭
            score -= Math.abs(user.intelligence - char.scores.intelligence) * 2; // 지성 매칭
            score -= Math.abs(user.loyalty - char.scores.loyalty) * 3;     // 충성 매칭 (중요도 높음)
            score -= Math.abs(user.freedom - char.scores.freedom) * 2;     // 자유 매칭

            score = Math.max(0, score);

            if (score > maxScore) {
                maxScore = score;
                bestPartner = char;
            }
        });

        // 최종 매칭 결과 렌더링
        res.render('result', { 
            partner: bestPartner || characters[0], 
            user: user,
            chemistry: maxScore.toFixed(1) 
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('호환도 계산 중에 오류가 발생했습니다.');
    }
});

app.listen(3000, () => console.log('앙상블 스타즈 매칭 서버 시작! http://localhost:3000'));
