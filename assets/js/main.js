(function ($) {
    "use strict";



    $('.create-btn').on('click', function(e){
        e.preventDefault();
        $('.create-dropdown').toggleClass('show');
    })
    $('.cancle-create a').on('click', function(e){
        e.preventDefault();
        $('.create-dropdown').removeClass('show');
    })

    $('.long-long-arrow').on('click', function(){
        $('.left-right-flex-wrap').addClass('action');
    })

    $('.backSidebar').on('click', function(){
        console.log('hi');
        $('.left-right-flex-wrap').removeClass('action');
    })

    $('.way-list-wrap .way-row').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    // $('.sidebar-tgl-btn').on('click', function(){
    //     $('.right-sidebar-wrap').addClass('active');
    // })

    document.querySelectorAll('#sideMenu > li a').forEach(function(each){

        // Adding EventListener to all menu item
        each.addEventListener('click', function(e){
            e.preventDefault();

            // Check Screen Width
            if(screen.width > 1199) {
                // body shirnk
                $('.page-main-content').addClass('shirnk');
            } else {
                $('.page-main-content').removeClass('shirnk'); 
            }

            // Adding Resize Event
            window.addEventListener('resize', function(){

                if(screen.width > 1199) {
                    // body shirnk
                    $('.page-main-content').addClass('shirnk');
                } else {
                    $('.page-main-content').removeClass('shirnk'); 
                }
            })

            // Removing 'active' class from all menu item or li
            document.querySelectorAll('#sideMenu > li').forEach(function(single){
                single.classList.remove('active')
            });

            // Adding 'active' class to all menu item or li
            e.target.parentElement.classList.add('active');


            $('.expand-content-title .close-expand').on('click', function(){
                document.querySelectorAll('#sideMenu > li').forEach(function(single){
                    single.classList.remove('active')
                    $('.page-main-content').removeClass('shirnk');
                });
            })

        })
    })



    // Script for adding a back btn in verticle menu
    document.querySelectorAll('.expand-content-title').forEach(function(single){
        var backBtn = document.createElement('button');
            backBtn.className = "close-expand";
            backBtn.innerHTML = '<i class="fal fa-long-arrow-left"></i>';
            single.appendChild(backBtn);
    })


    function counter(bubbleWrap) {
        if(document.querySelectorAll(bubbleWrap) !== null) {
            document.querySelectorAll(bubbleWrap).forEach(function(each){
                each.addEventListener('click', function(e){
                    let newValue;
                    if(e.target.className.includes('plus-btn')) {
                        newValue = parseInt(e.target.previousElementSibling.innerHTML);
                        e.target.previousElementSibling.innerHTML = newValue + 1;
                    } else if(e.target.className.includes('minus-btn')) {
                        newValue = parseInt(e.target.nextElementSibling.innerHTML);
                        if(newValue > 0) {
                            e.target.nextElementSibling.innerHTML = newValue - 1;
                        }
                    }
                })
            })
        }
    }
    counter('.p-counter');




    $('#addRecipi').on('click', function(e){
        e.preventDefault();
        $('.used-for-recipient').addClass('show');
    })
    $('#emailTemplate').on('click', function(e){
        e.preventDefault();
        $('.used-for-e-template').addClass('show');
    })

    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('.nc-select').niceSelect();
    })
  
})(jQuery);	 // End line