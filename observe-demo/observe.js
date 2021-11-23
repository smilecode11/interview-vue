console.log('=========================================')
console.log('==========observe demo start=============')
console.log('=========================================')

//  触发视图更新
function updateView() {
    console.log("视图更新")
}

//  重新定义数组原型
const oldArrayProperty = Array.prototype
//  创建新对象, 原型指向 oldArrayProperty, 再拓展新的方法,属性 *不会影响原对象
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    arrProto[methodName] = function () {
        updateView() //  触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
        //  Array.prototype.push.call(this, ...arguments)
    }
})

//  重新定义属性, 监听起来
function defineReactive(target, key, value) {

    //  深度监听 value 值为对象时执行
    observer(value)

    //  响应式核心 API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                //  如果设置的 key 对应的 value 也是一个对象,这边该值需要被深度监听
                observer(newValue)

                //  设置新值
                //  value 一直处在闭包中, 此处设置完成,再 get 也是能获取到最新的
                value = newValue

                //  触发视图更新
                updateView()
            }
        }
    })
}

//  监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        //  不是对象
        return target
    }

    //  如果是数组, 修改原型
    if (Array.isArray(target)) {
        target.__proto__ = arrProto
    }

    //  重新定义各个属性
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}

//  准备数据
const data = {
    name: "尘心",
    age: 26,
    info: {
        enName: "chen xin", //  需要深度监听
        address: '123'
    },
    nums: [1, 2, 3, 4, 520]
}

//  监听数据
observer(data)


// data.name = "yyds-尘心"
// data.age = 18

// 需要进行深度监听
// data.info.enName = 'yyds - chen xin'

// 如果设置的值为对象, 该值也需要被深度监听起来
// data.info.address = {
//     location: '12222, 12312321',
//     addressText: "1231321"
// }
// data.info.address.location = '123'

//  TIP: 新增/删除属性无法被监听到
//  Vue.set /Vue.delete
// data.xxx = {
//     num: 123
// }
// delete data.info

//  TIP: defineProperty 无法监听到数组改变.
//  修改数组原型实现数组的监听
data.nums.push('250')