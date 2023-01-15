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
                                                                <div class="left-sec">
                                                                    <div class="bnner-text">
                                                                        <h4 class="animated-h1-title animate__animated animate__fadeInUp animate_slow"><span class="wrap-line" style="height: 30px;"><span>YOUR HELPWARE</span></span></h4>
                                                                        <h1 class="animated-h1-title desktop_homepage_title animate__animated animate__fadeInUp animate_slower"><span class="wrap-line long-line"><span>Amazing Customer</span></span><span class="wrap-line"><span>Experiences.</span></span> <span class="wrap-line main-page-line"><span style="color: #4bc3b5;">Together.</span></span></h1>
                                                                        <h1 class="animated-h1-title mobile_homepage_title animate__animated animate__fadeInUp animate_slower"><span class="wrap-line"><span>Amazing </span></span> <span class="wrap-line"><span>Customer </span></span><span class="wrap-line"><span>Experiences.</span></span> <span class="wrap-line main-page-line"><span style="color: #4bc3b5;">Together.</span></span></h1>
                                                                        <div class="homepage-main-paragraph">
                                                                            <div  style="height: 100%;
    position: absolute;
    width: 100%;">&nbsp;</div>
                                                                            <p class="animate__animated animate__fadeInRight animate__delay-2s">We are a digitally enabled People as a Services Outsourcer focused on serving high growth, new economy, market-disrupting, and technology companies to own interaction custody, complete complex tasks, and grow their brands.</p>
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






                                                                <div class="right-sec aos-init aos-animate" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
                                                                    <div class="banner-image">
                                                                        <video id="vid" width="320" height="240" playsinline="" loop="" muted="" autoplay="" __idm_id__="1507329">
                                                                            <source src="<?php echo get_template_directory_uri();?>/assets/homepage_video.mp4" type="video/mp4">
                                                                        </video>


                                                                        <div class="banner-icon-rep banner-icon-rep-1">






                                                                            <img src="https://www.helpware.com/hubfs/helpware-icon.svg" alt="helpware-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                        </div>




                                                                        <div class="banner-icon-rep banner-icon-rep-2">






                                                                            <img src="https://www.helpware.com/hubfs/Calendar-icon.svg" alt="Calendar-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                        </div>




                                                                        <div class="banner-icon-rep banner-icon-rep-3">






                                                                            <img src="https://www.helpware.com/hubfs/Headset-icon.svg" alt="Headset-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                        </div>





                                                                        <div class="banner-testimonial">
                                                                            <div class="banner-test-img">






                                                                                <img src="https://www.helpware.com/hubfs/man-icon.jpg" alt="man-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                            </div>
                                                                            <div class="banner-test-name">
                                                                                <h5>
                                                                                    Taylor Spencer
                                                                                </h5>
                                                                            </div>
                                                                            <div class="banner-test-icons">
                                                                                <div class="banner-test-dcnt-icon">






                                                                                    <img src="https://www.helpware.com/hubfs/Answer-yes-icon.svg" alt="Answer-yes-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                                </div>
                                                                                <div class="banner-test-cnt-icon">






                                                                                    <img src="https://www.helpware.com/hubfs/Answer-no-icon.svg" alt="Answer-no-icon" loading="lazy" style="max-width: 100%; height: auto;">

                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <div class="banner-tile-text">
                                                                            <p>Guten Ta<span aria-hidden="true"></span></p>
                                                                        </div>
                                                                    </div>

                                                                </div>





























                                                            </div>
                                                        </div>
                                                    </div>

                                                    <script>
                                                        document.addEventListener('DOMContentLoaded',function(event){
                                                            // array with texts to type in typewriter
                                                            var dataText = [

                                                                "Hello!",
                                                                "¡Hola!",
                                                                "Guten Tag!",
                                                                "Olá!",
                                                                "Bonjour!"
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
                                                                <div class="our-vision-left-sec">
                                                                    <div class="our-vision-left-img">






                                                                        <picture>
                                                                            <source srcset="" media="(min-width: 1400px)">
                                                                            <source srcset="" media="(min-width: 600px)">
                                                                            <img src="<?php echo get_template_directory_uri();?>/images/our-vision-block.jpg" alt="our-vision-block" style="max-width: 100%; height: auto;">
                                                                        </picture>

                                                                    </div>
                                                                </div>
                                                                <div class="our-vision-right-sec our-vision-home">
                                                                    <div class="our-vision-right-text">
                                                                        <h4>helpware philosophy</h4>
                                                                        <h2>Our Vision</h2>
                                                                        <p>Helpware’s vision is delivering relentless consumer empowerment and experience interactions through API and integration enabled human task services.</p>
                                                                        <p>We partner with the best and fastest-growing brands in the world to consistently create superior customer experiences. <br><br>Together we grow, together we give back, together we scale.</p>
                                                                    </div>
                                                                    <div class="our-vision-right-cta">





                                                                        <a href="../../Downloads/Helpware/www.helpware.com/company/vision/index.html">
                                                                            learn more
                                                                        </a>
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
                                                                    <h4>Helpware expertise</h4>
                                                                    <h2>Core Services</h2>
                                                                </div>

                                                                <div class="our-benefits-row our-benefits-row-right">
                                                                    <div class="our-benefits-left">



                                                                        <div class="repeater aos-init aos-animate" data-aos="fade-up">
                                                                            <a href="https://www.helpware.com/services/digital-customer-experience">
                                                                                <div class="our-benefits-left-rep">
                                                                                    <div class="our-benefits-left-heading">
                                                                                        <div class="our-benefits-left-icon">

                                                                                            <img src="https://www.helpware.com/hubfs/Group.png" alt="Group" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>
                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Digital Customer Experience</h3>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>We offer business process outsourcing that drives brand loyalty including Call Center, Answering Service, Chat, Technical, and Email support.</p>
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





                                                                                            <img src="https://www.helpware.com/hubfs/Content-Control-and-Verification.svg" alt="Content-Control-and-Verification" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Content Control and Verification</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>Helpware offers business process outsourcing and technology safeguards including Content Moderation, Fraud Prevention, Abuse Detection, and Profile Impersonation Monitoring.</p>
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

                                                                                            <img src="https://www.helpware.com/hubfs/AI-Operations.svg" alt="AI-Operations" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>AI Operations</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>We collect, annotate, and analyze large volumes of data spanning Image Processing, Video Annotation, Data Tagging, Data Digitization, and Natural Language Processing (NLP).</p>
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





                                                                                            <img src="https://www.helpware.com/hubfs/Content-Control-and-Verification.svg" alt="Content-Control-and-Verification" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Content Control and Verification</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>Helpware offers business process outsourcing and technology safeguards including Content Moderation, Fraud Prevention, Abuse Detection, and Profile Impersonation Monitoring.</p>
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

                                                                                            <img src="https://www.helpware.com/hubfs/AI-Operations.svg" alt="AI-Operations" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>AI Operations</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>We collect, annotate, and analyze large volumes of data spanning Image Processing, Video Annotation, Data Tagging, Data Digitization, and Natural Language Processing (NLP).</p>
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

                                                                                            <img src="https://www.helpware.com/hubfs/AI-Operations.svg" alt="AI-Operations" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>


                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>AI Operations</h3>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>We collect, annotate, and analyze large volumes of data spanning Image Processing, Video Annotation, Data Tagging, Data Digitization, and Natural Language Processing (NLP).</p>
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
                                                                                            <img src="https://www.helpware.com/hubfs/Startup-Acceleration.svg" alt="Startup-Acceleration" loading="lazy" style="max-width: 100%; height: auto;">
                                                                                        </div>
                                                                                        <div class="our-benefits-left-title">
                                                                                            <h3>Start-up Acceleration</h3>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="our-benefits-left-text">
                                                                                        <p>Our start-up solutions include Digital Customer Service, Content Control and Verification, AI Operations, Back-Office Support, Microtasking, and Human in the Loop. Expand team talent across all areas of customer engagement by joining your team with ours. The results are the faster product to market expansions with a competitive advantage.</p>
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

                        <div class="row-fluid-wrapper row-depth-1 row-number-7 dnd-section">
                            <div class="row-fluid ">
                                <div class="span12 widget-span widget-type-cell cell_16305685266102-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

                                    <div class="row-fluid-wrapper row-depth-1 row-number-8 dnd-row">
                                        <div class="row-fluid ">
                                            <div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
                                                <div id="hs_cos_wrapper_widget_1630568526278" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="our-teamleaders-main grow-your-business grow-business-main-outer ">
                                                        <div class="page-center">
                                                            <div class="our-teamleaders-outer">
                                                                <div class="our-teamleaders-rows">
                                                                    <div class="our-teamleaders-row">
                                                                        <div class="our-teamleaders-col-1">
                                                                            <div class="grow-business-text">
                                                                                <h4>Explore Helpware</h4>
                                                                                <h2>Let’s chat about business process outsourcing for success</h2>
                                                                            </div>


                                                                            <div class="grow-business-btn">
              <span id="hs_cos_wrapper_widget_1630568526278_"
                    class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_cta" style=""
                    data-hs-cos-general-type="widget" data-hs-cos-type="cta"><!--HubSpot Call-to-Action Code --><span
                          class="hs-cta-wrapper" id="hs-cta-wrapper-91ac804d-1734-4fb6-a5bd-fcc87055039b"><span
                              class="hs-cta-node hs-cta-91ac804d-1734-4fb6-a5bd-fcc87055039b"
                              id="hs-cta-91ac804d-1734-4fb6-a5bd-fcc87055039b" style="visibility: visible;" data-hs-drop="true"><a
                                  id="cta_button_3358429_c34e152c-2fc5-43ef-a4d1-fbdd0ab52fa1"
                                  class="cta_button cta_button cta-button"
                                  style="" cta_dest_link="https://www.helpware.com/contact-us" title="Let’s Get Started">Let’s Get Started</a></span><script
                              charset="utf-8" src="/hs/cta/cta/current.js"></script></span><!-- end HubSpot Call-to-Action Code --></span>
                                                                            </div>


                                                                        </div>
                                                                        <div class="our-teamleaders-col-2">

                                                                            <div class="our-teamleaders-col-img" style="">





                                                                                <img src="https://www.helpware.com/hubfs/Helpware-Anton-2.png" alt="Helpware-Anton-2" loading="lazy" style="max-width: 100%; height: auto;">
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <style>

                                                        .grow-business-main-outer .our-teamleaders-col-img:before {

                                                            background-color: #9A87E9;
                                                        }

                                                    </style></div>

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
                                                                            <h4>Onboarding</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>Your onboarding manager helps you build your team using a proven project management approach (roadmap, recruit, process, train, and launch).</p>
                                                                    </div>

                                                                </div>

                                                                <div class="hiw-box hiw-box-2" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            2
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Sourcing</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>Your recruiting team combines sourcing and headhunting to interview, test, and curate your custom-tailored team.</p>
                                                                    </div>

                                                                </div>

                                                                <div class="hiw-box hiw-box-3" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            3
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Training</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>Your training team facilitates and builds training documentation with you and creates a certification plan with your team.&nbsp;</p>
                                                                    </div>

                                                                </div>

                                                                <div class="hiw-box hiw-box-4" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            4
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Production</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>Your custom team is 100% dedicated to you. They are assigned a manager, and we continually monitor KPIs and goals.</p>
                                                                    </div>

                                                                </div >

                                                                <div class="hiw-box hiw-box-5" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            5
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Continuous improvement</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>You are assigned a customer support manager to partner with you on continuous improvement and help you project manage your work and team.</p>
                                                                    </div>

                                                                </div>

                                                                <div class="hiw-box hiw-box-6" data-aos="fade-up">
                                                                    <div class="title">
                                                                        <div class="numbring">
                                                                            6
                                                                        </div>
                                                                        <div class="heading">
                                                                            <h4>Growth</h4>
                                                                        </div>
                                                                    </div>

                                                                    <div class="hiw-text">
                                                                        <p>You can accelerate growth, level up production, increase efficiency, and improve your bottom line.</p>
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

                        <div class="row-fluid-wrapper row-depth-1 row-number-11 dnd-section dnd_area-row-5-padding">
                            <div class="row-fluid ">
                                <div class="span12 widget-span widget-type-cell cell_16261685104982-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

                                    <div class="row-fluid-wrapper row-depth-1 row-number-12 dnd-row">
                                        <div class="row-fluid ">
                                            <div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
                                                <div id="hs_cos_wrapper_widget_1626168510186" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="our-clients-module ">
                                                        <div class="page-center">
                                                            <div class="our-clients-header">
                                                                <h4>our greatest assets are</h4>
                                                                <h2>Our Clients</h2>
                                                            </div>

                                                            <div class="company-logos-repeater   five-image ">

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/DoorDash_Logo.svg" alt="DoorDash_Logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/headspace-inc-logo-vector-cropped.svg" alt="headspace-inc-logo-vector-cropped" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/Purecars_logo-cropped.svg" alt="Purecars_logo-cropped" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/jamcity-logo.svg" alt="jamcity-logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/Amazon_logo.svg" alt="Amazon_logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/helpware_2021/home/Microsoft-Logo.svg" alt="Microsoft-Logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/helpware_2021/home/Google-Logo.svg" alt="Google-Logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/zendesk-logo.svg" alt="zendesk-logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/Cisco_logo_blue_2016.svg" alt="Cisco_logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/bittrex-global-vector-logo-cropped.svg" alt="bittrex-global-vector-logo-cropped" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/RestoraPet-2019-Logo.png" alt="RestoraPet-2019-Logo" loading="lazy" style="max-width: 100%; height: auto;">

                                                                </div>

                                                                <div class="company-logo aos-init aos-animate" data-aos-enable="true" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">






                                                                    <img src="https://www.helpware.com/hubfs/CompIQ-logo.png" alt="CompIQ-logo" loading="lazy" style="max-width: 100%; height: auto;">

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