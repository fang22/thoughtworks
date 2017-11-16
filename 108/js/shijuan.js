
function getvalue () {
    var cla = document.getElementById('classes').value;
    if (cla == '') {
        alert("请填写班级");
        id.focus()
    }
    var id = document.getElementById('IDs').value;
    if (id == '') {
        alert("请填写学号");
        name.focus()
    }
    var name = document.getElementById('names').value;
    if (name == '') {
        alert("请填写姓名");
        cla.focus()
    }else {
        alert('班级：'+cla+'\n'+'学号：'+id+'\n'+'姓名：'+name)
    }
    //测试是否填写个人信息
}
function get () {
    var t1 = document.getElementById('text1').value;
    var t2 = document.getElementById('text11').value;
    var t3 = document.getElementById('text12').value;
    var t4 = document.getElementById('text13').value;
    var arr = [];
    arr.push(t2,t3,t4);
    var ele = '统一建模语言';
    var str = ['封装性','多态性','继承性'];
    if (t1 !== ele) {
        score += 0
    }else {
        score += 5
    }
}
//填空题测试未完
function two() {
    var r1 = document.getElementsByName('options');
    var selectvalue =null;
    for (var i = 0; i < r1.length;i++) {
        if (r1[i].checked) {
            selectvalue = r1[i].value;
            if (r1[i].value === 'option2') {
                score += 10
            }else {
                score += 0
            }
            break;
        }
    }

}

function twos() {
    var r2 = document.getElementsByName('optionss');
    var selectvalue = null;
    for (var i = 0; i < r2.length;i++) {
        if (r2[i].checked) {
            selectvalue = r2[i].value;
            if (selectvalue === 'option1') {
                score += 10
            }else {
                score += 0
            }
            break;
        }
    }
}
//单选题测试
function check () {
    var che = document.getElementsByName('check');
    var selectvalue = [];
    var arr = ['a','b','d'];
    for (var i = 0; i < che.length;i++) {
        if (che[i].checked) {
            selectvalue.push(che[i].value);
            if (selectvalue[i] !== arr[i]) {
                score += 0
            }else {
                score += 10
            }
        }
    }
}
function checke () {
    var ches = document.getElementsByName('checks');
    var selectvalue = [];
    var arr = ['a','b','c'];
    for (var i = 0; i < ches.length;i++) {
        if (ches[i].checked) {
            selectvalue.push(ches[i].value);
            if (selectvalue[i] !== arr[i]) {
                score += 0
            }else {
                score += 10
            }
        }
    }
}
//多选题测试
function one() {
    var r1 = document.getElementsByName('radior');
    var s =null;
    for (var i = 0; i < r1.length;i++) {
        if (r1[i].checked == true) {
            s = r1[i].value;
            if (s === 'false') {
                score += 10
            }
            else {
                score += 0
            }
            break;
        }
    }

}

function ones() {
    var r2 = document.getElementsByName('radiorr');
    var s = null;
    for (var i = 0; i < r2.length;i++) {
        if (r2[i].checked == true) {
            s = r2[i].value;
            if (s === 'true') {
                score += 10
            }
            else {
                score += 0
            }
            break;
        }
    }

}
//判断题测试

function last() {
    var tt = document.getElementById('test').value;
    if(tt == '') {
        alert('请填写简答题')
    }else if (tt === ' 模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。') {
        score += 20
    }else {
        score += 0
    }
}
//简答题测试