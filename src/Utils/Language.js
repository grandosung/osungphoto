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
        night_view:'야경',
        com_intro:'회사소개',
        com_hello:'안사말',
        com_location:'오시는 길',
        category:'사업분야',
        portfolio:'포트폴리오',
        online:'상담문의',
        on_enroll:'신청하기',
        on_list:'신청현황'

        
    },
    jp:{
        people:'인간',
        nature:'자연',
        night_view:'야경',
        com_intro:'회사소개',
        category:'사업분야',
        portfolio:'포트폴리오',
        online:'온라인상담문의'

    }
}

export default {texts:Text[Lang],Change}

// export default (
//      Lang = 'ko',
//     Change =(lang) => (Lang = lang),
// )