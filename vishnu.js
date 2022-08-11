Bill_1={a:2000,b:200,c:1000}
Bill_2={a:1500,b:0,c:0,d:1300}
Bill_3={b:1000,c:0}
// Creating the function for generate the Average of each Bill and Returning the Average
const average=(object)=>{
    l=[]
    sum=0
    avg=0
    for(i in object){
        l.push(object[i])
    }
    for(i of l){
        sum=sum+i
    }
    avg=sum/l.length
    return avg
}
//Creating the function for generate the Paid amount of the user in each bill and returning the bill
const paid=(object)=>{
    avg=average(object)
for(i in object){
    object[i]=object[i]-avg
}
return object
}
Bill_1=paid(Bill_1) // Paid Bill of First Bill
Bill_2=paid(Bill_2) // Paid Bill of Second Bill
Bill_3=paid(Bill_3) // Paid Bill of Third Bill
d={}
for (i in Bill_1 ){
    d[i]=Bill_1[i]
}
for(i in Bill_2){
    if(i in d){
        d[i]=d[i]+Bill_2[i]
    }
    else{
        d[i]=Bill_2[i]
    }}
for(i in Bill_3){
    if(i in d){
        d[i]=d[i]+Bill_3[i]
    }
    else{
        d[i]=Bill_3[i]
    }}
op={} // have to pay
og={} // have to get
for(i in d){
    if(d[i]==0){
        console.log(i+" no Need to pay")
    }
    else if(d[i]<0){
        op[i]=d[i]
    }
    else if(d[i]>0){
        og[i]=d[i]
    }}
// Sorting the object in ascending order
const sort_a=(Object)=>{
    l=[]
for(i in Object){
    l.push(Object[i])
}
function sort(a,b){
    return a-b
}
l.sort(sort)
s_o={}
for (e of l){
    for(i in Object){
        if(Object[i]==e){
            s_o[i]=e
        }}}
return(s_o)
}
// Sorting the object in Descending order
const sort_d=(Object)=>{
    l=[]
for(i in Object){
    l.push(Object[i])
}
function sort(a,b){
    return a-b
}
l.sort(sort)
l.reverse()
s_o={}
for (e of l){
    for(i in Object){
        if(Object[i]==e){
            s_o[i]=e
        }}}
return(s_o)
}
s_og=sort_d(og)
s_op=sort_a(op)
console.log("Payment have to Get:",s_og)
console.log("Payment have to Pay:",s_op)
const rz=(object)=>{
    o={}
    for(i in object){
        if(object[i]!=0){
            o[i]=object[i]
        }}
    return o
}
for(g in s_og){
    for(p in s_op){
        if(s_og[g]>Math.abs(s_op[p])){
            console.log(`${p} must host ${Math.abs(s_op[p])} rs/- to ${g}`)
            s_og[g]=(s_og[g])-(Math.abs(s_op[p]))
            s_op[p]=0
            s_op=rz(s_op)
        }
        else if(s_og[g]<Math.abs(s_op[p])){
            console.log(`${p} must host ${Math.abs(s_og[g])} rs/- to ${g}`)
            s_op[p]=Math.floor((s_og[g]))-Math.floor(Math.abs(s_op[p]))
            s_og[g]=0
            s_og=rz(s_og)           
        }
        else if(s_og[g]==Math.abs(s_op[p])){
            console.log(`${p} must host ${Math.abs(s_op[p])} rs/- to ${g}`)
            s_og[g]=0
            s_op[p]=0
            s_og=rz(s_og)
            s_op=rz(s_op)
        }
    }
}