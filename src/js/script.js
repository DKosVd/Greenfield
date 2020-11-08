window.addEventListener('load', () => {
    document.querySelector('.white').classList.add('animate');
    document.querySelector('.foogy1').classList.add('show');
    document.querySelector('.foogy2').classList.add('show');
    const menuAllElements = document.querySelectorAll('.menu_header .left .rec img');
    document.querySelector('.container').addEventListener('scroll', function (e) {
        console.log(this.scrollLeft)
        parallax(this.scrollLeft)
    })

    function parallax(top) {
        let leaf1 = document.querySelector('.leafs .leaf_1');
        let leaf2 = document.querySelectorAll('.leafs .leaf_2 img');
        let leafTo2 = document.querySelector('.five .leafs .leaf_2');
        let leafTo3 = document.querySelector('.five .leafs .leaf_3')
        let leaf3 = document.querySelector('.leafs .leaf_3 img');
        let leaf4 = document.querySelectorAll('.leafs .leaf_4 img');
        let leaf5 = document.querySelector('.leafs .leaf_5 img')
        let logo_img = document.querySelectorAll('.second .menu_header .logo img');
        let vis_img = document.querySelectorAll('.third .visual_left img');
        let t_r_img = document.querySelector('.third .right_img img');
        let video = document.querySelector('.fourth .preview img');
        let icon =  document.querySelector('.fourth .preview .icon_play');
        let f_left_img = document.querySelector('.five .left_img');
        let collage =  document.querySelector('.five .collage');
        let btn_green = document.querySelector('.five .btn_green');
        let mainLog =  document.querySelector('.five .menu_header .logo img:nth-child(1)');
        let subLog = document.querySelector('.five .menu_header .logo img:nth-child(2)');   
        if (top >= 600 && top <= 3800) {
            leaf2[0].style.transform = 'translateY(' + (top / -15) + 'px)';
            leaf3.style.transform = 'translateY(' + (top / -4) + 'px)';
            leaf4[0].style.transform = 'translateX(' + (top / -6) + 'px)';
            logo_img.forEach(elem => {
                elem.style.right= '0';
            })
            if (top >= 1500 && top <= 2000) {
                //Увеличить бекграунд у первой страницы
                 document.querySelector('.main_img').style.transform = 'scale('+(top / 1500)+')';
            } else {
                document.querySelector('.main_img').style.transform = 'scale('+(1)+')';
            }
        }
        if (top >= 1700) {
            logo_img.forEach(elem => {
                elem.style.transform = 'translateX(' + (top / -20) + 'px)';
            })
        }
        if (top >= 2400 && top <= 2800) {
            document.querySelector('.left_tea').style.transform = 'scale('+(top / 2000)+')';
        } else {
            document.querySelector('.left_tea').style.transform = 'scale('+(1)+')';
        }
        if (top >= 3500 && top <= 4000) {
            let right_tea =  document.querySelector('.right_tea')
            right_tea.style.transform = 'scale('+(top / 2000)+')';
        } else {
            document.querySelector('.right_tea').style.transform = 'scale('+(1)+')';
        }
        if (top >= 2500 && top <= 5500) {
            leaf2[1].style.transform = 'translateY(' + (top / - 30) + 'px)';
            leaf5.style.transform = 'translateX(' + (top / -15) + 'px)';
            leaf4[1].style.transform = 'translateY(' + (top / -32) + 'px)';
            let t_logo_img = document.querySelectorAll('.third .menu_header .logo img');
            t_logo_img.forEach(elem => {
                elem.style.right = '0';
            })
        }
        if(top >= 4200 && top <= 4600) {
            vis_img.forEach(elem => elem.style.transform = 'scale('+(top / 3500)+')')
        } else {
            vis_img.forEach(elem => elem.style.transform = 'scale('+(1)+')')
        }
      
        if (top >= 4500 && top <= 7600) {
            video.style.transform = 'translateX(-1790px)'
            icon.style.transform = 'translateX(-1010px)'
            if (top >= 7300 && top <= 7600) {
                video.style.transform = 'scale('+(top / 5000)+')'
            }   
        } else {
            video.style.transform = 'translateX(0)'
            icon.style.transform = 'translateX(0)'
        }
        if(top >= 5300 && top <= 5620) {
            t_r_img.style.transform = 'scale('+(top / 3500)+')';
        } else {
            t_r_img.style.transform = 'scale('+(1)+')';
        }
        if (top >= 6900 && top <= 8002) {
            leafTo2.style.transform = 'translateY(' + (top / -50) + 'px)';
            leaf1.style.transform = 'translateX(' + (top / -15) + 'px)';
            leafTo3.style.transform = 'translateY(' + (top / -30) + 'px)';
            f_left_img.style.transform = 'translateX(-1920px)';
            collage.style.transform = 'translateX(-1650px)'
            btn_green.style.transform = 'translateX(-950px)'
            mainLog.style.transform = 'translateX(-1100px)'
            subLog.style.transform = 'translateX(-1100px)'
        } else {
            f_left_img.style.transform = 'translateX(0)';
            collage.style.transform = 'translateX(0)'
            btn_green.style.transform = 'translateX(0)'
            mainLog.style.transform = 'translateX(0)'
            subLog.style.transform = 'translateX(0)'
        }
      
    }
    menuAllElements.forEach(menu => {
        menu.addEventListener('click', function (e) {
            let main = e.target.parentNode.parentNode.parentNode.parentNode;
            let popup = main.querySelector('.popup')
            let allElementsInPopup = popup.querySelectorAll('div');
            let leftIcon = main.querySelector('.left .rec img')
            if (!popup.style.display) {
                popup.style.display = 'block';
                popup.style.animation = 'btnMenu 1s linear both';
                allElementsInPopup.forEach(elem => {
                    elem.style.animation = 'Show 1.5s linear both';
                });
                leftIcon.src = './img/icon_close.jpg';
            } else {
                allElementsInPopup.forEach(elem => {
                    elem.style.animation = 'Hide .5s linear both';
                });
                leftIcon.src = './img/icon_menu.jpg';
                popup.style.animation = 'btnMenuReverse 1s linear both';
                setTimeout(() => popup.style.display = '', 1000);
            }
        });
    })
})
