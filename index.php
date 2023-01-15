<?php get_header(); wp_head();?>
<!doctype html><html lang="en">
<head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </head>
    <body>
    <script>
        AOS.init();

        $(document).ready((function() {






            if ($(window).width() <= 1151) {
                var btn = $(".span1.widget-span.widget-type-cell.cell_1626680687988-vertical-alignment.dnd-column").html();
                $("nav .level-1").append("<li class='mobile_nav_button_wrapper'>" + btn + "</li>"),
                    $(".level-1 .has-submenu").click((function () {
                            $(this).find("ul.level-2");
                            var $li = $(this);
                            $("li.has-submenu").not($li).removeClass("open-menu"),
                                $li.toggleClass("open-menu"),
                                $(".level-1 .has-submenu").not($(this)).removeClass("clicked"),
                                $(this).toggleClass("clicked"),
                                console.log("sub menu opened")
                        }
                    )),
                    $(".has-submenu .level-2 .menu-item .submenu-right-sec .submenu-text p").remove(),
                    $(".has-submenu .level-2 .menu-item .submenu-right-sec a").click((function () {
                            $(".header--toggle.header__navigation--toggle").removeClass("open"),
                                $(".header__navigation.header--element").removeClass("open")
                        }
                    ))

                var nav = document.querySelector(".header__navigation"), navToggle = document.querySelector(".header__navigation--toggle")
                navToggle.addEventListener("click", toggleNav)

            }
            function toggleNav() {
                nav.classList.toggle("open"),
                    navToggle.classList.toggle("open"),
                    console.log("menu opened")
            }
        }))
        }
    </script>
    <main id="main-content" class="body-container-wrapper">

        <div class="container-fluid body-container body-container--home">
            <div class="row-fluid-wrapper">
                <div class="row-fluid">
                    <div class="span12 widget-span widget-type-cell " style="" data-widget-type="cell" data-x="0" data-w="12">

                        <div class="row-fluid-wrapper row-depth-1 row-number-1 dnd-section">
                            <div class="row-fluid ">
                                <div class="span12 widget-span widget-type-cell cell_16305650665252-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

                                    <div class="row-fluid-wrapper row-depth-1 row-number-2 dnd-row">
                                        <div class="row-fluid ">
                                            <div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
                                                <div id="hs_cos_wrapper_widget_1630565065873" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="home-banner home-5-banner">
                                                        <div class="page-center">
                                                            <div class="banner-left-right-section">
                                                                <div class="right-sec aos-init aos-animate" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
                                                                    <div class="banner-image">
                                                                        <img src="<?php echo get_template_directory_uri();?>/images/one.png" width="550px">
                                                                        <div class="banner-icon-rep banner-icon-rep-1">
                                                                            <img src="https://www.helpware.com/hubfs/helpware-icon.svg" alt="helpware-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                        </div>
                                                                        <div class="banner-icon-rep banner-icon-rep-2">
                                                                            <img src="https://www.helpware.com/hubfs/Calendar-icon.svg" alt="Calendar-icon" loading="lazy" style="max-width: 100%; height: auto;">
                                                                        </div>
                                                                        <div class="banner-icon-rep banner-icon-rep-3">
                                                                            <img src="https://www.helpware.com/hubfs/Headset-icon.svg" alt="Headset-icon" loading="lazy" style="max-width: 100%; height: auto;">
                                                                        </div>





                                                                        <!--                                                                <div class="banner-testimonial">-->
                                                                        <!--                                                                    <div class="banner-test-img">-->
                                                                        <!--                                                                        <img src="https://www.helpware.com/hubfs/man-icon.jpg" alt="man-icon" loading="lazy" style="max-width: 100%; height: auto;">-->
                                                                        <!--                                                                    </div>-->
                                                                        <!--                                                                    <div class="banner-test-name">-->
                                                                        <!--                                                                        <h5>-->
                                                                        <!--                                                                            Taylor Spencer-->
                                                                        <!--                                                                        </h5>-->
                                                                        <!--                                                                    </div>-->
                                                                        <!--                                                                    <div class="banner-test-icons">-->
                                                                        <!--                                                                        <div class="banner-test-dcnt-icon">-->
                                                                        <!--                                                                            <img src="https://www.helpware.com/hubfs/Answer-yes-icon.svg" alt="Answer-yes-icon" loading="lazy" style="max-width: 100%; height: auto;">-->
                                                                        <!--                                                                        </div>-->
                                                                        <!--                                                                        <div class="banner-test-cnt-icon">-->
                                                                        <!--                                                                            -->
                                                                        <!--                                                                            <img src="https://www.helpware.com/hubfs/Answer-no-icon.svg" alt="Answer-no-icon" loading="lazy" style="max-width: 100%; height: auto;">-->
                                                                        <!--                                                                        </div>-->
                                                                        <!--                                                                    </div>-->
                                                                        <!--                                                                </div>-->


                                                                        <div class="banner-tile-text">
                                                                            <p>Guten Ta<span aria-hidden="true"></span></p>
                                                                        </div>
                                                                    </div>

                                                                </div>



                                                                <div class="left-sec">
                                                                    <div class="bnner-text">
                                                                        <h4 class="animated-h1-title animate__animated animate__fadeInUp animate_slow">
                                                                            <span class="wrap-line" style="height: 30px;"><span>SHARK MEDICAL BILLING</span></span>
                                                                        </h4>
                                                                        <h1 class="animated-h1-title desktop_homepage_title animate__animated animate__fadeInUp animate_slower">
                                                                            <span class="wrap-line long-line"><span>Medical Billing &</span></span><span
                                                                                    class="wrap-line"><span>Service for US</span></span>
                                                                            <!--                                                                    <span class="wrap-line main-page-line">-->
                                                                            <!--&lt;!&ndash;                                                                    <span style="color: #4bc3b5;">Together.</span>&ndash;&gt;-->
                                                                            <!--                                                                </span>-->
                                                                        </h1>
                                                                        <h1 class="animated-h1-title mobile_homepage_title animate__animated animate__fadeInUp animate_slower">
                                                                            <span class="wrap-line"><span>Medical Billing & </span></span>
                                                                            <span class="wrap-line"><span>Service for US </span></span>
                                                                            <!--                                                                    <span class="wrap-line main-page-line">-->
                                                                            <!--&lt;!&ndash;                                                                    <span style="color: #4bc3b5;">Together.</span>&ndash;&gt;-->
                                                                            <!--                                                                </span>-->
                                                                        </h1>
                                                                        <div class="homepage-main-paragraph">
                                                                            <div style="height: 100%;
    position: absolute;
    width: 100%;">&nbsp;
                                                                            </div>
                                                                            <p class="animate__animated animate__fadeInRight animate__delay-2s">
                                                                                From processing your bills right through to collecting your payments,
                                                                                we do the lot. Our complete service is designed to save you time and for you to get paid faster.
                                                                                Just relax knowing your billing is in great hands.
                                                                            </p>
                                                                        </div>
                                                                    </div>


                                                                    <div class="banner-cta ">
          <span id="hs_cos_wrapper_widget_1630565065873_"
                class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_cta" style=""
                data-hs-cos-general-type="widget" data-hs-cos-type="cta">
            <span
                    class="hs-cta-wrapper" id="hs-cta-wrapper-117256f5-be71-4e29-a9ce-8d10314608df"><span
                        class="hs-cta-node hs-cta-117256f5-be71-4e29-a9ce-8d10314608df"
                        id="hs-cta-117256f5-be71-4e29-a9ce-8d10314608df" style="visibility: visible;" data-hs-drop="true"><a
                            id="cta_button_3358429_91e2ebad-10a8-4bf6-a03d-0e3e51e329a5" class="cta_button cta-button"
                            title="Let's Talk">Let's Talk</a></span><script
                        charset="utf-8" src="/hs/cta/cta/current.js"></script></span>
          </span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <script>
                                                        document.addEventListener('DOMContentLoaded',function(event){
                                                            // array with texts to type in typewriter
                                                            var dataText = [

                                                                "Interested in Medical Billing & Credentialing",
                                                            ];
                                                            console.log(dataText);
                                                            // type one text in the typwriter
                                                            // keeps calling itself until the text is finished
                                                            function typeWriter(text, i, fnCallback) {
                                                                // chekc if text isn't finished yet
                                                                if (i < (text.length)) {
                                                                    // add next character to h1
                                                                    document.querySelector(".banner-tile-text p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

                                                                    // wait for a while and call this function again for next character
                                                                    setTimeout(function() {
                                                                        typeWriter(text, i + 1, fnCallback)
                                                                    }, 80);
                                                                }
                                                                // text finished, call callback if there is a callback function
                                                                else if (typeof fnCallback == 'function') {
                                                                    // call callback after timeout
                                                                    setTimeout(fnCallback, 1500);
                                                                }
                                                            }
                                                            // start a typewriter animation for a text in the dataText array
                                                            function StartTextAnimation(i) {
                                                                if (typeof dataText[i] == 'undefined'){
                                                                    setTimeout(function() {
                                                                        StartTextAnimation(0);
                                                                    }, 500);
                                                                }
                                                                // check if dataText[i] exists
                                                                if (i < dataText[i].length) {
                                                                    // text exists! start typewriter animation
                                                                    typeWriter(dataText[i], 0, function(){
                                                                        // after callback (and whole text has been animated), start next text
                                                                        StartTextAnimation(i + 1);
                                                                    });
                                                                }
                                                            }
                                                            // start the text animation
                                                            StartTextAnimation(0);
                                                        });
                                                    </script></div>

                                            </div><!--end widget-span -->
                                        </div><!--end row-->
                                    </div><!--end row-wrapper -->

                                </div><!--end widget-span -->
                            </div><!--end row-->
                        </div><!--end row-wrapper -->

                        <div class="row-fluid-wrapper row-depth-1 row-number-3 dnd-section">
                            <div class="row-fluid ">
                                <div class="span12 widget-span widget-type-cell dnd-column cell_16305665125212-padding" style="" data-widget-type="cell" data-x="0" data-w="12">

                                    <div class="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
                                        <div class="row-fluid ">
                                            <div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
                                                <div id="hs_cos_wrapper_widget_1630566512186" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="our-vision-main set_padding_top customize_picture">
                                                        <div class="page-center">
                                                            <div class="our-vision-outer">
                                                                <div class="our-vision-right-sec our-vision-home">
                                                                    <div class="our-vision-right-text">
                                                                        <h4>Shark medical billing</h4>
                                                                        <h2>Our Vision</h2>
                                                                        <p>As a reputable medical billing company. SMB follows the patient information privacy and security rules very stringently</p>
                                                                        <p>Our service that facilitates billing tasks, patient insurance tracking, claims and payment processing. <br><br>We offer complete medical billing service including processing bills, applying payments, chasing up outstanding accounts, and sending out monthly reports. We take care of absolutely everything.</p>
                                                                    </div>
                                                                    <div class="our-vision-right-cta">
                                                                        <a href="../../Downloads/Helpware/www.helpware.com/company/vision/index.html">
                                                                            learn more
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="our-vision-left-sec">
                                                                    <div class="our-vision-left-img">
                                                                        <picture>
                                                                            <source srcset="" media="(min-width: 1400px)">
                                                                            <source srcset="" media="(min-width: 600px)">
                                                                            <img src="<?php echo get_template_directory_uri();?>/images/second.png" alt="our-vision-block" style="max-width: 100%; height: auto;">
                                                                        </picture>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div>

                                            </div><!--end widget-span -->
                                        </div><!--end row-->
                                    </div><!--end row-wrapper -->

                                </div><!--end widget-span -->
                            </div><!--end row-->
                        </div><!--end row-wrapper -->

                        <div class="row-fluid-wrapper row-depth-1 row-number-5 dnd-section">
                            <div class="row-fluid ">
                                <div class="span12 widget-span widget-type-cell dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

                                    <div class="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">
                                        <div class="row-fluid ">
                                            <div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
                                                <div id="hs_cos_wrapper_widget_1663052183915" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="our-benefits-main core-services-main  ">
                                                        <div class="page-center">
                                                            <div class="our-benefits-outer">

                                                                <div class="our-benefits-heading header-text ">
                                                                    <h4>Shark Medical Billing expertise</h4>
                                                                    <h2>Core Services</h2>
                                                                </div>

                                                                <div class="our-benefits-row our-benefits-row-right">
                                                                    <div class="our-benefits-left">



                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">
                                                                            <a href="https://www.helpware.com/services/digital-customer-experience">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">
                                                                                        <div class="our-benefits-left-icon">
                                                                                            <object data="<?php echo get_template_directory_uri();?>/images/plus-document-svgrepo-com.svg" width="300" height="300"> </object>
<!--                                                                                            <img src="--><?php //echo get_template_directory_uri();?><!--/images/plus-document-svgrepo-com.svg" alt="">-->
                                                                                        </div>
                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Provider Credentialing</h3>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>Shark Medical Billing provide comprehensive medical credentialing for all healthcare providers who are eligible for credentialing with insurance carriers.</p>
                                                                                    </div>
                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </div>

                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">

                                                                            <a href="https://www.helpware.com/services/content-control-and-verification">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">

                                                                                        <div class="our-benefits-left-icon">
                                                                                            <i class="fa-thin fa-arrow-right-from-bracket"></i>
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Claims Submission</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>SMB submits all claims electronically within eight hours from the encounters or charges received time. Electronic claim submission speeds up claim processing in medical billing services.</p>
                                                                                    </div>


                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>

                                                                                </div>
                                                                            </a>
                                                                        </div>

                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">
                                                                            <a href="https://www.helpware.com/services/ai-operations">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">
                                                                                        <div class="our-benefits-left-icon">
                                                                                            <i class="fa-regular fa-money-check-dollar-pen"></i>
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Payment Posting</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>Accuracy in payment posting in medical billing services is imperative for an optimized revenue cycle. Once payments are posted to patient accounts each denial is addressed</p>
                                                                                    </div>


                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>

                                                                                </div>
                                                                            </a>
                                                                        </div>

                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">

                                                                            <a href="https://www.helpware.com/services/content-control-and-verification">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">

                                                                                        <div class="our-benefits-left-icon">




                                                                                            <i class="fa-sharp fa-solid fa-hand-holding-medical"></i>

                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Denial Management</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>ABC has a well-experienced team of denial management professionals trained to identify the root cause of expensive denials. ABC can handle denial efficiently.</p>
                                                                                    </div>


                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>

                                                                                </div>
                                                                            </a>
                                                                        </div>

                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">
                                                                            <a href="https://www.helpware.com/services/ai-operations">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">
                                                                                        <div class="our-benefits-left-icon">
                                                                                            <i class="fa-solid fa-bed-pulse"></i>

                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Patient Statement Service</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>SBM calls each patient to remind them about the balance. ABC engages patients in digital channels by sending eBills which helps the practice to receive the payments faster.</p>
                                                                                    </div>


                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>

                                                                                </div>
                                                                            </a>
                                                                        </div>

                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">
                                                                            <a href="https://www.helpware.com/services/ai-operations">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">
                                                                                        <div class="our-benefits-left-icon">
                                                                                            <i class="fa-regular fa-hand-holding-dollar"></i>

                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Account Receivable</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>SMB follow-up on the claims in 30 working days from the claim submission date. The goal of AR in medical billing services is to achieve the shortest collection period possible. </p>
                                                                                    </div>


                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>

                                                                                </div>
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                </div>


                                                                <div class="our-benefits-row our-benefits-row-right our-benefits-row-last">
                                                                    <div class="our-benefits-left">
                                                                        <div class="repeater repeater-last aos-init aos-animate" data-aos="fade-up">
                                                                            <a href="https://www.helpware.com/services/start-up-acceleration">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">
                                                                                        <div class="our-benefits-left-icon">
                                                                                            <i aria-hidden="true" class="fas fa-clipboard-list"></i>

                                                                                        </div>
                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Charge Entry</h3>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>Charge entry is the process of creating a claim for a service rendered by the provider to the patient. SMB gives high importance to accurate charge posting to submit clean claims.</p>
                                                                                    </div>
                                                                                    <div class="our-benefits-left-btn">
                                                                                        <span>  learn more</span>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div>

                                            </div><!--end widget-span -->
                                        </div><!--end row-->
                                    </div><!--end row-wrapper -->

                                </div><!--end widget-span -->
                            </div><!--end row-->
                        </div><!--end row-wrapper -->



                        <div class="row-fluid-wrapper row-depth-1 row-number-9 dnd-section dnd_area-row-4-padding">
                            <div class="row-fluid ">
                                <div class="span12 widget-span widget-type-cell cell_16262362701072-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

                                    <div class="row-fluid-wrapper row-depth-1 row-number-10 dnd-row">
                                        <div class="row-fluid ">
                                            <div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
                                                <div id="hs_cos_wrapper_widget_1626236269813" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="how-it-works-module">
                                                        <div class="page-center">
                                                            <div class="hiw-header">
                                                                <h4>OUR PROVEN APPROACH</h4>
                                                                <h2>Executing Experience Beyond Expectation</h2>
                                                            </div>

                                                            <div class="hiw-repeater">
                                                                <div id="div_block-281-304" class="ct-div-block animated_figure"></div>

                                                                <div class="hiw-box hiw-box-1" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            1
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Faster claims processing</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hiw-text">
                                                                        <p>&nbsp;&nbsp;</p>
                                                                    </div>
                                                                </div>

                                                                <div class="hiw-box hiw-box-2" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            2
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Improved Healthcare Revenue Cycle Management</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>&nbsp;&nbsp;&nbsp;</p>
                                                                    </div>

                                                                </div>

                                                                <div class="hiw-box hiw-box-3" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            3
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Reduced per-patient costs</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hiw-text">
                                                                        <p>&nbsp;&nbsp;</p>
                                                                    </div>
                                                                </div>

                                                                <div class="hiw-box hiw-box-4" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            4
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Reduction in submission errors</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hiw-text">
                                                                        <p>&nbsp;&nbsp;&nbsp;</p>
                                                                    </div>

                                                                </div >

                                                                <div class="hiw-box hiw-box-5" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            5
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Improved profitability</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hiw-text">
                                                                        <p>&nbsp;&nbsp;&nbsp;</p>
                                                                    </div>

                                                                </div>

                                                                <div class="hiw-box hiw-box-6" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            6
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Alleviating confusion dealing with each payer’s specific payment policies</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div></div>

                                            </div><!--end widget-span -->
                                        </div><!--end row-->
                                    </div><!--end row-wrapper -->

                                </div><!--end widget-span -->
                            </div><!--end row-->
                        </div><!--end row-wrapper -->

                        <x></x>


                    </div><!--end widget-span -->
                </div>
            </div>
        </div>
    </main>
    <script>
(function () {
  var  nav = document.querySelector(".header__navigation"), search = document.querySelector(".header__search"), allToggles = document.querySelectorAll(".header--toggle"), navToggle = document.querySelector(".header__navigation--toggle"), langToggle = document.querySelector(".header__language-switcher--toggle"), searchToggle = document.querySelector(".header__search--toggle"), closeToggle = document.querySelector(".header__close--toggle"), allElements = document.querySelectorAll(".header--element, .header--toggle"), emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');
  function toggleNav() {
    nav.classList.toggle("open"),
            navToggle.classList.toggle("open"),
            console.log("menu opened")
  }
  navToggle && navToggle.addEventListener("click", toggleNav)
})();
</script>
    </body>
    </html>
<?php get_footer(); ?>