// 모달 제어
function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
}

// 모달 닫기 버튼
document.querySelector('.close').onclick = function() {
    document.getElementById('searchModal').style.display = 'none';
}

// 모달 외부 클릭시 닫기
window.onclick = function(event) {
    if (event.target == document.getElementById('searchModal')) {
        document.getElementById('searchModal').style.display = 'none';
    }
}

// 강의실 검색 함수
function searchRooms() {
    const date = document.getElementById('searchDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (!date || !startTime || !endTime) {
        alert('날짜와 시간을 모두 선택해주세요.');
        return;
    }

    // 여기서 서버에 검색 요청을 보내고 결과를 받아옵니다
    // 임시 데이터로 예시를 보여드리겠습니다
    const sampleRooms = [
        '101호', '102호', '201호', '202호', '301호', '302호'
    ];

    const roomsContainer = document.getElementById('availableRooms');
    roomsContainer.innerHTML = ''; // 기존 결과 초기화

    sampleRooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.className = 'room-item';
        roomElement.innerHTML = `
            <h4>${room}</h4>
            <p>수용인원: 30명</p>
        `;
        roomElement.onclick = () => selectRoom(room);
        roomsContainer.appendChild(roomElement);
    });
}

// 강의실 선택 함수
function selectRoom(room) {
    const confirmed = confirm(`${room}을(를) 예약하시겠습니까?`);
    if (confirmed) {
        // 여기서 예약 처리를 합니다
        alert('예약 페이지로 이동합니다.');
    }
} 