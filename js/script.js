function change_btnn(e) {
  var btns = document.querySelectorAll(".tab-link");
  btns.forEach(function (btn, i) {
    if (e.currentTarget == btn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  console.log(e.currentTarget);
}
function change_btn(e) {
  var btns = document.querySelectorAll(".tab-links");
  btns.forEach(function (btn, i) {
    if (e.currentTarget == btn) {
      btn.classList.add("active2");
    } else {
      btn.classList.remove("active2");
    }
  });
  console.log(e.currentTarget);
}

$(document).ready(function () {
  $("ul.tabss li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabss li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
  $("#jeon").click();
});
$(document).ready(function () {
  $("select")
    .change(function () {
      $(this)
        .find("option:selected")
        .each(function () {
          var optionValue = $(this).attr("value");
          if (optionValue) {
            $(".box")
              .not("." + optionValue)
              .hide();
            $("." + optionValue).show();
          } else {
            $(".box").hide();
          }
        });
    })
    .change();
});

$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
  $("#jeon").click();
});

$(function () {
  const underLine = document.getElementById("menu_under_line"); //밑줄 그리는 요소
  const menus = document.querySelectorAll(".tabs .tab-link");

  //   각 리스트의 요소를 순회하며 접근
  menus.forEach((liEl) => {
    liEl.addEventListener("click", () => {
      resizeFunc(liEl);
    });
  });

  // 브라우저 크기가 달라져도 그 크기에 대응하도록 사이즈 재설정하는 함수
  const resizeFunc = (liEl) => {
    let left = liEl.offsetLeft;
    let top = liEl.offsetTop + liEl.offsetHeight;
    let width = liEl.offsetWidth;

    window.addEventListener("resize", () => {
      left = liEl.offsetLeft;
      top = liEl.offsetTop + liEl.offsetHeight;
      width = liEl.offsetWidth;

      underLineRenderingFunc(left, top, width); //재측정된 길이가 전달됨
    });
    underLineRenderingFunc(left, top, width); //제일 처음 측정된 길이가 전달됨
    // 위 두 개를 호출해야 브라우저 화면이 변경되어도 요소의 위치를 추적하여 변경된 위치로 밑줄이 재설정된다.
  };
  document.getElementById("currentDate").value = new Date()
    .toISOString()
    .substring(0, 10);

  //   실제 밑줄을 그려주는 함수
  const underLineRenderingFunc = (left, top, width) => {
    underLine.style.visibility = "visible";
    underLine.style.width = `${width}px`;
    underLine.style.translate = `${left - 50}px ${top - 120}px`;
  };
})();
