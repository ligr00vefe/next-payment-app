# 결제 기능 웹앱

## 📌 프로젝트 개요
결제 기능이 포함된 웹앱

## 🚀 기술 스택
- **프레임워크:** Next.js
- **스타일링:** SCSS
- **인증:** next-auth (이메일, 구글, 네이버, 카카오 로그인 지원)
- **데이터베이스:** Supabase
- **ORM:** Prisma ORM (prisma migrate / seed 적용)
- **API 통신:** Axios
- **지도:** 카카오 맵 API
- **데이터 상태관리:** 
- **전역 상태 관리:** 

## 🔗 API 및 데이터 출처
- **지도 API:** [카카오 맵](https://apis.map.kakao.com/)
- **아이콘 출처:** [Flaticon](https://www.flaticon.com/)

## 📂 주요 기능
- next-auth를 이용한 소셜 로그인 (구글, 네이버, 카카오)

## 🛠️ 개발 환경 설정
### 1. 프로젝트 클론
```bash
git clone https://github.com/your-repository/payment-app.git
cd payment-app
```

### 2. 패키지 설치
```bash
npm install
# or
yarn install
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고, 아래 내용을 추가.
```env
NEXT_PUBLIC_KAKAO_MAP_KEY=your_kakao_api_key
NEXT_PUBLIC_API_URL=http://localhost:3000

# Connect to Supabase via connection pooling with Supavisor.
DATABASE_URL="postgres://postgres.[your-supabase-project]:[password]@aws-0-[aws-region].pooler.supabase.com:5432/postgres"

NEXT_AUTH_URL=http://localhost:3000
NEXT_AUTH_SECRET=your_nextauth_secret

GOOGLE_CLIENT_ID=your_google_provider_id
GOOGLE_CLIENT_SECRET=your_google_provider_secret

NAVER_CLIENT_ID=your_naver_provider_id
NAVER_CLIENT_SECRET=your_naver_provider_secret

KAKAO_CLIENT_ID=your_kakao_provider_id
KAKAO_CLIENT_SECRET=your_kakao_provider_secret
```

### 4. 데이터베이스 마이그레이션
```bash
npx prisma migrate dev --name init
```

### 5. 개발 서버 실행
```bash
npm run dev
# or
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속하여 실행 결과를 확인.

## 🚀 배포
배포는 Vercel을 사용하여 쉽게 진행할 수 있음.
```bash
npm run build
vercel
```
[Next.js 배포 가이드](https://nextjs.org/docs/app/building-your-application/deploying)를 참고.

## 📚 참고 자료
- [Next.js 공식 문서](https://nextjs.org/docs)
- [next-auth 공식 문서](https://next-auth.js.org/)
- [Supabase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [Next-Auth Google Provider](https://console.cloud.google.com/apis/credentials)
- [Next-Auth Naver Provider](https://developers.naver.com/main/)
- [Next-Auth kakao Provider](https://developers.kakao.com/)

## 🐞 이슈 및 해결 방법


## 📝 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.
