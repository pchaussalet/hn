montageDefine("a578811","ui/scroller.reel/scroller.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=scroller.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"_content":{"#":"content"},"element":{"#":"owner"},"_scrollBars":{"@":"scrollbars"}}},"scrollbars":{"prototype":"./scroll-bars.reel","properties":{"element":{"#":"scrollbars"}}},"translateComposer1":{"prototype":"montage/composer/translate-composer","properties":{"component":{"@":"owner"},"minTranslateX":0,"minTranslateY":0,"invertAxis":true,"stealChildrenPointer":true},"bindings":{"translateX":{"<->":"@owner.scrollX"},"translateY":{"<->":"@owner.scrollY"},"maxTranslateX":{"<-":"@owner._maxTranslateX"},"maxTranslateY":{"<-":"@owner._maxTranslateY"},"axis":{"<-":"@owner.axis"},"hasMomentum":{"<-":"@owner.hasMomentum"}},"listeners":[{"type":"translateStart","listener":{"@":"owner"}},{"type":"translateEnd","listener":{"@":"owner"}}]}}</script>\n</head>\n<body>\n    <div data-montage-id=owner class=digit-Scroller>\n        <div data-montage-id=scrollbars></div>\n        <div data-montage-id=content class=digit-Scroller-content>\n            <div data-param=*></div>\n        </div>\n    </div>\n\n\n</body></html>'});