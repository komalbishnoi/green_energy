//DATA RESOURCES
let dataResouce = [
    {
        heading: "Wind Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies ",
        imgUrl: "https://cdn.pixabay.com/photo/2014/06/23/03/13/beach-375069_1280.jpg"
    },
    {
        heading: "Solar energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies ",
        imgUrl: "https://cdn.pixabay.com/photo/2016/11/03/15/03/solar-panels-1794467_1280.jpg"
    },
    {
        heading: "Biogas Plant",
        bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies ",
        imgUrl: "https://cdn.pixabay.com/photo/2017/11/05/00/08/biogas-2919235_1280.jpg"
    }
];


let btns = document.querySelectorAll('button');
let content = document.querySelector(".content");
//console.log(btns);



//EVENT OBJECT IS ACCESSED THROUGH TH EVENT-HANDLER
//AS THE FIRST PARAMETER OF THE EVENT-HANDLER
function updateData(ev) {

    //fetch the clicked button and read the text unside the button
    let buttonText = ev.target.innerText;

    //print the text inside the button
    //console.log(buttonText);
    //console.log("it works");
    if (buttonText === "Solution 1") {
        content.innerHTML = `<div class="row dataLoad"> 
                                <div class="col-md-12 title">
                                    <h2>${dataResouce[0].heading}</h2>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <img src="${dataResouce[0].imgUrl}" alt="placeholder-image" class="solPhoto">
                                </div>
                                <div class="col-md-8 col-sm-12 details">
                                    <p>${dataResouce[0].bodyText}</p>
                                </div>
                            </div>`;
    } else if (buttonText === "Solution 2") {
        content.innerHTML = `<div class="row dataLoad"> 
                                <div class="col-md-12 title">
                                    <h2>${dataResouce[1].heading}</h2>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <img src="${dataResouce[1].imgUrl}" alt="placeholder-image" class="solPhoto">
                                </div>
                                <div class="col-md-8 col-sm-12 details">
                                    <p>${dataResouce[1].bodyText}</p>
                                </div>
                            </div>`;
    } else {
        content.innerHTML = `<div class="row dataLoad"> 
                                <div class="col-md-12 title">
                                    <h2>${dataResouce[2].heading}</h2>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <img src="${dataResouce[2].imgUrl}" alt="placeholder-image" class="solPhoto">
                                </div>
                                <div class="col-md-8 col-sm-12 details">
                                    <p>${dataResouce[2].bodyText}</p>
                                </div>
                            </div>`;
    }
}
const links = document.querySelectorAll("main button");

function handleEvent(ev) {
    //console.log("clickkk");
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
        }
    }


    let currentItem = ev.target;
    currentItem.setAttribute("id", "active");
}
//forOf loop 
for (let link of links) {
    link.addEventListener("click", handleEvent);
}


/*btns[0].addEventListener('click', updateData);
btns[1].addEventListener('click', updateData);
btns[2].addEventListener('click', updateData);*/

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', updateData);
}
