function algorithm() {
  console.log("test");
  let final = "b";
  let flag = true;
  let stroka = "1-2-3";
  let result = stroka.split("-");
  result[0] = document.getElementById("year").value;
  result[1] = document.getElementById("month").value;
  result[2] = document.getElementById("day").value;
  let monthtxt = result[1];
  let daytxt = result[2];
  let yeartxt = result[0];
  let datetxt = yeartxt + monthtxt + daytxt;
  let d1 = 0;
  let i = 0;
  for (i = 0; i < datetxt.length; i++) {
    d1 = d1 + Number(datetxt[i]);
  }

  let d2 = 0;
  d1 = String(d1);
  if (d1.length === 1) d2 = Number(d1[0]);
  else d2 = Number(d1[0]) + Number(d1[1]);

  let d3 = Number(d1) - 2 * Number(String(daytxt)[0]);

  if (d3 < 0) flag = false;
  else flag = true;
  if (flag === true) {
    let d4 = 0;
    if (String(d3).length === 1) d4 = d3;
    else d4 = Number(String(d3)[0]) + Number(String(d3)[1]);
    final = datetxt + String(d1) + String(d2) + String(d3) + String(d4);
  } else final = datetxt + String(d1) + String(d2) + String(d3);

  let n1 = "";
  let n2 = "";
  let n3 = "";
  let n4 = "";
  let n5 = "";
  let n6 = "";
  let n7 = "";
  let n8 = "";
  let n9 = "";
  let m1 = 0;
  let m2 = 0;
  let m3 = 0;
  let m4 = 0;
  let m5 = 0;
  let m6 = 0;
  let m7 = 0;
  let m8 = 0;
  let m9 = 0;
  for (let j = 0; j < final.length; j++) {
    if (String(final)[j] === "1") {
      n1 = n1 + "1";
      m1 = m1 + 1;
    }
    if (String(final)[j] === "2") {
      n2 = n2 + "2";
      m2 = m2 + 2;
    }
    if (String(final)[j] === "3") {
      n3 = n3 + "3";
      m3 = m3 + 3;
    }
    if (String(final)[j] === "4") {
      n4 = n4 + "4";
      m4 = m4 + 4;
    }
    if (String(final)[j] === "5") {
      n5 = n5 + "5";
      m5 = m5 + 5;
    }
    if (String(final)[j] === "6") {
      n6 = n6 + "6";
      m6 = m6 + 6;
    }
    if (String(final)[j] === "7") {
      n7 = n7 + "7";
      m7 = m7 + 7;
    }
    if (String(final)[j] === "8") {
      n8 = n8 + "8";
      m8 = m8 + 8;
    }
    if (String(final)[j] === "9") {
      n9 = n9 + "9";
      m9 = m9 + 9;
    }
  }

  if (String(n1) === "") n1 = "-";
  if (String(n2) === "") n2 = "-";
  if (String(n3) === "") n3 = "-";
  if (String(n4) === "") n4 = "-";
  if (String(n5) === "") n5 = "-";
  if (String(n6) === "") n6 = "-";
  if (String(n7) === "") n7 = "-";
  if (String(n8) === "") n8 = "-";
  if (String(n9) === "") n9 = "-";
  document.getElementById("n111").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n1 + "</font><br>" + "<font style='font-size: 19;'>Солнце</font>";
  document.getElementById("n222").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n2 + "</font><br>" + "<font style='font-size: 19;'>Луна*Земля</font>";
  document.getElementById("n333").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n3 + "</font><br>" + "<font style='font-size: 19;'>Меркурий</font>";
  document.getElementById("n444").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n4 + "</font><br>" + "<font style='font-size: 19;'>Марс</font>";
  document.getElementById("n555").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n5 + "</font><br>" + "<font style='font-size: 19;'>Венера</font>";
  document.getElementById("n666").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n6 + "</font><br>" + "<font style='font-size: 19;'>Сатурн</font>";
  document.getElementById("n777").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n7 + "</font><br>" + "<font style='font-size: 19;'>Юпитер</font>";
  document.getElementById("n888").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n8 + "</font><br>" + "<font style='font-size: 19;'>Уран</font>";
  document.getElementById("n999").innerHTML = "<font color='Cyan' style='font-size: 40;'>" + n9 + "</font><br>" + "<font style='font-size: 19;'>Нептун</font>";
  document.getElementById("m11").innerHTML = "<font style='float:left;font-size: 18;'>Солнце</font>" + "<font style='float:right;font-size: 18;'>" + m1 + "</font>";
  document.getElementById("m22").innerHTML = "<font style='float:left;font-size: 18;'>Луна*Земля</font>" + "<font style='float:right;font-size: 18;'>" + m2 + "</font>";
  document.getElementById("m33").innerHTML = "<font style='float:left;font-size: 18;'>Меркурий</font>" + "<font style='float:right;font-size: 18;'>" + m3 + "</font>";
  document.getElementById("m44").innerHTML = "<font style='float:left;font-size: 18;'>Марс</font>" + "<font style='float:right;font-size: 18;'>" + m4 + "</font>";
  document.getElementById("m55").innerHTML = "<font style='float:left;font-size: 18;'>Венера</font>" + "<font style='float:right;font-size: 18;'>" + m5 + "</font>";
  document.getElementById("m66").innerHTML = "<font style='float:left;font-size: 18;'>Сатурн</font>" + "<font style='float:right;font-size: 18;'>" + m6 + "</font>";
  document.getElementById("m77").innerHTML = "<font style='float:left;font-size: 18;'>Юпитер</font>" + "<font style='float:right;font-size: 18;'>" + m7 + "</font>";
  document.getElementById("m88").innerHTML = "<font style='float:left;font-size: 18;'>Уран</font>" + "<font style='float:right;font-size: 18;'>" + m8 + "</font>";
  document.getElementById("m99").innerHTML = "<font style='float:left;font-size: 18;'>Нептун</font>" + "<font style='float:right;font-size: 18;'>" + m9 + "</font>";
}
