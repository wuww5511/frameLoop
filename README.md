# frameLoop
控制函数调用的频率。连续多次调用时，只会在浏览器渲染当前帧时执行一次

### 安装
`npm install frameloop`

### 使用
```
import FrameLoop from 'frameloop'

var frameloop = new FrameLoop()
var task = frameloop.getTask()

// 执行
task.update(() => {
    console.log('Hello World!')
})
```
