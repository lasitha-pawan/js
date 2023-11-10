function cd(n) {
    const  dpm={
        1:[
            [50,50]
    ],

    2:[
        [20,20]
        [80,80]
],
3:[
    [20,20]
    [50,50]
    [80,80]
],
4:[
    [20,20]
    [20,80]
    [80,20]
    [80,80]
    
],
5:[
    [20,20]
    [20,80]
    [50,50]
    [80,20]
    [80,80]
],
6:[
    [20,20]
    [20,80]
    [50,20]
    [50,80]
    [80,20]
    [80,80]
]
};

const dice =document.createElement("div");
dice.classlist.add("dice");

for(const dotposition of dpm[n])
const dot =document.createElement("div")
dot.classlist.add("dd");
dot.style.setproperty("--top",dotposition[0]+%);
dot.style.setproperty("--left",dotposition[1]+%);
dice.appendchild(dot);
    
}
return dice;

}
const f=document.queryselector(".f");
const button =document.query(".btn");
f.appendchild(createdice(6));


