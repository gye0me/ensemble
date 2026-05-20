# 앙상블 스타즈!! 성격 유형 매칭 사이트

당신의 성격과 어울리는 앙상블 스타즈 캐릭터를 찾아주는 MBTI 기반 성격 테스트 사이트입니다.

## 🌟 기능

- **25개 질문 성격 테스트**: 5가지 성격 특성(E/I, S/N, T/F, P/J, Rule/Chaos)을 평가
- **52개 캐릭터 데이터베이스**: Trickstar, fine, Undead, Knights 등 모든 주요 유닛 포함
- **호환도 점수**: 사용자와 각 캐릭터의 성격 특성을 비교하여 0~100점의 호환도 계산
- **반응형 UI**: 모든 디바이스에서 최적화된 사용 경험

## 📋 성격 특성

1. **E (Extraversion) vs I (Introversion)**
   - 사교성과 활동성 정도

2. **S (Sensing) vs N (Intuition)**
   - 구체적 사실 vs 직관과 영감

3. **T (Thinking) vs F (Feeling)**
   - 논리적 판단 vs 감정 중심 판단

4. **P (Perceiving) vs J (Judging)**
   - 자유로움 vs 계획성

5. **Rule vs Chaos**
   - 규칙 준수 성향 vs 자유로움 추구

## 🚀 설치 및 실행

```bash
# 프로젝트 디렉토리로 이동
cd ang

# 의존성 설치
npm install

# 서버 시작
node app.js

# 브라우저에서 http://localhost:3000 접속
```

## 📁 프로젝트 구조

```
ang/
├── app.js                 # Express 서버 메인 파일
├── data.js               # 캐릭터 데이터베이스 (52개 캐릭터)
├── package.json          # npm 패키지 설정
├── views/
│   ├── quiz.ejs         # 성격 테스트 페이지
│   └── result.ejs       # 결과 표시 페이지
└── public/
    └── images/          # 캐릭터 이미지 (optional)
```

## 🔧 기술 스택

- **백엔드**: Node.js + Express.js
- **템플릿 엔진**: EJS
- **프론트엔드**: HTML5, CSS3, Vanilla JavaScript
- **호환도 알고리즘**: 유클리드 거리 기반 성격 특성 매칭

## 📊 호환도 계산 방식

각 캐릭터와 사용자의 호환도는 다음과 같이 계산됩니다:

```
호환도 = 100 - (E/P 불일치도 × 2) - (S/T/Rule 유사도 × 3~2)
```

- E점수와 P점수: 합쳐서 10이 되는 것이 이상적 (외향+자유 또는 내향+계획)
- S, T, Rule: 사용자와 캐릭터의 점수가 비슷할수록 높은 호환도

## 🎮 사용 예시

1. 웹사이트 접속
2. 25개 질문에 답변 (5단계 척도)
3. "나의 운명의 파트너 찾기" 버튼 클릭
4. 호환도와 추천 캐릭터 확인
5. 다시 테스트하거나 다른 캐릭터와 비교

## 🎨 디자인 특징

- 핑크 그라데이션 배경
- 부드러운 라운드 버튼과 카드 디자인
- 호환도 애니메이션 바
- 모바일 반응형 레이아웃
- 부드러운 트랜지션과 호버 효과

## 📝 포함된 유닛 (15개)

- Trickstar, fine, Undead, Knights
- Ryuseitai, Ra*bits, 2wink
- Valkyrie, Switch, MaM
- Eden, Alkaloid, Special for Princess
- Crazy:B (+ Double Face)

## 🔮 향후 개선 사항

- [ ] 캐릭터 이미지 추가
- [ ] 결과 공유 기능 (SNS)
- [ ] 캐릭터 상세 정보 페이지
- [ ] 데이터베이스 확대 (신규 캐릭터 추가)
- [ ] 테스트 히스토리 저장
- [ ] 어두운 테마 옵션

## 📄 라이선스

개인 프로젝트 - 자유로운 사용 및 수정 가능

---

**만든이**: GitHub Copilot  
**버전**: 1.0.0  
**마지막 업데이트**: 2026년 5월 20일
