$(document).ready((function() {
        $("#tabing-section-1").addClass("resp-tab-content-active"),
            $("#tabing-section-1.resp-tab-content-active").css("display", "block"),
            $(".resp-accordion:first-child").addClass("resp-tab-active")
    }
)),
    function() {
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++)
                    callback.call(thisArg, this[i], i, this)
            }
        );
        var callback, nav = document.querySelector(".header__navigation"), langSwitcher = document.querySelector(".header__language-switcher"), search = document.querySelector(".header__search"), allToggles = document.querySelectorAll(".header--toggle"), navToggle = document.querySelector(".header__navigation--toggle"), langToggle = document.querySelector(".header__language-switcher--toggle"), searchToggle = document.querySelector(".header__search--toggle"), closeToggle = document.querySelector(".header__close--toggle"), allElements = document.querySelectorAll(".header--element, .header--toggle"), emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');
        function toggleNav() {
            nav.classList.toggle("open"),
                navToggle.classList.toggle("open"),
                console.log("menu opened")
        }
        function toggleLang() {
            allToggles.forEach((function(toggle) {
                    toggle.classList.toggle("hide")
                }
            )),
                langSwitcher.classList.toggle("open"),
                langToggle.classList.toggle("open"),
                closeToggle.classList.toggle("show")
        }
        function toggleSearch() {
            allToggles.forEach((function(toggle) {
                    toggle.classList.toggle("hide")
                }
            )),
                search.classList.toggle("open"),
                searchToggle.classList.toggle("open"),
                closeToggle.classList.toggle("show")
        }
        function closeAll() {
            allElements.forEach((function(element) {
                    element.classList.remove("hide", "open")
                }
            )),
                closeToggle.classList.remove("show")
        }
        function toggleDisabled() {
            document.querySelectorAll("#email-prefs-form .item").forEach((function(item) {
                    var emailSubItemInput = item.querySelector("input");
                    emailGlobalUnsub.checked ? (item.classList.add("disabled"),
                        emailSubItemInput.setAttribute("disabled", "disabled"),
                        emailSubItemInput.checked = !1) : (item.classList.remove("disabled"),
                        emailSubItemInput.removeAttribute("disabled"))
                }
            ))
        }
        callback = function() {
            document.body && (langSwitcher && langToggle.addEventListener("click", toggleLang),
            navToggle && navToggle.addEventListener("click", toggleNav),
            searchToggle && searchToggle.addEventListener("click", toggleSearch),
            closeToggle && closeToggle.addEventListener("click", closeAll),
            emailGlobalUnsub && emailGlobalUnsub.addEventListener("change", toggleDisabled))
        }
            ,
            ["interactive", "complete"].indexOf(document.readyState) >= 0 ? callback() : document.addEventListener("DOMContentLoaded", callback),
            $(window).scroll((function() {
                    var $body = $("body");
                    $(window).scrollTop() > $(".body-container").offset().top ? $body.addClass("small-header") : $body.removeClass("small-header")
                }
            )),
            function(i) {
                "use strict";
                "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
            }((function(i) {
                    "use strict";
                    var e = window.Slick || {};
                    (e = function() {
                        var e = 0;
                        return function(t, o) {
                            var s, n = this;
                            n.defaults = {
                                accessibility: !0,
                                adaptiveHeight: !1,
                                appendArrows: i(t),
                                appendDots: i(t),
                                arrows: !0,
                                asNavFor: null,
                                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                autoplay: !1,
                                autoplaySpeed: 3e3,
                                centerMode: !1,
                                centerPadding: "50px",
                                cssEase: "ease",
                                customPaging: function(e, t) {
                                    return i('<button type="button" />').text(t + 1)
                                },
                                dots: !1,
                                dotsClass: "slick-dots",
                                draggable: !0,
                                easing: "linear",
                                edgeFriction: .35,
                                fade: !1,
                                focusOnSelect: !1,
                                focusOnChange: !1,
                                infinite: !0,
                                initialSlide: 0,
                                lazyLoad: "ondemand",
                                mobileFirst: !1,
                                pauseOnHover: !0,
                                pauseOnFocus: !0,
                                pauseOnDotsHover: !1,
                                respondTo: "window",
                                responsive: null,
                                rows: 1,
                                rtl: !1,
                                slide: "",
                                slidesPerRow: 1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                speed: 500,
                                swipe: !0,
                                swipeToSlide: !1,
                                touchMove: !0,
                                touchThreshold: 5,
                                useCSS: !0,
                                useTransform: !0,
                                variableWidth: !1,
                                vertical: !1,
                                verticalSwiping: !1,
                                waitForAnimate: !0,
                                zIndex: 1e3
                            },
                                n.initials = {
                                    animating: !1,
                                    dragging: !1,
                                    autoPlayTimer: null,
                                    currentDirection: 0,
                                    currentLeft: null,
                                    currentSlide: 0,
                                    direction: 1,
                                    $dots: null,
                                    listWidth: null,
                                    listHeight: null,
                                    loadIndex: 0,
                                    $nextArrow: null,
                                    $prevArrow: null,
                                    scrolling: !1,
                                    slideCount: null,
                                    slideWidth: null,
                                    $slideTrack: null,
                                    $slides: null,
                                    sliding: !1,
                                    slideOffset: 0,
                                    swipeLeft: null,
                                    swiping: !1,
                                    $list: null,
                                    touchObject: {},
                                    transformsEnabled: !1,
                                    unslicked: !1
                                },
                                i.extend(n, n.initials),
                                n.activeBreakpoint = null,
                                n.animType = null,
                                n.animProp = null,
                                n.breakpoints = [],
                                n.breakpointSettings = [],
                                n.cssTransitions = !1,
                                n.focussed = !1,
                                n.interrupted = !1,
                                n.hidden = "hidden",
                                n.paused = !0,
                                n.positionProp = null,
                                n.respondTo = null,
                                n.rowCount = 1,
                                n.shouldClick = !0,
                                n.$slider = i(t),
                                n.$slidesCache = null,
                                n.transformType = null,
                                n.transitionType = null,
                                n.visibilityChange = "visibilitychange",
                                n.windowWidth = 0,
                                n.windowTimer = null,
                                s = i(t).data("slick") || {},
                                n.options = i.extend({}, n.defaults, o, s),
                                n.currentSlide = n.options.initialSlide,
                                n.originalSettings = n.options,
                                void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
                                    n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
                                    n.visibilityChange = "webkitvisibilitychange"),
                                n.autoPlay = i.proxy(n.autoPlay, n),
                                n.autoPlayClear = i.proxy(n.autoPlayClear, n),
                                n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
                                n.changeSlide = i.proxy(n.changeSlide, n),
                                n.clickHandler = i.proxy(n.clickHandler, n),
                                n.selectHandler = i.proxy(n.selectHandler, n),
                                n.setPosition = i.proxy(n.setPosition, n),
                                n.swipeHandler = i.proxy(n.swipeHandler, n),
                                n.dragHandler = i.proxy(n.dragHandler, n),
                                n.keyHandler = i.proxy(n.keyHandler, n),
                                n.instanceUid = e++,
                                n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                                n.registerBreakpoints(),
                                n.init(!0)
                        }
                    }()).prototype.activateADA = function() {
                        this.$slideTrack.find(".slick-active").attr({
                            "aria-hidden": "false"
                        }).find("a, input, button, select").attr({
                            tabindex: "0"
                        })
                    }
                        ,
                        e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
                            var s = this;
                            if ("boolean" == typeof t)
                                o = t,
                                    t = null;
                            else if (t < 0 || t >= s.slideCount)
                                return !1;
                            s.unload(),
                                "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
                                s.$slides = s.$slideTrack.children(this.options.slide),
                                s.$slideTrack.children(this.options.slide).detach(),
                                s.$slideTrack.append(s.$slides),
                                s.$slides.each((function(e, t) {
                                        i(t).attr("data-slick-index", e)
                                    }
                                )),
                                s.$slidesCache = s.$slides,
                                s.reinit()
                        }
                        ,
                        e.prototype.animateHeight = function() {
                            var i = this;
                            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                                i.$list.animate({
                                    height: e
                                }, i.options.speed)
                            }
                        }
                        ,
                        e.prototype.animateSlide = function(e, t) {
                            var o = {}
                                , s = this;
                            s.animateHeight(),
                            !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                                !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                                    left: e
                                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                                    top: e
                                }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                                    i({
                                        animStart: s.currentLeft
                                    }).animate({
                                        animStart: e
                                    }, {
                                        duration: s.options.speed,
                                        easing: s.options.easing,
                                        step: function(i) {
                                            i = Math.ceil(i),
                                                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                                                    s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                                                    s.$slideTrack.css(o))
                                        },
                                        complete: function() {
                                            t && t.call()
                                        }
                                    })) : (s.applyTransition(),
                                    e = Math.ceil(e),
                                    !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
                                    s.$slideTrack.css(o),
                                t && setTimeout((function() {
                                        s.disableTransition(),
                                            t.call()
                                    }
                                ), s.options.speed))
                        }
                        ,
                        e.prototype.getNavTarget = function() {
                            var e = this.options.asNavFor;
                            return e && null !== e && (e = i(e).not(this.$slider)),
                                e
                        }
                        ,
                        e.prototype.asNavFor = function(e) {
                            var t = this.getNavTarget();
                            null !== t && "object" == typeof t && t.each((function() {
                                    var t = i(this).slick("getSlick");
                                    t.unslicked || t.slideHandler(e, !0)
                                }
                            ))
                        }
                        ,
                        e.prototype.applyTransition = function(i) {
                            var e = this
                                , t = {};
                            !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
                                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
                        }
                        ,
                        e.prototype.autoPlay = function() {
                            var i = this;
                            i.autoPlayClear(),
                            i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
                        }
                        ,
                        e.prototype.autoPlayClear = function() {
                            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
                        }
                        ,
                        e.prototype.autoPlayIterator = function() {
                            var i = this
                                , e = i.currentSlide + i.options.slidesToScroll;
                            i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
                            i.currentSlide - 1 == 0 && (i.direction = 1))),
                                i.slideHandler(e))
                        }
                        ,
                        e.prototype.buildArrows = function() {
                            var e = this;
                            !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
                                e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
                                e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                    e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                                e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                                !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                                    "aria-disabled": "true",
                                    tabindex: "-1"
                                }))
                        }
                        ,
                        e.prototype.buildDots = function() {
                            var e, t, o = this;
                            if (!0 === o.options.dots) {
                                for (o.$slider.addClass("slick-dotted"),
                                         t = i("<ul />").addClass(o.options.dotsClass),
                                         e = 0; e <= o.getDotCount(); e += 1)
                                    t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                                o.$dots = t.appendTo(o.options.appendDots),
                                    o.$dots.find("li").first().addClass("slick-active")
                            }
                        }
                        ,
                        e.prototype.buildOut = function() {
                            var e = this;
                            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                                e.slideCount = e.$slides.length,
                                e.$slides.each((function(e, t) {
                                        i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
                                    }
                                )),
                                e.$slider.addClass("slick-slider"),
                                e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
                                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                                e.$slideTrack.css("opacity", 0),
                            !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
                                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                                e.setupInfinite(),
                                e.buildArrows(),
                                e.buildDots(),
                                e.updateDots(),
                                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                            !0 === e.options.draggable && e.$list.addClass("draggable")
                        }
                        ,
                        e.prototype.buildRows = function() {
                            var i, e, t, o, s, n, r, l = this;
                            if (o = document.createDocumentFragment(),
                                n = l.$slider.children(),
                            l.options.rows > 1) {
                                for (r = l.options.slidesPerRow * l.options.rows,
                                         s = Math.ceil(n.length / r),
                                         i = 0; i < s; i++) {
                                    var d = document.createElement("div");
                                    for (e = 0; e < l.options.rows; e++) {
                                        var a = document.createElement("div");
                                        for (t = 0; t < l.options.slidesPerRow; t++) {
                                            var c = i * r + (e * l.options.slidesPerRow + t);
                                            n.get(c) && a.appendChild(n.get(c))
                                        }
                                        d.appendChild(a)
                                    }
                                    o.appendChild(d)
                                }
                                l.$slider.empty().append(o),
                                    l.$slider.children().children().children().css({
                                        width: 100 / l.options.slidesPerRow + "%",
                                        display: "inline-block"
                                    })
                            }
                        }
                        ,
                        e.prototype.checkResponsive = function(e, t) {
                            var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
                            if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
                            r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                                for (o in s = null,
                                    r.breakpoints)
                                    r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
                                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                                    !0 === e && (r.currentSlide = r.options.initialSlide),
                                        r.refresh(e)),
                                    l = s) : (r.activeBreakpoint = s,
                                    "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                                    !0 === e && (r.currentSlide = r.options.initialSlide),
                                        r.refresh(e)),
                                    l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                                    r.options = r.originalSettings,
                                !0 === e && (r.currentSlide = r.options.initialSlide),
                                    r.refresh(e),
                                    l = s),
                                e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
                            }
                        }
                        ,
                        e.prototype.changeSlide = function(e, t) {
                            var o, s, n = this, r = i(e.currentTarget);
                            switch (r.is("a") && e.preventDefault(),
                            r.is("li") || (r = r.closest("li")),
                                o = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll,
                                e.data.message) {
                                case "previous":
                                    s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o,
                                    n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, t);
                                    break;
                                case "next":
                                    s = 0 === o ? n.options.slidesToScroll : o,
                                    n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, t);
                                    break;
                                case "index":
                                    var l = 0 === e.data.index ? 0 : e.data.index || r.index() * n.options.slidesToScroll;
                                    n.slideHandler(n.checkNavigable(l), !1, t),
                                        r.children().trigger("focus");
                                    break;
                                default:
                                    return
                            }
                        }
                        ,
                        e.prototype.checkNavigable = function(i) {
                            var e, t;
                            if (t = 0,
                            i > (e = this.getNavigableIndexes())[e.length - 1])
                                i = e[e.length - 1];
                            else
                                for (var o in e) {
                                    if (i < e[o]) {
                                        i = t;
                                        break
                                    }
                                    t = e[o]
                                }
                            return i
                        }
                        ,
                        e.prototype.cleanUpEvents = function() {
                            var e = this;
                            e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                            !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                                e.$slider.off("focus.slick blur.slick"),
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                            !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
                            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                                e.$list.off("click.slick", e.clickHandler),
                                i(document).off(e.visibilityChange, e.visibility),
                                e.cleanUpSlideEvents(),
                            !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                                i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                                i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
                        }
                        ,
                        e.prototype.cleanUpSlideEvents = function() {
                            var e = this;
                            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
                        }
                        ,
                        e.prototype.cleanUpRows = function() {
                            var i, e = this;
                            e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
                                e.$slider.empty().append(i))
                        }
                        ,
                        e.prototype.clickHandler = function(i) {
                            !1 === this.shouldClick && (i.stopImmediatePropagation(),
                                i.stopPropagation(),
                                i.preventDefault())
                        }
                        ,
                        e.prototype.destroy = function(e) {
                            var t = this;
                            t.autoPlayClear(),
                                t.touchObject = {},
                                t.cleanUpEvents(),
                                i(".slick-cloned", t.$slider).detach(),
                            t.$dots && t.$dots.remove(),
                            t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                            t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                            t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                                    i(this).attr("style", i(this).data("originalStyling"))
                                }
                            )),
                                t.$slideTrack.children(this.options.slide).detach(),
                                t.$slideTrack.detach(),
                                t.$list.detach(),
                                t.$slider.append(t.$slides)),
                                t.cleanUpRows(),
                                t.$slider.removeClass("slick-slider"),
                                t.$slider.removeClass("slick-initialized"),
                                t.$slider.removeClass("slick-dotted"),
                                t.unslicked = !0,
                            e || t.$slider.trigger("destroy", [t])
                        }
                        ,
                        e.prototype.disableTransition = function(i) {
                            var e = this
                                , t = {};
                            t[e.transitionType] = "",
                                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
                        }
                        ,
                        e.prototype.fadeSlide = function(i, e) {
                            var t = this;
                            !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                                zIndex: t.options.zIndex
                            }),
                                t.$slides.eq(i).animate({
                                    opacity: 1
                                }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
                                t.$slides.eq(i).css({
                                    opacity: 1,
                                    zIndex: t.options.zIndex
                                }),
                            e && setTimeout((function() {
                                    t.disableTransition(i),
                                        e.call()
                                }
                            ), t.options.speed))
                        }
                        ,
                        e.prototype.fadeSlideOut = function(i) {
                            var e = this;
                            !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                                opacity: 0,
                                zIndex: e.options.zIndex - 2
                            }, e.options.speed, e.options.easing) : (e.applyTransition(i),
                                e.$slides.eq(i).css({
                                    opacity: 0,
                                    zIndex: e.options.zIndex - 2
                                }))
                        }
                        ,
                        e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
                            var e = this;
                            null !== i && (e.$slidesCache = e.$slides,
                                e.unload(),
                                e.$slideTrack.children(this.options.slide).detach(),
                                e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                                e.reinit())
                        }
                        ,
                        e.prototype.focusHandler = function() {
                            var e = this;
                            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(t) {
                                    t.stopImmediatePropagation();
                                    var o = i(this);
                                    setTimeout((function() {
                                            e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                                                e.autoPlay())
                                        }
                                    ), 0)
                                }
                            ))
                        }
                        ,
                        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
                            return this.currentSlide
                        }
                        ,
                        e.prototype.getDotCount = function() {
                            var i = this
                                , e = 0
                                , t = 0
                                , o = 0;
                            if (!0 === i.options.infinite)
                                if (i.slideCount <= i.options.slidesToShow)
                                    ++o;
                                else
                                    for (; e < i.slideCount; )
                                        ++o,
                                            e = t + i.options.slidesToScroll,
                                            t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                            else if (!0 === i.options.centerMode)
                                o = i.slideCount;
                            else if (i.options.asNavFor)
                                for (; e < i.slideCount; )
                                    ++o,
                                        e = t + i.options.slidesToScroll,
                                        t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                            else
                                o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
                            return o - 1
                        }
                        ,
                        e.prototype.getLeft = function(i) {
                            var e, t, o, s, n = this, r = 0;
                            return n.slideOffset = 0,
                                t = n.$slides.first().outerHeight(!0),
                                !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
                                    s = -1,
                                !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
                                    r = t * n.options.slidesToShow * s),
                                n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
                                    r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
                                    r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
                                    r = (i + n.options.slidesToShow - n.slideCount) * t),
                            n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
                                r = 0),
                                !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
                                    n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
                                e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
                            !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
                                e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                            !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
                                e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
                                e += (n.$list.width() - o.outerWidth()) / 2)),
                                e
                        }
                        ,
                        e.prototype.getOption = e.prototype.slickGetOption = function(i) {
                            return this.options[i]
                        }
                        ,
                        e.prototype.getNavigableIndexes = function() {
                            var i, e = this, t = 0, o = 0, s = [];
                            for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
                                o = -1 * e.options.slidesToScroll,
                                i = 2 * e.slideCount); t < i; )
                                s.push(t),
                                    t = o + e.options.slidesToScroll,
                                    o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                            return s
                        }
                        ,
                        e.prototype.getSlick = function() {
                            return this
                        }
                        ,
                        e.prototype.getSlideCount = function() {
                            var e, t, o = this;
                            return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
                                !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(s, n) {
                                        if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                                            return e = n,
                                                !1
                                    }
                                )),
                                Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
                        }
                        ,
                        e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
                            this.changeSlide({
                                data: {
                                    message: "index",
                                    index: parseInt(i)
                                }
                            }, e)
                        }
                        ,
                        e.prototype.init = function(e) {
                            var t = this;
                            i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
                                t.buildRows(),
                                t.buildOut(),
                                t.setProps(),
                                t.startLoad(),
                                t.loadSlider(),
                                t.initializeEvents(),
                                t.updateArrows(),
                                t.updateDots(),
                                t.checkResponsive(!0),
                                t.focusHandler()),
                            e && t.$slider.trigger("init", [t]),
                            !0 === t.options.accessibility && t.initADA(),
                            t.options.autoplay && (t.paused = !1,
                                t.autoPlay())
                        }
                        ,
                        e.prototype.initADA = function() {
                            var e = this
                                , t = Math.ceil(e.slideCount / e.options.slidesToShow)
                                , o = e.getNavigableIndexes().filter((function(i) {
                                    return i >= 0 && i < e.slideCount
                                }
                            ));
                            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }).find("a, input, button, select").attr({
                                tabindex: "-1"
                            }),
                            null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(t) {
                                    var s = o.indexOf(t);
                                    i(this).attr({
                                        role: "tabpanel",
                                        id: "slick-slide" + e.instanceUid + t,
                                        tabindex: -1
                                    }),
                                    -1 !== s && i(this).attr({
                                        "aria-describedby": "slick-slide-control" + e.instanceUid + s
                                    })
                                }
                            )),
                                e.$dots.attr("role", "tablist").find("li").each((function(s) {
                                        var n = o[s];
                                        i(this).attr({
                                            role: "presentation"
                                        }),
                                            i(this).find("button").first().attr({
                                                role: "tab",
                                                id: "slick-slide-control" + e.instanceUid + s,
                                                "aria-controls": "slick-slide" + e.instanceUid + n,
                                                "aria-label": s + 1 + " of " + t,
                                                "aria-selected": null,
                                                tabindex: "-1"
                                            })
                                    }
                                )).eq(e.currentSlide).find("button").attr({
                                    "aria-selected": "true",
                                    tabindex: "0"
                                }).end());
                            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
                                e.$slides.eq(s).attr("tabindex", 0);
                            e.activateADA()
                        }
                        ,
                        e.prototype.initArrowEvents = function() {
                            var i = this;
                            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                                message: "previous"
                            }, i.changeSlide),
                                i.$nextArrow.off("click.slick").on("click.slick", {
                                    message: "next"
                                }, i.changeSlide),
                            !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
                                i.$nextArrow.on("keydown.slick", i.keyHandler)))
                        }
                        ,
                        e.prototype.initDotEvents = function() {
                            var e = this;
                            !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                                message: "index"
                            }, e.changeSlide),
                            !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                            !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
                        }
                        ,
                        e.prototype.initSlideEvents = function() {
                            var e = this;
                            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
                        }
                        ,
                        e.prototype.initializeEvents = function() {
                            var e = this;
                            e.initArrowEvents(),
                                e.initDotEvents(),
                                e.initSlideEvents(),
                                e.$list.on("touchstart.slick mousedown.slick", {
                                    action: "start"
                                }, e.swipeHandler),
                                e.$list.on("touchmove.slick mousemove.slick", {
                                    action: "move"
                                }, e.swipeHandler),
                                e.$list.on("touchend.slick mouseup.slick", {
                                    action: "end"
                                }, e.swipeHandler),
                                e.$list.on("touchcancel.slick mouseleave.slick", {
                                    action: "end"
                                }, e.swipeHandler),
                                e.$list.on("click.slick", e.clickHandler),
                                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                            !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                                i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
                                i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
                                i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                                i(e.setPosition)
                        }
                        ,
                        e.prototype.initUI = function() {
                            var i = this;
                            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
                                i.$nextArrow.show()),
                            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
                        }
                        ,
                        e.prototype.keyHandler = function(i) {
                            var e = this;
                            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                                data: {
                                    message: !0 === e.options.rtl ? "next" : "previous"
                                }
                            }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                                data: {
                                    message: !0 === e.options.rtl ? "previous" : "next"
                                }
                            }))
                        }
                        ,
                        e.prototype.lazyLoad = function() {
                            function e(e) {
                                i("img[data-lazy]", e).each((function() {
                                        var e = i(this)
                                            , t = i(this).attr("data-lazy")
                                            , o = i(this).attr("data-srcset")
                                            , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                                            , r = document.createElement("img");
                                        r.onload = function() {
                                            e.animate({
                                                opacity: 0
                                            }, 100, (function() {
                                                    o && (e.attr("srcset", o),
                                                    s && e.attr("sizes", s)),
                                                        e.attr("src", t).animate({
                                                            opacity: 1
                                                        }, 200, (function() {
                                                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                                            }
                                                        )),
                                                        n.$slider.trigger("lazyLoaded", [n, e, t])
                                                }
                                            ))
                                        }
                                            ,
                                            r.onerror = function() {
                                                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                                    n.$slider.trigger("lazyLoadError", [n, e, t])
                                            }
                                            ,
                                            r.src = t
                                    }
                                ))
                            }
                            var t, o, s, n = this;
                            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
                                s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
                                s = Math.ceil(o + n.options.slidesToShow),
                            !0 === n.options.fade && (o > 0 && o--,
                            s <= n.slideCount && s++)),
                                t = n.$slider.find(".slick-slide").slice(o, s),
                            "anticipated" === n.options.lazyLoad)
                                for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                                    r < 0 && (r = n.slideCount - 1),
                                        t = (t = t.add(d.eq(r))).add(d.eq(l)),
                                        r--,
                                        l++;
                            e(t),
                                n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
                        }
                        ,
                        e.prototype.loadSlider = function() {
                            var i = this;
                            i.setPosition(),
                                i.$slideTrack.css({
                                    opacity: 1
                                }),
                                i.$slider.removeClass("slick-loading"),
                                i.initUI(),
                            "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
                        }
                        ,
                        e.prototype.next = e.prototype.slickNext = function() {
                            this.changeSlide({
                                data: {
                                    message: "next"
                                }
                            })
                        }
                        ,
                        e.prototype.orientationChange = function() {
                            this.checkResponsive(),
                                this.setPosition()
                        }
                        ,
                        e.prototype.pause = e.prototype.slickPause = function() {
                            this.autoPlayClear(),
                                this.paused = !0
                        }
                        ,
                        e.prototype.play = e.prototype.slickPlay = function() {
                            var i = this;
                            i.autoPlay(),
                                i.options.autoplay = !0,
                                i.paused = !1,
                                i.focussed = !1,
                                i.interrupted = !1
                        }
                        ,
                        e.prototype.postSlide = function(e) {
                            var t = this;
                            t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
                                t.animating = !1,
                            t.slideCount > t.options.slidesToShow && t.setPosition(),
                                t.swipeLeft = null,
                            t.options.autoplay && t.autoPlay(),
                            !0 === t.options.accessibility && (t.initADA(),
                            t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
                        }
                        ,
                        e.prototype.prev = e.prototype.slickPrev = function() {
                            this.changeSlide({
                                data: {
                                    message: "previous"
                                }
                            })
                        }
                        ,
                        e.prototype.preventDefault = function(i) {
                            i.preventDefault()
                        }
                        ,
                        e.prototype.progressiveLazyLoad = function(e) {
                            e = e || 1;
                            var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
                            d.length ? (t = d.first(),
                                o = t.attr("data-lazy"),
                                s = t.attr("data-srcset"),
                                n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
                                (r = document.createElement("img")).onload = function() {
                                    s && (t.attr("srcset", s),
                                    n && t.attr("sizes", n)),
                                        t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                                    !0 === l.options.adaptiveHeight && l.setPosition(),
                                        l.$slider.trigger("lazyLoaded", [l, t, o]),
                                        l.progressiveLazyLoad()
                                }
                                ,
                                r.onerror = function() {
                                    e < 3 ? setTimeout((function() {
                                            l.progressiveLazyLoad(e + 1)
                                        }
                                    ), 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                        l.$slider.trigger("lazyLoadError", [l, t, o]),
                                        l.progressiveLazyLoad())
                                }
                                ,
                                r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
                        }
                        ,
                        e.prototype.refresh = function(e) {
                            var t, o, s = this;
                            o = s.slideCount - s.options.slidesToShow,
                            !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
                            s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                                t = s.currentSlide,
                                s.destroy(!0),
                                i.extend(s, s.initials, {
                                    currentSlide: t
                                }),
                                s.init(),
                            e || s.changeSlide({
                                data: {
                                    message: "index",
                                    index: t
                                }
                            }, !1)
                        }
                        ,
                        e.prototype.registerBreakpoints = function() {
                            var e, t, o, s = this, n = s.options.responsive || null;
                            if ("array" === i.type(n) && n.length) {
                                for (e in s.respondTo = s.options.respondTo || "window",
                                    n)
                                    if (o = s.breakpoints.length - 1,
                                        n.hasOwnProperty(e)) {
                                        for (t = n[e].breakpoint; o >= 0; )
                                            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                                                o--;
                                        s.breakpoints.push(t),
                                            s.breakpointSettings[t] = n[e].settings
                                    }
                                s.breakpoints.sort((function(i, e) {
                                        return s.options.mobileFirst ? i - e : e - i
                                    }
                                ))
                            }
                        }
                        ,
                        e.prototype.reinit = function() {
                            var e = this;
                            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
                                e.slideCount = e.$slides.length,
                            e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                                e.registerBreakpoints(),
                                e.setProps(),
                                e.setupInfinite(),
                                e.buildArrows(),
                                e.updateArrows(),
                                e.initArrowEvents(),
                                e.buildDots(),
                                e.updateDots(),
                                e.initDotEvents(),
                                e.cleanUpSlideEvents(),
                                e.initSlideEvents(),
                                e.checkResponsive(!1, !0),
                            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                                e.setPosition(),
                                e.focusHandler(),
                                e.paused = !e.options.autoplay,
                                e.autoPlay(),
                                e.$slider.trigger("reInit", [e])
                        }
                        ,
                        e.prototype.resize = function() {
                            var e = this;
                            i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
                                e.windowDelay = window.setTimeout((function() {
                                        e.windowWidth = i(window).width(),
                                            e.checkResponsive(),
                                        e.unslicked || e.setPosition()
                                    }
                                ), 50))
                        }
                        ,
                        e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
                            var o = this;
                            if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
                            o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                                return !1;
                            o.unload(),
                                !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                                o.$slides = o.$slideTrack.children(this.options.slide),
                                o.$slideTrack.children(this.options.slide).detach(),
                                o.$slideTrack.append(o.$slides),
                                o.$slidesCache = o.$slides,
                                o.reinit()
                        }
                        ,
                        e.prototype.setCSS = function(i) {
                            var e, t, o = this, s = {};
                            !0 === o.options.rtl && (i = -i),
                                e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                                t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
                                s[o.positionProp] = i,
                                !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
                                    !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
                                        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
                                        o.$slideTrack.css(s)))
                        }
                        ,
                        e.prototype.setDimensions = function() {
                            var i = this;
                            !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                                padding: "0px " + i.options.centerPadding
                            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
                            !0 === i.options.centerMode && i.$list.css({
                                padding: i.options.centerPadding + " 0px"
                            })),
                                i.listWidth = i.$list.width(),
                                i.listHeight = i.$list.height(),
                                !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
                                    i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
                                    i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
                        }
                        ,
                        e.prototype.setFade = function() {
                            var e, t = this;
                            t.$slides.each((function(o, s) {
                                    e = t.slideWidth * o * -1,
                                        !0 === t.options.rtl ? i(s).css({
                                            position: "relative",
                                            right: e,
                                            top: 0,
                                            zIndex: t.options.zIndex - 2,
                                            opacity: 0
                                        }) : i(s).css({
                                            position: "relative",
                                            left: e,
                                            top: 0,
                                            zIndex: t.options.zIndex - 2,
                                            opacity: 0
                                        })
                                }
                            )),
                                t.$slides.eq(t.currentSlide).css({
                                    zIndex: t.options.zIndex - 1,
                                    opacity: 1
                                })
                        }
                        ,
                        e.prototype.setHeight = function() {
                            var i = this;
                            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                                i.$list.css("height", e)
                            }
                        }
                        ,
                        e.prototype.setOption = e.prototype.slickSetOption = function() {
                            var e, t, o, s, n, r = this, l = !1;
                            if ("object" === i.type(arguments[0]) ? (o = arguments[0],
                                l = arguments[1],
                                n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
                                s = arguments[1],
                                l = arguments[2],
                                "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
                            "single" === n)
                                r.options[o] = s;
                            else if ("multiple" === n)
                                i.each(o, (function(i, e) {
                                        r.options[i] = e
                                    }
                                ));
                            else if ("responsive" === n)
                                for (t in s)
                                    if ("array" !== i.type(r.options.responsive))
                                        r.options.responsive = [s[t]];
                                    else {
                                        for (e = r.options.responsive.length - 1; e >= 0; )
                                            r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                                                e--;
                                        r.options.responsive.push(s[t])
                                    }
                            l && (r.unload(),
                                r.reinit())
                        }
                        ,
                        e.prototype.setPosition = function() {
                            var i = this;
                            i.setDimensions(),
                                i.setHeight(),
                                !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
                                i.$slider.trigger("setPosition", [i])
                        }
                        ,
                        e.prototype.setProps = function() {
                            var i = this
                                , e = document.body.style;
                            i.positionProp = !0 === i.options.vertical ? "top" : "left",
                                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                            void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
                            i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
                            void 0 !== e.OTransform && (i.animType = "OTransform",
                                i.transformType = "-o-transform",
                                i.transitionType = "OTransition",
                            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                            void 0 !== e.MozTransform && (i.animType = "MozTransform",
                                i.transformType = "-moz-transform",
                                i.transitionType = "MozTransition",
                            void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
                            void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
                                i.transformType = "-webkit-transform",
                                i.transitionType = "webkitTransition",
                            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                            void 0 !== e.msTransform && (i.animType = "msTransform",
                                i.transformType = "-ms-transform",
                                i.transitionType = "msTransition",
                            void 0 === e.msTransform && (i.animType = !1)),
                            void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
                                i.transformType = "transform",
                                i.transitionType = "transition"),
                                i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
                        }
                        ,
                        e.prototype.setSlideClasses = function(i) {
                            var e, t, o, s, n = this;
                            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                                n.$slides.eq(i).addClass("slick-current"),
                            !0 === n.options.centerMode) {
                                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                                e = Math.floor(n.options.slidesToShow / 2),
                                !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
                                    t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
                                    0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                                    n.$slides.eq(i).addClass("slick-center")
                            } else
                                i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
                                    o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
                                    n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
                        }
                        ,
                        e.prototype.setupInfinite = function() {
                            var e, t, o, s = this;
                            if (!0 === s.options.fade && (s.options.centerMode = !1),
                            !0 === s.options.infinite && !1 === s.options.fade && (t = null,
                            s.slideCount > s.options.slidesToShow)) {
                                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                                         e = s.slideCount; e > s.slideCount - o; e -= 1)
                                    t = e - 1,
                                        i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                                for (e = 0; e < o + s.slideCount; e += 1)
                                    t = e,
                                        i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                                s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                                        i(this).attr("id", "")
                                    }
                                ))
                            }
                        }
                        ,
                        e.prototype.interrupt = function(i) {
                            i || this.autoPlay(),
                                this.interrupted = i
                        }
                        ,
                        e.prototype.selectHandler = function(e) {
                            var t = this
                                , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
                                , s = parseInt(o.attr("data-slick-index"));
                            s || (s = 0),
                                t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
                        }
                        ,
                        e.prototype.slideHandler = function(i, e, t) {
                            var o, s, n, r, l, d = null, a = this;
                            if (e = e || !1,
                                !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
                                if (!1 === e && a.asNavFor(i),
                                    o = i,
                                    d = a.getLeft(o),
                                    r = a.getLeft(a.currentSlide),
                                    a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
                                !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                                    !1 === a.options.fade && (o = a.currentSlide,
                                        !0 !== t ? a.animateSlide(r, (function() {
                                                a.postSlide(o)
                                            }
                                        )) : a.postSlide(o));
                                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                                    !1 === a.options.fade && (o = a.currentSlide,
                                        !0 !== t ? a.animateSlide(r, (function() {
                                                a.postSlide(o)
                                            }
                                        )) : a.postSlide(o));
                                else {
                                    if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                                        s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                                        a.animating = !0,
                                        a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                                        n = a.currentSlide,
                                        a.currentSlide = s,
                                        a.setSlideClasses(a.currentSlide),
                                    a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                                        a.updateDots(),
                                        a.updateArrows(),
                                    !0 === a.options.fade)
                                        return !0 !== t ? (a.fadeSlideOut(n),
                                            a.fadeSlide(s, (function() {
                                                    a.postSlide(s)
                                                }
                                            ))) : a.postSlide(s),
                                            void a.animateHeight();
                                    !0 !== t ? a.animateSlide(d, (function() {
                                            a.postSlide(s)
                                        }
                                    )) : a.postSlide(s)
                                }
                        }
                        ,
                        e.prototype.startLoad = function() {
                            var i = this;
                            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
                                i.$nextArrow.hide()),
                            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                                i.$slider.addClass("slick-loading")
                        }
                        ,
                        e.prototype.swipeDirection = function() {
                            var i, e, t, o, s = this;
                            return i = s.touchObject.startX - s.touchObject.curX,
                                e = s.touchObject.startY - s.touchObject.curY,
                                t = Math.atan2(e, i),
                            (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                                o <= 45 && o >= 0 || o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
                        }
                        ,
                        e.prototype.swipeEnd = function(i) {
                            var e, t, o = this;
                            if (o.dragging = !1,
                                o.swiping = !1,
                                o.scrolling)
                                return o.scrolling = !1,
                                    !1;
                            if (o.interrupted = !1,
                                o.shouldClick = !(o.touchObject.swipeLength > 10),
                            void 0 === o.touchObject.curX)
                                return !1;
                            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
                            o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                                switch (t = o.swipeDirection()) {
                                    case "left":
                                    case "down":
                                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                                            o.currentDirection = 0;
                                        break;
                                    case "right":
                                    case "up":
                                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                                            o.currentDirection = 1
                                }
                                "vertical" != t && (o.slideHandler(e),
                                    o.touchObject = {},
                                    o.$slider.trigger("swipe", [o, t]))
                            } else
                                o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
                                    o.touchObject = {})
                        }
                        ,
                        e.prototype.swipeHandler = function(i) {
                            var e = this;
                            if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
                                switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
                                    e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                                !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                                    i.data.action) {
                                    case "start":
                                        e.swipeStart(i);
                                        break;
                                    case "move":
                                        e.swipeMove(i);
                                        break;
                                    case "end":
                                        e.swipeEnd(i)
                                }
                        }
                        ,
                        e.prototype.swipeMove = function(i) {
                            var e, t, o, s, n, r, l = this;
                            return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
                            !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
                                l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
                                l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
                                l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
                                r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
                                !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
                                    !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
                                    t = l.swipeDirection(),
                                void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
                                    i.preventDefault()),
                                    s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
                                !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                                    o = l.touchObject.swipeLength,
                                    l.touchObject.edgeHit = !1,
                                !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
                                    l.touchObject.edgeHit = !0),
                                    !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
                                !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
                                !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
                                    !1) : void l.setCSS(l.swipeLeft))))
                        }
                        ,
                        e.prototype.swipeStart = function(i) {
                            var e, t = this;
                            if (t.interrupted = !0,
                            1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
                                return t.touchObject = {},
                                    !1;
                            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
                                t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
                                t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
                                t.dragging = !0
                        }
                        ,
                        e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                            var i = this;
                            null !== i.$slidesCache && (i.unload(),
                                i.$slideTrack.children(this.options.slide).detach(),
                                i.$slidesCache.appendTo(i.$slideTrack),
                                i.reinit())
                        }
                        ,
                        e.prototype.unload = function() {
                            var e = this;
                            i(".slick-cloned", e.$slider).remove(),
                            e.$dots && e.$dots.remove(),
                            e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                            e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                        }
                        ,
                        e.prototype.unslick = function(i) {
                            var e = this;
                            e.$slider.trigger("unslick", [e, i]),
                                e.destroy()
                        }
                        ,
                        e.prototype.updateArrows = function() {
                            var i = this;
                            Math.floor(i.options.slidesToShow / 2),
                            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                    i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                    i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                        }
                        ,
                        e.prototype.updateDots = function() {
                            var i = this;
                            null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
                                i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
                        }
                        ,
                        e.prototype.visibility = function() {
                            var i = this;
                            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
                        }
                        ,
                        i.fn.slick = function() {
                            var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
                            for (i = 0; i < r; i++)
                                if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
                                void 0 !== t)
                                    return t;
                            return o
                        }
                }
            )),
            $(document).ready((function() {
                    $("#toggel-image").click((function() {
                            $(this).siblings("ul").toggle()
                        }
                    )),
                        $(document).ready((function() {
                                $(".sec-sec-btn").on("click", (function() {
                                        $(".seo-sec-cont").toggleClass("collapsed")
                                    }
                                ))
                            }
                        ))
                }
            )),
            $(document).ready((function() {
                    if ($(window).width() <= 1151) {
                        var btn = $(".header .span1.widget-span.widget-type-cell.cell_1626680687988-vertical-alignment.dnd-column").html();
                        $("nav .level-1").append("<li class='mobile_nav_button_wrapper'>" + btn + "</li>"),
                            $(".level-1 .has-submenu").click((function() {
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
                            $(".has-submenu .level-2 .menu-item .submenu-right-sec a").click((function() {
                                    $(".header--toggle.header__navigation--toggle").removeClass("open"),
                                        $(".header__navigation.header--element").removeClass("open")
                                }
                            ))
                    }
                    $(window).width() <= 991 && ($(".footer-menus-main .footer-menu-rep ul li").find("ul.hs-menu-children-wrapper").css("display", "none"),
                        $(".footer-menus-main .footer-menu-rep .hs-menu-depth-1 a").click((function() {
                                $(".footer-menus-main .footer-menu-rep .hs-menu-depth-1 a").not($(this)).removeClass("open-sub"),
                                    $(".footer-menus-main .footer-menu-rep ul li ul.hs-menu-children-wrapper").not($(this).parent().find("ul")).slideUp(),
                                    $(this).parent().find("ul").slideToggle(),
                                    $(this).toggleClass("open-sub")
                            }
                        ))),
                        setTimeout((function() {
                                if ($("body .body-wrapper").hasClass("hs-blog-listing")) {
                                    var qsRegex;
                                    t = window,
                                        e = function(t, e) {
                                            "use strict";
                                            var i = Array.prototype.slice
                                                , o = t.console
                                                , n = void 0 === o ? function() {}
                                                : function(t) {
                                                    o.error(t)
                                                }
                                            ;
                                            function s(o, s, a) {
                                                (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
                                                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
                                                    }
                                                ),
                                                    a.fn[o] = function(t) {
                                                        var e;
                                                        return "string" == typeof t ? function(t, e, i) {
                                                            var s, r = "$()." + o + '("' + e + '")';
                                                            return t.each((function(t, u) {
                                                                    var h = a.data(u, o);
                                                                    if (h) {
                                                                        var l = h[e];
                                                                        if (l && "_" != e.charAt(0)) {
                                                                            var d = l.apply(h, i);
                                                                            s = void 0 === s ? d : s
                                                                        } else
                                                                            n(r + " is not a valid method")
                                                                    } else
                                                                        n(o + " not initialized. Cannot call methods, i.e. " + r)
                                                                }
                                                            )),
                                                                void 0 !== s ? s : t
                                                        }(this, t, i.call(arguments, 1)) : (e = t,
                                                            this.each((function(t, i) {
                                                                    var n = a.data(i, o);
                                                                    n ? (n.option(e),
                                                                        n._init()) : (n = new s(i,e),
                                                                        a.data(i, o, n))
                                                                }
                                                            )),
                                                            this)
                                                    }
                                                    ,
                                                    r(a))
                                            }
                                            function r(t) {
                                                !t || t && t.bridget || (t.bridget = s)
                                            }
                                            return r(e || t.jQuery),
                                                s
                                        }
                                        ,
                                        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
                                                return e(t, i)
                                            }
                                        )) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
                                        }("undefined" != typeof window ? window : this, (function() {
                                                function t() {}
                                                var e = t.prototype;
                                                return e.on = function(t, e) {
                                                    if (t && e) {
                                                        var i = this._events = this._events || {}
                                                            , o = i[t] = i[t] || [];
                                                        return -1 == o.indexOf(e) && o.push(e),
                                                            this
                                                    }
                                                }
                                                    ,
                                                    e.once = function(t, e) {
                                                        if (t && e) {
                                                            this.on(t, e);
                                                            var i = this._onceEvents = this._onceEvents || {};
                                                            return (i[t] = i[t] || {})[e] = !0,
                                                                this
                                                        }
                                                    }
                                                    ,
                                                    e.off = function(t, e) {
                                                        var i = this._events && this._events[t];
                                                        if (i && i.length) {
                                                            var o = i.indexOf(e);
                                                            return -1 != o && i.splice(o, 1),
                                                                this
                                                        }
                                                    }
                                                    ,
                                                    e.emitEvent = function(t, e) {
                                                        var i = this._events && this._events[t];
                                                        if (i && i.length) {
                                                            i = i.slice(0),
                                                                e = e || [];
                                                            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                                                                var s = i[n];
                                                                o && o[s] && (this.off(t, s),
                                                                    delete o[s]),
                                                                    s.apply(this, e)
                                                            }
                                                            return this
                                                        }
                                                    }
                                                    ,
                                                    e.allOff = function() {
                                                        delete this._events,
                                                            delete this._onceEvents
                                                    }
                                                    ,
                                                    t
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
                                        }(window, (function() {
                                                "use strict";
                                                function t(t) {
                                                    var e = parseFloat(t);
                                                    return -1 == t.indexOf("%") && !isNaN(e) && e
                                                }
                                                var e = "undefined" == typeof console ? function() {}
                                                    : function(t) {
                                                        console.error(t)
                                                    }
                                                    , i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]
                                                    , o = i.length;
                                                function n(t) {
                                                    var i = getComputedStyle(t);
                                                    return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
                                                        i
                                                }
                                                var s, r = !1;
                                                return function a(e) {
                                                    if (function() {
                                                        if (!r) {
                                                            r = !0;
                                                            var e = document.createElement("div");
                                                            e.style.width = "200px",
                                                                e.style.padding = "1px 2px 3px 4px",
                                                                e.style.borderStyle = "solid",
                                                                e.style.borderWidth = "1px 2px 3px 4px",
                                                                e.style.boxSizing = "border-box";
                                                            var i = document.body || document.documentElement;
                                                            i.appendChild(e);
                                                            var o = n(e);
                                                            s = 200 == Math.round(t(o.width)),
                                                                a.isBoxSizeOuter = s,
                                                                i.removeChild(e)
                                                        }
                                                    }(),
                                                    "string" == typeof e && (e = document.querySelector(e)),
                                                    e && "object" == typeof e && e.nodeType) {
                                                        var u = n(e);
                                                        if ("none" == u.display)
                                                            return function() {
                                                                for (var t = {
                                                                    width: 0,
                                                                    height: 0,
                                                                    innerWidth: 0,
                                                                    innerHeight: 0,
                                                                    outerWidth: 0,
                                                                    outerHeight: 0
                                                                }, e = 0; e < o; e++)
                                                                    t[i[e]] = 0;
                                                                return t
                                                            }();
                                                        var h = {};
                                                        h.width = e.offsetWidth,
                                                            h.height = e.offsetHeight;
                                                        for (var l = h.isBorderBox = "border-box" == u.boxSizing, d = 0; d < o; d++) {
                                                            var f = i[d]
                                                                , c = u[f]
                                                                , m = parseFloat(c);
                                                            h[f] = isNaN(m) ? 0 : m
                                                        }
                                                        var p = h.paddingLeft + h.paddingRight
                                                            , y = h.paddingTop + h.paddingBottom
                                                            , g = h.marginLeft + h.marginRight
                                                            , v = h.marginTop + h.marginBottom
                                                            , _ = h.borderLeftWidth + h.borderRightWidth
                                                            , z = h.borderTopWidth + h.borderBottomWidth
                                                            , I = l && s
                                                            , x = t(u.width);
                                                        !1 !== x && (h.width = x + (I ? 0 : p + _));
                                                        var S = t(u.height);
                                                        return !1 !== S && (h.height = S + (I ? 0 : y + z)),
                                                            h.innerWidth = h.width - (p + _),
                                                            h.innerHeight = h.height - (y + z),
                                                            h.outerWidth = h.width + g,
                                                            h.outerHeight = h.height + v,
                                                            h
                                                    }
                                                }
                                            }
                                        )),
                                        function(t, e) {
                                            "use strict";
                                            "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
                                        }(window, (function() {
                                                "use strict";
                                                var t = function() {
                                                    var t = window.Element.prototype;
                                                    if (t.matches)
                                                        return "matches";
                                                    if (t.matchesSelector)
                                                        return "matchesSelector";
                                                    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                                                        var o = e[i] + "MatchesSelector";
                                                        if (t[o])
                                                            return o
                                                    }
                                                }();
                                                return function(e, i) {
                                                    return e[t](i)
                                                }
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
                                                    return e(t, i)
                                                }
                                            )) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
                                        }(window, (function(t, e) {
                                                var i = {
                                                    extend: function(t, e) {
                                                        for (var i in e)
                                                            t[i] = e[i];
                                                        return t
                                                    },
                                                    modulo: function(t, e) {
                                                        return (t % e + e) % e
                                                    }
                                                }
                                                    , o = Array.prototype.slice;
                                                i.makeArray = function(t) {
                                                    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? o.call(t) : [t]
                                                }
                                                    ,
                                                    i.removeFrom = function(t, e) {
                                                        var i = t.indexOf(e);
                                                        -1 != i && t.splice(i, 1)
                                                    }
                                                    ,
                                                    i.getParent = function(t, i) {
                                                        for (; t.parentNode && t != document.body; )
                                                            if (t = t.parentNode,
                                                                e(t, i))
                                                                return t
                                                    }
                                                    ,
                                                    i.getQueryElement = function(t) {
                                                        return "string" == typeof t ? document.querySelector(t) : t
                                                    }
                                                    ,
                                                    i.handleEvent = function(t) {
                                                        var e = "on" + t.type;
                                                        this[e] && this[e](t)
                                                    }
                                                    ,
                                                    i.filterFindElements = function(t, o) {
                                                        t = i.makeArray(t);
                                                        var n = [];
                                                        return t.forEach((function(t) {
                                                                if (t instanceof HTMLElement)
                                                                    if (o) {
                                                                        e(t, o) && n.push(t);
                                                                        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                                                                            n.push(i[s])
                                                                    } else
                                                                        n.push(t)
                                                            }
                                                        )),
                                                            n
                                                    }
                                                    ,
                                                    i.debounceMethod = function(t, e, i) {
                                                        i = i || 100;
                                                        var o = t.prototype[e]
                                                            , n = e + "Timeout";
                                                        t.prototype[e] = function() {
                                                            var t = this[n];
                                                            clearTimeout(t);
                                                            var e = arguments
                                                                , s = this;
                                                            this[n] = setTimeout((function() {
                                                                    o.apply(s, e),
                                                                        delete s[n]
                                                                }
                                                            ), i)
                                                        }
                                                    }
                                                    ,
                                                    i.docReady = function(t) {
                                                        var e = document.readyState;
                                                        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                                                    }
                                                    ,
                                                    i.toDashed = function(t) {
                                                        return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                                                                return e + "-" + i
                                                            }
                                                        )).toLowerCase()
                                                    }
                                                ;
                                                var n = t.console;
                                                return i.htmlInit = function(e, o) {
                                                    i.docReady((function() {
                                                            var s = i.toDashed(o)
                                                                , r = "data-" + s
                                                                , a = document.querySelectorAll("[" + r + "]")
                                                                , u = document.querySelectorAll(".js-" + s)
                                                                , h = i.makeArray(a).concat(i.makeArray(u))
                                                                , l = r + "-options"
                                                                , d = t.jQuery;
                                                            h.forEach((function(t) {
                                                                    var i, s = t.getAttribute(r) || t.getAttribute(l);
                                                                    try {
                                                                        i = s && JSON.parse(s)
                                                                    } catch (e) {
                                                                        return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + e))
                                                                    }
                                                                    var a = new e(t,i);
                                                                    d && d.data(t, o, a)
                                                                }
                                                            ))
                                                        }
                                                    ))
                                                }
                                                    ,
                                                    i
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
                                                t.Outlayer.Item = e(t.EvEmitter, t.getSize))
                                        }(window, (function(t, e) {
                                                "use strict";
                                                var i = document.documentElement.style
                                                    , o = "string" == typeof i.transition ? "transition" : "WebkitTransition"
                                                    , n = "string" == typeof i.transform ? "transform" : "WebkitTransform"
                                                    , s = {
                                                    WebkitTransition: "webkitTransitionEnd",
                                                    transition: "transitionend"
                                                }[o]
                                                    , r = {
                                                    transform: n,
                                                    transition: o,
                                                    transitionDuration: o + "Duration",
                                                    transitionProperty: o + "Property",
                                                    transitionDelay: o + "Delay"
                                                };
                                                function a(t, e) {
                                                    t && (this.element = t,
                                                        this.layout = e,
                                                        this.position = {
                                                            x: 0,
                                                            y: 0
                                                        },
                                                        this._create())
                                                }
                                                var u = a.prototype = Object.create(t.prototype);
                                                u.constructor = a,
                                                    u._create = function() {
                                                        this._transn = {
                                                            ingProperties: {},
                                                            clean: {},
                                                            onEnd: {}
                                                        },
                                                            this.css({
                                                                position: "absolute"
                                                            })
                                                    }
                                                    ,
                                                    u.handleEvent = function(t) {
                                                        var e = "on" + t.type;
                                                        this[e] && this[e](t)
                                                    }
                                                    ,
                                                    u.getSize = function() {
                                                        this.size = e(this.element)
                                                    }
                                                    ,
                                                    u.css = function(t) {
                                                        var e = this.element.style;
                                                        for (var i in t)
                                                            e[r[i] || i] = t[i]
                                                    }
                                                    ,
                                                    u.getPosition = function() {
                                                        var t = getComputedStyle(this.element)
                                                            , e = this.layout._getOption("originLeft")
                                                            , i = this.layout._getOption("originTop")
                                                            , o = t[e ? "left" : "right"]
                                                            , n = t[i ? "top" : "bottom"]
                                                            , s = parseFloat(o)
                                                            , r = parseFloat(n)
                                                            , a = this.layout.size;
                                                        -1 != o.indexOf("%") && (s = s / 100 * a.width),
                                                        -1 != n.indexOf("%") && (r = r / 100 * a.height),
                                                            s = isNaN(s) ? 0 : s,
                                                            r = isNaN(r) ? 0 : r,
                                                            s -= e ? a.paddingLeft : a.paddingRight,
                                                            r -= i ? a.paddingTop : a.paddingBottom,
                                                            this.position.x = s,
                                                            this.position.y = r
                                                    }
                                                    ,
                                                    u.layoutPosition = function() {
                                                        var t = this.layout.size
                                                            , e = {}
                                                            , i = this.layout._getOption("originLeft")
                                                            , o = this.layout._getOption("originTop")
                                                            , n = i ? "paddingLeft" : "paddingRight"
                                                            , s = i ? "left" : "right"
                                                            , r = i ? "right" : "left"
                                                            , a = this.position.x + t[n];
                                                        e[s] = this.getXValue(a),
                                                            e[r] = "";
                                                        var u = o ? "paddingTop" : "paddingBottom"
                                                            , h = o ? "top" : "bottom"
                                                            , l = o ? "bottom" : "top"
                                                            , d = this.position.y + t[u];
                                                        e[h] = this.getYValue(d),
                                                            e[l] = "",
                                                            this.css(e),
                                                            this.emitEvent("layout", [this])
                                                    }
                                                    ,
                                                    u.getXValue = function(t) {
                                                        var e = this.layout._getOption("horizontal");
                                                        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
                                                    }
                                                    ,
                                                    u.getYValue = function(t) {
                                                        var e = this.layout._getOption("horizontal");
                                                        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
                                                    }
                                                    ,
                                                    u._transitionTo = function(t, e) {
                                                        this.getPosition();
                                                        var i = this.position.x
                                                            , o = this.position.y
                                                            , n = t == this.position.x && e == this.position.y;
                                                        if (this.setPosition(t, e),
                                                        !n || this.isTransitioning) {
                                                            var s = t - i
                                                                , r = e - o
                                                                , a = {};
                                                            a.transform = this.getTranslate(s, r),
                                                                this.transition({
                                                                    to: a,
                                                                    onTransitionEnd: {
                                                                        transform: this.layoutPosition
                                                                    },
                                                                    isCleaning: !0
                                                                })
                                                        } else
                                                            this.layoutPosition()
                                                    }
                                                    ,
                                                    u.getTranslate = function(t, e) {
                                                        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
                                                    }
                                                    ,
                                                    u.goTo = function(t, e) {
                                                        this.setPosition(t, e),
                                                            this.layoutPosition()
                                                    }
                                                    ,
                                                    u.moveTo = u._transitionTo,
                                                    u.setPosition = function(t, e) {
                                                        this.position.x = parseFloat(t),
                                                            this.position.y = parseFloat(e)
                                                    }
                                                    ,
                                                    u._nonTransition = function(t) {
                                                        for (var e in this.css(t.to),
                                                        t.isCleaning && this._removeStyles(t.to),
                                                            t.onTransitionEnd)
                                                            t.onTransitionEnd[e].call(this)
                                                    }
                                                    ,
                                                    u.transition = function(t) {
                                                        if (parseFloat(this.layout.options.transitionDuration)) {
                                                            var e = this._transn;
                                                            for (var i in t.onTransitionEnd)
                                                                e.onEnd[i] = t.onTransitionEnd[i];
                                                            for (i in t.to)
                                                                e.ingProperties[i] = !0,
                                                                t.isCleaning && (e.clean[i] = !0);
                                                            t.from && (this.css(t.from),
                                                                this.element.offsetHeight),
                                                                this.enableTransition(t.to),
                                                                this.css(t.to),
                                                                this.isTransitioning = !0
                                                        } else
                                                            this._nonTransition(t)
                                                    }
                                                ;
                                                var h = "opacity," + n.replace(/([A-Z])/g, (function(t) {
                                                        return "-" + t.toLowerCase()
                                                    }
                                                ));
                                                u.enableTransition = function() {
                                                    if (!this.isTransitioning) {
                                                        var t = this.layout.options.transitionDuration;
                                                        t = "number" == typeof t ? t + "ms" : t,
                                                            this.css({
                                                                transitionProperty: h,
                                                                transitionDuration: t,
                                                                transitionDelay: this.staggerDelay || 0
                                                            }),
                                                            this.element.addEventListener(s, this, !1)
                                                    }
                                                }
                                                    ,
                                                    u.onwebkitTransitionEnd = function(t) {
                                                        this.ontransitionend(t)
                                                    }
                                                    ,
                                                    u.onotransitionend = function(t) {
                                                        this.ontransitionend(t)
                                                    }
                                                ;
                                                var l = {
                                                    "-webkit-transform": "transform"
                                                };
                                                u.ontransitionend = function(t) {
                                                    if (t.target === this.element) {
                                                        var e = this._transn
                                                            , i = l[t.propertyName] || t.propertyName;
                                                        delete e.ingProperties[i],
                                                        function(t) {
                                                            for (var e in t)
                                                                return !1;
                                                            return !0
                                                        }(e.ingProperties) && this.disableTransition(),
                                                        i in e.clean && (this.element.style[t.propertyName] = "",
                                                            delete e.clean[i]),
                                                        i in e.onEnd && (e.onEnd[i].call(this),
                                                            delete e.onEnd[i]),
                                                            this.emitEvent("transitionEnd", [this])
                                                    }
                                                }
                                                    ,
                                                    u.disableTransition = function() {
                                                        this.removeTransitionStyles(),
                                                            this.element.removeEventListener(s, this, !1),
                                                            this.isTransitioning = !1
                                                    }
                                                    ,
                                                    u._removeStyles = function(t) {
                                                        var e = {};
                                                        for (var i in t)
                                                            e[i] = "";
                                                        this.css(e)
                                                    }
                                                ;
                                                var d = {
                                                    transitionProperty: "",
                                                    transitionDuration: "",
                                                    transitionDelay: ""
                                                };
                                                return u.removeTransitionStyles = function() {
                                                    this.css(d)
                                                }
                                                    ,
                                                    u.stagger = function(t) {
                                                        t = isNaN(t) ? 0 : t,
                                                            this.staggerDelay = t + "ms"
                                                    }
                                                    ,
                                                    u.removeElem = function() {
                                                        this.element.parentNode.removeChild(this.element),
                                                            this.css({
                                                                display: ""
                                                            }),
                                                            this.emitEvent("remove", [this])
                                                    }
                                                    ,
                                                    u.remove = function() {
                                                        o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
                                                                this.removeElem()
                                                            }
                                                        )),
                                                            this.hide()) : this.removeElem()
                                                    }
                                                    ,
                                                    u.reveal = function() {
                                                        delete this.isHidden,
                                                            this.css({
                                                                display: ""
                                                            });
                                                        var t = this.layout.options
                                                            , e = {};
                                                        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
                                                            this.transition({
                                                                from: t.hiddenStyle,
                                                                to: t.visibleStyle,
                                                                isCleaning: !0,
                                                                onTransitionEnd: e
                                                            })
                                                    }
                                                    ,
                                                    u.onRevealTransitionEnd = function() {
                                                        this.isHidden || this.emitEvent("reveal")
                                                    }
                                                    ,
                                                    u.getHideRevealTransitionEndProperty = function(t) {
                                                        var e = this.layout.options[t];
                                                        if (e.opacity)
                                                            return "opacity";
                                                        for (var i in e)
                                                            return i
                                                    }
                                                    ,
                                                    u.hide = function() {
                                                        this.isHidden = !0,
                                                            this.css({
                                                                display: ""
                                                            });
                                                        var t = this.layout.options
                                                            , e = {};
                                                        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
                                                            this.transition({
                                                                from: t.visibleStyle,
                                                                to: t.hiddenStyle,
                                                                isCleaning: !0,
                                                                onTransitionEnd: e
                                                            })
                                                    }
                                                    ,
                                                    u.onHideTransitionEnd = function() {
                                                        this.isHidden && (this.css({
                                                            display: "none"
                                                        }),
                                                            this.emitEvent("hide"))
                                                    }
                                                    ,
                                                    u.destroy = function() {
                                                        this.css({
                                                            position: "",
                                                            left: "",
                                                            right: "",
                                                            top: "",
                                                            bottom: "",
                                                            transition: "",
                                                            transform: ""
                                                        })
                                                    }
                                                    ,
                                                    a
                                            }
                                        )),
                                        function(t, e) {
                                            "use strict";
                                            "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, o, n, s) {
                                                    return e(t, i, o, n, s)
                                                }
                                            )) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
                                        }(window, (function(t, e, i, o, n) {
                                                "use strict";
                                                var s = t.console
                                                    , r = t.jQuery
                                                    , a = function() {}
                                                    , u = 0
                                                    , h = {};
                                                function l(t, e) {
                                                    var i = o.getQueryElement(t);
                                                    if (i) {
                                                        this.element = i,
                                                        r && (this.$element = r(this.element)),
                                                            this.options = o.extend({}, this.constructor.defaults),
                                                            this.option(e);
                                                        var n = ++u;
                                                        this.element.outlayerGUID = n,
                                                            h[n] = this,
                                                            this._create(),
                                                        this._getOption("initLayout") && this.layout()
                                                    } else
                                                        s && s.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
                                                }
                                                l.namespace = "outlayer",
                                                    l.Item = n,
                                                    l.defaults = {
                                                        containerStyle: {
                                                            position: "relative"
                                                        },
                                                        initLayout: !0,
                                                        originLeft: !0,
                                                        originTop: !0,
                                                        resize: !0,
                                                        resizeContainer: !0,
                                                        transitionDuration: "0.4s",
                                                        hiddenStyle: {
                                                            opacity: 0,
                                                            transform: "scale(0.001)"
                                                        },
                                                        visibleStyle: {
                                                            opacity: 1,
                                                            transform: "scale(1)"
                                                        }
                                                    };
                                                var d = l.prototype;
                                                function f(t) {
                                                    function e() {
                                                        t.apply(this, arguments)
                                                    }
                                                    return e.prototype = Object.create(t.prototype),
                                                        e.prototype.constructor = e,
                                                        e
                                                }
                                                o.extend(d, e.prototype),
                                                    d.option = function(t) {
                                                        o.extend(this.options, t)
                                                    }
                                                    ,
                                                    d._getOption = function(t) {
                                                        var e = this.constructor.compatOptions[t];
                                                        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
                                                    }
                                                    ,
                                                    l.compatOptions = {
                                                        initLayout: "isInitLayout",
                                                        horizontal: "isHorizontal",
                                                        layoutInstant: "isLayoutInstant",
                                                        originLeft: "isOriginLeft",
                                                        originTop: "isOriginTop",
                                                        resize: "isResizeBound",
                                                        resizeContainer: "isResizingContainer"
                                                    },
                                                    d._create = function() {
                                                        this.reloadItems(),
                                                            this.stamps = [],
                                                            this.stamp(this.options.stamp),
                                                            o.extend(this.element.style, this.options.containerStyle),
                                                        this._getOption("resize") && this.bindResize()
                                                    }
                                                    ,
                                                    d.reloadItems = function() {
                                                        this.items = this._itemize(this.element.children)
                                                    }
                                                    ,
                                                    d._itemize = function(t) {
                                                        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                                                            var s = new i(e[n],this);
                                                            o.push(s)
                                                        }
                                                        return o
                                                    }
                                                    ,
                                                    d._filterFindItemElements = function(t) {
                                                        return o.filterFindElements(t, this.options.itemSelector)
                                                    }
                                                    ,
                                                    d.getItemElements = function() {
                                                        return this.items.map((function(t) {
                                                                return t.element
                                                            }
                                                        ))
                                                    }
                                                    ,
                                                    d.layout = function() {
                                                        this._resetLayout(),
                                                            this._manageStamps();
                                                        var t = this._getOption("layoutInstant")
                                                            , e = void 0 !== t ? t : !this._isLayoutInited;
                                                        this.layoutItems(this.items, e),
                                                            this._isLayoutInited = !0
                                                    }
                                                    ,
                                                    d._init = d.layout,
                                                    d._resetLayout = function() {
                                                        this.getSize()
                                                    }
                                                    ,
                                                    d.getSize = function() {
                                                        this.size = i(this.element)
                                                    }
                                                    ,
                                                    d._getMeasurement = function(t, e) {
                                                        var o, n = this.options[t];
                                                        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
                                                            this[t] = o ? i(o)[e] : n) : this[t] = 0
                                                    }
                                                    ,
                                                    d.layoutItems = function(t, e) {
                                                        t = this._getItemsForLayout(t),
                                                            this._layoutItems(t, e),
                                                            this._postLayout()
                                                    }
                                                    ,
                                                    d._getItemsForLayout = function(t) {
                                                        return t.filter((function(t) {
                                                                return !t.isIgnored
                                                            }
                                                        ))
                                                    }
                                                    ,
                                                    d._layoutItems = function(t, e) {
                                                        if (this._emitCompleteOnItems("layout", t),
                                                        t && t.length) {
                                                            var i = [];
                                                            t.forEach((function(t) {
                                                                    var o = this._getItemLayoutPosition(t);
                                                                    o.item = t,
                                                                        o.isInstant = e || t.isLayoutInstant,
                                                                        i.push(o)
                                                                }
                                                            ), this),
                                                                this._processLayoutQueue(i)
                                                        }
                                                    }
                                                    ,
                                                    d._getItemLayoutPosition = function() {
                                                        return {
                                                            x: 0,
                                                            y: 0
                                                        }
                                                    }
                                                    ,
                                                    d._processLayoutQueue = function(t) {
                                                        this.updateStagger(),
                                                            t.forEach((function(t, e) {
                                                                    this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                                                                }
                                                            ), this)
                                                    }
                                                    ,
                                                    d.updateStagger = function() {
                                                        var t = this.options.stagger;
                                                        if (null != t)
                                                            return this.stagger = function(t) {
                                                                if ("number" == typeof t)
                                                                    return t;
                                                                var e = t.match(/(^\d*\.?\d*)(\w*)/)
                                                                    , i = e && e[1]
                                                                    , o = e && e[2];
                                                                return i.length ? (i = parseFloat(i)) * (c[o] || 1) : 0
                                                            }(t),
                                                                this.stagger;
                                                        this.stagger = 0
                                                    }
                                                    ,
                                                    d._positionItem = function(t, e, i, o, n) {
                                                        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
                                                            t.moveTo(e, i))
                                                    }
                                                    ,
                                                    d._postLayout = function() {
                                                        this.resizeContainer()
                                                    }
                                                    ,
                                                    d.resizeContainer = function() {
                                                        if (this._getOption("resizeContainer")) {
                                                            var t = this._getContainerSize();
                                                            t && (this._setContainerMeasure(t.width, !0),
                                                                this._setContainerMeasure(t.height, !1))
                                                        }
                                                    }
                                                    ,
                                                    d._getContainerSize = a,
                                                    d._setContainerMeasure = function(t, e) {
                                                        if (void 0 !== t) {
                                                            var i = this.size;
                                                            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                                                                t = Math.max(t, 0),
                                                                this.element.style[e ? "width" : "height"] = t + "px"
                                                        }
                                                    }
                                                    ,
                                                    d._emitCompleteOnItems = function(t, e) {
                                                        var i = this;
                                                        function o() {
                                                            i.dispatchEvent(t + "Complete", null, [e])
                                                        }
                                                        var n = e.length;
                                                        if (e && n) {
                                                            var s = 0;
                                                            e.forEach((function(e) {
                                                                    e.once(t, r)
                                                                }
                                                            ))
                                                        } else
                                                            o();
                                                        function r() {
                                                            ++s == n && o()
                                                        }
                                                    }
                                                    ,
                                                    d.dispatchEvent = function(t, e, i) {
                                                        var o = e ? [e].concat(i) : i;
                                                        if (this.emitEvent(t, o),
                                                            r)
                                                            if (this.$element = this.$element || r(this.element),
                                                                e) {
                                                                var n = r.Event(e);
                                                                n.type = t,
                                                                    this.$element.trigger(n, i)
                                                            } else
                                                                this.$element.trigger(t, i)
                                                    }
                                                    ,
                                                    d.ignore = function(t) {
                                                        var e = this.getItem(t);
                                                        e && (e.isIgnored = !0)
                                                    }
                                                    ,
                                                    d.unignore = function(t) {
                                                        var e = this.getItem(t);
                                                        e && delete e.isIgnored
                                                    }
                                                    ,
                                                    d.stamp = function(t) {
                                                        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
                                                            t.forEach(this.ignore, this))
                                                    }
                                                    ,
                                                    d.unstamp = function(t) {
                                                        (t = this._find(t)) && t.forEach((function(t) {
                                                                o.removeFrom(this.stamps, t),
                                                                    this.unignore(t)
                                                            }
                                                        ), this)
                                                    }
                                                    ,
                                                    d._find = function(t) {
                                                        if (t)
                                                            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
                                                                o.makeArray(t)
                                                    }
                                                    ,
                                                    d._manageStamps = function() {
                                                        this.stamps && this.stamps.length && (this._getBoundingRect(),
                                                            this.stamps.forEach(this._manageStamp, this))
                                                    }
                                                    ,
                                                    d._getBoundingRect = function() {
                                                        var t = this.element.getBoundingClientRect()
                                                            , e = this.size;
                                                        this._boundingRect = {
                                                            left: t.left + e.paddingLeft + e.borderLeftWidth,
                                                            top: t.top + e.paddingTop + e.borderTopWidth,
                                                            right: t.right - (e.paddingRight + e.borderRightWidth),
                                                            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                                                        }
                                                    }
                                                    ,
                                                    d._manageStamp = a,
                                                    d._getElementOffset = function(t) {
                                                        var e = t.getBoundingClientRect()
                                                            , o = this._boundingRect
                                                            , n = i(t);
                                                        return {
                                                            left: e.left - o.left - n.marginLeft,
                                                            top: e.top - o.top - n.marginTop,
                                                            right: o.right - e.right - n.marginRight,
                                                            bottom: o.bottom - e.bottom - n.marginBottom
                                                        }
                                                    }
                                                    ,
                                                    d.handleEvent = o.handleEvent,
                                                    d.bindResize = function() {
                                                        t.addEventListener("resize", this),
                                                            this.isResizeBound = !0
                                                    }
                                                    ,
                                                    d.unbindResize = function() {
                                                        t.removeEventListener("resize", this),
                                                            this.isResizeBound = !1
                                                    }
                                                    ,
                                                    d.onresize = function() {
                                                        this.resize()
                                                    }
                                                    ,
                                                    o.debounceMethod(l, "onresize", 100),
                                                    d.resize = function() {
                                                        this.isResizeBound && this.needsResizeLayout() && this.layout()
                                                    }
                                                    ,
                                                    d.needsResizeLayout = function() {
                                                        var t = i(this.element);
                                                        return this.size && t && t.innerWidth !== this.size.innerWidth
                                                    }
                                                    ,
                                                    d.addItems = function(t) {
                                                        var e = this._itemize(t);
                                                        return e.length && (this.items = this.items.concat(e)),
                                                            e
                                                    }
                                                    ,
                                                    d.appended = function(t) {
                                                        var e = this.addItems(t);
                                                        e.length && (this.layoutItems(e, !0),
                                                            this.reveal(e))
                                                    }
                                                    ,
                                                    d.prepended = function(t) {
                                                        var e = this._itemize(t);
                                                        if (e.length) {
                                                            var i = this.items.slice(0);
                                                            this.items = e.concat(i),
                                                                this._resetLayout(),
                                                                this._manageStamps(),
                                                                this.layoutItems(e, !0),
                                                                this.reveal(e),
                                                                this.layoutItems(i)
                                                        }
                                                    }
                                                    ,
                                                    d.reveal = function(t) {
                                                        if (this._emitCompleteOnItems("reveal", t),
                                                        t && t.length) {
                                                            var e = this.updateStagger();
                                                            t.forEach((function(t, i) {
                                                                    t.stagger(i * e),
                                                                        t.reveal()
                                                                }
                                                            ))
                                                        }
                                                    }
                                                    ,
                                                    d.hide = function(t) {
                                                        if (this._emitCompleteOnItems("hide", t),
                                                        t && t.length) {
                                                            var e = this.updateStagger();
                                                            t.forEach((function(t, i) {
                                                                    t.stagger(i * e),
                                                                        t.hide()
                                                                }
                                                            ))
                                                        }
                                                    }
                                                    ,
                                                    d.revealItemElements = function(t) {
                                                        var e = this.getItems(t);
                                                        this.reveal(e)
                                                    }
                                                    ,
                                                    d.hideItemElements = function(t) {
                                                        var e = this.getItems(t);
                                                        this.hide(e)
                                                    }
                                                    ,
                                                    d.getItem = function(t) {
                                                        for (var e = 0; e < this.items.length; e++) {
                                                            var i = this.items[e];
                                                            if (i.element == t)
                                                                return i
                                                        }
                                                    }
                                                    ,
                                                    d.getItems = function(t) {
                                                        t = o.makeArray(t);
                                                        var e = [];
                                                        return t.forEach((function(t) {
                                                                var i = this.getItem(t);
                                                                i && e.push(i)
                                                            }
                                                        ), this),
                                                            e
                                                    }
                                                    ,
                                                    d.remove = function(t) {
                                                        var e = this.getItems(t);
                                                        this._emitCompleteOnItems("remove", e),
                                                        e && e.length && e.forEach((function(t) {
                                                                t.remove(),
                                                                    o.removeFrom(this.items, t)
                                                            }
                                                        ), this)
                                                    }
                                                    ,
                                                    d.destroy = function() {
                                                        var t = this.element.style;
                                                        t.height = "",
                                                            t.position = "",
                                                            t.width = "",
                                                            this.items.forEach((function(t) {
                                                                    t.destroy()
                                                                }
                                                            )),
                                                            this.unbindResize();
                                                        var e = this.element.outlayerGUID;
                                                        delete h[e],
                                                            delete this.element.outlayerGUID,
                                                        r && r.removeData(this.element, this.constructor.namespace)
                                                    }
                                                    ,
                                                    l.data = function(t) {
                                                        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
                                                        return e && h[e]
                                                    }
                                                    ,
                                                    l.create = function(t, e) {
                                                        var i = f(l);
                                                        return i.defaults = o.extend({}, l.defaults),
                                                            o.extend(i.defaults, e),
                                                            i.compatOptions = o.extend({}, l.compatOptions),
                                                            i.namespace = t,
                                                            i.data = l.data,
                                                            i.Item = f(n),
                                                            o.htmlInit(i, t),
                                                        r && r.bridget && r.bridget(t, i),
                                                            i
                                                    }
                                                ;
                                                var c = {
                                                    ms: 1,
                                                    s: 1e3
                                                };
                                                return l.Item = n,
                                                    l
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
                                                t.Isotope.Item = e(t.Outlayer))
                                        }(window, (function(t) {
                                                "use strict";
                                                function e() {
                                                    t.Item.apply(this, arguments)
                                                }
                                                var i = e.prototype = Object.create(t.Item.prototype)
                                                    , o = i._create;
                                                i._create = function() {
                                                    this.id = this.layout.itemGUID++,
                                                        o.call(this),
                                                        this.sortData = {}
                                                }
                                                    ,
                                                    i.updateSortData = function() {
                                                        if (!this.isIgnored) {
                                                            this.sortData.id = this.id,
                                                                this.sortData["original-order"] = this.id,
                                                                this.sortData.random = Math.random();
                                                            var t = this.layout.options.getSortData
                                                                , e = this.layout._sorters;
                                                            for (var i in t) {
                                                                var o = e[i];
                                                                this.sortData[i] = o(this.element, this)
                                                            }
                                                        }
                                                    }
                                                ;
                                                var n = i.destroy;
                                                return i.destroy = function() {
                                                    n.apply(this, arguments),
                                                        this.css({
                                                            display: ""
                                                        })
                                                }
                                                    ,
                                                    e
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
                                                t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
                                        }(window, (function(t, e) {
                                                "use strict";
                                                function i(t) {
                                                    this.isotope = t,
                                                    t && (this.options = t.options[this.namespace],
                                                        this.element = t.element,
                                                        this.items = t.filteredItems,
                                                        this.size = t.size)
                                                }
                                                var o = i.prototype;
                                                return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
                                                        o[t] = function() {
                                                            return e.prototype[t].apply(this.isotope, arguments)
                                                        }
                                                    }
                                                )),
                                                    o.needsVerticalResizeLayout = function() {
                                                        var e = t(this.isotope.element);
                                                        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
                                                    }
                                                    ,
                                                    o._getMeasurement = function() {
                                                        this.isotope._getMeasurement.apply(this, arguments)
                                                    }
                                                    ,
                                                    o.getColumnWidth = function() {
                                                        this.getSegmentSize("column", "Width")
                                                    }
                                                    ,
                                                    o.getRowHeight = function() {
                                                        this.getSegmentSize("row", "Height")
                                                    }
                                                    ,
                                                    o.getSegmentSize = function(t, e) {
                                                        var i = t + e
                                                            , o = "outer" + e;
                                                        if (this._getMeasurement(i, o),
                                                            !this[i]) {
                                                            var n = this.getFirstItemSize();
                                                            this[i] = n && n[o] || this.isotope.size["inner" + e]
                                                        }
                                                    }
                                                    ,
                                                    o.getFirstItemSize = function() {
                                                        var e = this.isotope.filteredItems[0];
                                                        return e && e.element && t(e.element)
                                                    }
                                                    ,
                                                    o.layout = function() {
                                                        this.isotope.layout.apply(this.isotope, arguments)
                                                    }
                                                    ,
                                                    o.getSize = function() {
                                                        this.isotope.getSize(),
                                                            this.size = this.isotope.size
                                                    }
                                                    ,
                                                    i.modes = {},
                                                    i.create = function(t, e) {
                                                        function n() {
                                                            i.apply(this, arguments)
                                                        }
                                                        return n.prototype = Object.create(o),
                                                            n.prototype.constructor = n,
                                                        e && (n.options = e),
                                                            n.prototype.namespace = t,
                                                            i.modes[t] = n,
                                                            n
                                                    }
                                                    ,
                                                    i
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
                                        }(window, (function(t, e) {
                                                var i = t.create("masonry");
                                                i.compatOptions.fitWidth = "isFitWidth";
                                                var o = i.prototype;
                                                return o._resetLayout = function() {
                                                    this.getSize(),
                                                        this._getMeasurement("columnWidth", "outerWidth"),
                                                        this._getMeasurement("gutter", "outerWidth"),
                                                        this.measureColumns(),
                                                        this.colYs = [];
                                                    for (var t = 0; t < this.cols; t++)
                                                        this.colYs.push(0);
                                                    this.maxY = 0,
                                                        this.horizontalColIndex = 0
                                                }
                                                    ,
                                                    o.measureColumns = function() {
                                                        if (this.getContainerWidth(),
                                                            !this.columnWidth) {
                                                            var t = this.items[0]
                                                                , i = t && t.element;
                                                            this.columnWidth = i && e(i).outerWidth || this.containerWidth
                                                        }
                                                        var o = this.columnWidth += this.gutter
                                                            , n = this.containerWidth + this.gutter
                                                            , s = n / o
                                                            , r = o - n % o;
                                                        s = Math[r && r < 1 ? "round" : "floor"](s),
                                                            this.cols = Math.max(s, 1)
                                                    }
                                                    ,
                                                    o.getContainerWidth = function() {
                                                        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element
                                                            , i = e(t);
                                                        this.containerWidth = i && i.innerWidth
                                                    }
                                                    ,
                                                    o._getItemLayoutPosition = function(t) {
                                                        t.getSize();
                                                        var e = t.size.outerWidth % this.columnWidth
                                                            , i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
                                                        i = Math.min(i, this.cols);
                                                        for (var o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                                                            x: this.columnWidth * o.col,
                                                            y: o.y
                                                        }, s = o.y + t.size.outerHeight, r = i + o.col, a = o.col; a < r; a++)
                                                            this.colYs[a] = s;
                                                        return n
                                                    }
                                                    ,
                                                    o._getTopColPosition = function(t) {
                                                        var e = this._getTopColGroup(t)
                                                            , i = Math.min.apply(Math, e);
                                                        return {
                                                            col: e.indexOf(i),
                                                            y: i
                                                        }
                                                    }
                                                    ,
                                                    o._getTopColGroup = function(t) {
                                                        if (t < 2)
                                                            return this.colYs;
                                                        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
                                                            e[o] = this._getColGroupY(o, t);
                                                        return e
                                                    }
                                                    ,
                                                    o._getColGroupY = function(t, e) {
                                                        if (e < 2)
                                                            return this.colYs[t];
                                                        var i = this.colYs.slice(t, t + e);
                                                        return Math.max.apply(Math, i)
                                                    }
                                                    ,
                                                    o._getHorizontalColPosition = function(t, e) {
                                                        var i = this.horizontalColIndex % this.cols;
                                                        i = t > 1 && i + t > this.cols ? 0 : i;
                                                        var o = e.size.outerWidth && e.size.outerHeight;
                                                        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex,
                                                            {
                                                                col: i,
                                                                y: this._getColGroupY(i, t)
                                                            }
                                                    }
                                                    ,
                                                    o._manageStamp = function(t) {
                                                        var i = e(t)
                                                            , o = this._getElementOffset(t)
                                                            , n = this._getOption("originLeft") ? o.left : o.right
                                                            , s = n + i.outerWidth
                                                            , r = Math.floor(n / this.columnWidth);
                                                        r = Math.max(0, r);
                                                        var a = Math.floor(s / this.columnWidth);
                                                        a -= s % this.columnWidth ? 0 : 1,
                                                            a = Math.min(this.cols - 1, a);
                                                        for (var u = (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight, h = r; h <= a; h++)
                                                            this.colYs[h] = Math.max(u, this.colYs[h])
                                                    }
                                                    ,
                                                    o._getContainerSize = function() {
                                                        this.maxY = Math.max.apply(Math, this.colYs);
                                                        var t = {
                                                            height: this.maxY
                                                        };
                                                        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
                                                            t
                                                    }
                                                    ,
                                                    o._getContainerFitWidth = function() {
                                                        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                                                            t++;
                                                        return (this.cols - t) * this.columnWidth - this.gutter
                                                    }
                                                    ,
                                                    o.needsResizeLayout = function() {
                                                        var t = this.containerWidth;
                                                        return this.getContainerWidth(),
                                                        t != this.containerWidth
                                                    }
                                                    ,
                                                    i
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
                                        }(window, (function(t, e) {
                                                "use strict";
                                                var i = t.create("masonry")
                                                    , o = i.prototype
                                                    , n = {
                                                    _getElementOffset: !0,
                                                    layout: !0,
                                                    _getMeasurement: !0
                                                };
                                                for (var s in e.prototype)
                                                    n[s] || (o[s] = e.prototype[s]);
                                                var r = o.measureColumns;
                                                o.measureColumns = function() {
                                                    this.items = this.isotope.filteredItems,
                                                        r.call(this)
                                                }
                                                ;
                                                var a = o._getOption;
                                                return o._getOption = function(t) {
                                                    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
                                                }
                                                    ,
                                                    i
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
                                        }(window, (function(t) {
                                                "use strict";
                                                var e = t.create("fitRows")
                                                    , i = e.prototype;
                                                return i._resetLayout = function() {
                                                    this.x = 0,
                                                        this.y = 0,
                                                        this.maxY = 0,
                                                        this._getMeasurement("gutter", "outerWidth")
                                                }
                                                    ,
                                                    i._getItemLayoutPosition = function(t) {
                                                        t.getSize();
                                                        var e = t.size.outerWidth + this.gutter
                                                            , i = this.isotope.size.innerWidth + this.gutter;
                                                        0 !== this.x && e + this.x > i && (this.x = 0,
                                                            this.y = this.maxY);
                                                        var o = {
                                                            x: this.x,
                                                            y: this.y
                                                        };
                                                        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
                                                            this.x += e,
                                                            o
                                                    }
                                                    ,
                                                    i._getContainerSize = function() {
                                                        return {
                                                            height: this.maxY
                                                        }
                                                    }
                                                    ,
                                                    e
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
                                        }(window, (function(t) {
                                                "use strict";
                                                var e = t.create("vertical", {
                                                    horizontalAlignment: 0
                                                })
                                                    , i = e.prototype;
                                                return i._resetLayout = function() {
                                                    this.y = 0
                                                }
                                                    ,
                                                    i._getItemLayoutPosition = function(t) {
                                                        t.getSize();
                                                        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
                                                            , i = this.y;
                                                        return this.y += t.size.outerHeight,
                                                            {
                                                                x: e,
                                                                y: i
                                                            }
                                                    }
                                                    ,
                                                    i._getContainerSize = function() {
                                                        return {
                                                            height: this.y
                                                        }
                                                    }
                                                    ,
                                                    e
                                            }
                                        )),
                                        function(t, e) {
                                            "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function(i, o, n, s, r, a) {
                                                    return e(t, i, o, n, s, r, a)
                                                }
                                            )) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
                                        }(window, (function(t, e, i, o, n, s, r) {
                                                var a = t.jQuery
                                                    , u = String.prototype.trim ? function(t) {
                                                        return t.trim()
                                                    }
                                                    : function(t) {
                                                        return t.replace(/^\s+|\s+$/g, "")
                                                    }
                                                    , h = e.create("isotope", {
                                                    layoutMode: "masonry",
                                                    isJQueryFiltering: !0,
                                                    sortAscending: !0
                                                });
                                                h.Item = s,
                                                    h.LayoutMode = r;
                                                var l = h.prototype;
                                                l._create = function() {
                                                    for (var t in this.itemGUID = 0,
                                                        this._sorters = {},
                                                        this._getSorters(),
                                                        e.prototype._create.call(this),
                                                        this.modes = {},
                                                        this.filteredItems = this.items,
                                                        this.sortHistory = ["original-order"],
                                                        r.modes)
                                                        this._initLayoutMode(t)
                                                }
                                                    ,
                                                    l.reloadItems = function() {
                                                        this.itemGUID = 0,
                                                            e.prototype.reloadItems.call(this)
                                                    }
                                                    ,
                                                    l._itemize = function() {
                                                        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++)
                                                            t[i].id = this.itemGUID++;
                                                        return this._updateItemsSortData(t),
                                                            t
                                                    }
                                                    ,
                                                    l._initLayoutMode = function(t) {
                                                        var e = r.modes[t]
                                                            , i = this.options[t] || {};
                                                        this.options[t] = e.options ? n.extend(e.options, i) : i,
                                                            this.modes[t] = new e(this)
                                                    }
                                                    ,
                                                    l.layout = function() {
                                                        this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
                                                    }
                                                    ,
                                                    l._layout = function() {
                                                        var t = this._getIsInstant();
                                                        this._resetLayout(),
                                                            this._manageStamps(),
                                                            this.layoutItems(this.filteredItems, t),
                                                            this._isLayoutInited = !0
                                                    }
                                                    ,
                                                    l.arrange = function(t) {
                                                        this.option(t),
                                                            this._getIsInstant();
                                                        var e = this._filter(this.items);
                                                        this.filteredItems = e.matches,
                                                            this._bindArrangeComplete(),
                                                            this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
                                                            this._sort(),
                                                            this._layout()
                                                    }
                                                    ,
                                                    l._init = l.arrange,
                                                    l._hideReveal = function(t) {
                                                        this.reveal(t.needReveal),
                                                            this.hide(t.needHide)
                                                    }
                                                    ,
                                                    l._getIsInstant = function() {
                                                        var t = this._getOption("layoutInstant")
                                                            , e = void 0 !== t ? t : !this._isLayoutInited;
                                                        return this._isInstant = e,
                                                            e
                                                    }
                                                    ,
                                                    l._bindArrangeComplete = function() {
                                                        var t, e, i, o = this;
                                                        function n() {
                                                            t && e && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
                                                        }
                                                        this.once("layoutComplete", (function() {
                                                                t = !0,
                                                                    n()
                                                            }
                                                        )),
                                                            this.once("hideComplete", (function() {
                                                                    e = !0,
                                                                        n()
                                                                }
                                                            )),
                                                            this.once("revealComplete", (function() {
                                                                    i = !0,
                                                                        n()
                                                                }
                                                            ))
                                                    }
                                                    ,
                                                    l._filter = function(t) {
                                                        var e = this.options.filter;
                                                        e = e || "*";
                                                        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                                                            var a = t[r];
                                                            if (!a.isIgnored) {
                                                                var u = s(a);
                                                                u && i.push(a),
                                                                    u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
                                                            }
                                                        }
                                                        return {
                                                            matches: i,
                                                            needReveal: o,
                                                            needHide: n
                                                        }
                                                    }
                                                    ,
                                                    l._getFilterTest = function(t) {
                                                        return a && this.options.isJQueryFiltering ? function(e) {
                                                                return a(e.element).is(t)
                                                            }
                                                            : "function" == typeof t ? function(e) {
                                                                    return t(e.element)
                                                                }
                                                                : function(e) {
                                                                    return o(e.element, t)
                                                                }
                                                    }
                                                    ,
                                                    l.updateSortData = function(t) {
                                                        var e;
                                                        t ? (t = n.makeArray(t),
                                                            e = this.getItems(t)) : e = this.items,
                                                            this._getSorters(),
                                                            this._updateItemsSortData(e)
                                                    }
                                                    ,
                                                    l._getSorters = function() {
                                                        var t = this.options.getSortData;
                                                        for (var e in t) {
                                                            var i = t[e];
                                                            this._sorters[e] = d(i)
                                                        }
                                                    }
                                                    ,
                                                    l._updateItemsSortData = function(t) {
                                                        for (var e = t && t.length, i = 0; e && i < e; i++)
                                                            t[i].updateSortData()
                                                    }
                                                ;
                                                var d = function(t) {
                                                    if ("string" != typeof t)
                                                        return t;
                                                    var e = u(t).split(" ")
                                                        , i = e[0]
                                                        , o = i.match(/^\[(.+)\]$/)
                                                        , n = function(t, e) {
                                                        return t ? function(e) {
                                                                return e.getAttribute(t)
                                                            }
                                                            : function(t) {
                                                                var i = t.querySelector(e);
                                                                return i && i.textContent
                                                            }
                                                    }(o && o[1], i)
                                                        , s = h.sortDataParsers[e[1]];
                                                    return s ? function(t) {
                                                            return t && s(n(t))
                                                        }
                                                        : function(t) {
                                                            return t && n(t)
                                                        }
                                                };
                                                h.sortDataParsers = {
                                                    parseInt: function(t) {
                                                        return parseInt(t, 10)
                                                    },
                                                    parseFloat: function(t) {
                                                        return parseFloat(t)
                                                    }
                                                },
                                                    l._sort = function() {
                                                        if (this.options.sortBy) {
                                                            var t = n.makeArray(this.options.sortBy);
                                                            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                                                            var e = function(t, e) {
                                                                return function(i, o) {
                                                                    for (var n = 0; n < t.length; n++) {
                                                                        var s = t[n]
                                                                            , r = i.sortData[s]
                                                                            , a = o.sortData[s];
                                                                        if (r > a || r < a)
                                                                            return (r > a ? 1 : -1) * ((void 0 !== e[s] ? e[s] : e) ? 1 : -1)
                                                                    }
                                                                    return 0
                                                                }
                                                            }(this.sortHistory, this.options.sortAscending);
                                                            this.filteredItems.sort(e)
                                                        }
                                                    }
                                                    ,
                                                    l._getIsSameSortBy = function(t) {
                                                        for (var e = 0; e < t.length; e++)
                                                            if (t[e] != this.sortHistory[e])
                                                                return !1;
                                                        return !0
                                                    }
                                                    ,
                                                    l._mode = function() {
                                                        var t = this.options.layoutMode
                                                            , e = this.modes[t];
                                                        if (!e)
                                                            throw new Error("No layout mode: " + t);
                                                        return e.options = this.options[t],
                                                            e
                                                    }
                                                    ,
                                                    l._resetLayout = function() {
                                                        e.prototype._resetLayout.call(this),
                                                            this._mode()._resetLayout()
                                                    }
                                                    ,
                                                    l._getItemLayoutPosition = function(t) {
                                                        return this._mode()._getItemLayoutPosition(t)
                                                    }
                                                    ,
                                                    l._manageStamp = function(t) {
                                                        this._mode()._manageStamp(t)
                                                    }
                                                    ,
                                                    l._getContainerSize = function() {
                                                        return this._mode()._getContainerSize()
                                                    }
                                                    ,
                                                    l.needsResizeLayout = function() {
                                                        return this._mode().needsResizeLayout()
                                                    }
                                                    ,
                                                    l.appended = function(t) {
                                                        var e = this.addItems(t);
                                                        if (e.length) {
                                                            var i = this._filterRevealAdded(e);
                                                            this.filteredItems = this.filteredItems.concat(i)
                                                        }
                                                    }
                                                    ,
                                                    l.prepended = function(t) {
                                                        var e = this._itemize(t);
                                                        if (e.length) {
                                                            this._resetLayout(),
                                                                this._manageStamps();
                                                            var i = this._filterRevealAdded(e);
                                                            this.layoutItems(this.filteredItems),
                                                                this.filteredItems = i.concat(this.filteredItems),
                                                                this.items = e.concat(this.items)
                                                        }
                                                    }
                                                    ,
                                                    l._filterRevealAdded = function(t) {
                                                        var e = this._filter(t);
                                                        return this.hide(e.needHide),
                                                            this.reveal(e.matches),
                                                            this.layoutItems(e.matches, !0),
                                                            e.matches
                                                    }
                                                    ,
                                                    l.insert = function(t) {
                                                        var e = this.addItems(t);
                                                        if (e.length) {
                                                            var i, o, n = e.length;
                                                            for (i = 0; i < n; i++)
                                                                o = e[i],
                                                                    this.element.appendChild(o.element);
                                                            var s = this._filter(e).matches;
                                                            for (i = 0; i < n; i++)
                                                                e[i].isLayoutInstant = !0;
                                                            for (this.arrange(),
                                                                     i = 0; i < n; i++)
                                                                delete e[i].isLayoutInstant;
                                                            this.reveal(s)
                                                        }
                                                    }
                                                ;
                                                var f = l.remove;
                                                return l.remove = function(t) {
                                                    t = n.makeArray(t);
                                                    var e = this.getItems(t);
                                                    f.call(this, t);
                                                    for (var i = e && e.length, o = 0; i && o < i; o++) {
                                                        var s = e[o];
                                                        n.removeFrom(this.filteredItems, s)
                                                    }
                                                }
                                                    ,
                                                    l.shuffle = function() {
                                                        for (var t = 0; t < this.items.length; t++)
                                                            this.items[t].sortData.random = Math.random();
                                                        this.options.sortBy = "random",
                                                            this._sort(),
                                                            this._layout()
                                                    }
                                                    ,
                                                    l._noTransition = function(t, e) {
                                                        var i = this.options.transitionDuration;
                                                        this.options.transitionDuration = 0;
                                                        var o = t.apply(this, e);
                                                        return this.options.transitionDuration = i,
                                                            o
                                                    }
                                                    ,
                                                    l.getFilteredItemElements = function() {
                                                        return this.filteredItems.map((function(t) {
                                                                return t.element
                                                            }
                                                        ))
                                                    }
                                                    ,
                                                    h
                                            }
                                        ));
                                    var $grid = $(".grid").isotope({
                                        itemSelector: ".element-item",
                                        layoutMode: "fitRows",
                                        filter: function() {
                                            var $this = $(this);
                                            return (!qsRegex || $this.text().match(qsRegex)) && true
                                        }
                                    })
                                        , responsiveIsotope = [[480, 4], [720, 6]]
                                        , itemsPerPage = defineItemsPerPage()
                                        , currentNumberPages = 1
                                        , currentPage = 1
                                        , currentFilter = "*";
                                    function goToPage(n) {
                                        currentPage = n,
                                            $(".pager").each((function() {
                                                    $(this).attr("data-page") == currentPage && ($(".pager").removeClass("active"),
                                                        $(this).addClass("active"))
                                                }
                                            ));
                                        var selector = ".element-item";
                                        selector += "*" != currentFilter ? "." + currentFilter : "";
                                        $(selector).text();
                                        "" != qsRegex && null != qsRegex ? ($(".element-item").each((function() {
                                                $(this).hasClass("ok") && $(this).removeClass("ok")
                                            }
                                        )),
                                            $(selector + ":contains(" + qsRegex + ")").each((function() {
                                                    $(this).addClass("ok")
                                                }
                                            )),
                                            selector += ".ok") : (selector = ".element-item",
                                            selector += "*" != currentFilter ? "." + currentFilter : ""),
                                            function(selector, aaa) {
                                                $grid.isotope({
                                                    filter: selector
                                                })
                                            }(selector += '[data-page="' + currentPage + '"]')
                                    }
                                    function defineItemsPerPage() {
                                        for (var pages = 9, i = 0; i < responsiveIsotope.length; i++)
                                            if ($(window).width() <= responsiveIsotope[i][0]) {
                                                pages = responsiveIsotope[i][1];
                                                break
                                            }
                                        return pages
                                    }
                                    function setPagination() {
                                        var itemsLength, item, page, selector;
                                        itemsLength = $grid.children(".element-item").length,
                                            Math.ceil(itemsLength / itemsPerPage),
                                            item = 1,
                                            page = 1,
                                            selector = ".element-item",
                                            selector += "*" != currentFilter ? "." + currentFilter : "",
                                            "" != qsRegex && null != qsRegex ? ($(".element-item").each((function() {
                                                    $(this).hasClass("ok") && $(this).removeClass("ok")
                                                }
                                            )),
                                                $(selector + ":contains(" + qsRegex + ")").each((function() {
                                                        $(this).addClass("ok")
                                                    }
                                                )),
                                                selector += ".ok") : (selector = ".element-item",
                                                selector += "*" != currentFilter ? "." + currentFilter : ""),
                                            $grid.children(selector).each((function() {
                                                    item > itemsPerPage && (page++,
                                                        item = 1),
                                                        $(".pager").each((function() {}
                                                        )),
                                                        $(this).attr("data-page", page),
                                                        item++
                                                }
                                            )),
                                            currentNumberPages = page,
                                            function() {
                                                var $isotopePager = 0 == $(".isotope-pager").length ? $('<div class="isotope-pager"></div>') : $(".isotope-pager");
                                                $isotopePager.html("");
                                                for (var i = 0; i < currentNumberPages; i++) {
                                                    var $pager = $('<a href="javascript:void(0);" class="pager normal-pages pager' + (i + 1) + '" data-page="' + (i + 1) + '"></a>');
                                                    $pager.html(i + 1),
                                                        $pager.click((function() {
                                                                goToPage($(this).eq(0).attr("data-page"))
                                                            }
                                                        )),
                                                        $pager.appendTo($isotopePager)
                                                }
                                                $grid.after($isotopePager)
                                            }()
                                    }
                                    setPagination(),
                                        goToPage(1),
                                        setTimeout((function() {
                                                var paggee = $(".isotope-pager .active").text()
                                                    , nextpage = parseInt(paggee) + 1
                                                    , prepage = parseInt(paggee) - 1;
                                                $('<div class="extra-page prev"  style="display:none;" data-page="' + prepage + '">« Prev</div>').insertBefore(".pager1"),
                                                1 == currentNumberPages || $('<div class="extra-page next" data-page="' + nextpage + '">Next »</div>').insertAfter(".pager" + currentNumberPages),
                                                    $(".isotope-pager .next").click((function() {
                                                            $(".prev").attr("data-page");
                                                            var next = $(this).attr("data-page");
                                                            $(".pager" + next).click(),
                                                                $(this).removeClass("active"),
                                                                $(".pager" + next).addClass("active");
                                                            var paggee = $(".isotope-pager .active").text()
                                                                , nextpage = parseInt(paggee) + 1
                                                                , prepage = parseInt(paggee) - 1;
                                                            $(this).attr("data-page", nextpage),
                                                                $(".prev").attr("data-page", prepage),
                                                                next >= currentNumberPages ? $(this).css("display", "none") : $(".next").css("display", "block"),
                                                                $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block")
                                                        }
                                                    )),
                                                    $(".isotope-pager .prev").click((function() {
                                                            var prev = $(this).attr("data-page");
                                                            $(".pager" + prev).click(),
                                                                $(this).removeClass("active"),
                                                                $(".pager" + prev).addClass("active");
                                                            var paggeee = $(".isotope-pager .active").text()
                                                                , nextpage = parseInt(paggeee) + 1
                                                                , prepage = parseInt(paggeee) - 1;
                                                            $(".next").attr("data-page", nextpage),
                                                                $(this).attr("data-page", prepage),
                                                                $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block"),
                                                                $(".next").attr("data-page") > currentNumberPages ? $(".next").css("display", "none") : $(".next").css("display", "block")
                                                        }
                                                    )),
                                                    $(".isotope-pager a").each((function() {
                                                            $(this).click((function() {
                                                                    var current = $(this).attr("data-page")
                                                                        , nextpage = parseInt(current) + 1
                                                                        , prepage = parseInt(current) - 1;
                                                                    $(".next").attr("data-page", nextpage),
                                                                        $(".prev").attr("data-page", prepage);
                                                                    var next = $(".next").attr("data-page");
                                                                    $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block"),
                                                                        next > currentNumberPages ? $(".next").css("display", "none") : $(".next").css("display", "block")
                                                                }
                                                            ))
                                                        }
                                                    ))
                                            }
                                        ), 200),
                                        $("#filters .button").each((function() {
                                                var data_filter = $(this).attr("data-filter")
                                                    , count = 0;
                                                $(".all-blog-listing article").each((function() {
                                                        $(this).hasClass(data_filter) && (count += 1)
                                                    }
                                                )),
                                                    $(this).find(".post-number").text("(" + count + ")")
                                            }
                                        )),
                                        $("#filters .button").click((function() {
                                                if ($(this).hasClass("checked")) {
                                                    $(this).removeClass("checked"),
                                                        $(".button").fadeIn(),
                                                        $(this).find(".check").prop("checked", !1),
                                                        currentFilter = filter = "*",
                                                        setPagination(),
                                                        goToPage(1)
                                                } else {
                                                    $(".button").not(this).removeClass("checked"),
                                                        $(this).addClass("checked"),
                                                        $(".button").not(this).fadeOut(),
                                                        $(this).find(".check").prop("checked", !0);
                                                    var filter = $(this).attr("data-filter");
                                                    currentFilter = filter,
                                                        setPagination(),
                                                        goToPage(1)
                                                }
                                                setTimeout((function() {
                                                        var paggee = $(".isotope-pager .active").text()
                                                            , nextpage = parseInt(paggee) + 1
                                                            , prepage = parseInt(paggee) - 1;
                                                        $('<div class="extra-page prev"  style="display:none;" data-page="' + prepage + '">« Prev</div>').insertBefore(".pager1"),
                                                        1 == currentNumberPages || $('<div class="extra-page next" data-page="' + nextpage + '">Next »</div>').insertAfter(".pager" + currentNumberPages),
                                                            $(".isotope-pager .next").click((function() {
                                                                    $(".prev").attr("data-page");
                                                                    var next = $(this).attr("data-page");
                                                                    $(".pager" + next).click(),
                                                                        $(this).removeClass("active"),
                                                                        $(".pager" + next).addClass("active");
                                                                    var paggee = $(".isotope-pager .active").text()
                                                                        , nextpage = parseInt(paggee) + 1
                                                                        , prepage = parseInt(paggee) - 1;
                                                                    $(this).attr("data-page", nextpage),
                                                                        $(".prev").attr("data-page", prepage),
                                                                        next >= currentNumberPages ? $(this).css("display", "none") : $(".next").css("display", "block"),
                                                                        $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block")
                                                                }
                                                            )),
                                                            $(".isotope-pager .prev").click((function() {
                                                                    var prev = $(this).attr("data-page");
                                                                    $(".pager" + prev).click(),
                                                                        $(this).removeClass("active"),
                                                                        $(".pager" + prev).addClass("active");
                                                                    var paggeee = $(".isotope-pager .active").text()
                                                                        , nextpage = parseInt(paggeee) + 1
                                                                        , prepage = parseInt(paggeee) - 1;
                                                                    $(".next").attr("data-page", nextpage),
                                                                        $(this).attr("data-page", prepage),
                                                                        $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block"),
                                                                        $(".next").attr("data-page") > currentNumberPages ? $(".next").css("display", "none") : $(".next").css("display", "block")
                                                                }
                                                            )),
                                                            $(".isotope-pager a").each((function() {
                                                                    $(this).click((function() {
                                                                            var current = $(this).attr("data-page")
                                                                                , nextpage = parseInt(current) + 1
                                                                                , prepage = parseInt(current) - 1;
                                                                            $(".next").attr("data-page", nextpage),
                                                                                $(".prev").attr("data-page", prepage);
                                                                            var next = $(".next").attr("data-page");
                                                                            $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block"),
                                                                                next > currentNumberPages ? $(".next").css("display", "none") : $(".next").css("display", "block")
                                                                        }
                                                                    ))
                                                                }
                                                            ))
                                                    }
                                                ), 200)
                                            }
                                        )),
                                        $(".blog-srch-btn").click((fn = function() {
                                                var filter = $("#filters .checked").attr("data-filter");
                                                null == filter && (filter = "*"),
                                                    currentFilter = filter,
                                                    qsRegex = $("#quicksearch").val(),
                                                    $grid.isotope(),
                                                    setPagination(),
                                                    goToPage(1),
                                                    setTimeout((function() {
                                                            var paggee = $(".isotope-pager .active").text()
                                                                , nextpage = parseInt(paggee) + 1
                                                                , prepage = parseInt(paggee) - 1;
                                                            $('<div class="extra-page prev"  style="display:none;" data-page="' + prepage + '">« Prev</div>').insertBefore(".pager1"),
                                                            1 == currentNumberPages || $('<div class="extra-page next" data-page="' + nextpage + '">Next »</div>').insertAfter(".pager" + currentNumberPages),
                                                                $(".isotope-pager .next").click((function() {
                                                                        $(".prev").attr("data-page");
                                                                        var next = $(this).attr("data-page");
                                                                        $(".pager" + next).click(),
                                                                            $(this).removeClass("active"),
                                                                            $(".pager" + next).addClass("active");
                                                                        var paggee = $(".isotope-pager .active").text()
                                                                            , nextpage = parseInt(paggee) + 1
                                                                            , prepage = parseInt(paggee) - 1;
                                                                        $(this).attr("data-page", nextpage),
                                                                            $(".prev").attr("data-page", prepage),
                                                                            next >= currentNumberPages ? $(this).css("display", "none") : $(".next").css("display", "block"),
                                                                            $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block")
                                                                    }
                                                                )),
                                                                $(".isotope-pager .prev").click((function() {
                                                                        var prev = $(this).attr("data-page");
                                                                        $(".pager" + prev).click(),
                                                                            $(this).removeClass("active"),
                                                                            $(".pager" + prev).addClass("active");
                                                                        var paggeee = $(".isotope-pager .active").text()
                                                                            , nextpage = parseInt(paggeee) + 1
                                                                            , prepage = parseInt(paggeee) - 1;
                                                                        $(".next").attr("data-page", nextpage),
                                                                            $(this).attr("data-page", prepage),
                                                                            $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block"),
                                                                            $(".next").attr("data-page") > currentNumberPages ? (alert("ok"),
                                                                                $(".next").css("display", "none")) : $(".next").css("display", "block")
                                                                    }
                                                                )),
                                                                $(".isotope-pager a").each((function() {
                                                                        $(this).click((function() {
                                                                                var current = $(this).attr("data-page")
                                                                                    , nextpage = parseInt(current) + 1
                                                                                    , prepage = parseInt(current) - 1;
                                                                                $(".next").attr("data-page", nextpage),
                                                                                    $(".prev").attr("data-page", prepage);
                                                                                var next = $(".next").attr("data-page");
                                                                                $(".pager1").hasClass("active") ? $(".prev").css("display", "none") : $(".prev").css("display", "block"),
                                                                                    next > currentNumberPages ? $(".next").css("display", "none") : $(".next").css("display", "block")
                                                                            }
                                                                        ))
                                                                    }
                                                                ))
                                                        }
                                                    ), 200)
                                            }
                                                ,
                                                threshold = threshold || 100,
                                                function() {
                                                    clearTimeout(timeout);
                                                    var args = arguments
                                                        , _this = this;
                                                    function delayed() {
                                                        fn.apply(_this, args)
                                                    }
                                                    timeout = setTimeout(delayed, threshold)
                                                }
                                        )),
                                        $(window).resize((function() {
                                                itemsPerPage = defineItemsPerPage(),
                                                    setPagination(),
                                                    goToPage(1)
                                            }
                                        ))
                                }
                                var fn, threshold, timeout, t, e
                            }
                        ), 2e3),
                    $(window).width() > 1151 && ($(".submenu-item-3").css("display", "block"),
                        $(".has-submenu").click((function() {
                                var $this = $(this).find("ul.level-2")
                                    , $li = $(this);
                                $("li.has-submenu").not($li).removeClass("open-menu"),
                                    $li.toggleClass("open-menu"),
                                    $("ul.level-2").not($this).fadeOut(),
                                    $(this).find("ul.level-2").fadeToggle()
                            }
                        )),
                        $(".header-custom-menu").mouseleave((function() {
                                $("li.has-submenu").removeClass("open-menu"),
                                    $("ul.level-2").fadeOut()
                            }
                        )))
                }
            ))
    }(),
$(".tabbin-outer-sec")[0] && ($(document).ready((function() {
        $(".resp-tab-content:first-child").addClass("resp-tab-content-active")
    }
)),
    $(window).width <= 991 ? function(t) {
        t.fn.extend({
            easyResponsiveTabs: function(a) {
                var e = a = t.extend({
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    activate: function() {}
                }, a)
                    , s = e.type
                    , i = e.fit
                    , r = e.width;
                t(this).bind("tabactivate", (function(t, e) {
                        "function" == typeof a.activate && a.activate.call(e, t)
                    }
                )),
                    this.each((function() {
                            var e, o = t(this), d = o.find("ul.resp-tabs-list");
                            o.find("ul.resp-tabs-list li").addClass("resp-tab-item"),
                                o.css({
                                    display: "block",
                                    width: r
                                }),
                                o.find(".resp-tabs-container > div").addClass("resp-tab-content"),
                            "vertical" == s && o.addClass("resp-vtabs"),
                            1 == i && o.css({
                                width: "100%",
                                margin: "0px"
                            }),
                            "accordion" == s && (o.addClass("resp-easy-accordion"),
                                o.find(".resp-tabs-list").css("display", "none")),
                                o.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
                            var l = 0;
                            o.find(".resp-accordion").each((function() {
                                    e = t(this);
                                    var a = o.find(".resp-tab-item:eq(" + l + ")").html();
                                    o.find(".resp-accordion:eq(" + l + ")").append(a),
                                        e.attr("aria-controls", "tab_item-" + l),
                                        l++
                                }
                            ));
                            var p = 0;
                            o.find(".resp-tab-item").each((function() {
                                    $tabItem = t(this),
                                        $tabItem.attr("aria-controls", "tab_item-" + p),
                                        $tabItem.attr("role", "tab"),
                                    !0 === a.closed || "accordion" === a.closed && !d.is(":visible") || "tabs" === a.closed && d.is(":visible") || (o.find(".resp-tab-item").first().addClass("resp-tab-active"),
                                        o.find(".resp-accordion").first().addClass("resp-tab-active"),
                                        o.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style", "display:block"));
                                    var e = 0;
                                    o.find(".resp-tab-content").each((function() {
                                            t(this).attr("aria-labelledby", "tab_item-" + e),
                                                e++
                                        }
                                    )),
                                        p++
                                }
                            )),
                                o.find("[role=tab]").each((function() {
                                        var a = t(this);
                                        a.click((function() {
                                                var e = a.attr("aria-controls");
                                                if (a.hasClass("resp-accordion") && a.hasClass("resp-tab-active"))
                                                    return o.find(".resp-tab-content-active").slideUp("", (function() {
                                                            t(this).addClass("resp-accordion-closed")
                                                        }
                                                    )),
                                                        a.removeClass("resp-tab-active"),
                                                        !1;
                                                !a.hasClass("resp-tab-active") && a.hasClass("resp-accordion") ? (o.find(".resp-tab-active").removeClass("resp-tab-active"),
                                                    o.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),
                                                    o.find("[aria-controls=" + e + "]").addClass("resp-tab-active"),
                                                    o.find(".resp-tab-content[aria-labelledby = " + e + "]").slideDown().addClass("resp-tab-content-active")) : (o.find(".resp-tab-active").removeClass("resp-tab-active"),
                                                    o.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),
                                                    o.find("[aria-controls=" + e + "]").addClass("resp-tab-active"),
                                                    o.find(".resp-tab-content[aria-labelledby = " + e + "]").addClass("resp-tab-content-active").attr("style", "display:block")),
                                                    a.trigger("tabactivate", a)
                                            }
                                        )),
                                            t(window).resize((function() {
                                                    o.find(".resp-accordion-closed").removeAttr("style")
                                                }
                                            ))
                                    }
                                ))
                        }
                    ))
            }
        })
    }(jQuery) : function(t) {
        t.fn.extend({
            easyResponsiveTabs: function(a) {
                var e = a = t.extend({
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    activate: function() {}
                }, a)
                    , s = e.type
                    , i = e.fit
                    , n = e.width;
                t(this).bind("tabactivate", (function(t, e) {
                        "function" == typeof a.activate && a.activate.call(e, t)
                    }
                )),
                    this.each((function() {
                            var e, o = t(this), d = o.find("ul.resp-tabs-list");
                            o.find("ul.resp-tabs-list li").addClass("resp-tab-item"),
                                o.css({
                                    display: "block",
                                    width: n
                                }),
                                o.find(".resp-tabs-container > div").addClass("resp-tab-content"),
                            "vertical" == s && o.addClass("resp-vtabs"),
                            1 == i && o.css({
                                width: "100%",
                                margin: "0px"
                            }),
                            "accordion" == s && (o.addClass("resp-easy-accordion"),
                                o.find(".resp-tabs-list").css("display", "none")),
                                o.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
                            var l = 0;
                            o.find(".resp-accordion").each((function() {
                                    e = t(this);
                                    var a = o.find(".resp-tab-item:eq(" + l + ")").html();
                                    o.find(".resp-accordion:eq(" + l + ")").append(a),
                                        e.attr("aria-controls", "tab_item-" + l),
                                        l++
                                }
                            ));
                            var p = 0;
                            o.find(".resp-tab-item").each((function() {
                                    $tabItem = t(this),
                                        $tabItem.attr("aria-controls", "tab_item-" + p),
                                        $tabItem.attr("role", "tab"),
                                    !0 === a.closed || "accordion" === a.closed && !d.is(":visible") || "tabs" === a.closed && d.is(":visible") || (o.find(".resp-tab-item").first().addClass("resp-tab-active"),
                                        o.find(".resp-accordion").first().addClass("resp-tab-active"),
                                        setTimeout((function() {
                                                o.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style", "display:block")
                                            }
                                        ), 4e3));
                                    var e = 0;
                                    o.find(".resp-tab-content").each((function() {
                                            t(this).attr("aria-labelledby", "tab_item-" + e),
                                                e++
                                        }
                                    )),
                                        p++
                                }
                            )),
                                o.find("[role=tab]").each((function() {
                                        var a = t(this);
                                        a.click((function() {
                                                var e = a.attr("aria-controls");
                                                if (a.hasClass("resp-accordion") && a.hasClass("resp-tab-active"))
                                                    return o.find(".resp-tab-content-active").slideUp("", (function() {
                                                            t(this).addClass("resp-accordion-closed")
                                                        }
                                                    )),
                                                        o.find(".resp-tab-content-active").css("transform", "translateX(250px)"),
                                                        a.removeClass("resp-tab-active"),
                                                        !1;
                                                !a.hasClass("resp-tab-active") && a.hasClass("resp-accordion") ? (o.find(".resp-tab-active").removeClass("resp-tab-active"),
                                                    o.find(".resp-tab-content-active").css("transform", "translateX(250px)"),
                                                    o.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),
                                                    o.find("[aria-controls=" + e + "]").addClass("resp-tab-active"),
                                                    o.find(".resp-tab-content[aria-labelledby = " + e + "]").slideDown().addClass("resp-tab-content-active")) : (o.find(".resp-tab-content-active").css("transform", "translateX(250px)"),
                                                    setTimeout((function() {
                                                            o.find(".resp-tab-active").removeClass("resp-tab-active"),
                                                                o.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),
                                                                o.find("[aria-controls=" + e + "]").addClass("resp-tab-active"),
                                                                o.find(".resp-tab-content[aria-labelledby = " + e + "]").addClass("resp-tab-content-active").attr("style", "display:block")
                                                        }
                                                    ), 100)),
                                                    a.trigger("tabactivate", a)
                                            }
                                        )),
                                            t(window).resize((function() {
                                                    o.find(".resp-accordion-closed").removeAttr("style")
                                                }
                                            ))
                                    }
                                ))
                        }
                    ))
            }
        })
    }(jQuery),
    $(".tabbin-outer-sec #horizontalTab").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: !0,
        closed: "accordion",
        activate: function(event) {
            var $tab = $(this)
                , $info = $("#tabInfo");
            $("span", $info).text($tab.text()),
                $info.show()
        }
    })),
    jQuery(window).scroll((function(event) {
            if ($(".how-it-works-module")[0])
                if ($(window).width() <= 375) {
                    var scroll = jQuery(window).scrollTop()
                        , start_point = (jQuery(window).width(),
                        $(".how-it-works-module").offset().top);
                    console.log($(".how-it-works-module").position().top),
                        console.log(start_point),
                    scroll >= start_point && (console.log("first"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .2
                        })),
                    scroll < start_point && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    }),
                    scroll > start_point + 600 && (console.log("second"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .6
                        })),
                    scroll > start_point + (coefficient = 300) && jQuery(".hiw-box-1").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + coefficient && jQuery(".hiw-box-1").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2.7 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2.7 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3.7 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3.7 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4.7 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4.7 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 5.3 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 5.3 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 900 && (console.log("third"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .9
                        })),
                    scroll > start_point + 1200 && (console.log("fourth"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "transparent"
                        }))
                } else if ($(window).width() > 375 && $(window).width() <= 444) {
                    scroll = jQuery(window).scrollTop(),
                        jQuery(window).width(),
                        start_point = $(".how-it-works-module").offset().top;
                    console.log($(".how-it-works-module").position().top),
                        console.log(start_point),
                    scroll >= start_point && (console.log("first"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .2
                        })),
                    scroll < start_point && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    }),
                    scroll > start_point + 600 && (console.log("second"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .6
                        })),
                    scroll > start_point + (coefficient = 300) && jQuery(".hiw-box-1").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + coefficient && jQuery(".hiw-box-1").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2.5 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2.5 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3.5 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3.5 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4.2 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4.2 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 5 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 5 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 900 && (console.log("third"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .9
                        })),
                    scroll > start_point + 1200 && (console.log("fourth"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "transparent"
                        }))
                } else if ($(window).width() > 444 && $(window).width() <= 496) {
                    scroll = jQuery(window).scrollTop(),
                        jQuery(window).width(),
                        start_point = $(".how-it-works-module").offset().top;
                    console.log($(".how-it-works-module").position().top),
                        console.log(start_point),
                    scroll >= start_point && (console.log("first"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .2
                        })),
                    scroll < start_point && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    }),
                    scroll > start_point + 600 && (console.log("second"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .6
                        })),
                    scroll > start_point + (coefficient = 300) && jQuery(".hiw-box-1").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + coefficient && jQuery(".hiw-box-1").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2.5 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2.5 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3.2 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3.2 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4.7 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4.7 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 900 && (console.log("third"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .9
                        })),
                    scroll > start_point + 1200 && (console.log("fourth"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "transparent"
                        }))
                } else if ($(window).width() > 496 && $(window).width() <= 650) {
                    scroll = jQuery(window).scrollTop(),
                        jQuery(window).width(),
                        start_point = $(".how-it-works-module").offset().top;
                    console.log($(".how-it-works-module").position().top),
                        console.log(start_point),
                    scroll >= start_point && (console.log("first"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .2
                        })),
                    scroll < start_point && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    }),
                    scroll > start_point + 600 && (console.log("second"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .6
                        })),
                    scroll > start_point + (coefficient = 300) && jQuery(".hiw-box-1").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + coefficient && jQuery(".hiw-box-1").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2.4 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2.4 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3.7 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3.7 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4.3 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4.3 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 900 && (console.log("third"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .9
                        })),
                    scroll > start_point + 1200 && (console.log("fourth"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "transparent"
                        }))
                } else if ($(window).width() > 650 && $(window).width() <= 991) {
                    scroll = jQuery(window).scrollTop(),
                        jQuery(window).width(),
                        start_point = $(".how-it-works-module").offset().top;
                    console.log($(".how-it-works-module").position().top),
                        console.log(start_point),
                    scroll >= start_point && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "#47C2B4",
                        opacity: .2
                    }),
                    scroll < start_point && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    }),
                    scroll > start_point + 600 && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "#47C2B4",
                        opacity: .6
                    }),
                    scroll > start_point + (coefficient = 300) && jQuery(".hiw-box-1").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + coefficient && jQuery(".hiw-box-1").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2.5 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2.5 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3.3 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3.3 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 4.7 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 4.7 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1e3 && (console.log("third"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "#47C2B4",
                            opacity: .9
                        })),
                    scroll > start_point + 1300 && (console.log("fourth"),
                        jQuery(".hiw-repeater .animated_figure").css({
                            backgroundColor: "transparent"
                        }))
                } else if ($(window).width() > 991) {
                    console.log("above 991");
                    var coefficient;
                    scroll = jQuery(window).scrollTop(),
                        jQuery(window).width();
                    scroll >= (start_point = $(".how-it-works-module").offset().top - 240) + 60 && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "#47C2B4",
                        opacity: .2
                    }),
                    scroll < start_point + 60 && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    }),
                    scroll > start_point + 400 && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "#47C2B4",
                        opacity: .6
                    }),
                    scroll > start_point + (coefficient = 300) && jQuery(".hiw-box-1").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + coefficient && jQuery(".hiw-box-1").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 1.5 * coefficient && jQuery(".hiw-box-2").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2 * coefficient && jQuery(".hiw-box-3").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 2.5 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 2.5 * coefficient && jQuery(".hiw-box-4").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3 * coefficient && jQuery(".hiw-box-5").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 3.5 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(-40px)",
                        opacity: 0
                    }),
                    scroll < start_point + 3.5 * coefficient && jQuery(".hiw-box-6").css({
                        transform: "translateY(0px)",
                        opacity: 1
                    }),
                    scroll > start_point + 700 && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "#47C2B4",
                        opacity: .9
                    }),
                    scroll > start_point + 900 && jQuery(".hiw-repeater .animated_figure").css({
                        backgroundColor: "transparent"
                    })
                }
        }
    )),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
    }(this, (function() {
            return function(e) {
                function t(n) {
                    if (o[n])
                        return o[n].exports;
                    var i = o[n] = {
                        exports: {},
                        id: n,
                        loaded: !1
                    };
                    return e[n].call(i.exports, i, i.exports, t),
                        i.loaded = !0,
                        i.exports
                }
                var o = {};
                return t.m = e,
                    t.c = o,
                    t.p = "dist/",
                    t(0)
            }([function(e, t, o) {
                "use strict";
                function n(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o)
                            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                }
                    , r = (n(o(1)),
                    o(6))
                    , a = n(r)
                    , c = n(o(7))
                    , u = n(o(8))
                    , s = n(o(9))
                    , f = n(o(10))
                    , d = n(o(11))
                    , l = n(o(14))
                    , m = []
                    , p = !1
                    , b = document.all && !window.atob
                    , v = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                }
                    , y = function() {
                    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (p = !0),
                        p)
                        return m = (0,
                            d.default)(m, v),
                            (0,
                                f.default)(m, v.once),
                            m
                }
                    , g = function() {
                    m = (0,
                        l.default)(),
                        y()
                };
                e.exports = {
                    init: function(e) {
                        return v = i(v, e),
                            m = (0,
                                l.default)(),
                            function(e) {
                                return !0 === e || "mobile" === e && s.default.mobile() || "phone" === e && s.default.phone() || "tablet" === e && s.default.tablet() || "function" == typeof e && !0 === e()
                            }(v.disable) || b ? void m.forEach((function(e, t) {
                                    e.node.removeAttribute("data-aos"),
                                        e.node.removeAttribute("data-aos-easing"),
                                        e.node.removeAttribute("data-aos-duration"),
                                        e.node.removeAttribute("data-aos-delay")
                                }
                            )) : (document.querySelector("body").setAttribute("data-aos-easing", v.easing),
                                document.querySelector("body").setAttribute("data-aos-duration", v.duration),
                                document.querySelector("body").setAttribute("data-aos-delay", v.delay),
                                "DOMContentLoaded" === v.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? y(!0) : "load" === v.startEvent ? window.addEventListener(v.startEvent, (function() {
                                        y(!0)
                                    }
                                )) : document.addEventListener(v.startEvent, (function() {
                                        y(!0)
                                    }
                                )),
                                window.addEventListener("resize", (0,
                                    c.default)(y, v.debounceDelay, !0)),
                                window.addEventListener("orientationchange", (0,
                                    c.default)(y, v.debounceDelay, !0)),
                                window.addEventListener("scroll", (0,
                                    a.default)((function() {
                                        (0,
                                            f.default)(m, v.once)
                                    }
                                ), v.throttleDelay)),
                            v.disableMutationObserver || (0,
                                u.default)("[data-aos]", g),
                                m)
                    },
                    refresh: y,
                    refreshHard: g
                }
            }
                , function(e, t) {}
                , , , , , function(e, t) {
                    (function(t) {
                            "use strict";
                            function o(e, t, o) {
                                function i(t) {
                                    var o = d
                                        , n = l;
                                    return d = l = void 0,
                                        y = t,
                                        p = e.apply(n, o)
                                }
                                function a(e) {
                                    var o = e - v;
                                    return void 0 === v || o >= t || o < 0 || x && e - y >= m
                                }
                                function u() {
                                    var e = k();
                                    return a(e) ? s(e) : void (b = setTimeout(u, function(e) {
                                        var o = t - (e - v);
                                        return x ? w(o, m - (e - y)) : o
                                    }(e)))
                                }
                                function s(e) {
                                    return b = void 0,
                                        j && d ? i(e) : (d = l = void 0,
                                            p)
                                }
                                function f() {
                                    var e = k()
                                        , o = a(e);
                                    if (d = arguments,
                                        l = this,
                                        v = e,
                                        o) {
                                        if (void 0 === b)
                                            return function(e) {
                                                return y = e,
                                                    b = setTimeout(u, t),
                                                    g ? i(e) : p
                                            }(v);
                                        if (x)
                                            return b = setTimeout(u, t),
                                                i(v)
                                    }
                                    return void 0 === b && (b = setTimeout(u, t)),
                                        p
                                }
                                var d, l, m, p, b, v, y = 0, g = !1, x = !1, j = !0;
                                if ("function" != typeof e)
                                    throw new TypeError(c);
                                return t = r(t) || 0,
                                n(o) && (g = !!o.leading,
                                    m = (x = "maxWait"in o) ? h(r(o.maxWait) || 0, t) : m,
                                    j = "trailing"in o ? !!o.trailing : j),
                                    f.cancel = function() {
                                        void 0 !== b && clearTimeout(b),
                                            y = 0,
                                            d = v = l = b = void 0
                                    }
                                    ,
                                    f.flush = function() {
                                        return void 0 === b ? p : s(k())
                                    }
                                    ,
                                    f
                            }
                            function n(e) {
                                var t = void 0 === e ? "undefined" : a(e);
                                return !!e && ("object" == t || "function" == t)
                            }
                            function r(e) {
                                if ("number" == typeof e)
                                    return e;
                                if (function(e) {
                                    return "symbol" == (void 0 === e ? "undefined" : a(e)) || function(e) {
                                        return !!e && "object" == (void 0 === e ? "undefined" : a(e))
                                    }(e) && g.call(e) == s
                                }(e))
                                    return u;
                                if (n(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = n(t) ? t + "" : t
                                }
                                if ("string" != typeof e)
                                    return 0 === e ? e : +e;
                                e = e.replace(f, "");
                                var o = l.test(e);
                                return o || m.test(e) ? p(e.slice(2), o ? 2 : 8) : d.test(e) ? u : +e
                            }
                            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                }
                                : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                , c = "Expected a function"
                                , u = NaN
                                , s = "[object Symbol]"
                                , f = /^\s+|\s+$/g
                                , d = /^[-+]0x[0-9a-f]+$/i
                                , l = /^0b[01]+$/i
                                , m = /^0o[0-7]+$/i
                                , p = parseInt
                                , b = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.Object === Object && t
                                , v = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self
                                , y = b || v || Function("return this")()
                                , g = Object.prototype.toString
                                , h = Math.max
                                , w = Math.min
                                , k = function() {
                                return y.Date.now()
                            };
                            e.exports = function(e, t, i) {
                                var r = !0
                                    , a = !0;
                                if ("function" != typeof e)
                                    throw new TypeError(c);
                                return n(i) && (r = "leading"in i ? !!i.leading : r,
                                    a = "trailing"in i ? !!i.trailing : a),
                                    o(e, t, {
                                        leading: r,
                                        maxWait: t,
                                        trailing: a
                                    })
                            }
                        }
                    ).call(t, function() {
                        return this
                    }())
                }
                , function(e, t) {
                    (function(t) {
                            "use strict";
                            function o(e) {
                                var t = void 0 === e ? "undefined" : r(e);
                                return !!e && ("object" == t || "function" == t)
                            }
                            function i(e) {
                                if ("number" == typeof e)
                                    return e;
                                if (function(e) {
                                    return "symbol" == (void 0 === e ? "undefined" : r(e)) || function(e) {
                                        return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                                    }(e) && y.call(e) == u
                                }(e))
                                    return c;
                                if (o(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = o(t) ? t + "" : t
                                }
                                if ("string" != typeof e)
                                    return 0 === e ? e : +e;
                                e = e.replace(s, "");
                                var i = d.test(e);
                                return i || l.test(e) ? m(e.slice(2), i ? 2 : 8) : f.test(e) ? c : +e
                            }
                            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                }
                                : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                , c = NaN
                                , u = "[object Symbol]"
                                , s = /^\s+|\s+$/g
                                , f = /^[-+]0x[0-9a-f]+$/i
                                , d = /^0b[01]+$/i
                                , l = /^0o[0-7]+$/i
                                , m = parseInt
                                , p = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t
                                , b = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self
                                , v = p || b || Function("return this")()
                                , y = Object.prototype.toString
                                , g = Math.max
                                , h = Math.min
                                , w = function() {
                                return v.Date.now()
                            };
                            e.exports = function(e, t, n) {
                                function r(t) {
                                    var o = d
                                        , n = l;
                                    return d = l = void 0,
                                        y = t,
                                        p = e.apply(n, o)
                                }
                                function c(e) {
                                    var o = e - v;
                                    return void 0 === v || o >= t || o < 0 || x && e - y >= m
                                }
                                function u() {
                                    var e = w();
                                    return c(e) ? s(e) : void (b = setTimeout(u, function(e) {
                                        var o = t - (e - v);
                                        return x ? h(o, m - (e - y)) : o
                                    }(e)))
                                }
                                function s(e) {
                                    return b = void 0,
                                        j && d ? r(e) : (d = l = void 0,
                                            p)
                                }
                                function f() {
                                    var e = w()
                                        , o = c(e);
                                    if (d = arguments,
                                        l = this,
                                        v = e,
                                        o) {
                                        if (void 0 === b)
                                            return function(e) {
                                                return y = e,
                                                    b = setTimeout(u, t),
                                                    k ? r(e) : p
                                            }(v);
                                        if (x)
                                            return b = setTimeout(u, t),
                                                r(v)
                                    }
                                    return void 0 === b && (b = setTimeout(u, t)),
                                        p
                                }
                                var d, l, m, p, b, v, y = 0, k = !1, x = !1, j = !0;
                                if ("function" != typeof e)
                                    throw new TypeError("Expected a function");
                                return t = i(t) || 0,
                                o(n) && (k = !!n.leading,
                                    m = (x = "maxWait"in n) ? g(i(n.maxWait) || 0, t) : m,
                                    j = "trailing"in n ? !!n.trailing : j),
                                    f.cancel = function() {
                                        void 0 !== b && clearTimeout(b),
                                            y = 0,
                                            d = v = l = b = void 0
                                    }
                                    ,
                                    f.flush = function() {
                                        return void 0 === b ? p : s(w())
                                    }
                                    ,
                                    f
                            }
                        }
                    ).call(t, function() {
                        return this
                    }())
                }
                , function(e, t) {
                    "use strict";
                    function o(e) {
                        e && e.forEach((function(e) {
                                var t = Array.prototype.slice.call(e.addedNodes)
                                    , o = Array.prototype.slice.call(e.removedNodes);
                                t.concat(o).filter((function(e) {
                                        return e.hasAttribute && e.hasAttribute("data-aos")
                                    }
                                )).length && r()
                            }
                        ))
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = window.document
                        , i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                        , r = function() {};
                    t.default = function(e, t) {
                        var a = new i(o);
                        r = t,
                            a.observe(n.documentElement, {
                                childList: !0,
                                subtree: !0,
                                removedNodes: !0
                            })
                    }
                }
                , function(e, t) {
                    "use strict";
                    function o() {
                        return navigator.userAgent || navigator.vendor || window.opera || ""
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var n = t[o];
                                n.enumerable = n.enumerable || !1,
                                    n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(t, o, n) {
                            return o && e(t.prototype, o),
                            n && e(t, n),
                                t
                        }
                    }()
                        , i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
                        , r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                        , a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                        , c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                        , u = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e)
                        }
                        return n(e, [{
                            key: "phone",
                            value: function() {
                                var e = o();
                                return !(!i.test(e) && !r.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = o();
                                return !(!a.test(e) && !c.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone()
                            }
                        }]),
                            e
                    }();
                    t.default = new u
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.default = function(e, t) {
                            var o = window.pageYOffset
                                , n = window.innerHeight;
                            e.forEach((function(e, i) {
                                    !function(e, t, o) {
                                        var n = e.node.getAttribute("data-aos-once");
                                        t > e.position ? e.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !o && "true" !== n) && e.node.classList.remove("aos-animate")
                                    }(e, n + o, t)
                                }
                            ))
                        }
                }
                , function(e, t, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o(12));
                    t.default = function(e, t) {
                        return e.forEach((function(e, o) {
                                e.node.classList.add("aos-init"),
                                    e.position = (0,
                                        n.default)(e.node, t.offset)
                            }
                        )),
                            e
                    }
                }
                , function(e, t, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o(13));
                    t.default = function(e, t) {
                        var o = 0
                            , i = 0
                            , r = window.innerHeight
                            , a = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                        switch (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)),
                        a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
                            o = (0,
                                n.default)(e).top,
                            a.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                o += e.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                o += e.offsetHeight;
                                break;
                            case "top-center":
                                o += r / 2;
                                break;
                            case "bottom-center":
                                o += r / 2 + e.offsetHeight;
                                break;
                            case "center-center":
                                o += r / 2 + e.offsetHeight / 2;
                                break;
                            case "top-top":
                                o += r;
                                break;
                            case "bottom-top":
                                o += e.offsetHeight + r;
                                break;
                            case "center-top":
                                o += e.offsetHeight / 2 + r
                        }
                        return a.anchorPlacement || a.offset || isNaN(t) || (i = t),
                        o + i
                    }
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.default = function(e) {
                            for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                                    o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                                    e = e.offsetParent;
                            return {
                                top: o,
                                left: t
                            }
                        }
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.default = function(e) {
                            return e = e || document.querySelectorAll("[data-aos]"),
                                Array.prototype.map.call(e, (function(e) {
                                        return {
                                            node: e
                                        }
                                    }
                                ))
                        }
                }
            ])
        }
    )),
    AOS.init();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
;
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(i, s) {
            return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(i)),
                t(s),
                s
        }
        : t(jQuery)
}((function(t) {
        return t.fn.tilt = function(i) {
            var s = function() {
                this.ticking || (requestAnimationFrame(g.bind(this)),
                    this.ticking = !0)
            }
                , e = function() {
                t(this).on("mousemove", o),
                    t(this).on("mouseenter", a),
                this.settings.reset && t(this).on("mouseleave", l),
                this.settings.glare && t(window).on("resize", d.bind(this))
            }
                , n = function() {
                var i = this;
                void 0 !== this.timeout && clearTimeout(this.timeout),
                    t(this).css({
                        transition: this.settings.speed + "ms " + this.settings.easing
                    }),
                this.settings.glare && this.glareElement.css({
                    transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
                }),
                    this.timeout = setTimeout((function() {
                            t(i).css({
                                transition: ""
                            }),
                            i.settings.glare && i.glareElement.css({
                                transition: ""
                            })
                        }
                    ), this.settings.speed)
            }
                , a = function(i) {
                this.ticking = !1,
                    t(this).css({
                        "will-change": "transform"
                    }),
                    n.call(this),
                    t(this).trigger("tilt.mouseEnter")
            }
                , r = function(i) {
                return void 0 === i && (i = {
                    pageX: t(this).offset().left + t(this).outerWidth() / 2,
                    pageY: t(this).offset().top + t(this).outerHeight() / 2
                }),
                    {
                        x: i.pageX,
                        y: i.pageY
                    }
            }
                , o = function(t) {
                this.mousePositions = r(t),
                    s.call(this)
            }
                , l = function() {
                n.call(this),
                    this.reset = !0,
                    s.call(this),
                    t(this).trigger("tilt.mouseLeave")
            }
                , h = function() {
                var i = t(this).outerWidth()
                    , s = t(this).outerHeight()
                    , e = t(this).offset().left
                    , n = t(this).offset().top
                    , a = (this.mousePositions.x - e) / i
                    , r = (this.mousePositions.y - n) / s;
                return {
                    tiltX: (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2),
                    tiltY: (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                    percentageX: 100 * a,
                    percentageY: 100 * r,
                    angle: Math.atan2(this.mousePositions.x - (e + i / 2), -(this.mousePositions.y - (n + s / 2))) * (180 / Math.PI)
                }
            }
                , g = function() {
                return this.transforms = h.call(this),
                    this.reset ? (this.reset = !1,
                        t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
                        void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
                            this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
                    this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
                        this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
                        t(this).trigger("change", [this.transforms]),
                        void (this.ticking = !1))
            }
                , c = function() {
                var i = this.settings.glarePrerender;
                if (i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                    this.glareElementWrapper = t(this).find(".js-tilt-glare"),
                    this.glareElement = t(this).find(".js-tilt-glare-inner"),
                    !i) {
                    this.glareElementWrapper.css({
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }).css({
                        overflow: "hidden",
                        "pointer-events": "none"
                    }),
                        this.glareElement.css({
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                            width: "" + 2 * t(this).outerWidth(),
                            height: "" + 2 * t(this).outerWidth(),
                            transform: "rotate(180deg) translate(-50%, -50%)",
                            "transform-origin": "0% 0%",
                            opacity: "0"
                        })
                }
            }
                , d = function() {
                this.glareElement.css({
                    width: "" + 2 * t(this).outerWidth(),
                    height: "" + 2 * t(this).outerWidth()
                })
            };
            return t.fn.tilt.destroy = function() {
                t(this).each((function() {
                        t(this).find(".js-tilt-glare").remove(),
                            t(this).css({
                                "will-change": "",
                                transform: ""
                            }),
                            t(this).off("mousemove mouseenter mouseleave")
                    }
                ))
            }
                ,
                t.fn.tilt.getValues = function() {
                    var i = [];
                    return t(this).each((function() {
                            this.mousePositions = r.call(this),
                                i.push(h.call(this))
                        }
                    )),
                        i
                }
                ,
                t.fn.tilt.reset = function() {
                    t(this).each((function() {
                            var i = this;
                            this.mousePositions = r.call(this),
                                this.settings = t(this).data("settings"),
                                l.call(this),
                                setTimeout((function() {
                                        i.reset = !1
                                    }
                                ), this.settings.transition)
                        }
                    ))
                }
                ,
                this.each((function() {
                        var s = this;
                        this.settings = t.extend({
                            maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                            perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                            easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                            scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                            speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                            transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                            disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                            axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                            reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                            glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                            maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
                        }, i),
                        null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
                            this.settings.disableAxis = this.settings.axis),
                            this.init = function() {
                                t(s).data("settings", s.settings),
                                s.settings.glare && c.call(s),
                                    e.call(s)
                            }
                            ,
                            this.init()
                    }
                ))
        }
            ,
            t("[data-tilt]").tilt(),
            !0
    }
)),
    $(document).ready((function() {
            $(".privacy-policy-cont-rep-cont").hide(),
                $(".privacy-policy-cont-rep-title").click((function() {
                        $(".privacy-policy-cont-rep-title").not($(this)).removeClass("active"),
                            $(this).toggleClass("active"),
                            $(".privacy-policy-cont-rep-cont").not($(this).next()).slideUp(),
                            $(this).next().slideToggle()
                    }
                ))
        }
    )),
$("#blogContents h2").length > 0 && $("#blogContents").prepend('<nav class="toc"><ul></ul></nav>'),
    $(".terms-cond-left").remove(),
    $("#blogContents").find("h2").each((function() {
            var $item = $(this)
                , $id = $(this).attr("id")
                , li = $("<li/>");
            $("<a/>", {
                text: $item.text(),
                href: "#" + $id,
                title: $item.text()
            }).appendTo(li),
                $("#blogContents .toc ul").append(li)
        }
    )),
    $(window).scroll((function() {
            var scrollDistance = $(window).scrollTop();
            $(".terms-cond-right-text-rep").each((function(i) {
                    var a = $(this).find("h2").attr("id");
                    a = "#" + a,
                    $(this).find("h2").position().top <= scrollDistance + 180 && $(".toc ul li a").each((function() {
                            a == $(this).attr("href") && ($(".toc ul li").removeClass("outer-parent"),
                                $(this).parent().addClass("outer-parent"))
                        }
                    ))
                }
            ))
        }
    )).scroll(),
    document.querySelectorAll('a[href^="#"]').forEach((anchor=>{
            anchor.addEventListener("click", (function(e) {
                    e.preventDefault(),
                        document.querySelector(this.getAttribute("href")).scrollIntoView({
                            behavior: "smooth"
                        })
                }
            ))
        }
    ));
//# sourceURL=https://cdn2.hubspot.net/hub/3358429/hub_generated/template_assets/50680352106/1641913128979/Helpware_2021/js/main.js
