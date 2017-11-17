
function getFillScore () {
    var getFillScore = 0;
    var t1 = document.getElementById('text1').value;
    var t2 = document.getElementById('text11').value;
    var t3 = document.getElementById('text12').value;
    var t4 = document.getElementById('text13').value;
    var arr = [t1,t2,t3,t4];
    var str = ['统一建模语言','封装性','多态性','继承性'];
    for (var i = 0;i < str.length;i ++) {
        if (str[i] === arr[i]) {
            getFillScore += 5;
        }
    }
    return getFillScore;
}
//填空题测试

function getChoiceScore() {
    var getChoiceScore = 0;
    var r1 = document.getElementsByName('option1');
    if ((r1[1].checked) && (r1[0].checked) === false && (r1[2].checked) === false && (r1[3].checked) === false) {
        getChoiceScore += 10
    }
    var r2 = document.getElementsByName('option2');
    if ((r2[0].checked) && (r2[1].checked) === false && (r2[2].checked) === false && (r2[3].checked) === false) {
        getChoiceScore += 10
    }
    return getChoiceScore;
}
//单选题测试

function getCheckScore() {
    var getCheckScore = 0;
    var che1 = document.getElementsByName('check');
    if ((che1[0].checked) && (che1[1].checked) && (che1[3].checked) && (che1[2].checked) === false) {
        getCheckScore += 10
    }
    var che2 = document.getElementsByName('checks');
    if ((che2[0].checked) && (che2[1].checked) && (che2[2].checked) && (che2[3].checked) === false) {
        getCheckScore += 10
    }
    return getCheckScore;
}
//多选题测试

function getTFScore() {
    var getTFScore = 0;
    var t1 = document.getElementsByName('radio1');
    if ((t1[1].checked) && (t1[0].checked) === false) {
        getTFScore += 10
    }
    var t2 = document.getElementsByName('radio2');
    if ((t2[0].checked) && (t2[1].checked) === false) {
        getTFScore += 10
    }
    return getTFScore
}
//判断题测试

function getShortScore() {
    var getShortScore = 0;
    var tt = document.getElementById('test').value;
    var rightAnswer = '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'
    if (tt === rightAnswer) {
        getShortScore += 20
    }
    return getShortScore
}
//简答题测试

function allScore() {
    var allScore = getFillScore () + getChoiceScore() + getCheckScore() + getTFScore() + getShortScore();
    return allScore;
}
//计算出总分
function getScore () {
    var cla = document.getElementById('classes').value;
    var id = document.getElementById('IDs').value;
    var name = document.getElementById('names').value;
    if (cla == '') {
        alert("请填写班级");
        id.focus()
    }
    if (id == '') {
        alert("请填写学号");
        name.focus()
    }
    if (name == '') {
        alert("请填写姓名");
        cla.focus()
    }else {
        alert('班级：'+cla+'\n'+'学号：'+id+'\n'+'姓名：'+name+'\n'+'成绩：'+allScore());
    }
    //测试是否填写个人信息并输出分数
}