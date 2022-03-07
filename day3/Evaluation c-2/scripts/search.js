import { appendArticles } from "./main";

function storeSearchterm(term) {

    //https://gnews.io/api/v4/search?q=example&token=API-Token
    // head lines :https://gnews.io/api/v4/top-headlines?token=API-Token
   //   let api="c231e277cdb8b9e82668f887f410e30e"
    localStorage.setItem("term",JSON.stringify(term))
    window.location.href="search.html"
    
}

export default storeSearchterm