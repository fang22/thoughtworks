'use strict';

module.exports = function countSameElements(collection) {
    let str=[];
    let j=0;
    let app=[];


    for(let i=0;i<collection.length;i++){

        if(collection[i].length==1){
            if(i==collection.indexOf(collection[i]))
            { str[j]={ key:collection[i], count:1};   app.push(collection[i]);
                j++;
            }

            else{  str[app.indexOf(collection[i])].count++;
            }
        }//适用单个字符的方法

        if(collection[i].length===3){

            if(app.indexOf( collection[i].charAt(0) ) !==-1  ){let p=app.indexOf( collection[i].charAt(0) );
                let m=parseInt(collection[i].charAt(2));
                str[p].count=str[p].count+m;
            }

            else {str[j]={ key:collection[i].charAt(0), count:parseInt(collection[i].charAt(2))}; j++;
                app.push(collection[i].charAt(0));
            }
        }//3个长度的字符；

        if(collection[i].length>3){ let a=collection[i].charAt(1);

            if(a===':'||a==='-'){   if(app.indexOf( collection[i].charAt(0) ) !==-1  )
            {let p=app.indexOf( collection[i].charAt(0) );
                let m=parseInt(collection[i].substring(2,collection[i].length) );
                str[p].count=str[p].count+m;
            }

            else {str[j]={ key:collection[i].charAt(0),
                count:parseInt(collection[i].substring(2,collection[i].length))};
                j++;
                app.push(collection[i].charAt(0));
            }
            }

            if(a==='['){
                if(app.indexOf( collection[i].charAt(0) ) !==-1  )
                {let p=app.indexOf( collection[i].charAt(0) );
                    let m=parseInt(collection[i].substring(2,collection[i].length-1) );
                    str[p].count=str[p].count+m;

                }
                else {str[j]={ key:collection[i].charAt(0),
                    count:parseInt(collection[i].substring(2,collection[i].length-1))};j++;
                    app.push(collection[i].charAt(0));
                }


            }


        }//3个以上的字符串转换


    }


    return str;


}

