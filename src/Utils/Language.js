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
        night_view:'야경'
        
    },
    jp:{
        people:'닌',
        nature:'자',
        night_view:'야'
    }
}

export default {texts:Text[Lang],Change}

// export default (
//      Lang = 'ko',
//     Change =(lang) => (Lang = lang),
// )