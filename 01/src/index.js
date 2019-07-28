import _ from 'lodash';

function creatDomElemet() {
    let dom = document.createElement("div");
    dom.innerHTML = _.join(['aicoder.com', '好', '线下实习'], '');
    return dom;
    s
}
let divDom = creatDomElemet();

document.body.appendChild(divDom);