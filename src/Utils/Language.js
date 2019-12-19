const session = sessionStorage.getItem('lang')

let Lang = session ? session: 'ko';

const Change =(lang) => {
    sessionStorage.setItem('lang',lang);
    sessionStorage.getItem('lang');    
    window.location.reload()
}

const Text ={
    ko:{
        people:'인간',
        nature:'자연',
        nightview:'야경',
        comintro:'회사소개',
        comhello:'인사말',
        comlocation:'오시는 길',
        category:'사업분야',
        portfolio:'포트폴리오',
        online:'상담문의',
        onenroll:'신청하기',
        onlist:'신청현황',
        name:'성함',
        pw:'비밀번호',
        email:'이메일',
        address:'주소',
        findaddress:'주소찾기',
        number:'연락처',
        wantday:'희망날짜',
        value:'내용',
        file:'첨부파일',
    },
    jp:{
        people:'인간',
        nature:'자연',
        nightview:'야경',
        comintro:'회사소개',
        comhello:'안사말',
        comlocation:'오시는 길',
        category:'사업분야',
        portfolio:'포트폴리오',
        online:'상담문의',
        onenroll:'신청하기',
        onlist:'신청현황'

    }
}

export default {texts:Text[Lang],Change}

// export default (
//      Lang = 'ko',
//     Change =(lang) => (Lang = lang),
// )