// #region 全域變數
//灰色遮片 打開側邊欄時使用
const gray_filter = document.querySelector(".gray_filter"),
  // 最上方主導覽列
  top_navbar = document.querySelector(".top_navbar"),
  //main_menu下的li標籤
  main_menu_lis = document.querySelectorAll(".main_menu>li"),
  //跳出側邊欄菜單下的li標籤
  ham_menu_list_li = document.querySelectorAll(".ham_menu_list>li"),
  //跳出側邊欄菜單的關閉按鍵
  ham_sidemenu_Area = document.querySelector(".hamburger_sidemenu_area"),
  //漢堡圖示菜單的按鈕
  hamburge_btn = document.querySelector(".hamburger_sidemenu_btn"),
  //跳出側邊欄菜單的關閉按鍵
  close_btn = document.querySelector(".close_btn"),
  //搜尋面板
  searchbox = document.querySelector(".searchbox"),
  //搜尋按鍵
  search_btn = document.querySelectorAll(".search_btn"),
  //關閉搜尋面板的按鍵
  searchbox_close_btn = document.querySelector(".searchbox_close_btn"),
  //搜尋面板的內容框
  searchbox_block = document.querySelector(".searchbox_block"),
  //album title swipe 內容
  swipe_content = document.querySelector(".swipe_content"),
  //album title swipe area左鍵
  arrow_left_btn = document.querySelector(".arrow_left_btn"),
  //album title swipe area右鍵
  arrow_right_btn = document.querySelector(".arrow_right_btn"),
  //swipe area 所有title項目按鈕
  tab_btn = document.querySelectorAll(".tab_btn"),
  //swipe area 所有分頁內容
  tab_content = document.querySelectorAll(".tab_content"),
  //album content 分頁1
  tab1 = document.querySelector("#tab1"),
  //album content 分頁2
  tab2 = document.querySelector("#tab2");
// #endregion

// 監聽載入事件，loading animation執行後關閉
window.addEventListener("load", () => {
  document.body.classList.add("no_scroll");
  setTimeout(() => {
    const load_animation = document.querySelector(".load_animation");
    load_animation.style.opacity = 0;
    setTimeout(() => {
      load_animation.style.display = "none";
      document.body.classList.remove("no_scroll");
    }, 550);
  }, 2200);
});

//window監聽enter鍵，禁止按enter
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    //取消預設
    e.preventDefault;
  }
});
// 監聽滾動事件，主導覽列顯示陰影
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    top_navbar.classList.add("scrolled");
  } else {
    top_navbar.classList.remove("scrolled");
  }
});
//主菜單滑鼠移入移出時，dropdwn Menu顯示轉換
subMeunDropdownToggle();
function subMeunDropdownToggle() {
  //主菜單各元素綁定滑鼠移入事件
  main_menu_lis.forEach((el) => {
    let dropdown_menu;
    el.addEventListener("mouseenter", (ev) => {
      dropdown_menu = ev.currentTarget.querySelector(".dropdown_menu");
      //判斷是否有dropdown_menu
      if (dropdown_menu) {
        let elementHeight = dropdown_menu.scrollHeight;
        //滑鼠滑入時下拉副菜單高度還原
        dropdown_menu.style.height = `${elementHeight}px`;
      }
    });
    el.addEventListener("mouseleave", (ev) => {
      dropdown_menu = ev.currentTarget.querySelector(".dropdown_menu");
      //判斷是否有dropdown_menu
      if (dropdown_menu) {
        //滑鼠離開時變回預設(高度為0)
        dropdown_menu.style.height = "";
      }
    });
  });
}

//跳出側邊菜單點擊時，dropdwn Menu顯示轉換
sideMeunDropdownToggle();
function sideMeunDropdownToggle() {
  //側邊菜單各元素綁定滑鼠點擊事件
  ham_menu_list_li.forEach((el, ind) => {
    el.addEventListener("click", (ev) => {
      let submenu = ev.target.parentNode.querySelectorAll(".submenu");
      if (submenu && submenu.length == 1) {
        let element = submenu[0],
          isOpen = element.classList.contains("show"),
          submenus = document.querySelectorAll(".submenu");
        submenus.forEach((el) => {
          el.classList.remove("show");
        });
        if (!isOpen) {
          element.classList.add("show");
        }
      }
    });
  });
}

//漢堡圖示菜單的按鈕，綁定開啟側邊欄事件
hamSideMenuOpenBtn();
function hamSideMenuOpenBtn() {
  hamburge_btn.addEventListener("click", (e) => {
    //固定當前畫面，無法滑動
    document.body.classList.add("no_scroll");
    //側邊欄打開
    ham_sidemenu_Area.style.maxWidth = "460px";
    //灰色遮片顯示
    gray_filter.style.opacity = 1;
  });
}

//跳出側邊菜單的關閉按鍵，綁定關閉事件
hamSideMenuCloseBtn();
function hamSideMenuCloseBtn() {
  close_btn.addEventListener("click", (e) => {
    //取消固定當前畫面，可以滑動
    document.body.classList.remove("no_scroll");
    //側邊欄變回預設max-idth：0
    ham_sidemenu_Area.style.maxWidth = "";
    //灰色遮片變回預設opacity:0
    gray_filter.style.opacity = "";
  });
}

//搜尋按鈕，綁定開啟搜尋面板事件
searchboxOpenBtn();
function searchboxOpenBtn() {
  search_btn.forEach((el) => {
    el.addEventListener("click", (e) => {
      //固定當前畫面，無法滑動
      document.body.classList.add("no_scroll");
      //搜尋面板顯示
      searchbox.style.opacity = 1;
      //搜尋面板內容移動過度動畫
      searchbox_block.style.top = "50%";
      //搜尋面板可點擊
      searchbox.style.pointerEvents = "auto";
    });
  });
}

//搜尋按鈕，綁定關閉搜尋面板事件
searchboxCloseBtn();
function searchboxCloseBtn() {
  searchbox_close_btn.addEventListener("click", (e) => {
    //取消固定當前畫面，可以滑動
    document.body.classList.remove("no_scroll");
    //搜尋面板變回預設opacity:0
    searchbox.style.opacity = "";
    //搜尋面板內容移動過度變回預設
    searchbox_block.style.top = "";
    //搜尋面板變回預設pointerEvents：none
    searchbox.style.pointerEvents = "";
  });
}

//swipe area 左右鍵綁定 title移動及分頁變換事件
albumTitleSwipeBtn(arrow_left_btn);
albumTitleSwipeBtn(arrow_right_btn);
function albumTitleSwipeBtn(target) {
  target.addEventListener("click", () => {
    let style = window.getComputedStyle(swipe_content);
    let current_left = parseInt(style.left);
    //tab1顯示 > tab2顯示
    if (current_left >= 0) {
      swipe_content.classList.add("left-100");
      tab1.classList.remove("active");
      tab2.classList.add("active");
    } else {
      //tab2顯示 > tab1顯示
      swipe_content.classList.remove("left-100");
      tab2.classList.remove("active");
      tab1.classList.add("active");
    }
  });
}

//swipe area title項目綁定css樣式變換和分頁變換
//在html裡標籤屬性裡執行
function switchTab(tabId) {
  //移除所有title項目按鈕active css屬性
  tab_btn.forEach((el) => {
    el.classList.remove("active");
  });
  //移除所有分頁項目active（display:block）
  tab_content.forEach((el) => {
    el.classList.remove("active");
  });

  //點擊的對象加上active
  document
    .querySelector(`[onclick="switchTab('${tabId}')"]`)
    .classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

//swipe area 在small Device時 下拉式選單控制按鈕
//在html裡標籤屬性裡執行
function switchDropList() {
  const dropdown_list = document.querySelector(".dropdown_list");
  dropdown_list.classList.toggle("active");
}

//swipe area 在small Device時 title變換
//在html裡標籤屬性裡執行
function switchSwipeTitle(tabID) {
  //tab1顯示 > tab2顯示
  if (tabID === "tab2") {
    swipe_content.classList.add("left-100");
    tab1.classList.remove("active");
    tab2.classList.add("active");
  }
  if (tabID === "tab1") {
    //tab2顯示 > tab1顯示
    swipe_content.classList.remove("left-100");
    tab2.classList.remove("active");
    tab1.classList.add("active");
  }
}

//照片集 在small Device時 slide_btn綁定滑動事件
//在html裡標籤屬性裡執行
function switchSlideBtn(btnID) {
  const picture_wrap = document.querySelector(".picture_wrap");
  const slide_btn = document.querySelectorAll(".slide_btn");
  slide_btn.forEach((el) => {
    el.classList.remove("active");
  });
  //左邊按鈕
  if (btnID === "btn_left") {
    document.querySelector(`#${btnID}`).classList.add("active");
    picture_wrap.style.transform = "";
  }
  //右邊按鈕
  if (btnID === "btn_right") {
    document.querySelector(`#${btnID}`).classList.add("active");
    picture_wrap.style.transform = "translateX(-50%)";
  }
}
