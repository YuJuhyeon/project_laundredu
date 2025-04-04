# Laundredu Mobile App

세탁 서비스를 위한 모바일 애플리케이션입니다.

## 기술 스택

- React Native
- Expo
- TypeScript
- Expo Router

### 필수 조건

- Node.js (v14 이상)
- npm
- Expo CLI

### 설치

1. 저장소 클론
```bash
git clone https://github.com/joyzh1029/laundredu-mobile.git
cd laundredu-mobile
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

## 프로젝트 구조

```
laundredu-mobile/
├app/
├── _layout.tsx
├── index.tsx
├── mypage.tsx
├── edit-profile.tsx
├── payment-history.tsx
├── assets/                # 이미지, 폰트 등 리소스
│   ├── images/           # 앱에서 사용되는 이미지
│   └── fonts/            # 폰트 파일
└── components/           # 재사용 가능한 컴포넌트
    └── layout/          # 레이아웃 관련 컴포넌트
```

## 주요 기능

### 마이 페이지

- 사용자 프로필 정보 표시
- 회원 등급 표시 (일반회원 등)
- 결제 내역 및 카드 관리
- 리뷰 관리
- 친구 초대 프로그램
- 혜택 및 쿠폰 관리
- 고객 서비스 접근 (1:1문의, 전화문의)

### 결제 내역

- 결제 내역 조회
- 결제 상세 정보 확인
  - 결제 금액
  - 결제 일시
  - 결제 상태
  - 결제 수단
- 결제 내역 필터링 기능

### 프로필 편집

- 사용자 프로필 정보 수정
- 로그아웃 기능
- 회원탈퇴 기능
- 개인정보 수정

### 2025.04.04 업데이트
#### 주요기능
1. **혜택 및 쿠폰 페이지**
   - LAUNDU Membership 혜택 정보 표시
   - 매주 수요일 7% 크리닝 데이 할인 쿠폰
   - 1년에 한번 15% 생일 축하 쿠폰

2. **공지사항 페이지**
   - 시스템 점검 및 업데이트 안내
   - 날짜별 공지사항 목록 표시
   - 상세 내용 확인을 위한 화살표 버튼

3. **자주 묻는 질문 페이지**
   - Q&A 형식의 FAQ 목록
   - 질문 클릭 시 답변 펼침/접기 기능
   - 회색 배경의 답변 영역

4. **1:1 문의 페이지**
   - 문의 및 제안 / 불만족 접수 탭 구분
   - 문의 내역 확인 기능
   - 하단 고정 문의 등록하기 버튼
