
async function getData(url){

    try{
        let res=await fetch(url)

    leet data =await res.json()
    return data
    }
    catch(e){
        console.log('e:',e)
    }

}

function appendData(data,location){
 
    data.forEach(({title,image}) =>{
        let div= document.createElement('div')

        let p=document.createElement('p')

        p.innerText= title
        let img=document.createElement('img')

        img.src =el.image

        div.append(img,p)
        

        location.append(div)

    })


}


export {getData,appendData}