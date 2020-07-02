// 判断设备类型
function judgeDeviceType() {
    var ua = window.navigator.userAgent.toLocaleLowerCase();
    var isIOS = /iphone|ipad|ipod/.test(ua);
    var isAndroid = /android/.test(ua);

    console.log(isIOS, isAndroid);
    return {
        isIOS: isIOS,
        isAndroid: isAndroid
    };
}

// 监听输入框的软键盘弹起和收起事件
function listenKeybord({ $el, $input }) {
    console.log($el, $input);
    if (judgeDeviceType().isIOS) {
        // IOS 键盘弹起：IOS 和 Android 输入框获取焦点键盘弹起
        if (!$input) return;

        $input.addEventListener(
            'focus',
            () => {
                console.log('IOS 键盘弹起啦！');
                // IOS 键盘弹起后操作
            },
            false
        );

        // IOS 键盘收起：IOS 点击输入框以外区域或点击收起按钮，输入框都会失去焦点，键盘会收起，
        $input.addEventListener(
            'blur',
            () => {
                console.log('IOS 键盘收起啦！');
                // IOS 键盘收起后操作
            },
            false
        );
    }

    // Andriod 键盘收起：Andriod 键盘弹起或收起页面高度会发生变化，以此为依据获知键盘收起
    if (judgeDeviceType().isAndroid) {
        if (!$el) return;

        var originHeight = document.documentElement.clientHeight || document.body.clientHeight;

        window.addEventListener(
            'resize',
            () => {
                var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;

                console.log(originHeight, resizeHeight);

                if (originHeight > resizeHeight) {
                    console.log('Android 键盘弹起啦！');
                    // Android 键盘弹起后操作
                    $el.style.height = originHeight + 'px';
                    $el.classList.add('key-up');
                } else {
                    console.log('Android 键盘收起啦！');
                    // Android 键盘收起后操作
                    $el.style.height = '100%';
                    $el.classList.remove('key-up');
                }
            },
            false
        );
    }
}

export default {
    listenKeybord
};
