import Node from './LinkedList';


let path =  new Node([6,1]);
let temp =  path;
let temp2;
for (let index = 2; index < 6; index++) {

    temp2 = new Node([6,index]);
    temp.next = temp2;
    temp = temp2;
}

for (let index = 5; index > -1; index--) {
    temp2 = new Node([index,6]);
    temp.next = temp2;
    temp = temp2;
}

temp2 = new Node([0,7]);
temp.next = temp2;
temp = temp2;

temp2 = new Node([0,8]);
temp.next = temp2;
temp = temp2;

for (let index = 1; index < 6; index++) {
    temp2 = new Node([index,8]);
temp.next = temp2;
temp = temp2;
    
}
for (let index = 9; index < 15; index++) {
    temp2 = new Node([6,index]);
temp.next = temp2;
temp = temp2;
    
}
temp2 = new Node([7,14]);
temp.next = temp2;
temp = temp2;

temp2 = new Node([8,14]);
temp.next = temp2;
temp = temp2;

for (let index = 13; index > 8 ; index--) {
    temp2 = new Node([8,index]);
temp.next = temp2;
temp = temp2;
    
}
for (let index = 9; index <15; index++) {
    temp2 = new Node([index,8]);
temp.next = temp2;
temp = temp2;
    
}

temp2 = new Node([14,7]);
temp.next = temp2;
temp = temp2;

temp2 = new Node([14,6]);
temp.next = temp2;
temp = temp2;

for (let index = 13; index > 8 ; index--) {
    temp2 = new Node([index,6]);
temp.next = temp2;
temp = temp2;
    
}
for (let index = 5; index >-1; index--) {
    temp2 = new Node([8,index]);
temp.next = temp2;
temp = temp2;
    
}

temp2 = new Node([8,0]);
temp.next = temp2;
temp = temp2;

temp2 = new Node([7,0]);
temp.next = temp2;
temp = temp2;

temp.next = path;
//

let turn = new Node('p1');
turn.next = new Node('p2');
turn.next.next = new Node('p3');
turn.next.next.next = new Node('p4');
turn.next.next.next.next = turn;

export {turn};


export default path;



