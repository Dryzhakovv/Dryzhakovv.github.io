      let quickMenuList = document.querySelector(".header-menu__wrapper");
      let quickMenuItems = document.querySelectorAll(".header-menu__item");
      let listPointer = document.querySelector(".navbar-toggle");
      let menuItemItem = document.querySelectorAll(".header-menu__item");
      quickMenuList.style.position = "relative";
      if (document.documentElement.clientWidth < 768) {
        quickMenuItems.forEach(function(item, i) {
          menuItemItem[i].style.color = "transparent";
          menuItemItem[i].style.fill = "none";
          item.style.display= "none";
          item.style.color = "transparent";
        });
      }
      let showNavMenuHandler = function(event) {
        if (document.documentElement.clientWidth < 768) {
          let listItem = quickMenuItems;
          let list = quickMenuList;
          if (list.classList.contains("opened")) {
            listItem.forEach(function(item, i) {
              menuItemItem[i].style.color = "transparent";
              menuItemItem[i].style.fill = "none";
              item.style.top = 0;
              item.style.color = "transparent";
              item.style.display= "none";
            });
            list.classList.remove("opened");
          } else {
            listItem.forEach(function(item, i) {
              if (i == 3) {
                item.style.top = "110px";
                menuItemItem[i].style.fill = "white";
                menuItemItem[i].style.color = "#f7d87e";
                item.style.transition = "all 0.75s";
                item.style.color = "white";
                item.style.display = "block";
              } else {
                item.style.top = item.offsetHeight * (i + 1) + "px";
                menuItemItem[i].style.fill = "white";
                menuItemItem[i].style.color = "#f7d87e";
                item.style.transition = "all 0.75s";
                item.style.color = "white";
                item.style.display = "block";
              }
            });
            list.classList.add("opened");
          }
        }
      };
      listPointer.addEventListener("click", showNavMenuHandler);