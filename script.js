document.getElementById('mbtiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = new FormData(event.target);
    let result = '';

    // 각 질문에 대한 답을 기반으로 MBTI 유형 계산
    const answers = {
        q1: form.get('q1'),
        q2: form.get('q2'),
        q3: form.get('q3'),
        q4: form.get('q4'),
        q5: form.get('q5'),
        q6: form.get('q6'),
        q7: form.get('q7'),
        q8: form.get('q8'),
        q9: form.get('q9'),
        q10: form.get('q10')
    };

    // MBTI 유형 계산
    let mbti = '';
    mbti += answers.q1 === 'E' ? 'E' : 'I';
    mbti += answers.q2 === 'E' ? 'E' : 'I';
    mbti += answers.q3 === 'J' ? 'J' : 'P';
    mbti += answers.q4 === 'N' ? 'N' : 'S';
    mbti += answers.q5 === 'F' ? 'F' : 'T';
    mbti += answers.q6 === 'F' ? 'F' : 'T';
    mbti += answers.q7 === 'N' ? 'N' : 'S';
    mbti += answers.q8 === 'E' ? 'E' : 'I';
    mbti += answers.q9 === 'J' ? 'J' : 'P';
    mbti += answers.q10 === 'E' ? 'E' : 'I';

    // 결과 페이지로 이동
    window.location.href = `result.html?mbti=${mbti}`;
});
