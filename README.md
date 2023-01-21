# 목차

- [프로젝트 소개](#프로젝트-소개)
- [사용된 기술 스택](#사용된-기술-스택)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
- [구현한 기능 목록](#구현한-기능-목록)

<br/>

# 프로젝트 소개

<div align="center">
<p>
  판매 과일의 코드번호, 상품명, 수량 등을 관리할 수 있는 일종의 관리자 페이지</p>
</div>

<br/>

# 사용된 기술 스택

## Front-End

![](https://img.shields.io/badge/front_end-javascript-F7DF1E?style=for-the-badge&logo=javascript)

![](https://img.shields.io/badge/front_end-react-61DAFB?style=for-the-badge&logo=react)

![](https://img.shields.io/badge/%20front_end-css3-1572B6?style=for-the-badge&logo=css3)

<br/>

## Back-End

![](https://img.shields.io/badge/%20back_end-firebase-ffca28?style=for-the-badge&logo=firebase)

<br/>

# 구현한 기능 목록

- Firebase의 Firestore Database로 CRUD 구현
- 추가 페이지 : 새로운 과일 추가 기능
- 리스트 페이지 : 기존의 과일 정보를 수정하거나 삭제하는 기능
- React Router Dom으로 라우팅 구현
- useNavigate를 통한 상품 코드별 상세 페이지 구현
- React Hooks 사용 (useState, useContext, useCallback, useMemo)
