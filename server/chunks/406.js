exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 4266:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(1751);
const _normalizetrailingslash = __webpack_require__(2387);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)((0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 370:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(2387);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 3991:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 1516:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 3740:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _interop_require_wildcard = __webpack_require__(8760);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const _imageblursvg = __webpack_require__(4486);
const _imageconfig = __webpack_require__(5843);
const _imageconfigcontext = __webpack_require__(744);
const _warnonce = __webpack_require__(618);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { imgAttributes, heightInt, widthInt, qualityInt, className, imgStyle, blurStyle, isLazy, fetchPriority, fill, placeholder, loading, srcString, config, unoptimized, loader, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: {
            ...imgStyle,
            ...blurStyle
        },
        ...imgAttributes,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
const Image = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...all } = param;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageloader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        }) + '")'
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = {
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fetchPriority,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText,
        ...rest
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgElementArgs,
        ref: forwardedRef
    }), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin,
        referrerPolicy: rest.referrerPolicy,
        ...getDynamicProps(fetchPriority)
    })) : null);
});
const _default = Image;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 5569:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6689));
const _resolvehref = __webpack_require__(7782);
const _islocalurl = __webpack_require__(1109);
const _formaturl = __webpack_require__(3938);
const _utils = __webpack_require__(9232);
const _addlocale = __webpack_require__(370);
const _routercontext = __webpack_require__(4964);
const _approutercontext = __webpack_require__(3280);
const _useintersection = __webpack_require__(508);
const _getdomainlocale = __webpack_require__(1516);
const _addbasepath = __webpack_require__(4266);
const _routerreducertypes = __webpack_require__(3991);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = true === false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2387:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3297);
const _parsepath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 29:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 508:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(6689);
const _requestidlecallback = __webpack_require__(29);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 2749:
/***/ (() => {



/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3740)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5569)


/***/ }),

/***/ 9274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FF: () => (/* binding */ useBlogContext),
/* harmony export */   JW: () => (/* binding */ BlogProvider),
/* harmony export */   Tl: () => (/* binding */ sortDate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
// src/blog-context.tsx


// src/utils/date.ts
var sortDate = (a, b) => {
  var _a, _b;
  if (!((_a = a.frontMatter) == null ? void 0 : _a.date) || !((_b = b.frontMatter) == null ? void 0 : _b.date))
    return -1;
  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};
var DATE_REGEX = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?(:\d{2}\.\d{3}Z)?$/;
var DATE_REGEX_WITH_SLASH = /^\d{4}\/\d{1,2}\/\d{1,2}( \d{1,2}:\d{1,2})?$/;
var isValidDate = (date) => DATE_REGEX.test(date) || DATE_REGEX_WITH_SLASH.test(date);

// src/blog-context.tsx

var BlogContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var BlogProvider = ({
  config,
  children,
  opts
}) => {
  const { date } = opts.frontMatter;
  if (date && !isValidDate(date)) {
    throw new Error(
      `Invalid date "${date}". Provide date in "YYYY/M/D", "YYYY/M/D H:m", "YYYY-MM-DD", "[YYYY-MM-DD]T[HH:mm]" or "[YYYY-MM-DD]T[HH:mm:ss.SSS]Z" format.`
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlogContext.Provider, { value: { config, opts }, children });
};
var useBlogContext = () => {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BlogContext);
  if (!value) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return value;
};




/***/ }),

/***/ 9339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NJ: () => (/* binding */ getTags),
/* harmony export */   Vl: () => (/* binding */ split)
/* harmony export */ });
/* unused harmony export getStaticTags */
// src/utils/get-tags.ts
function split(tags = "") {
  return (Array.isArray(tags) ? tags : tags.split(",")).map((s) => s.trim());
}
var flattenPageMap = (page, result = []) => {
  if (Array.isArray(page.children)) {
    page.children.forEach((p) => flattenPageMap(p, result));
  }
  result.push(page);
};
var flattenPageMaps = (pages, result = []) => {
  pages.forEach((v) => flattenPageMap(v, result));
};
var getStaticTags = (pageMap) => {
  const result = [];
  flattenPageMaps(pageMap, result);
  return Array.from(new Set(result.map(getTags).flat(1).filter(Boolean)));
};
function getTags(page) {
  if (!page.frontMatter) {
    return [];
  }
  return split(page.frontMatter.tag);
}




/***/ }),

/***/ 1605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EZ: () => (/* binding */ __spreadProps),
/* harmony export */   S0: () => (/* binding */ __objRest),
/* harmony export */   ih: () => (/* binding */ __spreadValues)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




/***/ }),

/***/ 3242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9274);
/* harmony import */ var _chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9339);
/* harmony import */ var _chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1605);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1016);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9575);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);
/* harmony import */ var nextra_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7391);
/* harmony import */ var nextra_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4861);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_components__WEBPACK_IMPORTED_MODULE_4__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__]);
([nextra_components__WEBPACK_IMPORTED_MODULE_4__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// src/index.tsx


// src/basic-layout.tsx



// src/mdx-theme.tsx






var HeadingContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)((0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)());
var H1 = ({ children }) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(HeadingContext);
  const { opts } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  const [showHeading, setShowHeading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (ref.current && opts.hasJsxInH1) {
      setShowHeading(true);
    }
  }, [opts.hasJsxInH1, ref]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, { children: showHeading && (0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)(children, ref.current) });
};
function HeadingLink(_a) {
  var _b = _a, {
    tag: Tag,
    children,
    id
  } = _b, props = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__objRest */ .S0)(_b, [
    "tag",
    "children",
    "id"
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Tag, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ className: `subheading-${Tag}` }, props), { children: [
    children,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "nx-absolute -nx-mt-7", id }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
      "a",
      {
        href: id && `#${id}`,
        className: "subheading-anchor",
        "aria-label": "Permalink for this section"
      }
    )
  ] }));
}
var A = (_a) => {
  var _b = _a, { children } = _b, props = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__objRest */ .S0)(_b, ["children"]);
  var _a2, _b2;
  const isExternal = ((_a2 = props.href) == null ? void 0 : _a2.startsWith("https://")) || ((_b2 = props.href) == null ? void 0 : _b2.startsWith("http://"));
  if (isExternal) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ target: "_blank", rel: "noreferrer" }, props), { children: [
      children,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "nx-sr-only", children: " (opens in a new tab)" })
    ] }));
  }
  return props.href ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: props.href, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({}, props), { children })) }) : null;
};
var useComponents = () => {
  const { config } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  return (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({
    h1: H1,
    h2: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ tag: "h2" }, props)),
    h3: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ tag: "h3" }, props)),
    h4: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ tag: "h4" }, props)),
    h5: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ tag: "h5" }, props)),
    h6: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HeadingLink, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ tag: "h6" }, props)),
    a: A,
    pre: (_a) => {
      var _b = _a, { children } = _b, props = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__objRest */ .S0)(_b, ["children"]);
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "nx-not-prose", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(nextra_components__WEBPACK_IMPORTED_MODULE_4__/* .Pre */ .SU, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({}, props), { children })) });
    },
    tr: nextra_components__WEBPACK_IMPORTED_MODULE_4__.Tr,
    th: nextra_components__WEBPACK_IMPORTED_MODULE_4__.Th,
    td: nextra_components__WEBPACK_IMPORTED_MODULE_4__.Td,
    table: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(nextra_components__WEBPACK_IMPORTED_MODULE_4__/* .Table */ .iA, (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({ className: "nx-not-prose" }, props)),
    code: nextra_components__WEBPACK_IMPORTED_MODULE_4__/* .Code */ .EK
  }, config.components);
};
var MDXTheme = ({
  children
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .MDXProvider */ .Z, { components: useComponents(), children });
};

// src/basic-layout.tsx

var BasicLayout = ({ children }) => {
  var _a;
  const { config, opts } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  const title = `${opts.title}${config.titleSuffix || ""}`;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
    "article",
    {
      className: "nx-container nx-prose max-md:nx-prose-sm dark:nx-prose-dark",
      dir: "ltr",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("title", { children: title }),
          (_a = config.head) == null ? void 0 : _a.call(config, { title, meta: opts.frontMatter })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(HeadingContext.Provider, { value: ref, children: [
          opts.hasJsxInH1 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", { ref }) : null,
          opts.hasJsxInH1 ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", { children: opts.title }),
          children,
          config.footer
        ] })
      ]
    }
  );
};

// src/meta.tsx


// src/theme-switch.tsx




function ThemeSwitch() {
  const { setTheme, resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useMounted */ .s)();
  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
    "span",
    {
      role: "button",
      "aria-label": "Toggle Dark Mode",
      className: "nx-cursor-pointer nx-p-2 nx-text-current",
      tabIndex: 0,
      onClick: toggleTheme,
      onKeyDown: (e) => {
        if (e.key === "Enter")
          toggleTheme();
      },
      children: mounted && isDark ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_11__/* .MoonIcon */ .kL, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_11__/* .SunIcon */ .NW, {})
    }
  );
}

// src/utils/traverse.ts
function traverse(pageMap, matcher) {
  for (const pageMapItem of pageMap) {
    if (matcher(pageMapItem)) {
      return pageMapItem;
    }
  }
  for (const item of pageMap) {
    if (item.kind === "Folder") {
      const matched = traverse(item.children, matcher);
      if (matched) {
        return matched;
      }
    }
  }
  return null;
}

// src/utils/parent.ts
var getParent = ({ opts }) => {
  let back = null;
  const parentPages = [];
  const { route } = opts;
  traverse(opts.pageMap, (page) => {
    if ("route" in page && route !== page.route && (route + "/").startsWith(page.route === "/" ? "/" : page.route + "/")) {
      parentPages.push(page);
    }
  });
  const parentPage = parentPages.reverse().find(
    (page) => "frontMatter" in page && page.frontMatter && page.frontMatter.type === "posts"
  );
  if (parentPage) {
    back = parentPage.route;
  }
  return { parentPage, back };
};

// src/meta.tsx

function Meta() {
  var _a, _b;
  const { opts, config } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  const { author, date, tag } = opts.frontMatter;
  const { back } = getParent({ opts, config });
  const tags = tag ? (0,_chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_12__/* .split */ .Vl)(tag) : [];
  const tagsEl = tags.map((t) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: "/tags/[tag]", as: `/tags/${t}`, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
    "a",
    {
      className: "\n          nx-select-none\n          nx-rounded-md\n          nx-bg-gray-200\n          nx-px-1\n          nx-text-sm\n          nx-text-gray-400\n          nx-transition-colors\n          hover:nx-bg-gray-300\n          hover:nx-text-gray-500\n          dark:nx-bg-gray-600\n          dark:nx-text-gray-300\n          dark:hover:nx-bg-gray-700\n          dark:hover:nx-text-gray-200\n        ",
      children: t
    }
  ) }, t));
  const readingTime = (_a = opts.readingTime) == null ? void 0 : _a.text;
  const dateObj = date ? new Date(date) : null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
    "div",
    {
      className: "nx-mb-8 nx-flex nx-gap-3 " + (readingTime ? "nx-items-start" : "nx-items-center"),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", { className: "nx-grow nx-text-gray-400", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", { className: "nx-not-prose nx-flex nx-flex-wrap nx-items-center nx-gap-1", children: [
            author,
            author && date && ",",
            dateObj && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("time", { dateTime: dateObj.toISOString(), children: ((_b = config.dateFormatter) == null ? void 0 : _b.call(config, dateObj)) || dateObj.toDateString() }),
            (author || date) && (readingTime || tags.length > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "nx-px-1", children: "\u2022" }),
            readingTime || tagsEl
          ] }),
          readingTime && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "nx-not-prose nx-mt-1 nx-flex nx-flex-wrap nx-items-center nx-gap-1", children: tagsEl })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", { className: "nx-flex nx-items-center nx-gap-3 print:nx-hidden", children: [
          back && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: back, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", { children: "Back" }) }),
          config.darkMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ThemeSwitch, {})
        ] })
      ]
    }
  );
}

// src/article-layout.tsx

var ArticleLayout = ({ children }) => {
  const { config } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(BasicLayout, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Meta, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(MDXTheme, { children: [
      children,
      config.postFooter,
      config.comments
    ] })
  ] });
};

// src/constants.tsx

var DEFAULT_THEME = {
  footer: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("small", { className: "nx-mt-32 nx-block", children: [
    "CC BY-NC 4.0 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " \xA9 Shu Ding."
  ] }),
  readMore: "Read More \u2192"
};

// src/nav.tsx



// src/utils/collect.ts
var isNav = (page) => {
  var _a;
  const type = "frontMatter" in page && ((_a = page.frontMatter) == null ? void 0 : _a.type);
  return type && ["page", "posts"].includes(type);
};
var isPost = (page) => {
  var _a;
  if (page.kind === "Folder" || page.kind === "Meta" || page.name.startsWith("_"))
    return false;
  const type = (_a = page.frontMatter) == null ? void 0 : _a.type;
  return !type || type === "post";
};
var collectPostsAndNavs = ({ opts }) => {
  const posts = [];
  const navPages = [];
  const { route } = opts;
  traverse(opts.pageMap, (page) => {
    if (isNav(page)) {
      navPages.push((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadProps */ .EZ)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({}, page), { active: page.route === route }));
    }
    if (isPost(page)) {
      posts.push(page);
    }
  });
  posts.sort(_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .sortDate */ .Tl);
  navPages.sort(_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .sortDate */ .Tl);
  return { posts, navPages };
};

// src/nav.tsx

function Nav() {
  var _a;
  const { opts, config } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  const { navPages } = collectPostsAndNavs({ opts, config });
  const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", { className: "nx-mb-8 nx-flex nx-items-center nx-gap-3", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", { className: "nx-flex nx-grow nx-flex-wrap nx-items-center nx-justify-end nx-gap-3", children: [
      navPages.map((page) => {
        var _a2;
        const name = ((_a2 = page.frontMatter) == null ? void 0 : _a2.title) || page.name;
        if (page.active) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
            "span",
            {
              className: `nx-cursor-default ${resolvedTheme === "dark" ? "nx-text-gray-400" : "nx-text-gray-600"}`,
              children: name
            },
            page.route
          );
        }
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: page.route, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", { children: name }) }, page.route);
      }),
      (_a = config.navs) == null ? void 0 : _a.map((nav) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: nav.url, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", { children: nav.name }) }, nav.url))
    ] }),
    config.darkMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ThemeSwitch, {})
  ] });
}

// src/page-layout.tsx

var PageLayout = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(BasicLayout, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Nav, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MDXTheme, { children })
  ] });
};

// src/posts-layout.tsx




var PostsLayout = ({
  children
}) => {
  const { config, opts } = (0,_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .useBlogContext */ .FF)();
  const { posts } = collectPostsAndNavs({ config, opts });
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
  const { type } = opts.frontMatter;
  const tagName = type === "tag" ? router.query.tag : null;
  const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  const textColor = resolvedTheme === "dark" ? "nx-text-gray-400" : "nx-text-gray-600";
  const postList = posts.map((post) => {
    var _a, _b, _c;
    if (tagName) {
      const tags = (0,_chunk_DTLQO4T7_js__WEBPACK_IMPORTED_MODULE_12__/* .getTags */ .NJ)(post);
      if (!Array.isArray(tagName) && !tags.includes(tagName)) {
        return null;
      }
    } else if (type === "tag") {
      return null;
    }
    const postTitle = ((_a = post.frontMatter) == null ? void 0 : _a.title) || post.name;
    const date = ((_b = post.frontMatter) == null ? void 0 : _b.date) ? new Date(post.frontMatter.date) : null;
    const description = (_c = post.frontMatter) == null ? void 0 : _c.description;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", { className: "post-item", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: post.route, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", { className: "!nx-no-underline", children: postTitle }) }) }),
      description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", { className: "nx-mb-2 " + textColor, children: [
        description,
        config.readMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), { href: post.route, passHref: true, legacyBehavior: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", { className: "post-item-more nx-ml-2", children: config.readMore }) })
      ] }),
      date && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
        "time",
        {
          className: "nx-text-sm  " + textColor,
          dateTime: date.toISOString(),
          children: date.toDateString()
        }
      )
    ] }, post.route);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(BasicLayout, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Nav, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MDXTheme, { children }),
    postList
  ] });
};

// src/index.tsx


var layoutMap = {
  post: ArticleLayout,
  page: PageLayout,
  posts: PostsLayout,
  tag: PostsLayout
};
var BlogLayout = ({
  config,
  children,
  opts
}) => {
  const type = opts.frontMatter.type || "post";
  const Layout2 = layoutMap[type];
  if (!Layout2) {
    throw new Error(
      `nextra-theme-blog does not support the layout type "${type}" It only supports "post", "page", "posts" and "tag"`
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_chunk_6NNV3MWG_js__WEBPACK_IMPORTED_MODULE_8__/* .BlogProvider */ .JW, { opts, config, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Layout2, { children }) });
};
function Layout(_a) {
  var _b = _a, {
    children
  } = _b, context = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__objRest */ .S0)(_b, [
    "children"
  ]);
  const extendedConfig = (0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)((0,_chunk_PKUHTIDK_js__WEBPACK_IMPORTED_MODULE_9__/* .__spreadValues */ .ih)({}, DEFAULT_THEME), context.themeConfig);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(next_themes__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BlogLayout, { config: extendedConfig, opts: context.pageOpts, children }) });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
// src/components/button.tsx


var Button = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    "button",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
        "nextra-button nx-transition-all active:nx-opacity-50",
        "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5",
        "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",
        className
      ),
      ...props,
      children
    }
  );
};



/***/ }),

/***/ 8947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Callout */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4861);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
// src/components/callout.tsx



var TypeToEmoji = {
  default: "\u{1F4A1}",
  error: "\u{1F6AB}",
  info: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__/* .InformationCircleIcon */ .AV, { className: "nx-mt-1" }),
  warning: "\u26A0\uFE0F"
};
var classes = {
  default: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
    "nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300"
  ),
  error: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
    "nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200"
  ),
  info: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
    "nx-border-blue-200 nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200"
  ),
  warning: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
    "nx-border-yellow-100 nx-bg-yellow-50 nx-text-yellow-900 dark:nx-border-yellow-200/30 dark:nx-bg-yellow-700/30 dark:nx-text-yellow-200"
  )
};
function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type]
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
        "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
        classes[type]
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            },
            children: emoji
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "nx-w-full nx-min-w-0 nx-leading-7", children })
      ]
    }
  );
}



/***/ }),

/***/ 8516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
// src/components/code.tsx


var Code = ({
  children,
  className,
  ...props
}) => {
  const hasLineNumbers = "data-line-numbers" in props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    "code",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
        "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]",
        "dark:nx-border-white/10 dark:nx-bg-white/10",
        hasLineNumbers && "[counter-reset:line]",
        className
      ),
      dir: "ltr",
      ...props,
      children
    }
  );
};



/***/ }),

/***/ 1418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CopyToClipboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4861);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7768);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
// src/components/copy-to-clipboard.tsx




var CopyToClipboard = ({
  getValue,
  ...props
}) => {
  const [isCopied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isCopied)
      return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2e3);
    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setCopied(true);
    if (!navigator?.clipboard) {
      console.error("Access to clipboard rejected!");
    }
    try {
      await navigator.clipboard.writeText(getValue());
    } catch {
      console.error("Failed to copy!");
    }
  }, [getValue]);
  const IconToUse = isCopied ? _icons__WEBPACK_IMPORTED_MODULE_1__/* .CheckIcon */ .nQ : _icons__WEBPACK_IMPORTED_MODULE_1__/* .CopyIcon */ .TI;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, { onClick: handleClick, title: "Copy code", tabIndex: 0, ...props, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconToUse, { className: "nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4" }) });
};



/***/ }),

/***/ 1016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EK: () => (/* reexport safe */ _code__WEBPACK_IMPORTED_MODULE_3__.E),
/* harmony export */   SU: () => (/* reexport safe */ _pre__WEBPACK_IMPORTED_MODULE_4__.S),
/* harmony export */   Td: () => (/* reexport safe */ _td__WEBPACK_IMPORTED_MODULE_5__.Td),
/* harmony export */   Th: () => (/* reexport safe */ _th__WEBPACK_IMPORTED_MODULE_7__.Th),
/* harmony export */   Tr: () => (/* reexport safe */ _tr__WEBPACK_IMPORTED_MODULE_8__.Tr),
/* harmony export */   iA: () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_6__.i)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7768);
/* harmony import */ var _callout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8947);
/* harmony import */ var _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1418);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8516);
/* harmony import */ var _pre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8085);
/* harmony import */ var _td__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9266);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3103);
/* harmony import */ var _th__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5957);
/* harmony import */ var _tr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2880);
/* harmony import */ var _theguild_remark_mermaid_mermaid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(372);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_theguild_remark_mermaid_mermaid__WEBPACK_IMPORTED_MODULE_9__]);
_theguild_remark_mermaid_mermaid__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/components/index.ts












__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4861);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7768);
/* harmony import */ var _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1418);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
// src/components/pre.tsx






var Pre = ({
  children,
  className,
  hasCopyCode,
  filename,
  ...props
}) => {
  const preRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const toggleWordWrap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const htmlDataset = document.documentElement.dataset;
    const hasWordWrap = "nextraWordWrap" in htmlDataset;
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap;
    } else {
      htmlDataset.nextraWordWrap = "";
    }
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", { className: "nextra-code-block nx-relative nx-mt-6 first:nx-mt-0", children: [
    filename && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", { className: "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200", children: filename }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
      "pre",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
          "nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]",
          "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",
          filename ? "nx-pt-12 nx-pb-4" : "nx-py-4",
          className
        ),
        ref: preRef,
        ...props,
        children
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(
          "nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100",
          "nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",
          filename ? "nx-top-8" : "nx-top-0"
        ),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            _button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z,
            {
              onClick: toggleWordWrap,
              className: "md:nx-hidden",
              title: "Toggle word wrap",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__/* .WordWrapIcon */ .NK, { className: "nx-pointer-events-none nx-h-4 nx-w-4" })
            }
          ),
          hasCopyCode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__/* .CopyToClipboard */ .h,
            {
              getValue: () => preRef.current?.querySelector("code")?.textContent || ""
            }
          )
        ]
      }
    )
  ] });
};



/***/ }),

/***/ 3103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
// src/components/table.tsx

var Table = ({
  className = "",
  ...props
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "nx-block nx-overflow-x-scroll " + className, ...props });



/***/ }),

/***/ 9266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Td: () => (/* binding */ Td)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
// src/components/td.tsx

var Td = ({ className = "", ...props }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "td",
  {
    className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 " + className,
    ...props
  }
);



/***/ }),

/***/ 5957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Th: () => (/* binding */ Th)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
// src/components/th.tsx

var Th = ({ className = "", ...props }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "th",
  {
    className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 " + className,
    ...props
  }
);



/***/ }),

/***/ 2880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tr: () => (/* binding */ Tr)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
// src/components/tr.tsx

var Tr = ({ className = "", ...props }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "tr",
  {
    className: "nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20 " + className,
    ...props
  }
);



/***/ }),

/***/ 7391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* reexport */ useMounted)
});

// UNUSED EXPORTS: useFSRoute

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/hooks/use-mounted.js
// src/hooks/use-mounted.ts

function useMounted() {
  const [mounted, setMounted] = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setMounted(true);
  }, []);
  return mounted;
}


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/nextra/dist/constants.mjs
var constants = __webpack_require__(7222);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/hooks/use-fs-route.js
// src/hooks/use-fs-route.ts



var template = "https://nextra.vercel.app";
var useFSRoute = () => {
  const { locale = DEFAULT_LOCALE, asPath, route } = useRouter();
  return useMemo(() => {
    const clientRoute = ERROR_ROUTES.has(route) ? route : asPath;
    const { pathname } = new URL(clientRoute, template);
    const cleanedPath = locale ? pathname.replace(new RegExp(`\\.${locale}(\\/|$)`), "$1") : pathname;
    return cleanedPath.replace(/\/index(\/|$)/, "$1").replace(/\/$/, "") || "/";
  }, [asPath, locale, route]);
};


;// CONCATENATED MODULE: ./node_modules/nextra/dist/hooks/index.js
// src/hooks/index.ts




/***/ }),

/***/ 4861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nQ: () => (/* reexport */ CheckIcon),
  TI: () => (/* reexport */ CopyIcon),
  AV: () => (/* reexport */ InformationCircleIcon),
  kL: () => (/* reexport */ MoonIcon),
  NW: () => (/* reexport */ SunIcon),
  NK: () => (/* reexport */ WordWrapIcon)
});

// UNUSED EXPORTS: ArrowRightIcon, DiscordIcon, ExpandIcon, GitHubIcon, GlobeIcon, MenuIcon, SpinnerIcon, XIcon

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/arrow-right.js
// src/icons/arrow-right.tsx

function ArrowRightIcon({
  pathClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 5l7 7-7 7",
      className: pathClassName
    }
  ) });
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/check.js
// src/icons/check.tsx

function CheckIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      viewBox: "0 0 20 20",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/copy.js
// src/icons/copy.tsx

function CopyIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "rect",
          {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            d: "M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/discord.js
// src/icons/discord.tsx

function DiscordIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 5 30.67 23.25",
      ...props,
      children: [
        /* @__PURE__ */ jsx("title", { children: "Discord" }),
        /* @__PURE__ */ jsx("path", { d: "M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z" })
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/expand.js
// src/icons/expand.tsx

function ExpandIcon({
  isOpen,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      height: "12",
      width: "12",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z",
            className: isOpen ? "" : "nx-origin-[35%] nx-rotate-180"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z"
          }
        )
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/github.js
// src/icons/github.tsx

function GitHubIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      fill: "currentColor",
      viewBox: "3 3 18 18",
      ...props,
      children: [
        /* @__PURE__ */ jsx("title", { children: "GitHub" }),
        /* @__PURE__ */ jsx("path", { d: "M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z" })
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/globe.js
// src/icons/globe.tsx

function GlobeIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "2 2 16 16",
      width: "12",
      height: "12",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
          clipRule: "evenodd"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/information-circle.js
// src/icons/information-circle.tsx

function InformationCircleIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      width: "20",
      height: "20",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/menu.js
// src/icons/menu.tsx

function MenuIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16"
          }
        ) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 12h16"
          }
        ),
        /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 18h16"
          }
        ) })
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/moon.js
// src/icons/moon.tsx

function MoonIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      fill: "none",
      viewBox: "2 2 20 20",
      width: "12",
      height: "12",
      stroke: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          fill: "currentColor",
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/spinner.js
// src/icons/spinner.tsx

function SpinnerIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "nx-opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "nx-opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/sun.js
// src/icons/sun.tsx

function SunIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      fill: "none",
      viewBox: "3 3 18 18",
      width: "12",
      height: "12",
      stroke: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          fill: "currentColor",
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/word-wrap.js
// src/icons/word-wrap.tsx

function WordWrapIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", width: "24", height: "24", ...props, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    }
  ) });
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/x.js
// src/icons/x.tsx

function XIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/index.js
// src/icons/index.ts
















/***/ }),

/***/ 2462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Nextra)
/* harmony export */ });
/* harmony import */ var _ssg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7308);
/* harmony import */ var _use_internals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7922);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ssg__WEBPACK_IMPORTED_MODULE_0__]);
_ssg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/layout.tsx



function Nextra({
  __nextra_pageMap,
  __nextra_dynamic_opts,
  ...props
}) {
  const { context, Layout } = (0,_use_internals__WEBPACK_IMPORTED_MODULE_1__/* .useInternals */ .u)();
  const { Content, ...restContext } = context;
  if (__nextra_pageMap) {
    restContext.pageOpts = {
      ...restContext.pageOpts,
      pageMap: __nextra_pageMap
    };
  }
  if (__nextra_dynamic_opts) {
    const data = JSON.parse(__nextra_dynamic_opts);
    restContext.pageOpts = {
      ...restContext.pageOpts,
      headings: data.headings,
      title: data.title || restContext.pageOpts.title,
      frontMatter: data.frontMatter
    };
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Layout, { ...restContext, pageProps: props, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ssg__WEBPACK_IMPORTED_MODULE_0__/* .SSGContext */ .mK.Provider, { value: props, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Content, { ...props }) }) });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   a: () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/mdx.ts



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ setupNextraPage)
/* harmony export */ });
/* unused harmony export collectCatchAllRoutes */
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1043);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7222);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2462);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_2__]);
_layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/setup-page.ts




function isFolder(value) {
  return !!value && typeof value === "object" && value.type === "folder";
}
function normalizeMetaData(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (isFolder(value)) {
        const keyWithoutSlash = key.replace("/", "");
        return [
          keyWithoutSlash,
          value.title || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .pageTitleFromFilename */ .Zs)(keyWithoutSlash)
        ];
      }
      return [key, value || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .pageTitleFromFilename */ .Zs)(key)];
    })
  );
}
function collectCatchAllRoutes(parent, meta, isRootFolder = true) {
  if (isRootFolder) {
    collectCatchAllRoutes(
      parent,
      {
        kind: "Meta",
        data: meta.data,
        locale: meta.locale
      },
      false
    );
    meta.data = normalizeMetaData(meta.data);
    return;
  }
  for (const [key, value] of Object.entries(meta.data)) {
    if (!isFolder(value)) {
      if (key === "*") {
        continue;
      }
      parent.children.push({
        kind: "MdxPage",
        ...meta.locale && { locale: meta.locale },
        name: key,
        route: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .normalizePageRoute */ .Tz)(parent.route, key)
      });
      continue;
    }
    const routeWithoutSlashes = key.replace("/", "");
    const newParent = {
      kind: "Folder",
      name: routeWithoutSlashes,
      route: `${parent.route}/${routeWithoutSlashes}`,
      children: [
        {
          kind: "Meta",
          ...meta.locale && { locale: meta.locale },
          data: normalizeMetaData(value.items)
        }
      ]
    };
    parent.children.push(newParent);
    collectCatchAllRoutes(
      newParent,
      {
        kind: "Meta",
        data: value.items,
        locale: meta.locale
      },
      false
    );
  }
}
var cachedResolvedPageMap;
function setupNextraPage({
  pageNextRoute,
  pageOpts,
  nextraLayout,
  themeConfig,
  MDXContent,
  hot,
  pageOptsChecksum,
  dynamicMetaModules = []
}) {
  var _a;
  if (typeof window === "undefined") {
    globalThis.__nextra_resolvePageMap = async () => {
      if ( true && cachedResolvedPageMap) {
        return cachedResolvedPageMap;
      }
      const clonedPageMap = JSON.parse(
        JSON.stringify(__nextra_internal__.pageMap)
      );
      await Promise.all(
        dynamicMetaModules.map(
          async ([importMod, { metaObjectKeyPath, metaParentKeyPath }]) => {
            const mod = await importMod;
            const metaData = await mod.default();
            const meta = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(
              clonedPageMap,
              metaObjectKeyPath
            );
            meta.data = metaData;
            const parent = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(clonedPageMap, metaParentKeyPath);
            collectCatchAllRoutes(parent, meta);
          }
        )
      );
      return cachedResolvedPageMap = clonedPageMap;
    };
  }
  const __nextra_internal__ = globalThis[_a = _constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .NEXTRA_INTERNAL */ .eZ] || (globalThis[_a] = /* @__PURE__ */ Object.create(null));
  if (pageOpts.pageMap) {
    __nextra_internal__.pageMap = pageOpts.pageMap;
    __nextra_internal__.Layout = nextraLayout;
  } else {
    pageOpts = {
      ...pageOpts,
      pageMap: __nextra_internal__.pageMap,
      flexsearch: __nextra_internal__.flexsearch
    };
    themeConfig = __nextra_internal__.themeConfig;
  }
  pageOpts = {
    // @ts-ignore ignore "'frontMatter' is specified more than once" error to treeshake empty object `{}` for each compiled page
    frontMatter: {},
    ...pageOpts
  };
  __nextra_internal__.route = pageOpts.route;
  __nextra_internal__.context || (__nextra_internal__.context = /* @__PURE__ */ Object.create(null));
  __nextra_internal__.context[pageNextRoute] = {
    Content: MDXContent,
    pageOpts,
    themeConfig
  };
  if (false) {}
  return _layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mK: () => (/* binding */ SSGContext)
/* harmony export */ });
/* unused harmony exports DataContext, RemoteContent, useData, useSSG */
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9961);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_0__, _mdx__WEBPACK_IMPORTED_MODULE_2__]);
([next_mdx_remote__WEBPACK_IMPORTED_MODULE_0__, _mdx__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/ssg.tsx




var SSGContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
var useSSG = (key = "ssg") => useContext(SSGContext)?.[key];
var DataContext = (/* unused pure expression or super */ null && (SSGContext));
var useData = (/* unused pure expression or super */ null && (useSSG));
function RemoteContent({
  components: dynamicComponents
}) {
  const dynamicContext = useSSG("__nextra_dynamic_mdx");
  if (!dynamicContext) {
    throw new Error(
      "RemoteContent must be used together with the `buildDynamicMDX` API"
    );
  }
  const components = useMDXComponents();
  return /* @__PURE__ */ jsx(
    MDXRemote,
    {
      compiledSource: dynamicContext,
      components: { ...components, ...dynamicComponents }
    }
  );
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useInternals)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7222);
// src/use-internals.ts



function useInternals() {
  const __nextra_internal__ = globalThis[_constants_mjs__WEBPACK_IMPORTED_MODULE_2__/* .NEXTRA_INTERNAL */ .eZ];
  const { route } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const rerender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({})[1];
  if (false) {}
  const context = __nextra_internal__.context[route];
  if (!context) {
    throw new Error(
      `No content found for the current route. This is a Nextra bug.`
    );
  }
  return {
    context,
    Layout: __nextra_internal__.Layout
  };
}



/***/ }),

/***/ 7222:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eZ: () => (/* binding */ NEXTRA_INTERNAL)
/* harmony export */ });
/* unused harmony exports CODE_BLOCK_FILENAME_REGEX, CWD, DEFAULT_CONFIG, DEFAULT_LOCALE, DEFAULT_LOCALES, DYNAMIC_META_FILENAME, ERROR_ROUTES, EXTERNAL_URL_REGEX, IS_PRODUCTION, LOCALE_REGEX, MARKDOWN_EXTENSIONS, MARKDOWN_EXTENSION_REGEX, MARKDOWN_URL_EXTENSION_REGEX, META_FILENAME, OFFICIAL_THEMES, PUBLIC_DIR */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
// src/constants.ts

var MARKDOWN_EXTENSION_REGEX = /\.mdx?$/;
var MARKDOWN_URL_EXTENSION_REGEX = /\.mdx?(?:(?=[#?])|$)/;
var IS_PRODUCTION = (/* unused pure expression or super */ null && ("production" === "production"));
var LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/;
var DEFAULT_LOCALE = "en-US";
var DEFAULT_CONFIG = {
  staticImage: true,
  flexsearch: {
    codeblocks: true
  },
  codeHighlight: true
};
var OFFICIAL_THEMES = (/* unused pure expression or super */ null && (["nextra-theme-docs", "nextra-theme-blog"]));
var META_FILENAME = "_meta.json";
var DYNAMIC_META_FILENAME = "_meta.js";
var CWD = process.cwd();
var MARKDOWN_EXTENSIONS = (/* unused pure expression or super */ null && (["md", "mdx"]));
var PUBLIC_DIR = path__WEBPACK_IMPORTED_MODULE_0__.join(CWD, "public");
var EXTERNAL_URL_REGEX = /^https?:\/\//;
var NEXTRA_INTERNAL = Symbol.for("__nextra_internal__");
var CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/;
var DEFAULT_LOCALES = (/* unused pure expression or super */ null && ([""]));
var ERROR_ROUTES = /* @__PURE__ */ new Set(["/404", "/500"]);



/***/ }),

/***/ 609:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tz: () => (/* binding */ normalizePageRoute),
/* harmony export */   Zs: () => (/* binding */ pageTitleFromFilename)
/* harmony export */ });
/* unused harmony exports getDefault, hashFnv32a, isSerializable, normalizeMeta, parseFileName, sortPages, truthy */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2488);
/* harmony import */ var title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4090);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7222);
// src/utils.ts




function parseFileName(filePath) {
  const { name, ext } = path.parse(filePath);
  const locale = name.match(LOCALE_REGEX)?.[1] || "";
  return {
    name: locale ? name.replace(LOCALE_REGEX, "") : name,
    locale,
    ext
  };
}
function truthy(value) {
  return !!value;
}
function normalizeMeta(meta) {
  return typeof meta === "string" ? { title: meta } : meta;
}
function normalizePageRoute(parentRoute, route) {
  return slash__WEBPACK_IMPORTED_MODULE_1__(path__WEBPACK_IMPORTED_MODULE_0__.join(parentRoute, route.replace(/^index$/, "")));
}
function pageTitleFromFilename(fileName) {
  return title__WEBPACK_IMPORTED_MODULE_2__(fileName.replace(/[-_]/g, " "));
}
function sortPages(pages, locale) {
  if (locale === "") {
    locale = void 0;
  }
  return pages.filter((item) => item.kind === "Folder" || item.locale === locale).map((item) => ({
    name: item.name,
    date: "frontMatter" in item && item.frontMatter?.date,
    title: "frontMatter" in item && item.frontMatter?.title || pageTitleFromFilename(item.name)
  })).sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (a.date) {
      return -1;
    }
    if (b.date) {
      return 1;
    }
    return a.title.localeCompare(b.title, locale, { numeric: true });
  }).map((item) => [item.name, item.title]);
}
function isSerializable(o) {
  try {
    JSON.stringify(o);
    return true;
  } catch (err) {
    return false;
  }
}
function hashFnv32a(str, seed = 2166136261) {
  let hval = seed;
  for (let i = 0; i < str.length; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return ("0000000" + (hval >>> 0).toString(16)).substring(-8);
}
function getDefault(module) {
  return module.default || module;
}



/***/ })

};
;